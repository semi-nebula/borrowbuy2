'use strict';

const { layout, money } = require('../lib/layout');
const { icon } = require('../lib/icons');
const { ITEMS, CATEGORIES, CAMPUS } = require('../lib/data');

const card = (it) => `
      <a class="item" href="item.html?id=${it.slug}" data-cat="${it.cat}">
        <div class="item-media">
          <img src="assets/img/${it.img}" alt="${it.title}" loading="lazy">
          <span class="chip outline tag">${it.catLabel}</span>
          <span class="chip ${it.condTone === 'green' ? 'green' : 'ochre'} avail">${icon('camera', 11)} ${it.condition}</span>
        </div>
        <div class="item-body">
          <div class="item-title">${it.title}</div>
          <div class="item-sub">${it.ownerDept}</div>
          <div class="item-price">
            <span class="amt">${money(it.rate)}</span>
            <span class="unit">/ day</span>
            <span class="dep">+${money(it.deposit)} dep.</span>
          </div>
          <div class="item-owner">
            <span class="avatar sm">${it.ownerInitials}</span>
            <span>${it.owner}</span>
            <span class="score">${icon('shield', 11)} ${it.ownerScore}</span>
          </div>
        </div>
      </a>`;

module.exports = function browse() {
  const filters = CATEGORIES.map(
    (c, i) =>
      `<button class="filter${i === 0 ? ' is-on' : ''}" data-filter="${c.key}">${c.label}<span class="n">${c.n}</span></button>`
  ).join('');

  const body = `
<main id="main">
  <div class="page-head">
    <div class="wrap">
      <div class="crumbs">
        <a href="index.html">Home</a>${icon('chevronRight', 12)}<span>Browse</span>
      </div>
      <div class="section-head" style="margin-bottom:0;align-items:flex-end">
        <div>
          <span class="eyebrow">${CAMPUS} · 8 items on the board</span>
          <h1 style="font-size:clamp(30px,3.6vw,44px);margin-top:8px">The board</h1>
          <p class="lede" style="margin-top:10px;max-width:56ch">Everything here is owned by a verified student on this campus. Prices are set by the owner and frozen at listing.</p>
        </div>
        <div class="side">
          <span class="chip green lg">${icon('lock', 13)} All prices locked</span>
        </div>
      </div>
    </div>
  </div>

  <div class="wrap" style="padding-top:22px">
    <div class="inline" style="justify-content:space-between;gap:14px">
      <div class="filters" role="group" aria-label="Filter by category">${filters}</div>
      <select class="input" style="width:auto;min-width:190px" aria-label="Sort">
        <option>Sort: closest pickup</option>
        <option>Sort: lowest price / day</option>
        <option>Sort: highest owner score</option>
        <option>Sort: newest listing</option>
      </select>
    </div>

    <div class="note" style="margin-top:18px;background:#FCFAF4">
      ${icon('info', 16)}
      <div><b>Filtered to your campus.</b> You cannot see listings from other colleges, and they cannot see yours. Location is shown at hostel or building level only — never a room number, until a request is accepted.</div>
    </div>
  </div>

  <section class="section" style="padding-top:26px">
    <div class="wrap">
      <div class="grid-items" id="grid">${ITEMS.map(card).join('')}</div>
      <p class="tiny" style="margin-top:24px;text-align:center" id="count">Showing 8 of 8 items</p>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="card card-pad split-head">
        <div>
          <span class="eyebrow">Don't see it?</span>
          <h3 style="margin-top:8px">Post a want-ad to your campus only</h3>
          <p class="muted" style="margin-top:6px;font-size:13.5px;max-width:60ch">Describe what you need and the dates. Students who own it get a quiet notification — no public post, no spam outside the campus.</p>
        </div>
        <a class="btn btn-primary" href="request.html">${icon('plus', 16)} Post a want-ad</a>
      </div>
    </div>
  </section>
</main>

<script>
  (function () {
    var filters = document.querySelectorAll('[data-filter]');
    var cards = document.querySelectorAll('#grid .item');
    var count = document.getElementById('count');

    function apply(key) {
      var valid = false;
      filters.forEach(function (b) {
        var on = b.getAttribute('data-filter') === key;
        b.classList.toggle('is-on', on);
        if (on) valid = true;
      });
      if (!valid) { key = 'all'; filters[0].classList.add('is-on'); }
      var shown = 0;
      cards.forEach(function (c) {
        var show = key === 'all' || c.getAttribute('data-cat') === key;
        c.style.display = show ? '' : 'none';
        if (show) shown++;
      });
      count.textContent = 'Showing ' + shown + ' of ' + cards.length + ' items';
    }

    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-filter');
        apply(key);
        if (history.replaceState) history.replaceState(null, '', key === 'all' ? location.pathname : '#' + key);
      });
    });

    var initial = (location.hash || '').replace('#', '');
    apply(initial || 'all');
  })();
</script>`;

  return layout({ title: 'Browse the campus board', active: 'browse', body });
};
