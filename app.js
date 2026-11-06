(function () {
  'use strict';

  /* ================================================================
     Constantes & contenu
     ================================================================ */
  const COURSE = window.COURSE || [];
  const KEY = 'teatime-v1';
  const DAY_MS = 864e5;
  const SRS_DAYS = [0, 1, 3, 7, 14, 30, 60, 120];
  const LESSON_NAMES = ['Les mots · 1', 'Les mots · 2', 'Les phrases · 1', 'Les phrases · 2'];
  const LESSON_ICONS = ['📖', '📖', '💬', '💬'];
  const NODE_OFFSETS = [0, 52, 0, -52];
  const PRAISE = ['Bravo !', 'Excellent !', 'Parfait !', 'Super !', 'Bien joué !', 'Génial !', 'Yes !', 'Top !'];
  const DAY_LETTERS = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  const DAY_NAMES = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const MONTHS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

  // Autres réponses acceptées quand on doit écrire un mot de vocabulaire
  const VOCAB_ALTS = {
    'hello': ['hi'], 'goodbye': ['bye'], 'thank you': ['thanks'], 'nice to meet you': ['pleased to meet you'],
    'mother': ['mom', 'mum'], 'father': ['dad'], 'children': ['kids'], 'grandmother': ['grandma', 'granny'],
    'the bill': ['the check'], 'shop': ['store'], 'straight on': ['straight', 'straight ahead'], 'movie': ['film'],
    'booking': ['reservation'], 'late': ['delayed'], 'suitcase': ['luggage'], 'cheap': ['not expensive'],
    'weather': [], 'hungry': ['starving'], 'friend': [], 'favourite': ['favorite']
  };

  const ITEMS = {};
  const UNITS = [];
  const LESSONS = [];

  COURSE.forEach((u, ui) => {
    const unit = { id: u.id, index: ui, emoji: u.emoji, title: u.title, subtitle: u.subtitle, color: u.color, v: [], s: [], b: [] };
    u.vocab.forEach(([en, fr, emoji], i) => {
      const it = { id: `${u.id}.v${i}`, kind: 'v', unit: ui, en, fr, emoji, alts: VOCAB_ALTS[en] || [] };
      ITEMS[it.id] = it; unit.v.push(it);
    });
    u.sentences.forEach(([en, fr, alts], i) => {
      const it = { id: `${u.id}.s${i}`, kind: 's', unit: ui, en, fr, alts: alts || [] };
      ITEMS[it.id] = it; unit.s.push(it);
    });
    u.blanks.forEach(([text, answer, options, fr, note], i) => {
      const it = { id: `${u.id}.b${i}`, kind: 'b', unit: ui, text, answer, options, fr, note, en: text.replace('___', answer), alts: [] };
      ITEMS[it.id] = it; unit.b.push(it);
    });
    UNITS.push(unit);
  });
  UNITS.forEach(u => LESSON_NAMES.forEach((name, li) => {
    LESSONS.push({ key: `${u.id}.l${li}`, unit: u.index, li, name, idx: LESSONS.length });
  }));

  /* ================================================================
     Utilitaires
     ================================================================ */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick1 = a => a[Math.floor(Math.random() * a.length)];
  const sample = (a, n) => shuffle(a).slice(0, n);
  const plural = (n, w, p) => `${n} ${n > 1 ? (p || w + 's') : w}`;
  const low = s => String(s).toLowerCase().trim();

  const pad = n => String(n).padStart(2, '0');
  const dstr = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => dstr(new Date());
  const parseD = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const dayDiff = (a, b) => { const A = parseD(a), B = parseD(b); return Math.round((Date.UTC(B.getFullYear(), B.getMonth(), B.getDate()) - Date.UTC(A.getFullYear(), A.getMonth(), A.getDate())) / DAY_MS); };
  const addDays = (s, n) => { const d = parseD(s); d.setDate(d.getDate() + n); return dstr(d); };
  const weekKey = s => { const d = parseD(s); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return dstr(d); };
  const fullDay = s => { const d = parseD(s); return `${DAY_NAMES[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`; };
  const fmtDuration = sec => {
    if (sec < 60) return `${sec} s`;
    const m = Math.round(sec / 60);
    if (m < 60) return `${m} min`;
    return `${Math.floor(m / 60)} h ${pad(m % 60)}`;
  };

  /* ---------- Normalisation & correction tolérante ---------- */
  const NUM = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' };
  const ORD = { 1: 'first', 2: 'second', 3: 'third', 4: 'fourth', 5: 'fifth' };
  const SPELL = { colour: 'color', favourite: 'favorite', grey: 'gray', theatre: 'theater', centre: 'center', okay: 'ok', mum: 'mom' };

  function norm(s) {
    s = String(s || '').toLowerCase().replace(/[’‘`´ʼ]/g, "'");
    s = s.replace(/\b(\d+)(st|nd|rd|th)\b/g, (m, n) => ORD[n] || m);
    s = s.replace(/\bcan't\b/g, 'can not').replace(/\bcannot\b/g, 'can not').replace(/\bwon't\b/g, 'will not')
      .replace(/n't\b/g, ' not').replace(/\bi'm\b/g, 'i am').replace(/'re\b/g, ' are')
      .replace(/\b(he|she|it|that|what|where|there|who|how|here|when|this)'s\b/g, '$1 is')
      .replace(/'ll\b/g, ' will').replace(/'ve\b/g, ' have').replace(/'d\b/g, ' would').replace(/\blet's\b/g, 'let us');
    s = s.replace(/[^a-z0-9']+/g, ' ').replace(/'/g, '');
    return s.split(' ').filter(Boolean).map(t => NUM[t] || SPELL[t] || t).join(' ');
  }

  const KNOWN = new Set();
  Object.values(ITEMS).forEach(it => {
    [it.en].concat(it.alts || [], it.options || []).forEach(t => norm(t).split(' ').forEach(w => w && KNOWN.add(w)));
  });

  function lev(a, b) {
    const m = a.length, n = b.length;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }

  function typoMatch(u, a) {
    const U = u.split(' '), A = a.split(' ');
    if (U.length !== A.length) return false;
    let typos = 0;
    for (let i = 0; i < A.length; i++) {
      if (U[i] === A[i]) continue;
      if (A[i].length < 4 || KNOWN.has(U[i]) || lev(U[i], A[i]) > 1) return false;
      typos++;
    }
    return typos > 0 && typos <= Math.max(1, Math.floor(A.length / 4));
  }

  function accepted(it) {
    const list = [it.en].concat(it.alts || []);
    if (it.kind === 'v') list.slice().forEach(a => { const m = /^(to|the|a|an) (.+)$/i.exec(a); if (m) list.push(m[2]); });
    return [...new Set(list.map(norm))];
  }

  function checkText(text, it, allowTypo) {
    const u = norm(text);
    if (!u) return { ok: false };
    const acc = accepted(it), main = norm(it.en);
    if (acc.includes(u)) return { ok: true, alt: u !== main && it.kind === 's' };
    if (allowTypo) for (const a of acc) if (typoMatch(u, a)) return { ok: true, typo: true };
    return { ok: false };
  }

  function lcs(a, b) {
    const dp = Array(b.length + 1).fill(0);
    for (const x of a) {
      let prev = 0;
      for (let j = 1; j <= b.length; j++) {
        const tmp = dp[j];
        dp[j] = x === b[j - 1] ? prev + 1 : Math.max(dp[j], dp[j - 1]);
        prev = tmp;
      }
    }
    return dp[b.length];
  }

  function speechScore(alts, it) {
    let best = { score: 0, text: alts[0] || '' };
    for (const h of alts) {
      const H = norm(h).split(' ').filter(Boolean);
      for (const a of accepted(it)) {
        const A = a.split(' ');
        const sc = lcs(H, A) / Math.max(A.length, H.length * 0.75);
        if (sc > best.score) best = { score: sc, text: h };
      }
    }
    return best;
  }

  const tokens = s => s.split(/\s+/).map(w => w.replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, '')).filter(Boolean);

  /* ================================================================
     État (sauvegardé sur l'appareil)
     ================================================================ */
  function defaults() {
    return {
      v: 1, xp: 0, done: {}, items: {}, days: {},
      streak: { count: 0, best: 0, last: null, rest: [] },
      settings: { goal: 30, sound: true, vibe: true, anim: true, accent: 'en-US', slow: false, speak: true, theme: 'auto' },
      mute: { listen: 0, speak: 0 },
      notice: null, installTip: false
    };
  }
  function mergeState(d, o) {
    if (!o || typeof o !== 'object') return d;
    Object.keys(d).forEach(k => {
      if (!(k in o) || o[k] == null) return;
      if (['settings', 'streak', 'mute'].includes(k)) d[k] = Object.assign(d[k], o[k]);
      else d[k] = o[k];
    });
    if (!Array.isArray(d.streak.rest)) d.streak.rest = [];
    return d;
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return mergeState(defaults(), JSON.parse(raw));
    } catch (e) { /* stockage indisponible */ }
    return defaults();
  }
  let saveWarned = false;
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); }
    catch (e) { if (!saveWarned) { saveWarned = true; toast("Attention : la progression ne peut pas être enregistrée sur cet appareil."); } }
  }

  let S = load();
  let R = null;            // session en cours (leçon ou révision)
  let screen = 'home';

  /* ---------- Série de jours ---------- */
  function refreshStreak() {
    const st = S.streak, t = today();
    if (!st.last || st.count === 0) return;
    const gap = dayDiff(st.last, t);
    if (gap <= 1) return;
    const rest = st.rest.slice();
    for (let i = 1; i < gap; i++) {
      const wk = weekKey(addDays(st.last, i));
      if (rest.includes(wk)) { st.count = 0; save(); return; }
      rest.push(wk);
    }
    st.rest = rest.slice(-12);
    st.last = addDays(t, -1);
    S.notice = { type: 'rest', count: st.count };
    save();
  }
  function markActive() {
    refreshStreak();
    const st = S.streak, t = today();
    if (st.last === t) return false;
    st.count = st.last && dayDiff(st.last, t) === 1 && st.count > 0 ? st.count + 1 : 1;
    st.last = t;
    st.best = Math.max(st.best, st.count);
    return true;
  }
  const restAvailable = () => !S.streak.rest.includes(weekKey(today()));

  /* ---------- XP & niveaux ---------- */
  const levelFloor = l => 25 * (l - 1) * l;
  const levelOf = xp => { let l = 1; while (xp >= levelFloor(l + 1)) l++; return l; };
  function dayRec(d) { return S.days[d] || (S.days[d] = { xp: 0, lessons: 0, sec: 0, ok: 0, tot: 0 }); }
  const todayXp = () => (S.days[today()] || {}).xp || 0;

  /* ---------- Répétition espacée ---------- */
  function rec(id) { return S.items[id] || (S.items[id] = { b: 0, due: 0, m: false, c: 0, w: 0 }); }
  function srsCorrect(id, inReview) {
    const r = rec(id), now = Date.now(), wasMistake = r.m;
    r.c++;
    if (inReview) r.m = false;
    if (r.b === 0 || r.due <= now || (inReview && wasMistake)) {
      r.b = Math.min(r.b + 1, SRS_DAYS.length - 1);
      r.due = now + SRS_DAYS[r.b] * DAY_MS;
    }
  }
  function srsWrong(id) { const r = rec(id); r.w++; r.m = true; r.b = 0; r.due = Date.now(); }
  function dueIds() {
    const now = Date.now();
    return Object.keys(S.items).filter(id => ITEMS[id] && (S.items[id].m || (S.items[id].b >= 1 && S.items[id].due <= now)));
  }
  const hasLearned = () => Object.keys(S.items).some(id => ITEMS[id] && (S.items[id].c > 0 || S.items[id].m));

  /* ================================================================
     Audio : voix, micro, sons
     ================================================================ */
  const NOVELTY = /Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Junior|Ralph|Fred|Kathy|Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley/;
  const TTS = {
    ok: 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window,
    voice: null,
    unlocked: false,
    pickVoice() {
      if (!this.ok) return;
      const lang = S.settings.accent.toLowerCase();
      const all = speechSynthesis.getVoices().filter(v => !NOVELTY.test(v.name));
      const en = all.filter(v => /^en([-_]|$)/i.test(v.lang));
      const same = en.filter(v => v.lang.replace('_', '-').toLowerCase() === lang);
      const prefs = lang === 'en-gb'
        ? ['Google UK English Female', 'Daniel', 'Serena', 'Kate', 'Microsoft Sonia', 'Microsoft Libby', 'Google UK English Male', 'Arthur', 'Martha']
        : ['Google US English', 'Samantha', 'Microsoft Aria', 'Microsoft Jenny', 'Ava', 'Allison', 'Microsoft Guy', 'Alex', 'Microsoft Zira'];
      let v = null;
      for (const p of prefs) { v = same.find(x => x.name.includes(p)); if (v) break; }
      this.voice = v || same.find(x => x.localService) || same[0] || en[0] || null;
    },
    unlock() {
      if (!this.ok || this.unlocked) return;
      this.unlocked = true;
      try { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); } catch (e) { /* rien */ }
    },
    say(text, slow) {
      if (!this.ok || !text) return;
      try {
        if (!this.voice) this.pickVoice();
        speechSynthesis.cancel();
        if (speechSynthesis.paused) speechSynthesis.resume();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = S.settings.accent;
        if (this.voice) u.voice = this.voice;
        u.rate = slow ? 0.55 : (S.settings.slow ? 0.75 : 0.95);
        speechSynthesis.speak(u);
      } catch (e) { /* rien */ }
    },
    stop() { if (this.ok) try { speechSynthesis.cancel(); } catch (e) { /* rien */ } }
  };
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  const canListen = () => TTS.ok && Date.now() > (S.mute.listen || 0);
  const canSpeak = () => !!SR && S.settings.speak && Date.now() > (S.mute.speak || 0);

  function sayLater(text, delay) {
    if (!canListen()) return;
    const cur = R && R.cur;
    setTimeout(() => { if (R && R.cur === cur) TTS.say(text); }, delay == null ? 280 : delay);
  }

  const Sfx = {
    ctx: null,
    get() {
      if (!S.settings.sound) return null;
      try {
        if (!this.ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; this.ctx = new C(); }
        if (this.ctx.state === 'suspended') this.ctx.resume();
        return this.ctx;
      } catch (e) { return null; }
    },
    note(f, t0, dur, type, vol) {
      const c = this.get(); if (!c) return;
      const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + t0;
      o.type = type || 'sine';
      o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol || 0.16, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + dur + 0.03);
    },
    ok() { this.note(784, 0, 0.14, 'triangle'); this.note(1175, 0.09, 0.24, 'triangle'); },
    bad() { this.note(233, 0, 0.18, 'square', 0.05); this.note(196, 0.13, 0.28, 'square', 0.05); },
    done() { [523, 659, 784, 1047].forEach((f, i) => this.note(f, i * 0.11, 0.32, 'triangle', 0.15)); },
    tap() { this.note(1300, 0, 0.04, 'sine', 0.04); }
  };
  const vibe = p => { if (S.settings.vibe && navigator.vibrate) try { navigator.vibrate(p); } catch (e) { /* rien */ } };

  /* ================================================================
     Effets visuels
     ================================================================ */
  let confettiRun = 0;
  function stopConfetti() { confettiRun++; const c = document.getElementById('confetti'); if (c) c.remove(); }
  function confetti() {
    if (!S.settings.anim || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    stopConfetti();
    const run = confettiRun;
    const cv = document.createElement('canvas');
    cv.id = 'confetti';
    document.body.appendChild(cv);
    const ctx = cv.getContext('2d'), dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = innerWidth, H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.scale(dpr, dpr);
    const colors = ['#FF6B2C', '#F2A900', '#1F9D55', '#3B82F6', '#EC4899', '#8B5CF6'];
    const ps = Array.from({ length: 130 }, () => ({
      x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.3,
      vx: (Math.random() - 0.5) * 13, vy: -Math.random() * 13 - 4,
      r: Math.random() * 6 + 5, c: pick1(colors), a: Math.random() * 6, va: (Math.random() - 0.5) * 0.3
    }));
    const t0 = performance.now(), LIFE = 2600;
    (function frame(t) {
      const el = t - t0;
      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = Math.max(0, 1 - el / LIFE);
      for (const p of ps) {
        p.vy += 0.33; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += p.va;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c;
        ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.restore();
      }
      if (el < LIFE && run === confettiRun) requestAnimationFrame(frame); else cv.remove();
    })(t0);
  }

  let toastTimer = 0;
  function toast(msg) {
    document.querySelectorAll('.toast').forEach(n => n.remove());
    const d = document.createElement('div');
    d.className = 'toast'; d.setAttribute('role', 'status'); d.textContent = msg;
    document.body.appendChild(d);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => d.remove(), 2800);
  }

  function overlay(html) {
    closeOverlays();
    const d = document.createElement('div');
    d.className = 'ov-root';
    d.innerHTML = html;
    document.body.appendChild(d);
    const b = d.querySelector('.btn');
    if (b) b.focus({ preventScroll: true });
  }
  function closeOverlays() { document.querySelectorAll('.ov-root').forEach(n => n.remove()); }

  const IC = {
    speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };
  const speakBtn = text => `<button class="speak-btn" data-act="say" data-text="${esc(text)}" aria-label="Écouter">${IC.speaker}</button>`;
  const listenZone = text => `<div class="listen-zone"><button class="speak-btn" data-act="say" data-text="${esc(text)}" aria-label="Écouter">${IC.speaker}</button><button class="speak-btn slow" data-act="say-slow" data-text="${esc(text)}" aria-label="Écouter lentement">🐢</button></div>`;
  const muteLink = kind => `<button class="link mute-link" data-act="mute-${kind}">${kind === 'listen' ? 'Je ne peux pas écouter maintenant' : 'Je ne peux pas parler maintenant'}</button>`;

  /* ================================================================
     Navigation
     ================================================================ */
  const app = document.getElementById('app');
  const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;

  function show(name) {
    screen = name;
    closeOverlays();
    stopConfetti();
    if (name === 'home') renderHome();
    else if (name === 'stats') renderStats();
    else if (name === 'settings') renderSettings();
    window.scrollTo(0, 0);
  }

  let ignorePop = false;
  function leaveRunHistory() {
    if (history.state && history.state.tt) { ignorePop = true; history.back(); }
  }
  function goHome(fromPop) {
    if (R && R.ctl && R.ctl.cleanup) R.ctl.cleanup();
    R = null;
    TTS.stop();
    if (!fromPop) leaveRunHistory();
    show('home');
  }
  window.addEventListener('popstate', () => {
    if (ignorePop) { ignorePop = false; return; }
    if (screen === 'lesson') { history.pushState({ tt: 1 }, ''); askQuit(); }
    else if (screen === 'result') goHome(true);
    else closeOverlays();
  });

  function tabbar(active) {
    const tabs = [['home', '🏠', 'Apprendre'], ['stats', '📊', 'Progrès'], ['settings', '⚙️', 'Réglages']];
    return `<nav class="tabbar" aria-label="Navigation"><div class="in">${tabs.map(([k, i, l]) =>
      `<button class="tab ${k === active ? 'on' : ''}" data-nav="${k}" ${k === active ? 'aria-current="page"' : ''}><span class="ti" aria-hidden="true">${i}</span>${l}</button>`).join('')}</div></nav>`;
  }

  function topbar() {
    refreshStreak();
    const st = S.streak, active = st.last === today();
    const g = S.settings.goal, x = todayXp(), pct = Math.min(1, x / g);
    const C = 2 * Math.PI * 16;
    return `<header class="topbar">
      <div class="brand"><span aria-hidden="true">☕</span>Tea<span>Time</span></div>
      <span class="chip flame ${active ? '' : 'off'}" title="Série de jours" aria-label="Série : ${plural(st.count, 'jour')}">🔥 ${st.count}</span>
      <span class="chip" title="Niveau" aria-label="Niveau ${levelOf(S.xp)}">⭐ ${levelOf(S.xp)}</span>
      <div class="goal-ring" role="img" aria-label="Objectif du jour : ${x} sur ${g} XP" title="Objectif du jour : ${x}/${g} XP">
        <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="16" fill="none" stroke="var(--line)" stroke-width="5"/>
        <circle cx="20" cy="20" r="16" fill="none" stroke="var(--gold)" stroke-width="5" stroke-linecap="round" stroke-dasharray="${C.toFixed(2)}" stroke-dashoffset="${(C * (1 - pct)).toFixed(2)}"/></svg>
        <span class="lbl">${pct >= 1 ? '✓' : Math.round(pct * 100) + '%'}</span>
      </div>
    </header>`;
  }

  const nextLesson = () => LESSONS.find(l => !S.done[l.key]) || null;
  const isUnlocked = l => l.idx === 0 || !!S.done[l.key] || !!S.done[LESSONS[l.idx - 1].key];

  /* ---------- Accueil ---------- */
  function renderHome() {
    const nl = nextLesson();
    const due = dueIds();
    const mist = due.filter(id => S.items[id].m).length;
    const learned = hasLearned();
    let h = topbar() + '<main class="scroll">';

    if (S.notice && S.notice.type === 'rest') {
      h += `<div class="notice"><span aria-hidden="true">😌</span><p>Jour de repos utilisé : ta série de <b>${plural(S.notice.count, 'jour')}</b> est sauvée. Tu as droit à 1 jour de repos par semaine.</p><button class="icon-btn" data-act="dismiss-notice" aria-label="Fermer">${IC.close}</button></div>`;
    }
    if (!S.installTip && !isStandalone()) {
      const ios = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const how = ios ? 'Partager ⬆️ puis « Sur l\'écran d\'accueil »' : 'menu ⋮ puis « Installer l\'application »';
      h += `<div class="notice"><span aria-hidden="true">📲</span><p><b>Installe l'app</b> : ${how}.</p><button class="icon-btn" data-act="dismiss-install" aria-label="Fermer">${IC.close}</button></div>`;
    }

    if (nl) {
      const u = UNITS[nl.unit];
      const first = S.xp === 0;
      h += `<section class="card hero">
        <div class="eyebrow">${first ? 'Bienvenue 👋' : 'Continuer'}</div>
        <div class="row"><div class="big-emoji" aria-hidden="true">${u.emoji}</div><div><h2>${esc(u.title)}</h2><div class="sub">Unité ${u.index + 1} · ${esc(nl.name)}</div></div></div>
        ${first ? '<div class="sub">10 unités, 40 leçons de 5 minutes. Pas de vies, pas de pub : avance à ton rythme.</div>' : ''}
        <button class="btn" data-act="start" data-l="${nl.idx}">${first ? 'Commencer' : 'Continuer'}</button>
      </section>`;
    } else {
      h += `<section class="card hero"><div class="row"><div class="big-emoji" aria-hidden="true">🎓</div><div><h2>Parcours A1 terminé !</h2><div class="sub">Bravo. Révise pour tout garder en mémoire, ou refais tes leçons préférées.</div></div></div></section>`;
    }

    let sub;
    if (due.length) {
      const rest = due.length - mist;
      sub = mist && rest ? `${plural(mist, 'erreur')} · ${rest} à revoir` : mist ? `${plural(mist, 'erreur')} à corriger` : `${rest} à revoir aujourd'hui`;
    } else sub = learned ? "Rien d'urgent : entraînement libre" : 'Disponible après ta première leçon';
    h += `<section class="card review-card">
      <div style="font-size:30px" aria-hidden="true">🔁</div>
      <div class="txt"><b>Réviser mes erreurs</b><small>${sub}</small></div>
      <button class="btn small ${due.length ? '' : 'ghost'}" data-act="review" ${learned ? '' : 'disabled'}>Réviser${due.length ? `<span class="badge-count">${due.length}</span>` : ''}</button>
    </section>`;

    UNITS.forEach(u => {
      const ls = LESSONS.filter(l => l.unit === u.index);
      const nDone = ls.filter(l => S.done[l.key]).length;
      const locked = !isUnlocked(ls[0]);
      h += `<section class="unit ${locked ? 'locked' : ''}" aria-label="Unité ${u.index + 1} : ${esc(u.title)}">
        <div class="unit-head" style="background:${u.color}">
          <div class="em" aria-hidden="true">${u.emoji}</div>
          <div class="t"><small>Unité ${u.index + 1}</small><b>${esc(u.title)}</b><span>${esc(u.subtitle)}</span></div>
          <div class="prog">${locked ? '🔒' : `${nDone}/4`}</div>
        </div><div class="nodes">`;
      ls.forEach((l, i) => {
        const done = !!S.done[l.key], unl = isUnlocked(l), cur = nl && nl.idx === l.idx;
        h += `<button class="node ${done ? 'done' : ''} ${unl ? '' : 'locked'} ${cur ? 'current' : ''}" style="--c:${u.color};left:${NODE_OFFSETS[i]}px" data-act="node" data-l="${l.idx}" aria-label="${esc(l.name)}${done ? ', terminée' : unl ? '' : ', verrouillée'}">${unl ? LESSON_ICONS[i] : '🔒'}${cur ? `<span class="start-tip">${S.xp === 0 ? 'Commencer' : 'Ici'}</span>` : ''}</button>`;
      });
      h += `</div>${nDone === 4 ? '<div class="trophy">🏆 Unité terminée</div>' : ''}</section>`;
    });
    h += `<div class="path-end">🎓 Fin du niveau A1</div></main>` + tabbar('home');
    app.innerHTML = h;
  }

  function openSheet(l) {
    if (!l) return;
    if (!isUnlocked(l)) { toast("Termine d'abord la leçon précédente 🔒"); return; }
    const u = UNITS[l.unit], d = S.done[l.key];
    const preview = l.li < 2
      ? 'Nouveaux mots : ' + u.v.slice(l.li * 6, l.li * 6 + 6).map(v => `<b>${esc(v.en)}</b>`).join(' · ')
      : 'Au programme :<br>' + u.s.slice((l.li - 2) * 5, (l.li - 2) * 5 + 3).map(s => `« <b>${esc(s.en)}</b> »`).join('<br>') + '<br>…';
    overlay(`<div class="scrim" data-act="close-ov"><div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(l.name)}">
      <h3>${u.emoji} ${esc(l.name)}</h3>
      <div class="meta">Unité ${u.index + 1} · ${esc(u.title)}${d ? ` · faite ${d.n}× · meilleur score ${d.best} %` : ' · environ 5 min'}</div>
      <div class="preview">${preview}</div>
      <div class="actions"><button class="btn" data-act="start" data-l="${l.idx}">${d ? 'Refaire la leçon' : 'Commencer'}</button><button class="btn ghost" data-act="close-ov">Fermer</button></div>
    </div></div>`);
  }

  /* ================================================================
     Génération des exercices
     ================================================================ */
  const wc = s => s.split(/\s+/).length;

  function genLesson(ui, li) {
    const u = UNITS[ui], seq = [];
    if (li < 2) {
      const w = u.v.slice(li * 6, li * 6 + 6);
      for (let i = 0; i < w.length; i += 2) {
        seq.push({ t: 'intro', item: w[i] }, { t: 'intro', item: w[i + 1] },
          { t: 'pick', item: w[i], dir: 'en2fr' }, { t: 'pick', item: w[i + 1], dir: 'fr2en' });
      }
      const r = shuffle(w);
      seq.push({ t: 'match', items: r.slice(0, 5) });
      seq.push(...shuffle([
        { t: 'listen_pick', item: r[0] }, { t: 'pick', item: r[1], dir: 'fr2en' }, { t: 'listen_pick', item: r[2] },
        { t: 'type', item: r[3] }, { t: 'pick', item: r[4], dir: 'en2fr' }, { t: 'listen_pick', item: r[5] }
      ]));
    } else {
      const s = u.s.slice((li - 2) * 5, (li - 2) * 5 + 5);
      const b = u.b.slice((li - 2) * 2, (li - 2) * 2 + 2);
      const P = it => ({ t: 'pick', item: it, dir: 'en2fr' });
      const B = it => ({ t: 'build', item: it });
      const BL = it => ({ t: 'blank', item: it });
      seq.push(P(s[0]), P(s[1]), B(s[0]), P(s[2]), B(s[1]), BL(b[0]), P(s[3]), B(s[2]), P(s[4]), B(s[3]), BL(b[1]), B(s[4]));
      const short = s.slice().sort((a, c) => wc(a.en) - wc(c.en));
      if (li === 2) {
        seq.push({ t: 'listen_build', item: pick1(s) }, { t: 'speak', item: pick1(short.slice(0, 3)) });
      } else {
        seq.push({ t: 'type', item: short[0] }, { t: 'listen_type', item: short[1] },
          { t: 'speak', item: pick1(short.slice(0, 3)) }, { t: 'match', items: sample(u.v, 5) });
      }
    }
    return seq;
  }

  function genReview() {
    let ids = dueIds().sort((a, b) => (S.items[b].m - S.items[a].m) || (S.items[a].due - S.items[b].due)).slice(0, 12);
    if (ids.length < 8) {
      const extra = Object.keys(S.items)
        .filter(id => ITEMS[id] && S.items[id].c > 0 && !ids.includes(id))
        .sort((a, b) => (S.items[a].b - S.items[b].b) || (S.items[a].due - S.items[b].due))
        .slice(0, 8 - ids.length);
      ids = ids.concat(extra);
    }
    const seq = shuffle(ids).map(id => {
      const it = ITEMS[id], r = S.items[id], strong = r.b >= 2 && !r.m;
      if (it.kind === 'v') return strong
        ? pick1([{ t: 'type', item: it }, { t: 'listen_pick', item: it }])
        : pick1([{ t: 'pick', item: it, dir: 'fr2en' }, { t: 'pick', item: it, dir: 'en2fr' }, { t: 'listen_pick', item: it }]);
      if (it.kind === 's') return strong
        ? pick1([{ t: 'type', item: it }, { t: 'listen_type', item: it }, { t: 'listen_build', item: it }])
        : pick1([{ t: 'build', item: it }, { t: 'listen_build', item: it }]);
      return { t: 'blank', item: it };
    });
    const vocab = ids.map(id => ITEMS[id]).filter(it => it.kind === 'v');
    if (vocab.length >= 4) seq.splice(Math.floor(seq.length / 2), 0, { t: 'match', items: sample(vocab, 5) });
    return seq;
  }

  function adapt(ex) {
    const listenOff = !canListen();
    if (ex.t === 'speak' && !canSpeak()) return Object.assign({}, ex, { t: listenOff ? 'build' : 'listen_build' });
    if (listenOff) {
      if (ex.t === 'listen_pick') return Object.assign({}, ex, { t: 'pick', dir: 'fr2en' });
      if (ex.t === 'listen_build') return Object.assign({}, ex, { t: 'build' });
      if (ex.t === 'listen_type') return Object.assign({}, ex, { t: 'type' });
    }
    return ex;
  }

  function optionsFor(it, field, n) {
    const key = x => low(x[field]);
    const ok = x => x.kind === it.kind && x.id !== it.id && key(x) !== key(it);
    let picks = sample(UNITS[it.unit][it.kind].filter(ok), n - 1);
    if (picks.length < n - 1) {
      const others = Object.values(ITEMS).filter(x => ok(x) && x.unit !== it.unit);
      picks = picks.concat(sample(others, n - 1 - picks.length));
    }
    const seen = new Set([key(it)]);
    picks = picks.filter(p => !seen.has(key(p)) && seen.add(key(p)));
    return shuffle([it].concat(picks));
  }

  function distractors(it, words, n) {
    const have = new Set(words.map(low));
    const u = UNITS[it.unit], pool = new Set();
    u.s.forEach(s => tokens(s.en).forEach((w, i) => {
      pool.add(i === 0 && w !== 'I' && !/^I'/.test(w) ? w.toLowerCase() : w);
    }));
    u.v.forEach(v => { if (!v.en.includes(' ')) pool.add(v.en); });
    const seen = new Set();
    const cand = [...pool].filter(w => { const k = low(w); if (have.has(k) || seen.has(k)) return false; seen.add(k); return true; });
    return sample(cand, n);
  }

  /* ================================================================
     Session (leçon / révision)
     ================================================================ */
  function startLesson(idx) {
    const l = LESSONS[idx];
    if (!l || !isUnlocked(l)) return;
    startRun({ kind: 'lesson', lesson: l, seq: genLesson(l.unit, l.li) });
  }
  function startReview() {
    const seq = genReview();
    if (!seq.length) { toast("Fais d'abord une leçon 🙂"); return; }
    startRun({ kind: 'review', seq });
  }
  function startRun(o) {
    closeOverlays();
    stopConfetti();
    R = Object.assign({}, o, {
      queue: o.seq.map(e => Object.assign({ tries: 0 }, e)), total: o.seq.length,
      done: 0, ok: 0, tot: 0, wrong: 0, combo: 0, maxCombo: 0, start: Date.now(), cur: null, ctl: {}, state: 'answer'
    });
    if (!(history.state && history.state.tt)) history.pushState({ tt: 1 }, '');
    screen = 'lesson';
    app.innerHTML = `<div class="lesson">
      <div class="l-top">
        <button class="icon-btn" data-act="quit" aria-label="Quitter">${IC.close}</button>
        <div class="pbar" role="progressbar" aria-label="Progression" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i style="width:0%"></i></div>
        <div class="combo"></div>
      </div>
      <div class="l-body"></div>
      <div class="l-foot"></div>
    </div>`;
    window.scrollTo(0, 0);
    nextEx();
  }

  function nextEx() {
    if (!R) return;
    if (R.ctl && R.ctl.cleanup) R.ctl.cleanup();
    updateProgress();
    if (!R.queue.length) { finishRun(); return; }
    const ex = adapt(R.queue.shift());
    R.cur = ex;
    R.state = ex.t === 'intro' ? 'intro' : 'answer';
    renderEx();
  }

  function renderEx() {
    const body = $('.l-body');
    body.scrollTop = 0;
    R.ctl = RENDER[R.cur.t](R.cur, body) || {};
    setFoot(R.state);
  }

  function readapt() {
    if (!R || R.state !== 'answer') return;
    if (R.ctl && R.ctl.cleanup) R.ctl.cleanup();
    const next = adapt(R.cur);
    if (next !== R.cur) { R.cur = next; renderEx(); }
  }

  function setFoot(mode, fb) {
    const foot = $('.l-foot');
    if (!foot) return;
    foot.className = 'l-foot';
    if (mode === 'intro') {
      foot.innerHTML = '<button class="btn" data-act="continue">Continuer</button>';
    } else if (mode === 'answer') {
      const c = R.ctl;
      foot.innerHTML = c.noCheck ? (c.footHtml || '') : `<button class="btn" data-act="check" ${c.ready && c.ready() ? '' : 'disabled'}>Vérifier</button>`;
    } else if (mode === 'feedback') {
      foot.classList.add(fb.ok ? 'ok' : 'bad');
      foot.innerHTML = `<div class="fb" role="status"><div class="ic" aria-hidden="true">${fb.ok ? '✓' : '✕'}</div>
        <div class="tx"><h4>${esc(fb.title)}</h4>${fb.lines.join('')}</div>
        ${fb.speak ? speakBtn(fb.speak) : ''}</div>
        <button class="btn ${fb.ok ? 'ok' : 'bad'}" data-act="continue">Continuer</button>`;
      const b = foot.querySelector('[data-act=continue]');
      if (b) b.focus({ preventScroll: true });
    }
  }
  function refreshCheck() {
    const b = $('.l-foot [data-act=check]');
    if (b && R) b.disabled = !(R.ctl.ready && R.ctl.ready());
  }
  function updateProgress() {
    const i = $('.pbar i');
    if (!i || !R) return;
    const p = R.total ? Math.min(100, Math.round(100 * R.done / R.total)) : 0;
    i.style.width = p + '%';
    i.parentElement.setAttribute('aria-valuenow', p);
  }
  function updateCombo() {
    const c = $('.combo');
    if (!c || !R) return;
    if (R.combo >= 3) {
      c.textContent = `🔥 ×${R.combo}`;
      c.classList.remove('pulse'); void c.offsetWidth; c.classList.add('pulse');
    } else c.textContent = '';
  }

  function doCheck() {
    if (!R || R.state !== 'answer' || !R.ctl.ready || !R.ctl.ready()) return;
    grade(R.ctl.check());
  }

  function grade(res) {
    const ex = R.cur, inReview = R.kind === 'review';
    R.state = 'feedback';
    if (!res.counted) R.tot++;
    if (res.ok) {
      if (!res.counted) R.ok++;
      R.combo++; R.maxCombo = Math.max(R.maxCombo, R.combo); R.done++;
      if (ex.item && !res.noSrs) srsCorrect(ex.item.id, inReview);
      Sfx.ok(); vibe(15);
    } else {
      R.wrong++; R.combo = 0;
      if (ex.item && !res.noSrs) srsWrong(ex.item.id);
      ex.tries = (ex.tries || 0) + 1;
      res.requeued = ex.tries < 2;
      if (res.requeued) R.queue.push(ex); else R.done++;
      Sfx.bad(); vibe([40, 60, 40]);
    }
    save();
    updateProgress(); updateCombo();
    if (R.ctl.reveal) R.ctl.reveal(res);
    const fb = feedbackFor(res);
    setFoot('feedback', fb);
    if (fb.speak) sayLater(fb.speak, 380);
  }

  function feedbackFor(res) {
    const lines = [];
    let title;
    if (res.ok) {
      title = res.title || (res.typo ? "Attention à l'orthographe" : pick1(PRAISE));
      if (res.typo) lines.push(`<p>Bonne réponse : <span class="ans">${esc(res.correct)}</span></p>`);
      else if (res.alt) lines.push(`<p class="muted">Autre réponse possible : ${esc(res.correct)}</p>`);
      if (res.meaning) lines.push(`<p class="muted">Sens : ${esc(res.meaning)}</p>`);
      if (R.combo > 0 && R.combo % 5 === 0) lines.push(`<p class="muted">🔥 ${R.combo} bonnes réponses d'affilée !</p>`);
    } else {
      title = 'Pas tout à fait…';
      lines.push(`<p>Bonne réponse : <span class="ans">${esc(res.correct)}</span></p>`);
      if (res.meaning) lines.push(`<p class="muted">Sens : ${esc(res.meaning)}</p>`);
      if (res.note) lines.push(`<p class="muted">💡 ${esc(res.note)}</p>`);
      if (res.requeued) lines.push('<p class="muted">Tu la reverras en fin de leçon.</p>');
    }
    return { ok: res.ok, title, lines, speak: res.sayAfter && canListen() ? res.sayAfter : null };
  }

  function continueEx() {
    if (!R) return;
    if (R.state === 'intro') { R.done++; nextEx(); }
    else if (R.state === 'feedback') nextEx();
  }
  function skipEx() {
    if (!R || R.state !== 'answer') return;
    R.done++;
    nextEx();
  }

  function askQuit() {
    if (!R) return;
    overlay(`<div class="scrim modal-c"><div class="modal" role="alertdialog" aria-modal="true" aria-label="Quitter la leçon ?">
      <div class="em" aria-hidden="true">🥺</div><h3>Quitter la leçon ?</h3><p>Ta progression dans cette leçon sera perdue.</p>
      <div class="actions"><button class="btn" data-act="close-ov">Continuer la leçon</button><button class="btn ghost danger" data-act="quit-confirm">Quitter</button></div>
    </div></div>`);
  }

  function finishRun() {
    const r = R;
    const sec = Math.max(1, Math.round((Date.now() - r.start) / 1000));
    const acc = r.tot ? Math.round(100 * r.ok / r.tot) : 100;
    const perfect = r.wrong === 0;
    const xp = r.kind === 'lesson' ? 10 + (perfect ? 5 : 0) + Math.min(5, Math.floor(r.maxCombo / 5)) : 8 + (perfect ? 4 : 0);
    const d = dayRec(today()), goal = S.settings.goal;
    const goalBefore = d.xp >= goal, lvlBefore = levelOf(S.xp);
    d.xp += xp; d.lessons++; d.sec += sec; d.ok += r.ok; d.tot += r.tot;
    S.xp += xp;
    let unitDone = false;
    if (r.kind === 'lesson') {
      const k = r.lesson.key, p = S.done[k];
      S.done[k] = { n: (p ? p.n : 0) + 1, best: Math.max(p ? p.best : 0, acc) };
      unitDone = !p && LESSONS.filter(l => l.unit === r.lesson.unit).every(l => S.done[l.key]);
    }
    const extended = markActive();
    save();
    R = null;
    screen = 'result';
    renderResult({ kind: r.kind, lesson: r.lesson, xp, acc, sec, perfect, extended, goalBefore, goalAfter: d.xp >= goal, lvlBefore, lvlAfter: levelOf(S.xp), unitDone });
    Sfx.done(); vibe([30, 50, 30]);
    confetti();
  }

  function renderResult(o) {
    const nl = nextLesson(), goal = S.settings.goal, tx = todayXp();
    const msgs = [];
    if (o.extended) msgs.push(`🔥 Série : <b>${plural(S.streak.count, 'jour')}</b>${S.streak.count > 1 ? ', continue comme ça !' : '. Reviens demain pour la prolonger.'}`);
    if (!o.goalBefore && o.goalAfter) msgs.push('🎯 Objectif du jour atteint !');
    if (o.lvlAfter > o.lvlBefore) msgs.push(`⭐ Niveau ${o.lvlAfter} atteint !`);
    if (o.unitDone) msgs.push(`🏆 Unité « ${esc(UNITS[o.lesson.unit].title)} » terminée !`);
    const em = o.perfect ? '🏆' : o.acc >= 80 ? '🎉' : '💪';
    const title = o.kind === 'review' ? 'Révision terminée !' : o.perfect ? 'Sans faute !' : 'Leçon terminée !';
    const sub = o.perfect ? 'Aucune erreur, impressionnant.' : o.acc >= 80 ? 'Très bon travail.' : "Chaque erreur t'aide à progresser.";
    let actions;
    if (o.kind === 'lesson' && nl) actions = `<button class="btn" data-act="start" data-l="${nl.idx}">Leçon suivante</button><button class="btn ghost" data-act="home">Retour à l'accueil</button>`;
    else if (o.kind === 'review' && dueIds().length) actions = `<button class="btn" data-act="home">Retour à l'accueil</button><button class="btn ghost" data-act="review">Encore une révision</button>`;
    else actions = `<button class="btn" data-act="home">Retour à l'accueil</button>`;
    app.innerHTML = `<div class="result">
      <div class="em" aria-hidden="true">${em}</div>
      <h1>${title}</h1><p class="sub">${sub}</p>
      <div class="stat-row">
        <div class="stat" style="--c:var(--gold)"><small>XP</small><b>+${o.xp}</b></div>
        <div class="stat" style="--c:var(--ok)"><small>Précision</small><b>${o.acc} %</b></div>
        <div class="stat" style="--c:#3B82F6"><small>Temps</small><b>${fmtDuration(o.sec)}</b></div>
      </div>
      <div class="msgs">
        <div class="msg" style="text-align:left">🎯 Objectif du jour : <b>${Math.min(tx, goal)} / ${goal} XP</b><div class="goalbar"><i style="width:0%"></i></div></div>
        ${msgs.map(m => `<div class="msg">${m}</div>`).join('')}
      </div>
      <div class="actions">${actions}</div>
    </div>`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const gb = $('.goalbar i');
      if (gb) gb.style.width = Math.min(100, Math.round(100 * tx / goal)) + '%';
    }));
    const b = $('.result .btn');
    if (b) b.focus({ preventScroll: true });
  }

  /* ================================================================
     Rendu des exercices
     ================================================================ */
  function choiceControl(body, opts, label, onChoose) {
    const btns = [...body.querySelectorAll('.opt')];
    let sel = -1;
    const choose = i => {
      if (!R || R.state !== 'answer') return;
      sel = i;
      btns.forEach((b, j) => { b.classList.toggle('sel', j === i); b.setAttribute('aria-pressed', j === i); });
      Sfx.tap();
      if (onChoose) onChoose(i);
      refreshCheck();
    };
    btns.forEach((b, i) => b.addEventListener('click', () => choose(i)));
    return {
      get sel() { return sel; },
      onKey: e => { const n = parseInt(e.key, 10); if (n >= 1 && n <= opts.length) choose(n - 1); },
      reveal: (isRight, res) => btns.forEach((b, j) => {
        b.disabled = true;
        if (isRight(j)) b.classList.add('right');
        else if (j === sel && !res.ok) b.classList.add('wrong');
        else b.classList.add('gone');
      })
    };
  }
  const optHtml = (labels, grid) => `<div class="options ${grid ? 'grid2' : ''}">${labels.map((l, i) => `<button class="opt" data-i="${i}" aria-pressed="false"><span class="k" aria-hidden="true">${i + 1}</span><span>${esc(l)}</span></button>`).join('')}</div>`;

  function buildEx(ex, body, listen) {
    const it = ex.item, words = tokens(it.en);
    const tiles = shuffle(words.concat(distractors(it, words, words.length >= 6 ? 4 : 3)).map((w, i) => ({ w, i })));
    const byI = i => tiles.find(t => t.i === i);
    const ans = [];
    body.innerHTML = `<div class="ex-title">${listen ? 'Écris ce que tu entends' : 'Traduis cette phrase'}</div>
      ${listen ? listenZone(it.en) : `<div class="prompt"><span class="txt">${esc(it.fr)}</span></div>`}
      <div class="answer-zone" aria-label="Ta réponse"></div>
      <div class="bank">${tiles.map(t => `<button class="tile" data-i="${t.i}">${esc(t.w)}</button>`).join('')}</div>
      ${listen ? muteLink('listen') : ''}`;
    const zone = $('.answer-zone', body), bank = $('.bank', body);
    const bankBtn = i => bank.querySelector(`.tile[data-i="${i}"]`);
    const draw = () => {
      zone.innerHTML = ans.map(i => `<button class="tile" data-i="${i}">${esc(byI(i).w)}</button>`).join('');
      refreshCheck();
    };
    bank.addEventListener('click', e => {
      const b = e.target.closest('.tile');
      if (!b || !R || R.state !== 'answer' || b.classList.contains('used')) return;
      const i = +b.dataset.i;
      ans.push(i); b.classList.add('used'); b.setAttribute('aria-hidden', 'true');
      if (!listen && canListen()) TTS.say(byI(i).w); else Sfx.tap();
      draw();
    });
    zone.addEventListener('click', e => {
      const b = e.target.closest('.tile');
      if (!b || !R || R.state !== 'answer') return;
      const i = +b.dataset.i;
      ans.splice(ans.indexOf(i), 1);
      const bb = bankBtn(i); bb.classList.remove('used'); bb.removeAttribute('aria-hidden');
      Sfx.tap();
      draw();
    });
    if (listen) sayLater(it.en);
    return {
      ready: () => ans.length > 0,
      onKey: e => {
        if (e.key === 'Backspace' && ans.length) { const i = ans.pop(); bankBtn(i).classList.remove('used'); draw(); }
      },
      check: () => {
        const r = checkText(ans.map(i => byI(i).w).join(' '), it, false);
        return { ok: r.ok, alt: r.alt, correct: it.en, meaning: listen ? it.fr : null, sayAfter: listen ? null : it.en };
      },
      reveal: () => body.querySelectorAll('.tile').forEach(b => { b.disabled = true; })
    };
  }

  function typeEx(ex, body, listen) {
    const it = ex.item;
    const title = listen ? 'Écris ce que tu entends' : it.kind === 'v' ? 'Écris ce mot en anglais' : 'Écris cette phrase en anglais';
    body.innerHTML = `<div class="ex-title">${title}</div>
      ${listen ? listenZone(it.en) : `<div class="prompt">${it.kind === 'v' && it.emoji ? `<span class="em" aria-hidden="true">${it.emoji}</span>` : ''}<span class="txt">${esc(it.fr)}</span></div>`}
      <textarea class="type-input" rows="3" placeholder="Tape en anglais…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" aria-label="Ta réponse en anglais"></textarea>
      ${listen ? muteLink('listen') : ''}`;
    const ta = $('textarea', body);
    ta.addEventListener('input', () => {
      if (ta.value.includes('\n')) { ta.value = ta.value.replace(/\n/g, ' ').trim(); doCheck(); return; }
      refreshCheck();
    });
    if (listen) sayLater(it.en);
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) ta.focus({ preventScroll: true });
    return {
      ready: () => ta.value.trim().length > 0,
      check: () => {
        const r = checkText(ta.value, it, true);
        return { ok: r.ok, typo: r.typo, alt: r.alt, correct: it.en, meaning: listen ? it.fr : null, sayAfter: listen ? null : it.en };
      },
      reveal: () => { ta.readOnly = true; ta.blur(); }
    };
  }

  const RENDER = {
    intro(ex, body) {
      const it = ex.item;
      body.innerHTML = `<span class="tag-new">Nouveau mot</span>
        <div class="intro"><div class="em" aria-hidden="true">${it.emoji || '✨'}</div>
        <div class="en">${esc(it.en)} ${speakBtn(it.en)}</div>
        <div class="fr">${esc(it.fr)}</div></div>`;
      sayLater(it.en, 200);
      return {};
    },

    pick(ex, body) {
      const it = ex.item, en2fr = ex.dir === 'en2fr', field = en2fr ? 'fr' : 'en', sent = it.kind === 's';
      const opts = optionsFor(it, field, 4);
      const title = en2fr ? (sent ? 'Que veut dire cette phrase ?' : 'Que veut dire ce mot ?') : 'Comment dit-on en anglais ?';
      body.innerHTML = `<div class="ex-title">${title}</div>
        <div class="prompt">${!en2fr && !sent && it.emoji ? `<span class="em" aria-hidden="true">${it.emoji}</span>` : ''}<span class="txt">${esc(en2fr ? it.en : it.fr)}</span>${en2fr ? speakBtn(it.en) : ''}</div>
        ${optHtml(opts.map(o => o[field]), !sent)}`;
      const c = choiceControl(body, opts, field, i => { if (!en2fr && canListen()) TTS.say(opts[i].en); });
      if (en2fr) sayLater(it.en);
      return {
        ready: () => c.sel >= 0,
        onKey: c.onKey,
        check: () => ({ ok: opts[c.sel] === it, correct: it[field], sayAfter: en2fr ? null : it.en }),
        reveal: res => c.reveal(j => opts[j] === it, res)
      };
    },

    listen_pick(ex, body) {
      const it = ex.item, opts = optionsFor(it, 'en', 4);
      body.innerHTML = `<div class="ex-title">Écoute et choisis ce que tu entends</div>
        ${listenZone(it.en)}${optHtml(opts.map(o => o.en), true)}${muteLink('listen')}`;
      const c = choiceControl(body, opts, 'en');
      sayLater(it.en);
      return {
        ready: () => c.sel >= 0,
        onKey: c.onKey,
        check: () => ({ ok: opts[c.sel] === it, correct: it.en, meaning: it.fr }),
        reveal: res => c.reveal(j => opts[j] === it, res)
      };
    },

    match(ex, body) {
      const items = ex.items, L = shuffle(items), Rt = shuffle(items);
      let selL = null, selR = null, matched = 0;
      body.innerHTML = `<div class="ex-title">Associe les paires</div>
        <div class="match"><div class="col">${L.map(it => `<button class="opt" data-side="l" data-id="${it.id}">${esc(it.en)}</button>`).join('')}</div>
        <div class="col">${Rt.map(it => `<button class="opt" data-side="r" data-id="${it.id}">${esc(it.fr)}</button>`).join('')}</div></div>`;
      const btn = (side, id) => body.querySelector(`.opt[data-side="${side}"][data-id="${id}"]`);
      body.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
        if (!R || R.state !== 'answer' || b.disabled) return;
        const side = b.dataset.side, id = b.dataset.id;
        if (side === 'l') { selL = id; if (canListen()) TTS.say(ITEMS[id].en); else Sfx.tap(); }
        else { selR = id; Sfx.tap(); }
        body.querySelectorAll(`.opt[data-side="${side}"]`).forEach(x => x.classList.toggle('sel', x === b));
        if (!selL || !selR) return;
        const bl = btn('l', selL), br = btn('r', selR);
        R.tot++;
        if (selL === selR) {
          R.ok++; matched++;
          [bl, br].forEach(x => { x.classList.remove('sel'); x.classList.add('matched'); x.disabled = true; });
          if (matched === items.length) setTimeout(() => { if (R && R.cur === ex) grade({ ok: true, counted: true, noSrs: true }); }, 250);
        } else {
          R.wrong++; R.combo = 0; updateCombo();
          [bl, br].forEach(x => { x.classList.remove('sel'); x.classList.add('flash'); setTimeout(() => x.classList.remove('flash'), 400); });
          Sfx.bad(); vibe(30);
        }
        selL = selR = null;
      }));
      return { noCheck: true, footHtml: '<p style="text-align:center;color:var(--muted);margin:12px 0;font-weight:700">Touche un mot, puis sa traduction</p>' };
    },

    build(ex, body) { return buildEx(ex, body, false); },
    listen_build(ex, body) { return buildEx(ex, body, true); },
    type(ex, body) { return typeEx(ex, body, false); },
    listen_type(ex, body) { return typeEx(ex, body, true); },

    blank(ex, body) {
      const it = ex.item, opts = shuffle(it.options);
      const parts = it.text.split('___');
      body.innerHTML = `<div class="ex-title">Complète la phrase</div>
        <div class="blank-sentence">${esc(parts[0])}<span class="gap">&nbsp;</span>${esc(parts[1] || '')}</div>
        <div class="blank-fr">${esc(it.fr)}</div>
        ${optHtml(opts, false)}`;
      const gap = $('.gap', body);
      const c = choiceControl(body, opts, null, i => { gap.textContent = opts[i]; });
      return {
        ready: () => c.sel >= 0,
        onKey: c.onKey,
        check: () => ({ ok: opts[c.sel] === it.answer, correct: it.en, note: it.note, sayAfter: it.en }),
        reveal: res => { c.reveal(j => opts[j] === it.answer, res); if (!res.ok) gap.textContent = it.answer; }
      };
    },

    speak(ex, body) {
      const it = ex.item;
      let rec = null, busy = false, tries = 0;
      body.innerHTML = `<div class="ex-title">Dis cette phrase à voix haute</div>
        <div class="prompt"><span class="txt"><span class="target-words">${esc(it.en)}</span><br><small style="color:var(--ink-2);font-weight:600">${esc(it.fr)}</small></span>${speakBtn(it.en)}</div>
        <div class="mic-zone"><button class="mic">${IC.mic}<span>Appuie pour parler</span></button><div class="heard" aria-live="polite"></div></div>
        ${muteLink('speak')}`;
      const mic = $('.mic', body), heard = $('.heard', body), label = $('.mic span', body);
      const reset = () => { busy = false; mic.classList.remove('rec'); label.textContent = 'Appuie pour parler'; };
      const stop = () => { if (rec) { try { rec.onend = null; rec.abort(); } catch (e) { /* rien */ } } rec = null; reset(); };

      function handle(alts, err) {
        if (!R || R.cur !== ex || R.state !== 'answer') return;
        if (err === 'not-allowed' || err === 'service-not-allowed') {
          heard.textContent = "Le micro n'est pas autorisé. Active-le dans les réglages du navigateur, ou touche « Passer ».";
          return;
        }
        if (err === 'network') { heard.textContent = 'La reconnaissance vocale a besoin d\'internet. Touche « Passer ».'; return; }
        if (err === 'aborted') return;
        if (!alts || !alts.length) { heard.textContent = "Je n'ai rien entendu. Réessaie en parlant près du micro."; return; }
        const best = speechScore(alts, it);
        const heardSet = new Set(norm(best.text).split(' '));
        const words = it.en.split(/\s+/).map(w => `<span class="${heardSet.has(norm(w)) ? 'hit' : 'miss'}">${esc(w)}</span>`).join(' ');
        if (best.score >= 0.75) {
          heard.innerHTML = words;
          grade({ ok: true, title: pick1(['Super prononciation !', 'Bien dit !', 'Parfait !']), correct: it.en });
        } else {
          tries++;
          Sfx.bad();
          heard.innerHTML = `${words}<div style="margin-top:6px;font-size:15px">J'ai entendu : « ${esc(best.text)} ». ${tries >= 2 ? 'Réessaie ou touche « Passer ».' : 'Presque ! Réessaie.'}</div>`;
        }
      }

      mic.addEventListener('click', () => {
        if (!R || R.state !== 'answer') return;
        if (busy) { try { rec.stop(); } catch (e) { stop(); } return; }
        TTS.stop();
        let alts = null, err = null, live = '';
        try { rec = new SR(); } catch (e) { heard.textContent = 'Micro indisponible sur ce navigateur.'; return; }
        rec.lang = S.settings.accent;
        rec.interimResults = true;
        rec.maxAlternatives = 5;
        rec.continuous = false;
        rec.onresult = ev => {
          live = '';
          for (let i = 0; i < ev.results.length; i++) live += ev.results[i][0].transcript;
          heard.textContent = live;
          const res0 = ev.results[0];
          if (ev.results.length === 1 && res0.isFinal) alts = Array.from(res0).map(a => a.transcript);
          else if (ev.results[ev.results.length - 1].isFinal) alts = [live];
        };
        rec.onerror = ev => { err = ev.error; };
        rec.onend = () => { rec = null; reset(); handle(alts || (live ? [live] : null), err); };
        busy = true;
        mic.classList.add('rec');
        label.textContent = "Je t'écoute… (touche pour arrêter)";
        heard.textContent = '';
        try { rec.start(); } catch (e) { stop(); heard.textContent = 'Impossible de démarrer le micro. Réessaie.'; }
      });
      return {
        noCheck: true,
        footHtml: '<button class="btn ghost" data-act="skip">Passer</button>',
        cleanup: stop,
        reveal: () => { mic.disabled = true; }
      };
    }
  };

  /* ================================================================
     Progrès
     ================================================================ */
  function weekChart() {
    const W = 320, H = 150, padT = 10, padB = 24;
    const days = [];
    for (let i = 6; i >= 0; i--) { const d = addDays(today(), -i); days.push({ d, xp: (S.days[d] || {}).xp || 0 }); }
    const goal = S.settings.goal;
    const max = Math.max(goal, ...days.map(x => x.xp)) * 1.12;
    const cw = W / 7, bw = Math.min(26, cw * 0.55), base = H - padB;
    const y = v => padT + (base - padT) * (1 - v / max);
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="XP gagnés ces 7 derniers jours : ${days.map(x => `${fullDay(x.d)} ${x.xp}`).join(', ')}">`;
    s += `<line class="grid" x1="0" x2="${W}" y1="${base}" y2="${base}"/>`;
    s += `<line class="goal" x1="0" x2="${W}" y1="${y(goal).toFixed(1)}" y2="${y(goal).toFixed(1)}"/>`;
    days.forEach((x, i) => {
      const cx = cw * i + cw / 2, top = y(x.xp), isT = i === 6, l = cx - bw / 2, r = cx + bw / 2;
      if (x.xp > 0) {
        const rr = Math.min(4, base - top);
        s += `<path class="bar ${isT ? 'today' : ''}" d="M${l},${base} V${top + rr} Q${l},${top} ${l + rr},${top} H${r - rr} Q${r},${top} ${r},${top + rr} V${base} Z"/>`;
      }
      s += `<text x="${cx}" y="${H - 6}" text-anchor="middle" class="${isT ? 'on' : ''}">${isT ? 'Auj.' : DAY_LETTERS[parseD(x.d).getDay()]}</text>`;
      s += `<rect class="hit" x="${cw * i}" y="0" width="${cw}" height="${base}" data-tip="${esc(fullDay(x.d))} : ${x.xp} XP" data-x="${(cx / W * 100).toFixed(2)}" data-y="${(Math.min(top, base - 2) / H * 100).toFixed(2)}"/>`;
    });
    return s + '</svg>';
  }

  function renderStats() {
    refreshStreak();
    const st = S.streak;
    const allV = UNITS.flatMap(u => u.v), allS = UNITS.flatMap(u => u.s);
    const words = allV.filter(v => S.items[v.id] && S.items[v.id].c > 0).length;
    const sents = allS.filter(v => S.items[v.id] && S.items[v.id].c > 0).length;
    let ok = 0, tot = 0, sec = 0, lessons = 0;
    Object.values(S.days).forEach(d => { ok += d.ok || 0; tot += d.tot || 0; sec += d.sec || 0; lessons += d.lessons || 0; });
    const lvl = levelOf(S.xp), f0 = levelFloor(lvl), f1 = levelFloor(lvl + 1);
    const lp = Math.round(100 * (S.xp - f0) / (f1 - f0));
    const doneCount = LESSONS.filter(l => S.done[l.key]).length;
    app.innerHTML = topbar() + `<main class="scroll">
      <h1 class="page-title">Mes progrès</h1>
      <div class="tiles">
        <div class="tile-stat"><div class="lbl">Série</div><div class="val"><span class="ic">🔥</span> ${plural(st.count, 'jour')}</div><div class="hint">Record : ${st.best} · ${restAvailable() ? 'repos dispo cette semaine' : 'repos utilisé cette semaine'}</div></div>
        <div class="tile-stat"><div class="lbl">Niveau ${lvl}</div><div class="val"><span class="ic">⭐</span> ${S.xp} XP</div><div class="lvlbar"><i style="width:${lp}%"></i></div><div class="hint">Encore ${f1 - S.xp} XP pour le niveau ${lvl + 1}</div></div>
        <div class="tile-stat"><div class="lbl">Mots appris</div><div class="val"><span class="ic">📚</span> ${words}</div><div class="hint">sur ${allV.length}</div></div>
        <div class="tile-stat"><div class="lbl">Phrases apprises</div><div class="val"><span class="ic">💬</span> ${sents}</div><div class="hint">sur ${allS.length}</div></div>
        <div class="tile-stat"><div class="lbl">Précision</div><div class="val"><span class="ic">🎯</span> ${tot ? Math.round(100 * ok / tot) + ' %' : '—'}</div><div class="hint">${plural(tot, 'réponse')}</div></div>
        <div class="tile-stat"><div class="lbl">Temps total</div><div class="val"><span class="ic">⏱️</span> ${fmtDuration(sec)}</div><div class="hint">${plural(lessons, 'séance')}</div></div>
      </div>
      <section class="card chart-card">
        <h3>XP des 7 derniers jours</h3>
        <p class="cap">Ligne pointillée : ton objectif (${S.settings.goal} XP par jour)</p>
        <div class="chart">${weekChart()}</div>
      </section>
      <section class="card" style="margin-top:14px">
        <h3 style="margin:0 0 4px;font-size:17px">Parcours A1</h3>
        <p class="cap" style="color:var(--ink-2);font-size:14px;margin:0">${doneCount} / ${LESSONS.length} leçons terminées</p>
        <div class="units-prog">${UNITS.map(u => {
          const n = LESSONS.filter(l => l.unit === u.index && S.done[l.key]).length;
          return `<div class="up-row"><span aria-hidden="true">${u.emoji}</span><span class="n">${esc(u.title)}</span><span class="bar"><i style="width:${n * 25}%;background:${u.color}"></i></span><b style="width:30px;text-align:right">${n}/4</b></div>`;
        }).join('')}</div>
      </section>
    </main>` + tabbar('stats');

    const chart = $('.chart');
    let tip = null;
    const showTip = r => {
      if (!tip) { tip = document.createElement('div'); tip.className = 'tip'; chart.appendChild(tip); }
      tip.textContent = r.dataset.tip;
      const cw = chart.clientWidth, half = tip.offsetWidth / 2 + 2;
      tip.style.left = Math.max(half, Math.min(cw - half, cw * r.dataset.x / 100)) + 'px';
      tip.style.top = `calc(${r.dataset.y}% - 6px)`;
    };
    chart.querySelectorAll('.hit').forEach(r => {
      r.addEventListener('pointerenter', () => showTip(r));
      r.addEventListener('click', () => showTip(r));
    });
    chart.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && tip) { tip.remove(); tip = null; } });
  }

  /* ================================================================
     Réglages
     ================================================================ */
  function renderSettings() {
    const s = S.settings;
    const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([v, l]) => {
      const on = String(s[key]) === String(v);
      return `<button class="${on ? 'on' : ''}" data-set="${key}" data-val="${v}" aria-pressed="${on}">${l}</button>`;
    }).join('')}</div>`;
    const sw = (key, label, dis) => `<label class="switch"><input type="checkbox" data-toggle="${key}" aria-label="${esc(label)}" ${s[key] && !dis ? 'checked' : ''} ${dis ? 'disabled' : ''}><span></span></label>`;
    const goalHint = { 20: 'Environ 2 leçons (≈ 10 min)', 30: 'Environ 2 à 3 leçons (10-15 min)', 50: 'Environ 4 leçons (≈ 20 min)' }[s.goal] || '';
    const now = Date.now();
    const muted = (S.mute.listen > now) || (S.mute.speak > now);
    app.innerHTML = topbar() + `<main class="scroll">
      <h1 class="page-title">Réglages</h1>
      <div class="set-group"><h3>Objectif</h3>
        <div class="set-row"><div class="l">Objectif quotidien<small>${goalHint}</small></div>${seg('goal', [[20, '20 XP'], [30, '30'], [50, '50']])}</div>
      </div>
      <div class="set-group"><h3>Voix anglaise</h3>
        <div class="set-row"><div class="l">Accent</div>${seg('accent', [['en-US', '🇺🇸 US'], ['en-GB', '🇬🇧 UK']])}</div>
        <div class="set-row"><div class="l">Vitesse</div>${seg('slow', [[false, 'Normale'], [true, 'Lente']])}</div>
        <div class="set-row"><div class="l">Tester la voix${TTS.ok ? '' : '<small>Synthèse vocale indisponible sur ce navigateur</small>'}</div><button class="btn small ghost" data-act="test-voice" ${TTS.ok ? '' : 'disabled'}>🔊 Écouter</button></div>
      </div>
      <div class="set-group"><h3>Exercices</h3>
        <div class="set-row"><div class="l">Exercices oraux (micro)<small>${SR ? 'Tu répètes des phrases à voix haute' : 'Non disponible sur ce navigateur (essaie Chrome ou Safari à jour)'}</small></div>${sw('speak', 'Exercices oraux', !SR)}</div>
        ${muted ? `<div class="set-row"><div class="l">Écoute ou micro en pause<small>Tu as choisi « je ne peux pas écouter / parler ».</small></div><button class="btn small ghost" data-act="unmute">Réactiver</button></div>` : ''}
      </div>
      <div class="set-group"><h3>Effets</h3>
        <div class="set-row"><div class="l">Sons</div>${sw('sound', 'Sons')}</div>
        ${navigator.vibrate ? `<div class="set-row"><div class="l">Vibrations</div>${sw('vibe', 'Vibrations')}</div>` : ''}
        <div class="set-row"><div class="l">Animations et confettis</div>${sw('anim', 'Animations')}</div>
      </div>
      <div class="set-group"><h3>Apparence</h3>
        <div class="set-row"><div class="l">Thème</div>${seg('theme', [['auto', 'Auto'], ['light', 'Clair'], ['dark', 'Sombre']])}</div>
      </div>
      <div class="set-group"><h3>Ma progression</h3>
        <div class="set-row"><div class="l">Sauvegarder<small>Télécharge un fichier de sauvegarde</small></div><button class="btn small ghost" data-act="export">Exporter</button></div>
        <div class="set-row"><div class="l">Restaurer<small>À partir d'un fichier de sauvegarde</small></div><button class="btn small ghost" data-act="import">Importer</button></div>
        <div class="set-row"><div class="l danger">Tout réinitialiser</div><button class="btn small ghost danger" data-act="reset">Effacer</button></div>
      </div>
      <input type="file" id="importFile" accept="application/json,.json" hidden>
      <p class="foot-note">Tea Time · Ta progression est enregistrée uniquement sur cet appareil.</p>
    </main>` + tabbar('settings');
    $('#importFile').addEventListener('change', importData);
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(S)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `teatime-sauvegarde-${today()}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
    toast('Sauvegarde téléchargée ✅');
  }
  function importData(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const rd = new FileReader();
    rd.onload = () => {
      try {
        const d = JSON.parse(rd.result);
        if (!d || typeof d.xp !== 'number' || typeof d.done !== 'object') throw new Error('format');
        S = mergeState(defaults(), d);
        save(); applyPrefs(); TTS.pickVoice();
        toast('Progression restaurée ✅');
        show('settings');
      } catch (err) { toast("Ce fichier n'est pas une sauvegarde Tea Time."); }
    };
    rd.readAsText(f);
  }
  function applyPrefs() {
    const r = document.documentElement;
    if (S.settings.theme === 'auto') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', S.settings.theme);
    r.classList.toggle('no-anim', !S.settings.anim);
  }

  /* ================================================================
     Événements globaux
     ================================================================ */
  document.addEventListener('click', e => {
    const nav = e.target.closest('[data-nav]');
    if (nav) { show(nav.dataset.nav); return; }
    const setB = e.target.closest('[data-set]');
    if (setB) {
      const k = setB.dataset.set; let v = setB.dataset.val;
      if (v === 'true' || v === 'false') v = v === 'true'; else if (/^\d+$/.test(v)) v = +v;
      S.settings[k] = v; save(); applyPrefs();
      if (k === 'accent') { TTS.pickVoice(); TTS.say('Hello! Nice to meet you.'); }
      if (k === 'slow') TTS.say('Hello! Nice to meet you.');
      renderSettings();
      return;
    }
    const a = e.target.closest('[data-act]');
    if (!a) return;
    switch (a.dataset.act) {
      case 'close-ov':
        if (a.classList.contains('scrim') && e.target !== a) return;
        closeOverlays(); break;
      case 'start': startLesson(+a.dataset.l); break;
      case 'node': openSheet(LESSONS[+a.dataset.l]); break;
      case 'review': startReview(); break;
      case 'home': goHome(); break;
      case 'dismiss-notice': S.notice = null; save(); renderHome(); break;
      case 'dismiss-install': S.installTip = true; save(); renderHome(); break;
      case 'quit': askQuit(); break;
      case 'quit-confirm': closeOverlays(); goHome(); break;
      case 'check': doCheck(); break;
      case 'continue': continueEx(); break;
      case 'skip': skipEx(); break;
      case 'say': TTS.say(a.dataset.text, false); break;
      case 'say-slow': TTS.say(a.dataset.text, true); break;
      case 'mute-listen':
        S.mute.listen = Date.now() + 36e5; save();
        toast("OK, plus d'exercices d'écoute pendant 1 h"); readapt(); break;
      case 'mute-speak':
        S.mute.speak = Date.now() + 36e5; save();
        toast("OK, plus d'exercices oraux pendant 1 h"); readapt(); break;
      case 'unmute': S.mute = { listen: 0, speak: 0 }; save(); renderSettings(); break;
      case 'test-voice': TTS.pickVoice(); TTS.say('Hello! Nice to meet you.'); break;
      case 'export': exportData(); break;
      case 'import': { const f = $('#importFile'); if (f) f.click(); break; }
      case 'reset':
        overlay(`<div class="scrim modal-c" data-act="close-ov"><div class="modal" role="alertdialog" aria-modal="true" aria-label="Tout effacer ?">
          <div class="em" aria-hidden="true">⚠️</div><h3>Tout effacer ?</h3><p>XP, série, leçons et révisions seront supprimés de cet appareil.</p>
          <div class="actions"><button class="btn" data-act="close-ov">Annuler</button><button class="btn ghost danger" data-act="reset-confirm">Tout effacer</button></div></div></div>`);
        break;
      case 'reset-confirm':
        S = defaults(); save(); applyPrefs(); closeOverlays(); show('home'); toast('Progression réinitialisée'); break;
      default: break;
    }
  });

  document.addEventListener('change', e => {
    const t = e.target.closest('[data-toggle]');
    if (!t) return;
    S.settings[t.dataset.toggle] = t.checked;
    save(); applyPrefs();
    if (t.dataset.toggle === 'sound' && t.checked) Sfx.ok();
  });

  document.addEventListener('keydown', e => {
    if (document.querySelector('.ov-root')) { if (e.key === 'Escape') closeOverlays(); return; }
    if (screen !== 'lesson' || !R) return;
    if (e.key === 'Escape') { askQuit(); return; }
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (R.state === 'answer') doCheck(); else continueEx();
      return;
    }
    if (R.state === 'answer' && R.ctl.onKey && !e.target.matches('textarea, input')) R.ctl.onKey(e);
  });

  // Débloque la voix et les sons au premier contact (exigence iOS)
  document.addEventListener('pointerdown', () => { TTS.unlock(); Sfx.get(); }, { once: true, capture: true });

  function syncVH() {
    const vv = window.visualViewport;
    document.documentElement.style.setProperty('--app-h', `${vv ? vv.height : window.innerHeight}px`);
    if (screen === 'lesson') window.scrollTo(0, 0);
  }
  if (window.visualViewport) window.visualViewport.addEventListener('resize', syncVH);
  window.addEventListener('resize', syncVH);

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && screen === 'home') renderHome();
  });

  /* ================================================================
     Démarrage
     ================================================================ */
  applyPrefs();
  syncVH();
  refreshStreak();
  if (TTS.ok) {
    TTS.pickVoice();
    if ('onvoiceschanged' in speechSynthesis) speechSynthesis.onvoiceschanged = () => TTS.pickVoice();
  }
  show('home');

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* hors ligne indisponible */ });
  }
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => { /* rien */ });

  // Accès pour les tests automatisés
  window.__tt = { get S() { return S; }, get R() { return R; }, ITEMS, UNITS, LESSONS, norm, checkText, genLesson, genReview, speechScore };
})();
