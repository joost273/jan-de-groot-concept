/* Gedeelde opbouw: header, footer, winkelmand, animaties. */
const ICON = {
  arrow: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9.5 17h-19L12 3z"/><path d="M12 10v4M12 17h.01"/></svg>',
  cup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z"/><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3"/></svg>',
  cake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16M5 21v-8h14v8M5 16c2 1.2 3.5 1.2 5 0s3-1.2 4.5 0 3 1.2 4.5 0M12 13V9M12 6.5c.8 0 1.3-.7 1.3-1.4S12 3 12 3s-1.3 1.4-1.3 2.1.5 1.4 1.3 1.4z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/></svg>',
  store: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16h14M6 16l1.5-6h9L18 16M5 16v3h2v-3M17 16v3h2v-3"/><circle cx="8" cy="13.5" r=".6"/><circle cx="16" cy="13.5" r=".6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3.5h3l-6.6 7.6 7.8 9.4h-6.1l-4.8-5.9-5.5 5.9h-3l7.1-8.1L2 3.5h6.2l4.3 5.4 5-5.4zm-1 15.3h1.7L7.6 5.1H5.8l10.7 13.7z"/></svg>',
  bol: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16a8 8 0 0 1 16 0"/><path d="M3 16h18l-1.5 3h-15z"/><path d="M8.5 10c.8-1.3 2-2 3.5-2"/></svg>',
};

const NAV = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'bossche-bol.html', label: 'Bossche Bollen', key: 'bol' },
  { href: 'assortiment.html', label: 'Assortiment', key: 'assortiment' },
  { href: 'winkel-lunchroom.html', label: 'Winkel & Lunchroom', key: 'winkel' },
  { href: 'waar-wanneer.html', label: 'Waar & Wanneer', key: 'waar' },
  { href: 'contact.html', label: 'Contact', key: 'contact' },
];

const euro = n => '€ ' + n.toFixed(2).replace('.', ',');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Tijd & openingstijden (Europe/Amsterdam) ---------- */
function nowNL() {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
  const get = t => parts.find(p => p.type === t).value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, mins: (+get('hour') % 24) * 60 + +get('minute') };
}
const toMins = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
function openStatus() {
  const { day, mins } = nowNL();
  const h = HOURS[day];
  if (h.open && mins >= toMins(h.open) && mins < toMins(h.close)) return { open: true, text: 'Nu geopend · tot ' + h.close + ' uur' };
  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7, n = HOURS[d];
    if (!n.open) continue;
    if (i === 0 && mins < toMins(n.open)) return { open: false, text: 'Gesloten · opent om ' + n.open + ' uur' };
    if (i > 0) return { open: false, text: 'Gesloten · opent ' + (i === 1 ? 'morgen' : n.day.toLowerCase()) + ' om ' + n.open + ' uur' };
  }
  return { open: false, text: 'Gesloten' };
}
const hoursText = h => h.open ? h.open + ' – ' + h.close : h.closed;
/* Weekvolgorde beginnend op maandag */
const WEEK = [1, 2, 3, 4, 5, 6, 0];

function hoursTable() {
  const { day } = nowNL();
  return '<table class="hours">' + WEEK.map(i => {
    const h = HOURS[i];
    return `<tr class="${i === day ? 'today' : ''} ${h.open ? '' : 'is-closed'}"><td>${h.day}</td><td>${hoursText(h)}</td></tr>`;
  }).join('') + '</table>';
}

/* ---------- Header & footer ---------- */
function renderChrome() {
  const page = document.body.dataset.page;
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="wrap">
      <a class="brand-tab" href="index.html" aria-label="Banketbakkerij Jan de Groot – naar de homepage">
        <img src="${IMAGES.logo}" alt="Banketbakkerij Jan de Groot" width="200" height="240">
      </a>
      <nav class="nav" aria-label="Hoofdmenu">
        ${NAV.map(n => `<a class="nav-link" href="${n.href}" ${n.key === page ? 'aria-current="page"' : ''}><span data-label="${n.label}">${n.label}</span></a>`).join('')}
      </nav>
      <div class="header-actions">
        <button class="btn btn-order btn--sm" type="button" data-open-cart aria-label="Bestellen – winkelmand openen">
          ${ICON.bag}<span>Bestellen</span><span class="cart-count" data-count="0">0</span>
        </button>
        <button class="menu-toggle" type="button" aria-label="Menu openen" aria-expanded="false" aria-controls="mobile-menu"><span></span></button>
      </div>
    </div>`;
  document.body.prepend(header);

  const mm = document.createElement('div');
  mm.className = 'mobile-menu';
  mm.id = 'mobile-menu';
  mm.innerHTML = `
    <nav aria-label="Mobiel menu">
      ${NAV.map(n => `<a href="${n.href}" ${n.key === page ? 'aria-current="page"' : ''}>${n.label}${ICON.chevron}</a>`).join('')}
    </nav>
    <div class="mm-foot">
      <span class="status" data-status></span>
      <a class="btn btn--block" href="assortiment.html">${ICON.bag} Bestellen</a>
      <div class="mm-contact">
        <a class="btn btn--ghost btn--sm" href="${CONTACT.phoneHref}">${ICON.phone} Bellen</a>
        <a class="btn btn--ghost btn--sm" href="${CONTACT.route}" target="_blank" rel="noopener">${ICON.pin} Route</a>
      </div>
    </div>`;
  header.after(mm);

  const { day } = nowNL();
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="wrap">
      <div class="footer-top">
        <div>
          <a class="footer-logo" href="index.html"><img src="${IMAGES.logoWide}" alt="Jan de Groot" width="640" height="60" loading="lazy"></a>
          <p>Banketbakkerij sinds 1938. Specialist in de enige echte Bossche Bol, met winkel en lunchroom aan de Stationsweg in ’s-Hertogenbosch.</p>
          <div class="socials">
            <a href="${CONTACT.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICON.facebook}</a>
            <a href="${CONTACT.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.instagram}</a>
            <a href="${CONTACT.twitter}" target="_blank" rel="noopener" aria-label="X / Twitter">${ICON.x}</a>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>${CONTACT.street}<br>${CONTACT.city}</li>
            <li><a href="${CONTACT.phoneHref}">${CONTACT.phone}</a></li>
            <li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
            <li><a href="${CONTACT.route}" target="_blank" rel="noopener">Plan uw route →</a></li>
          </ul>
        </div>
        <div>
          <h4>Openingstijden</h4>
          <ul class="f-hours">
            ${WEEK.map(i => `<li class="${i === day ? 'today' : ''}"><span>${HOURS[i].day.slice(0, 2)}</span><span>${hoursText(HOURS[i])}</span></li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>Navigatie</h4>
          <ul>
            ${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
            <li><a href="bestellen.html">Winkelmand</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Banketbakkerij Jan de Groot® · J.M. De Groot B.V.</span>
        <nav aria-label="Juridisch">
          <a href="privacy.html">Privacybeleid</a>
          <a href="sitemap.html">Sitemap</a>
          <a href="sitemap.html#fotos">Fotoverantwoording</a>
        </nav>
      </div>
    </div>`;
  document.body.append(footer);

  // Winkelmand-lade
  const drawer = document.createElement('div');
  drawer.innerHTML = `
    <div class="drawer-backdrop" data-close-cart></div>
    <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" aria-hidden="true">
      <div class="drawer-head">
        <h2 id="drawer-title">Uw bestelling</h2>
        <button class="icon-btn" type="button" data-close-cart aria-label="Sluiten">${ICON.close}</button>
      </div>
      <div class="drawer-body" data-cart-lines></div>
      <div class="drawer-foot" data-cart-foot></div>
    </aside>
    <div class="toast" role="status" aria-live="polite">${ICON.check}<span data-toast-text></span><button type="button" data-open-cart>Bekijk</button></div>`;
  document.body.append(...drawer.children);

  // Interacties
  const toggle = $('.menu-toggle');
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  /* De header trekt zich terug zodra je naar beneden leest en komt weer
     tevoorschijn zodra je omhoog scrollt. */
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 12);
    const busy = document.body.classList.contains('menu-open') || document.body.classList.contains('cart-open');
    if (!busy && y > 260 && y > lastY + 6) header.classList.add('is-tucked');
    else if (busy || y < lastY - 6 || y < 140) header.classList.remove('is-tucked');
    lastY = y;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Exacte vensterbreedte zonder scrollbar: daarmee kunnen beelden
     precies tot de rand van het scherm lopen. */
  const setVw = () => document.documentElement.style.setProperty('--vw', document.documentElement.clientWidth + 'px');
  setVw();
  window.addEventListener('resize', setVw, { passive: true });

  document.addEventListener('click', e => {
    if (e.target.closest('[data-open-cart]')) { e.preventDefault(); openCart(); }
    if (e.target.closest('[data-close-cart]')) closeCart();
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeCart();
    if (document.body.classList.contains('menu-open')) toggle.click();
  });
}

/* ---------- Winkelmand ---------- */
const CART_KEY = 'jdg-cart-v1';
const Cart = {
  read() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch { return this._mem || {}; } },
  write(c) { this._mem = c; try { localStorage.setItem(CART_KEY, JSON.stringify(c)); } catch {} Cart.emit(); },
  add(id, q = 1) { const c = this.read(); c[id] = Math.min(999, (c[id] || 0) + q); this.write(c); },
  set(id, q) { const c = this.read(); if (q <= 0) delete c[id]; else c[id] = Math.min(999, q); this.write(c); },
  clear() { this.write({}); },
  lines() { return Object.entries(this.read()).map(([id, q]) => ({ p: PRODUCT_BY_ID[id], q })).filter(l => l.p); },
  count() { return this.lines().reduce((s, l) => s + l.q, 0); },
  total() { return this.lines().reduce((s, l) => s + l.q * l.p.price, 0); },
  bollen() { return this.lines().filter(l => BOL_IDS.includes(l.p.id)).reduce((s, l) => s + l.q, 0); },
  emit() { document.dispatchEvent(new CustomEvent('cart:change')); },
};

function thumbHTML(p, letterOnly) {
  if (p.img) return `<img src="${p.img}" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'placeholder',innerHTML:'<span>${esc(p.name[0])}</span>'}))">`;
  return `<div class="placeholder"><span>${esc(p.name[0])}</span>${letterOnly ? '' : '<small>Foto volgt</small>'}</div>`;
}

function cartRules() {
  const lines = Cart.lines(), ids = lines.map(l => l.p.id);
  const rules = [];
  if (ids.includes(3)) rules.push(['info', '<b>Mini Bossche bollen</b> dienen minimaal 2 werkdagen van tevoren besteld te worden.']);
  if (ids.includes(115) || ids.includes(116)) rules.push(['info', '<b>Grote Bossche bollen</b> dienen altijd van tevoren besteld te worden.']);
  if (Cart.bollen() > 100) rules.push(['warn', 'Bij bestellingen van <b>meer dan 100 bollen</b> verzoeken wij u om even <a href="contact.html">contact met ons op te nemen</a>.']);
  return rules;
}
const rulesHTML = () => cartRules().map(([t, h]) => `<div class="rule ${t === 'warn' ? 'rule--warn' : ''}">${t === 'warn' ? ICON.alert : ICON.info}<span>${h}</span></div>`).join('');

function qtyHTML(id, q, sm = true) {
  return `<div class="qty ${sm ? 'qty--sm' : ''}" data-qty="${id}">
    <button type="button" data-step="-1" aria-label="Minder">${ICON.minus}</button>
    <input type="number" inputmode="numeric" min="0" max="999" value="${q}" aria-label="Aantal">
    <button type="button" data-step="1" aria-label="Meer">${ICON.plus}</button></div>`;
}

function lineHTML(l) {
  return `<div class="line">
    <div class="thumb">${thumbHTML(l.p, true)}</div>
    <div>
      <h4>${esc(l.p.name)}</h4>
      <div class="unit">${euro(l.p.price)} per stuk</div>
      <div class="ctl">${qtyHTML(l.p.id, l.q)}</div>
    </div>
    <div class="line-end">
      <span class="line-total">${euro(l.p.price * l.q)}</span>
      <button class="remove" type="button" data-remove="${l.p.id}">Verwijder</button>
    </div>
  </div>`;
}

function renderCart() {
  const n = Cart.count();
  $$('.cart-count').forEach(el => {
    if (el.dataset.count !== String(n)) { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
    el.dataset.count = n; el.textContent = n;
  });
  const body = $('[data-cart-lines]'), foot = $('[data-cart-foot]');
  if (!body) return;
  const lines = Cart.lines();
  if (!lines.length) {
    body.innerHTML = `<div class="cart-empty"><div class="ic">${ICON.bag}</div><h3>Uw winkelmand is nog leeg</h3>
      <p class="muted">Kies uit de Bossche bollen of ons volledige assortiment.</p>
      <div class="btn-row" style="justify-content:center;margin-top:20px"><a class="btn btn--sm" href="bossche-bol.html">Bossche Bollen</a><a class="btn btn--ghost btn--sm" href="assortiment.html">Assortiment</a></div></div>`;
    foot.innerHTML = `<p class="small muted" style="margin:0">U betaalt met PIN bij het ophalen of bij bezorging.</p>`;
    return;
  }
  body.innerHTML = lines.map(lineHTML).join('') + rulesHTML();
  foot.innerHTML = `
    <div class="sum-row"><span>Subtotaal</span><strong>${euro(Cart.total())}</strong></div>
    <p class="small muted" style="margin:0">Geen online betaling: u betaalt met PIN bij het ophalen of bij bezorging.</p>
    <a class="btn btn--block" href="bestellen.html">Bestelling controleren ${ICON.arrow}</a>
    <button class="btn btn--ghost btn--block btn--sm" type="button" data-close-cart>Verder winkelen</button>`;
}

let lastFocus = null;
function openCart() {
  lastFocus = document.activeElement;
  document.body.classList.add('cart-open', 'no-scroll');
  document.body.classList.remove('menu-open');
  $('.drawer').setAttribute('aria-hidden', 'false');
  setTimeout(() => $('.drawer .icon-btn')?.focus(), 50);
}
function closeCart() {
  if (!document.body.classList.contains('cart-open')) return;
  document.body.classList.remove('cart-open', 'no-scroll');
  $('.drawer').setAttribute('aria-hidden', 'true');
  lastFocus?.focus?.();
}

let toastTimer;
function toast(text) {
  const t = $('.toast');
  $('[data-toast-text]', t).textContent = text;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

function addToCart(id, q = 1, btn) {
  Cart.add(id, q);
  const p = PRODUCT_BY_ID[id];
  toast((q > 1 ? q + '× ' : '') + p.name + ' toegevoegd');
  if (btn) {
    const html = btn.innerHTML;
    btn.classList.add('added');
    btn.innerHTML = ICON.check + ' Toegevoegd';
    setTimeout(() => { btn.classList.remove('added'); btn.innerHTML = html; }, 1400);
  }
}

// Gedelegeerde bediening van aantallen/verwijderen (lade én bestelpagina)
document.addEventListener('click', e => {
  const step = e.target.closest('[data-qty] [data-step]');
  if (step) {
    const box = step.closest('[data-qty]'), input = $('input', box);
    const v = Math.max(0, Math.min(999, (+input.value || 0) + +step.dataset.step));
    input.value = v;
    if (box.dataset.qty !== 'local') Cart.set(box.dataset.qty, v);
    else box.dispatchEvent(new Event('change', { bubbles: true }));
  }
  const rm = e.target.closest('[data-remove]');
  if (rm) Cart.set(rm.dataset.remove, 0);
  const add = e.target.closest('[data-add]');
  if (add) addToCart(+add.dataset.add, 1, add);
});
document.addEventListener('change', e => {
  const box = e.target.closest('[data-qty]');
  if (box && box.dataset.qty !== 'local' && e.target.matches('input')) Cart.set(box.dataset.qty, Math.max(0, Math.round(+e.target.value || 0)));
});

/* ---------- Productkaart ---------- */
function productCard(p, i = 0) {
  return `<article class="card pcard reveal" style="--d:${(i % 4) * 0.06}s">
    <div class="media">${thumbHTML(p)}${p.note ? `<span class="tag">${esc(p.note)}</span>` : ''}</div>
    <div class="body">
      <h3>${esc(p.name)}</h3>
      <p class="desc">${esc(p.desc)}</p>
      <div class="foot">
        <span class="price">${euro(p.price)}</span>
        <button class="btn btn-add" type="button" data-add="${p.id}">${ICON.plus} Bestellen</button>
      </div>
    </div>
  </article>`;
}

/* ---------- Scroll-animaties ---------- */
let io;
function observeReveals(root = document) {
  if (!('IntersectionObserver' in window)) { $$('.reveal', root).forEach(el => el.classList.add('in')); return; }
  io = io || new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  $$('.reveal:not(.in)', root).forEach(el => io.observe(el));
}

function fillStatus() {
  const s = openStatus();
  $$('[data-status]').forEach(el => { el.textContent = s.text; el.classList.toggle('closed', !s.open); });
  $$('[data-hours]').forEach(el => { el.innerHTML = hoursTable(); });
}

function hydrate(root = document) {
  $$('[data-src]', root).forEach(img => { img.src = typeof IMAGES[img.dataset.src] === 'string' ? IMAGES[img.dataset.src] : img.dataset.src; img.removeAttribute('data-src'); });
  // Met class: icoon in de wrapper zetten; zonder class: placeholder vervangen door de svg.
  $$('[data-icon]', root).forEach(el => {
    const svg = ICON[el.dataset.icon] || '';
    if (el.classList.length) { el.innerHTML = svg; el.removeAttribute('data-icon'); } else el.outerHTML = svg;
  });
}

document.documentElement.classList.remove('no-js');
hydrate();
renderChrome();
document.addEventListener('cart:change', renderCart);
window.addEventListener('storage', e => { if (e.key === CART_KEY) renderCart(); });
renderCart();
fillStatus();
document.addEventListener('DOMContentLoaded', () => observeReveals());
if (document.readyState !== 'loading') observeReveals();
