(() => {
  'use strict';

  /* ========================================================================
     SOVA: root namespace
  ========================================================================= */
  const SOVA = (window.SOVA = window.SOVA || {});

  /* ========================================================================
     SOVA.bus – jednoduchý pub/sub
  ========================================================================= */
  (function initBus(ns){
    const topics = new Map(); // topic -> Set<fn>

    function on(topic, fn){
      if (!topics.has(topic)) topics.set(topic, new Set());
      topics.get(topic).add(fn);
      return () => off(topic, fn);
    }
    function once(topic, fn){
      const offOnce = on(topic, (...args) => {
        try { fn(...args); } finally { offOnce(); }
      });
      return offOnce;
    }
    function off(topic, fn){
      const s = topics.get(topic);
      if (s) s.delete(fn);
    }
    function emit(topic, data){
      const s = topics.get(topic);
      if (!s || s.size===0) return;
      // kopie kvůli bezpečí (posluchač může odregistrovat)
      [...s].forEach(fn => { try { fn(data); } catch(e){ console.error('[SOVA.bus]', topic, e); } });
    }

    ns.bus = { on, once, off, emit };
  })(SOVA);

  /* ========================================================================
     SOVA.fn – registr funkcí (Promise-based)
  ========================================================================= */
  (function initFnRegistry(ns){
    const _reg = Object.create(null);

    function register(name, fn){
      if (typeof name !== 'string' || !name) throw new Error('SOVA.fn.register: invalid name');
      if (typeof fn !== 'function') throw new Error('SOVA.fn.register: fn must be function');
      _reg[name] = fn;
    }
    function has(name){ return !!_reg[name]; }
    function list(){ return Object.keys(_reg); }
    function run(name, params, ctx){
      if (!_reg[name]) return Promise.reject(new Error(`SOVA.fn.run: unknown function "${name}"`));
      try {
        const out = _reg[name](params, ctx);
        return (out && typeof out.then === 'function') ? out : Promise.resolve(out);
      } catch (e){
        return Promise.reject(e);
      }
    }

    ns.fn = { register, has, list, run };
  })(SOVA);

  /* ========================================================================
     SOVA.rules – načítání settings s TTL + výběr pro feature/uživatele
     - load(settingSource="BE")
     - reload(settingSource?)
     - for(featureName, userName?) => { columns, rules } | null
     - cache: in-memory + localStorage (TTL 15 min)
     - .sourceInfo: { effectiveSource, url, isSK, tsLoaded }
  ========================================================================= */
  (function initRules(ns){
    const LS_KEY = 'SOVA.rules.cache';
    const TTL_MS = 15 * 60 * 1000; // 15 min

    let _cacheMem = null;     // { sourceKey, ts, data }
    let _sourceInfo = null;   // { effectiveSource, url, isSK, tsLoaded }

    function _isSK(){ return location.hostname.endsWith('.sk'); }

    function _sourceKeyFor(settingSource){
      const isSK = _isSK();
      const effective = isSK ? `${settingSource}-SK` : settingSource;
      return { isSK, effectiveSource: effective };
    }

    function _urlForSource(effectiveSource){
      return `https://raw.githubusercontent.com/Lukas-dotcom/sova/main/${effectiveSource}-sova-settings.json`;
    }

    function _readLS(){
      try {
        const raw = localStorage.getItem(LS_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch { return null; }
    }
    function _writeLS(obj){
      try { localStorage.setItem(LS_KEY, JSON.stringify(obj)); } catch {}
    }

    async function load(settingSource = 'BE', { force=false } = {}){
      const { isSK, effectiveSource } = _sourceKeyFor(settingSource);
      const url = _urlForSource(effectiveSource);
      const now = Date.now();

      // 1) Memory cache valid?
      if (!force && _cacheMem && _cacheMem.sourceKey === effectiveSource && (now - _cacheMem.ts < TTL_MS)) {
        _sourceInfo = { effectiveSource, url, isSK, tsLoaded: _cacheMem.ts };
        ns.bus.emit('rules:ready', { source: _sourceInfo, settings: _cacheMem.data });
        return _cacheMem.data;
      }

      // 2) localStorage cache valid?
      if (!force){
        const ls = _readLS();
        if (ls && ls.sourceKey === effectiveSource && (now - ls.ts < TTL_MS) && ls.data) {
          _cacheMem = { sourceKey: effectiveSource, ts: ls.ts, data: ls.data };
          _sourceInfo = { effectiveSource, url, isSK, tsLoaded: ls.ts };
          ns.bus.emit('rules:ready', { source: _sourceInfo, settings: _cacheMem.data });
          return _cacheMem.data;
        }
      }

      // 3) fetch
      const resp = await fetch(url, { cache: 'no-cache' });
      if (!resp.ok) throw new Error(`SOVA.rules.load: HTTP ${resp.status} for ${url}`);
      const data = await resp.json();

      _cacheMem = { sourceKey: effectiveSource, ts: now, data };
      _writeLS(_cacheMem);
      _sourceInfo = { effectiveSource, url, isSK, tsLoaded: now };

      ns.bus.emit('rules:ready', { source: _sourceInfo, settings: data });
      return data;
    }

    async function reload(settingSource = 'BE'){
      return load(settingSource, { force: true });
    }

    // --- normalization of user for featureName-User_User ---
    function _normalizeUser(u){
      if (!u) return '';
      return u.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[^\w]+/g, '_')
              .replace(/^_+|_+$/g,'')
              .toLowerCase();
    }

    /**
     * rulesFor(featureName, userName?)
     * - featureName: např. "injectButtons" / "injectFunctions" (blok v settings)
     * - nejprve hledá blok "<featureName>-<user_user>", pokud chybí, vrátí "<featureName>"
     * - návrat: { columns, rules } nebo null
     */
    function rulesFor(featureName, userName){
      if (!_cacheMem || !_cacheMem.data) return null;
      const data = _cacheMem.data;
      const userKey = _normalizeUser(userName);
      const specificKey = userKey ? `${featureName}-${userKey}` : null;

      const pick = (k) => (data && data[k] && Array.isArray(data[k].rules)) ? data[k] : null;

      // prefer user-specific
      if (specificKey) {
        const spec = pick(specificKey);
        if (spec) return spec;
      }
      // fallback to generic
      return pick(featureName);
    }

    ns.rules = {
      load,
      reload,
      for: rulesFor,
      get sourceInfo(){ return _sourceInfo; }
    };
  })(SOVA);

  /* ========================================================================
     SOVA.url – URLconditions (aliasy + wildcard + volitelný query)
     - match(patternOrArrayOrPipeString, { includeQuery? }) -> boolean
     - helpers: toRegex(pattern, includeQueryAuto)
  ========================================================================= */
  (function initURL(ns){
    const ALIASES = {
      'objednavka' : '/admin/objednavky-detail/*',
      'objednavky' : '/admin/prehled-objednavek/*',
      'ceny'       : '/admin/ceny/*'
    };

    function _escapeRegex(s){
      return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function _patternToRegexSrc(pat){
      // hvězdička = .* (libovolná délka)
      const esc = _escapeRegex(pat).replace(/\\\*/g, '.*');
      return `^${esc}$`;
    }

    function _shouldIncludeQuery(pattern){
      // pokud pattern obsahuje '?', bereme query do porovnání
      return pattern.includes('?');
    }

    function _getTargetString(includeQuery){
      const base = location.pathname;
      if (!includeQuery) return base;
      return base + (location.search || '');
    }

    /**
     * toRegex(pattern)
     * - rozpozná alias, vrátí regex a boolean includeQuery
     */
    function toRegex(pattern){
      const pat = ALIASES[pattern] || pattern;
      const includeQuery = _shouldIncludeQuery(pat);
      const rx = new RegExp(_patternToRegexSrc(pat));
      return { rx, includeQuery };
    }

    /**
     * match(patterns, { includeQuery }?)
     * - patterns: string (může obsahovat '|'), pole stringů, nebo jediný alias
     * - includeQuery pokud není uvedeno, řídí se každým patternem zvlášť (auto)
     */
    function match(patterns, opts = {}){
      const arr = Array.isArray(patterns)
        ? patterns
        : (typeof patterns === 'string' ? String(patterns).split('|').map(s => s.trim()).filter(Boolean) : []);
      if (!arr.length) return false;

      for (const p of arr){
        const { rx, includeQuery } = toRegex(p);
        const target = _getTargetString(opts.includeQuery ?? includeQuery);
        if (rx.test(target)) return true;
      }
      return false;
    }

    ns.url = { match, toRegex, aliases: { ...ALIASES } };
  })(SOVA);

  /* ========================================================================
     SOVA.calculateSOVAL – STUB (tvé plné jádro sem dosadíme)
     TODO: vložit tvé existující jádro (single codepath + hooks)
  ========================================================================= */
  (function initSOVAL(ns){
    // ⚠️ STUB! Vlož sem své plné jádro z dřívějška.
    function compile(expr){ 
      // TODO: real compile
      return (ctx) => true; 
    }
    function evaluate(expr, ctx, options){ 
      // TODO: real evaluate
      return true; 
    }
    function register(name, fn, ...aliases){
      // TODO: forward to real registry in your core
      console.warn('[SOVA.calculateSOVAL.register] stub:', name);
    }
    ns.calculateSOVAL = { compile, evaluate, register };
  })(SOVA);

  /* ========================================================================
     SOVA.getContext – STUB (hub + snapshot + onUpdate)
     TODO: napojit na tvůj existující getContext (dirty flags, schedule, notify)
  ========================================================================= */
  (function initGetContext(ns){
    const listeners = new Set();
    let _snapshot = Object.create(null);
    let _ready = false;

    function onUpdate(fn){ listeners.add(fn); return () => listeners.delete(fn); }
    function snapshot(){ return { ..._snapshot }; }
    function _emit(reason, changedKeys){
      const payload = { snapshot: snapshot(), changedKeys: new Set(changedKeys||[]), reason };
      listeners.forEach(fn => { try { fn(payload); } catch(e){ console.error(e); } });
      ns.bus.emit('context:update', payload);
      if (!_ready){ _ready = true; ns.bus.emit('context:ready', payload); }
    }

    // TODO: připojit skutečné čtení z DOM + označování dirty a volat _emit()
    // Zatím pouze inicializační signál po načtení.
    document.addEventListener('DOMContentLoaded', () => {
      _snapshot.uzivatel = ''; // TODO: doplnit z DOM
      _emit('init', ['uzivatel']);
    });

    ns.getContext = { onUpdate, snapshot };
  })(SOVA);

  /* ========================================================================
     SOVA.prepareDOM – STUB
     TODO: vložit tvůj existující prepareDOM (sloty, styly, emit 'dom:ready')
  ========================================================================= */
  (function initPrepareDOM(ns){
    function prepare(){
      // TODO: vytvořit sloty + styly
      ns.bus.emit('dom:ready', { ok:true });
    }
    // auto-run
    if (document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', prepare);
    } else {
      prepare();
    }
    ns.prepareDOM = { prepare };
  })(SOVA);

  /* ========================================================================
     SOVA.injectButtons – STUB
     TODO: čekat na dom:ready + rules:ready; vyhodnotit conditionsSOVAL; vytvořit <a data-sova-...>
  ========================================================================= */
  (function initInjectButtons(ns){
    async function run(){
      // TODO
    }
    ns.injectButtons = { run };
  })(SOVA);

  /* ========================================================================
     SOVA.buttonsListener – STUB
     TODO: delegace kliků na a[data-sova-origin="systemOrigin"], spustit fn, pak redirect
  ========================================================================= */
  (function initButtonsListener(ns){
    function attach(){
      // TODO
    }
    ns.buttonsListener = { attach };
  })(SOVA);

  /* ========================================================================
     SOVA.injectFunctions – STUB
     TODO: spouštět jednou po context:ready + rules:ready; guard proti opakování
  ========================================================================= */
  (function initInjectFunctions(ns){
    async function runOncePerLoad(){
      // TODO
    }
    ns.injectFunctions = { runOncePerLoad };
  })(SOVA);

  /* ========================================================================
     SOVA.testSOVA – STUB
     TODO: rozšířené UI testSOVAL + dummy prvky (toggle) + live re-eval
  ========================================================================= */
  (function initTestSOVA(ns){
    function mount(){ /* TODO */ }
    ns.testSOVA = { mount };
  })(SOVA);

  /* ========================================================================
     BOOT NOTES:
     - SOVA.rules.load() spusť dle potřeby (např. hned po dom:ready).
     - Ostatní moduly mohou poslouchat 'rules:ready', 'dom:ready', 'context:ready'.
  ========================================================================= */

  // Příklad: přednačti pravidla (bez force)
  SOVA.bus.once('dom:ready', () => {
    SOVA.rules.load('BE').catch(e => console.error('[SOVA.rules.load]', e));
  });

})();
