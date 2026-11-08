'use strict';

// Inline stroke icons — no external requests, works offline from file://
const paths = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
  loop: '<path d="M4 9a5 5 0 0 1 5-5h9"/><path d="M15 1.5 18.5 4 15 6.5"/><path d="M20 15a5 5 0 0 1-5 5H6"/><path d="M9 22.5 5.5 20 9 17.5"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
  check: '<path d="M4.5 12.5 9.5 17.5 19.5 6.5"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8.2 12.2 11 15l4.9-5.1"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  alert: '<path d="M12 4 2.8 20h18.4L12 4Z"/><path d="M12 9.5v4.5"/><circle cx="12" cy="17.2" r=".9" fill="currentColor" stroke="none"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><circle cx="12" cy="7.9" r=".9" fill="currentColor" stroke="none"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.2V12l3.4 2"/>',
  calendar: '<rect x="3.5" y="5.5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8.5 3.2v4.4M15.5 3.2v4.4"/>',
  camera: '<path d="M3.5 8.5h3l1.6-2.3h7.8L17.5 8.5h3v10.5h-17z"/><circle cx="12" cy="13.5" r="3.4"/>',
  star: '<path d="m12 3.8 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9L3.5 10l5.9-.8L12 3.8Z"/>',
  arrowRight: '<path d="M4.5 12h14"/><path d="m13 6.5 5.5 5.5-5.5 5.5"/>',
  arrowLeft: '<path d="M19.5 12h-14"/><path d="m11 6.5-5.5 5.5 5.5 5.5"/>',
  chevronRight: '<path d="m9.5 5.5 6.5 6.5-6.5 6.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  user: '<circle cx="12" cy="8" r="3.7"/><path d="M4.8 20c.8-4 3.7-6 7.2-6s6.4 2 7.2 6"/>',
  bell: '<path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 4.2 1.5 5.5 1.5 5.5H5S6.5 14.2 6.5 10Z"/><path d="M10 19a2 2 0 0 0 4 0"/>',
  box: '<path d="M12 3 3.5 7.2v9.6L12 21l8.5-4.2V7.2L12 3Z"/><path d="M3.5 7.2 12 11.5l8.5-4.3M12 11.5V21"/>',
  pin: '<path d="M12 21s6.5-6 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15 12 21 12 21Z"/><circle cx="12" cy="10" r="2.4"/>',
  phone: '<path d="M6 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3A2.5 2.5 0 0 1 17 19.5C10 19.5 4.5 14 4.5 7A2.5 2.5 0 0 1 6 3.5Z"/>',
  idCard: '<rect x="2.8" y="5" width="18.4" height="14" rx="2"/><circle cx="8.5" cy="11" r="2.2"/><path d="M5.2 16c.5-1.9 1.8-2.8 3.3-2.8s2.8.9 3.3 2.8M14.5 10h4M14.5 13.5h4"/>',
  upload: '<path d="M12 16V4.5"/><path d="m7.5 9 4.5-4.5L16.5 9"/><path d="M4.5 16v3.5h15V16"/>',
  sparkle: '<path d="M12 3.5 13.8 9l5.5 1.8-5.5 1.8L12 18l-1.8-5.4L4.7 10.8 10.2 9 12 3.5Z"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m6 18 12-12"/>',
  scale: '<path d="M12 4v16M7 20h10"/><path d="M12 7 5 9l-1.5 4.5a3.6 3.6 0 0 0 7 0L9 9M12 7l7 2 1.5 4.5a3.6 3.6 0 0 1-7 0L15 9"/>',
  handshake: '<path d="m2.5 11 3-3 3.5 1.5 2-2 4 2.5 2-1.5 3 2.5"/><path d="M8.5 9.5 12 13l2-2 3 3-3.5 3.5-2.5-2.5-1.5 1.5-3 2"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-13.7-4.6L3.5 9"/><path d="M3.5 4.5V9H8"/><path d="M4 13a8 8 0 0 0 13.7 4.6L20.5 15"/><path d="M20.5 19.5V15H16"/>',
  trend: '<path d="M3.5 17 9 11l3.5 3.5L20.5 6.5"/><path d="M15.5 6.5h5v5"/>',
  filter: '<path d="M4 6.5h16M7 12h10M10 17.5h4"/>',
  file: '<path d="M13.5 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9L13.5 3.5Z"/><path d="M13.5 3.5V9H19"/>',
  rupee: '<path d="M7 4.5h10M7 9h10M15.5 4.5c0 3.5-1.8 4.5-4.5 4.5H7l7 9.5"/>',
  bike: '<circle cx="6" cy="17" r="3.2"/><circle cx="18" cy="17" r="3.2"/><path d="M9 17h4.5l-2-6H8"/><path d="M13.5 11 17 8.5M14 6h3"/>',
  message: '<path d="M4 5.5h16v10.5H9.5L4 20V5.5Z"/><path d="M8 10h8M8 12.8h5"/>',
};

function icon(name, size = 18, extra = '') {
  const d = paths[name];
  if (!d) return '';
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
}

function stars(n, total = 5) {
  let out = '';
  for (let i = 0; i < total; i++) {
    const off = i < Math.round(n) ? '' : ' class="off"';
    out += `<span${off}>${icon('star', 12, 'fill="currentColor" stroke="none"')}</span>`;
  }
  return `<span class="stars" aria-label="${n} out of ${total}">${out}</span>`;
}

module.exports = { icon, stars, paths };
