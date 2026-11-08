'use strict';

const { layout, money } = require('../lib/layout');
const { icon, stars } = require('../lib/icons');
const { ITEMS } = require('../lib/data');

module.exports = function item() {
  const it = ITEMS[0];
  const days = 2;
  const subtotal = it.rate * days;
  const fee = 20;

  // Compact payload so ?id=<slug> can swap the page without a server
  const payload = JSON.stringify(
    ITEMS.map((i) => ({
      slug: i.slug,
      id: i.id,
      title: i.title,
      img: i.img,
      rate: i.rate,
      deposit: i.deposit,
      owner: i.owner,
      ownerInitials: i.ownerInitials,
      ownerDept: i.ownerDept,
      ownerScore: i.ownerScore,
      condition: i.condition,
      catLabel: i.catLabel,
      pickup: i.pickup,
      note: i.note,
    }))
  );

  const body = `
<main id="main">
  <div class="wrap">
    <div class="crumbs" style="padding-top:22px">
      <a href="index.html">Home</a>${icon('chevronRight', 12)}
      <a href="browse.html">Browse</a>${icon('chevronRight', 12)}
      <span data-fill="catLabel">${it.catLabel}</span>${icon('chevronRight', 12)}
      <span data-fill="title">${it.title}</span>
    </div>

    <div class="detail">
      <!-- LEFT -->
      <div>
        <div class="gallery-main">
          <img src="assets/img/${it.img}" alt="${it.title}" id="mainImg" data-fill-img>
        </div>
        <div class="gallery-thumbs">
          <button class="t is-on" data-img="assets/img/${it.img}" aria-label="Main photo"><img src="assets/img/${it.img}" alt="" data-fill-img></button>
          <button class="t" data-img="assets/img/${it.img}" aria-label="Second angle"><img src="assets/img/${it.img}" alt=""></button>
          <button class="t" data-img="assets/img/item-tripod.jpg" aria-label="Accessories"><img src="assets/img/item-tripod.jpg" alt=""></button>
          <button class="t" aria-label="Condition photos are added at handover"><span class="ph">Condition<br>photos at<br>handover</span></button>
        </div>

        <div class="title-block">
          <div class="inline" style="gap:8px">
            <span class="chip outline mono" data-fill="id">${it.id}</span>
            <span class="chip green" data-fill-chip>${icon('checkCircle', 11)} <span data-fill="condition">${it.condition}</span></span>
            <span class="chip sky">${icon('pin', 11)} <span data-fill="pickup">${it.pickup}</span></span>
          </div>
          <h1 style="margin-top:12px" data-fill="title">${it.title}</h1>
          <p class="muted" style="margin-top:12px;font-size:15px;max-width:60ch" data-fill="note">${it.note}</p>
        </div>

        <div class="owner-strip">
          <span class="avatar" data-fill="ownerInitials">${it.ownerInitials}</span>
          <div class="who">
            <b data-fill="owner">${it.owner}</b>
            <span><span data-fill="ownerDept">${it.ownerDept}</span> · <span data-fill="id">${it.id}</span></span>
          </div>
          <div class="scores">
            <div><span>Return</span><b class="good" data-fill="ownerScore">${it.ownerScore}</b></div>
            <div><span>Care</span><b class="good">96</b></div>
            <div><span>Loans</span><b>27</b></div>
          </div>
        </div>

        <div class="block">
          <h3>${icon('camera', 17)} Condition protocol for this item</h3>
          <div class="note">
            ${icon('shield', 16)}
            <div><b>Two timestamped photos, one at each end.</b> Two opposite sides of the item are photographed when it changes hands, and again at return. The app stamps the date and time to the minute. Live capture is optional — you can upload from the gallery, but the timestamp still applies.</div>
          </div>

          <div class="photo-pair" style="margin-top:14px">
            <div class="photo-slot">
              <div class="ph"><img src="assets/img/${it.img}" alt="Item at handover" data-fill-img></div>
              <span class="corner chip green">${icon('checkCircle', 10)} Before</span>
              <span class="ts">${icon('clock', 10)} 12 Mar 2026 · 10:42</span>
            </div>
            <div class="photo-empty">
              ${icon('camera', 20)}
              <span><b>After photo</b><br>Captured at return and compared side by side.</span>
            </div>
          </div>
        </div>

        <div class="block">
          <h3>${icon('file', 17)} What's in the box</h3>
          <div class="spec-grid">
            <div class="spec"><span class="k">Listed as</span><span class="v" data-fill="condition">${it.condition}</span></div>
            <div class="spec"><span class="k">Category</span><span class="v" data-fill="catLabel">${it.catLabel}</span></div>
            <div class="spec"><span class="k">Pickup point</span><span class="v" data-fill="pickup">${it.pickup}</span></div>
            <div class="spec"><span class="k">Loan window</span><span class="v">1 day minimum</span></div>
            <div class="spec"><span class="k">Deposit</span><span class="v" data-fill="deposit">${money(it.deposit)}</span></div>
            <div class="spec"><span class="k">Photo pairs</span><span class="v">2, mandatory</span></div>
          </div>
        </div>

        <div class="block">
          <h3>${icon('star', 17)} What borrowers said about this owner</h3>
          <div class="inline" style="margin-bottom:6px">
            ${stars(5)}
            <b style="font-family:var(--font-display);font-size:19px">4.9</b>
            <span class="tiny">from 41 completed loans</span>
          </div>

          <div class="review">
            <div class="review-top">
              <span class="avatar sm">RK</span>
              <span class="who">Rhea Kapoor</span>
              <span class="chip green">Returned on time</span>
              <span class="when">2 Feb 2026</span>
            </div>
            <p>Lent it for a club shoot. Everything was exactly as described and the handover took two minutes. Would borrow again.</p>
            <div class="review-tags"><span class="chip">Item as described</span><span class="chip">Easy pickup</span></div>
          </div>

          <div class="review">
            <div class="review-top">
              <span class="avatar sm sky">NV</span>
              <span class="who">Nikhil Verma</span>
              <span class="chip ochre">Returned 1 day late</span>
              <span class="when">18 Jan 2026</span>
            </div>
            <p>Got held up in the lab and returned a day late. The owner was easy about it; the app logged it as late but charged nothing. Fair system.</p>
            <div class="review-tags"><span class="chip">Grace window used</span></div>
          </div>
        </div>
      </div>

      <!-- RIGHT: booking -->
      <aside class="booking">
        <div class="booking-head">
          <div class="price-lock">${icon('lock', 12)} Price set by owner · locked</div>
          <div class="big-price">
            <span class="amt" data-fill="rate">${money(it.rate)}</span>
            <span class="unit">per day</span>
          </div>
          <p class="tiny" style="margin-top:6px"><span data-fill="deposit">${money(it.deposit)}</span> refundable deposit · released 24h after a clean return</p>
        </div>

        <div class="booking-body">
          <div class="field">
            <label>Pickup</label>
            <input class="input" type="text" value="Wed, 12 Mar · 10:30" readonly>
          </div>
          <div class="field">
            <label>Return by</label>
            <input class="input" type="text" value="Fri, 14 Mar · 18:00" readonly>
          </div>

          <div class="calc">
            <div class="r"><span>2 days × <span data-fill="rate">${money(it.rate)}</span></span><span class="mono" data-calc="subtotal">₹${subtotal.toLocaleString('en-IN')}</span></div>
            <div class="r"><span>Refundable deposit</span><span class="mono" data-calc="deposit">₹${it.deposit.toLocaleString('en-IN')}</span></div>
            <div class="r"><span>Platform fee</span><span class="mono">₹${fee}</span></div>
            <div class="r total"><span>Due at pickup</span><span class="mono" data-calc="total">₹${(subtotal + it.deposit + fee).toLocaleString('en-IN')}</span></div>
          </div>

          <div class="lock-note">
            ${icon('lock', 14)}
            <span>These amounts are read from the listing. Neither you nor the owner can change them after this request.</span>
          </div>

          <a class="btn btn-primary btn-block" href="request.html" style="margin-top:14px">Request this item ${icon('arrowRight', 16)}</a>
          <p class="fine">You will photograph both sides of the item at handover, before it leaves the owner's hands.</p>

          <div style="border-top:1px solid var(--line);margin-top:16px;padding-top:14px" class="stack">
            <div class="kv"><span class="k">Owner accepts in</span><span class="v">~2 hrs</span></div>
            <div class="kv"><span class="k">Late grace</span><span class="v">1 day, no fee</span></div>
            <div class="kv"><span class="k">Cancellation</span><span class="v">Free before handover</span></div>
          </div>
        </div>
      </aside>
    </div>

    <div class="note warn" style="margin-bottom:56px">
      ${icon('alert', 16)}
      <div><b>If it comes back damaged.</b> The owner opens a claim using the before and after photos. Repair is charged at quote plus a ₹500 handling fee, and your care score drops. Two major incidents in a year suspend the account for the term — see the <a href="rules.html" style="text-decoration:underline">penalty ladder</a>.</div>
    </div>
  </div>
</main>

<script type="application/json" id="itemData">${payload.replace(/</g, '\\u003c')}</script>
<script>
  (function () {
    var data = JSON.parse(document.getElementById('itemData').textContent);
    var slug = new URLSearchParams(location.search).get('id');
    var it = data.filter(function (x) { return x.slug === slug; })[0];
    if (!it) return;

    var money = function (n) { return '₹' + n.toLocaleString('en-IN'); };

    document.querySelectorAll('[data-fill]').forEach(function (el) {
      var k = el.getAttribute('data-fill');
      if (k === 'rate' || k === 'deposit') el.textContent = money(it[k]);
      else if (it[k] !== undefined) el.textContent = it[k];
    });

    document.querySelectorAll('[data-fill-img]').forEach(function (el) {
      el.src = 'assets/img/' + it.img;
      if (el.alt) el.alt = it.title;
    });

    document.querySelectorAll('.gallery-thumbs .t[data-img]').forEach(function (b) {
      b.setAttribute('data-img', 'assets/img/' + it.img);
    });

    var chip = document.querySelector('[data-fill-chip]');
    if (chip) {
      chip.className = 'chip ' + (/like new|excellent/i.test(it.condition) ? 'green' : 'ochre');
      chip.innerHTML = chip.innerHTML.replace(it.condition, '');
      chip.querySelector('[data-fill="condition"]').textContent = it.condition;
    }

    var fee = 20;
    var sub = it.rate * 2;
    var set = function (k, v) { var e = document.querySelector('[data-calc="' + k + '"]'); if (e) e.textContent = money(v); };
    set('subtotal', sub);
    set('deposit', it.deposit);
    set('total', sub + it.deposit + fee);

    document.title = it.title + ' · BorrowBuy';
  })();
</script>`;

  return layout({ title: it.title, active: 'item', body });
};
