'use strict';

const { icon } = require('./icons');
const { CAMPUS, CAMPUS_SHORT, ME } = require('./data');

// Primary nav keeps to the real information architecture.
// item.html and handover.html are contextual steps inside a flow, so they live in
// the prototype map in the footer instead of the top bar.
const NAV = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'browse.html', label: 'Browse', key: 'browse' },
  { href: 'request.html', label: 'Requests', key: 'request' },
  { href: 'returns.html', label: 'Returns', key: 'returns' },
  { href: 'profile.html', label: 'Profile', key: 'profile' },
  { href: 'rules.html', label: 'Rules', key: 'rules' },
];

const ALL_SCREENS = [
  { href: 'index.html', label: 'Home / landing', key: 'home' },
  { href: 'browse.html', label: 'Browse board', key: 'browse' },
  { href: 'item.html', label: 'Item detail', key: 'item' },
  { href: 'request.html', label: 'Request & terms', key: 'request' },
  { href: 'handover.html', label: 'Handover photos', key: 'handover' },
  { href: 'returns.html', label: 'Returns & claims', key: 'returns' },
  { href: 'profile.html', label: 'Trust profile', key: 'profile' },
  { href: 'verify.html', label: 'ID verification', key: 'verify' },
  { href: 'rules.html', label: 'Rules & penalties', key: 'rules' },
];

function header(active) {
  const links = NAV.map(
    (n) =>
      `<a href="${n.href}"${n.key === active ? ' class="is-active" aria-current="page"' : ''}><span class="label">${n.label}</span></a>`
  ).join('');

  return `<header class="site-header">
  <div class="wrap">
    <a class="brand" href="index.html" aria-label="BorrowBuy home">
      <span class="brand-mark">${icon('loop', 17)}</span>
      <span class="brand-name"><b>Borrow</b><span>Buy</span></span>
    </a>
    <div class="campus-chip" title="Only verified students of this campus can list or borrow">
      <span class="dot"></span>
      <span class="txt"><b>${CAMPUS}</b></span>
    </div>
    <nav class="nav" aria-label="Primary">
      ${links}
      <a href="profile.html" class="avatar" title="${ME.name} — verified ${ME.dept}">${ME.initials}</a>
    </nav>
    <button class="nav-toggle" aria-label="Menu">${icon('filter', 18)}</button>
  </div>
</header>`;
}

function footer(active) {
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <a class="brand" href="index.html">
          <span class="brand-mark">${icon('loop', 17)}</span>
          <span class="brand-name"><b>Borrow</b><span>Buy</span></span>
        </a>
        <p class="tiny" style="margin-top:12px;max-width:34ch">A closed borrowing network for one campus. One student ID, one account, prices fixed at listing.</p>
        <div class="tag-row" style="margin-top:14px">
          <span class="chip green">${icon('shield', 12)} ID-gated</span>
          <span class="chip outline">${icon('lock', 12)} Price locked</span>
        </div>
      </div>
      <div>
        <h5>Browse</h5>
        <a href="browse.html">All items</a>
        <a href="browse.html#electronics">Electronics</a>
        <a href="browse.html#academics">Academics</a>
        <a href="browse.html#transport">Transport</a>
      </div>
      <div>
        <h5>Your stuff</h5>
        <a href="request.html">Active request</a>
        <a href="handover.html">Handover &amp; photos</a>
        <a href="returns.html">Returns &amp; claims</a>
        <a href="profile.html">Trust profile</a>
      </div>
      <div>
        <h5>The rules</h5>
        <a href="rules.html">Penalty ladder</a>
        <a href="rules.html#photos">Photo protocol</a>
        <a href="rules.html#reviews">Reviews &amp; suspension</a>
        <a href="verify.html">Verify your ID</a>
      </div>
    </div>

    <div class="screen-map">
      <span class="eyebrow">Prototype map · ${ALL_SCREENS.length} screens</span>
      <div class="screen-map-links">
        ${ALL_SCREENS.map((n, i) =>
          `<a href="${n.href}"${n.key === active ? ' class="is-here" aria-current="page"' : ''}><span class="n">${String(i + 1).padStart(2, '0')}</span>${n.label}</a>`
        ).join('\n        ')}
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 BorrowBuy — student prototype. No payments are processed in this build.</span>
      <span class="mono">v0.4 · prototype</span>
    </div>
  </div>
</footer>`;
}

function layout({ title, active, body, bodyClass = '', scripts = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} · BorrowBuy</title>
<meta name="description" content="BorrowBuy — a verified, campus-only borrowing network where students lend what they already own at a fixed price.">
<link rel="stylesheet" href="assets/styles.css">
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ''}>
${header(active)}
${body}
${footer(active)}
${scripts}
</body>
</html>
`;
}

// Small helpers used by page templates
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const money = (n) => '₹' + n.toLocaleString('en-IN');

module.exports = { layout, header, footer, esc, money, NAV };
