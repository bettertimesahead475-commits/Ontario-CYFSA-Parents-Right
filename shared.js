/* ═══════════════════════════════════════════════════
   ONTARIO PARENT DEFENSE — SHARED COMPONENTS
   Call OPD.init('pageName') on each page
═══════════════════════════════════════════════════ */
window.OPD = (function() {

  const LOGO_SVG = `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 1.5L2.5 9.8v12.7C2.5 33.6 11.3 42.1 22 44 32.7 42.1 41.5 33.6 41.5 22.5V9.8L22 1.5z" fill="#0b1e3f"/>
    <path d="M22 4.5L5.5 11.8v10.7C5.5 31.4 12.9 39.3 22 41.2c9.1-1.9 16.5-9.8 16.5-18.7V11.8L22 4.5z" fill="none" stroke="#b07d2a" stroke-width="1.2"/>
    <line x1="10.5" y1="22" x2="33.5" y2="22" stroke="#d4a044" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="22" y1="15" x2="22" y2="31" stroke="#d4a044" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="22" cy="15" r="2.2" fill="#b07d2a"/>
    <line x1="10.5" y1="22" x2="10.5" y2="27.5" stroke="#d4a044" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M5.5 29.5 Q10.5 28 15.5 29.5" stroke="#d4a044" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <line x1="33.5" y1="22" x2="33.5" y2="27.5" stroke="#d4a044" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M28.5 29.5 Q33.5 28 38.5 29.5" stroke="#d4a044" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  </svg>`;

  const PAGES = [
    { id: 'home',      href: 'index.html',     label: 'Home' },
    { id: 'analyzer',  href: 'analyzer.html',   label: '⚖️ AI Analyzer' },
    { id: 'rights',    href: 'rights.html',     label: '🔴 Know Your Rights' },
    { id: 'emergency', href: 'emergency.html',  label: '🚨 Emergency' },
    { id: 'charter',   href: 'charter.html',    label: 'Charter' },
    { id: 'cyfsa',     href: 'cyfsa.html',      label: 'CYFSA Law' },
    { id: 'evidence',  href: 'evidence.html',   label: 'Evidence Builder' },
    { id: 'lawyer',    href: 'lawyer.html',     label: 'Find a Lawyer' },
  ];

  function buildTopbar() {
    return `<div class="topbar">
      🚨 Child removed? Call Legal Aid Ontario 24/7:
      <a href="tel:18006688258"><strong>1-800-668-8258</strong></a>
      &nbsp;·&nbsp;
      <a href="emergency.html">Emergency Protocol →</a>
    </div>`;
  }

  function buildHeader(activePage) {
    const navLinks = PAGES.map(p =>
      `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">${p.label}</a>`
    ).join('');
    const mobileLinks = PAGES.map(p =>
      `<a href="${p.href}" class="${p.id === activePage ? 'active' : ''}">${p.label}</a>`
    ).join('');

    return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html">
          <div class="brand-logo">${LOGO_SVG}</div>
          <div>
            <div class="brand-name">Ontario Parent Defense</div>
            <div class="brand-tag"><span class="badge">#1</span> Free Legal Information</div>
          </div>
        </a>
        <nav class="nav-links">${navLinks}</nav>
        <button class="mobile-menu-btn" onclick="toggleMobileNav()" aria-label="Menu">☰</button>
      </div>
    </header>
    <div class="mobile-nav" id="mobileNav">${mobileLinks}</div>
    <div class="gold-rule"></div>`;
  }

  function buildFooter() {
    return `<footer class="site-footer">
      <p><strong>Ontario Parent Defense</strong> — Ontario's #1 Free Legal Information Resource for Families</p>
      <div class="footer-links">
        ${PAGES.map(p => `<a href="${p.href}">${p.label}</a>`).join('')}
      </div>
      <p style="margin-top:10px">
        Emergency Legal Aid: <a href="tel:18006688258">1-800-668-8258</a> (24/7) &nbsp;·&nbsp;
        Lawyer Referral: <a href="tel:18559475255">1-855-947-5255</a>
      </p>
      <p style="margin-top:14px;font-size:12px;opacity:.45">
        Educational information only. Not legal advice. Not a law firm. Always consult a qualified Ontario lawyer. © 2026 Ontario Parent Defense.
      </p>
    </footer>`;
  }

  function init(activePage) {
    // Inject topbar before body content
    const topbar = document.createElement('div');
    topbar.innerHTML = buildTopbar();
    document.body.insertBefore(topbar.firstElementChild, document.body.firstChild);

    // Inject header
    const header = document.createElement('div');
    header.innerHTML = buildHeader(activePage);
    // Insert after topbar
    const topbarEl = document.body.firstChild;
    topbarEl.insertAdjacentHTML('afterend', buildHeader(activePage));

    // Inject footer
    document.body.insertAdjacentHTML('beforeend', buildFooter());
  }

  return { init };
})();

function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}
