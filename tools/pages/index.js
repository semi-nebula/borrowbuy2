'use strict';

const { layout, money } = require('../lib/layout');
const { icon, stars } = require('../lib/icons');
const { ITEMS, CAMPUS, ME, TERM } = require('../lib/data');

const itemCard = (it) => `
    <a class="item" href="item.html?id=${it.slug}">
      <div class="item-media">
        <img src="assets/img/${it.img}" alt="${it.title}" loading="lazy">
        <span class="chip outline tag">${it.catLabel}</span>
        <span class="chip green avail">${icon('checkCircle', 12)} Available</span>
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

module.exports = function home() { // emitted as index.html via build.js mapping
  const featured = ITEMS.slice(0, 4).map(itemCard).join('');

  const body = `
<main id="main">

  <section class="hero">
    <div class="wrap">
      <div>
        <span class="eyebrow">${CAMPUS} · ${TERM}</span>
        <h1>Borrow from your <em>own campus.</em><br>Not from strangers.</h1>
        <p class="lede">Every lender on this board is a verified student sitting two hostels away. One student ID gives you one account — so the person holding your camera has a name, a room, and a return score you can read before you say yes.</p>

        <form class="searchbar" onsubmit="return false" aria-label="Search items on campus">
          ${icon('search', 17)}
          <input type="search" placeholder="Projector for Friday, calculator for exams…" aria-label="Search items">
          <button class="btn btn-primary" type="submit">Find</button>
        </form>

        <div class="hero-actions">
          <a class="btn btn-primary" href="browse.html">Browse the board ${icon('arrowRight', 16)}</a>
          <a class="btn btn-ghost" href="verify.html">${icon('idCard', 16)} Verify your student ID</a>
        </div>
      </div>

      <aside class="trustcard" aria-label="Example trust profile">
        <span class="stamp">Verified<br>student<br>only</span>
        <div class="trustcard-top">
          <span class="avatar lg">AM</span>
          <div class="who">
            <b>${ME.name}</b>
            <span>${ME.dept}</span>
            <div class="tag-row" style="margin-top:7px">
              <span class="chip green">${icon('checkCircle', 11)} ID verified</span>
              <span class="chip outline">${ME.id}</span>
            </div>
          </div>
        </div>

        <div class="score-row">
          <div class="score-box">
            <div class="k">Return score</div>
            <div class="v">${ME.returnScore}<small>/100</small></div>
            <div class="bar"><i style="width:${ME.returnScore}%"></i></div>
          </div>
          <div class="score-box">
            <div class="k">Item care</div>
            <div class="v">${ME.issueScore}<small>/100</small></div>
            <div class="bar"><i style="width:${ME.issueScore}%"></i></div>
          </div>
        </div>

        <div class="trustcard-list">
          <div class="row">${icon('checkCircle', 13)} On-time returns <span class="r">27 / 28</span></div>
          <div class="row">${icon('camera', 13)} Condition photos logged <span class="r">54</span></div>
          <div class="row">${icon('clock', 13)} Avg. delay <span class="r">0.2 days</span></div>
          <div class="row">${icon('star', 13)} Owner reviews <span class="r">4.9 · 41</span></div>
        </div>
      </aside>
    </div>
  </section>

  <section class="principles" aria-label="How the network stays safe">
    <div class="principle">
      <span class="ico">${icon('idCard', 15)}</span>
      <div><b>One ID, one account</b><span>College email + student ID is matched once. Duplicate profiles are blocked at signup.</span></div>
    </div>
    <div class="principle">
      <span class="ico">${icon('lock', 15)}</span>
      <div><b>The price is fixed</b><span>Rate and deposit are frozen when the listing goes live. Neither side can renegotiate after the request.</span></div>
    </div>
    <div class="principle">
      <span class="ico">${icon('camera', 15)}</span>
      <div><b>Photographed twice</b><span>A timestamped photo pair is mandatory at handover and again at return — live capture optional.</span></div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="eyebrow">Live on the board</span>
          <h2>Four things you could borrow tomorrow</h2>
        </div>
        <div class="side">
          <a class="btn btn-ghost btn-sm" href="browse.html">See all 8 items ${icon('arrowRight', 14)}</a>
        </div>
      </div>
      <div class="grid-items">
        ${featured}
        <a class="item-add wide" href="browse.html">
          <span class="plus">${icon('box', 17)}</span>
          <span class="txt">
            <b>45 more items on this campus</b>
            <span class="sub">Filter by hostel, category, or price per day — every one of them price-locked at listing.</span>
          </span>
          <span class="go">Open the board ${icon('arrowRight', 14)}</span>
        </a>
      </div>
    </div>
  </section>

  <section class="section" style="background:#F1EDE3;border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="eyebrow">The borrow loop</span>
          <h2>Four steps, both sides photographed</h2>
        </div>
        <span class="chip outline lg">${icon('clock', 13)} Avg. handover 4 min</span>
      </div>
      <div class="steps">
        <div class="step">
          <span class="n">01 / REQUEST</span>
          <h4>Pick the dates</h4>
          <p>Choose a pickup slot. The daily rate and deposit are read straight from the listing — there is no field either side can edit.</p>
        </div>
        <div class="step">
          <span class="n">02 / HANDOVER</span>
          <h4>Photograph before</h4>
          <p>Both students meet at the pickup point. A photo of the item, timestamped to the minute, is required before it changes hands.</p>
        </div>
        <div class="step">
          <span class="n">03 / USE</span>
          <h4>Keep it inside campus</h4>
          <p>The item stays on campus for the loan window. If it must leave, the lender is told in-app before it does.</p>
        </div>
        <div class="step">
          <span class="n">04 / RETURN</span>
          <h4>Photograph after</h4>
          <p>Second timestamped photo. If the two don't match, a damage claim opens with both images side by side.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap split-hero">
      <div>
        <span class="eyebrow">Why this is different</span>
        <h2 style="margin-top:10px">A marketplace has ratings.<br>This has a <em class="serif" style="color:var(--forest-2)">record.</em></h2>
        <p class="lede" style="margin-top:16px">Anyone can collect five-star reviews. On BorrowBuy, every loan leaves three things behind: a return score, an item-care score, and a timestamped photo pair. You read all three before you lend.</p>

        <div class="stack" style="margin-top:26px">
          <div class="note">
            ${icon('scale', 16)}
            <div><b>Bad behaviour is priced, not just reviewed.</b> One day late is a grace window. Five days late, or a returned item with a new dent, triggers a fee, a review, and a score drop — in that order.</div>
          </div>
          <div class="note danger">
            ${icon('ban', 16)}
            <div><b>Two major incidents suspend the account.</b> Suspension is for the rest of the term and blocks new requests, because a bad lender is a risk to every owner on the board.</div>
          </div>
        </div>
        <a class="btn btn-ghost" href="rules.html" style="margin-top:22px">Read the full penalty ladder ${icon('arrowRight', 16)}</a>
      </div>

      <div class="card card-pad" style="background:var(--paper-2)">
        <div class="inline" style="justify-content:space-between">
          <div>
            <span class="eyebrow">Return history · 90 days</span>
            <h3 style="margin-top:6px">Aarav Menon</h3>
          </div>
          <span class="chip green">${icon('shield', 12)} 98 / 100</span>
        </div>
        <div class="chart" style="margin-top:18px">
          <div class="col"><div class="b" style="height:34%"><em>1</em></div><span class="l">W1</span></div>
          <div class="col"><div class="b" style="height:52%"><em>2</em></div><span class="l">W2</span></div>
          <div class="col"><div class="b" style="height:30%"><em>1</em></div><span class="l">W3</span></div>
          <div class="col"><div class="b" style="height:68%"><em>3</em></div><span class="l">W4</span></div>
          <div class="col"><div class="b" style="height:44%"><em>2</em></div><span class="l">W5</span></div>
          <div class="col"><div class="b hi" style="height:86%"><em>4</em></div><span class="l">W6</span></div>
          <div class="col"><div class="b" style="height:58%"><em>2</em></div><span class="l">W7</span></div>
          <div class="col"><div class="b" style="height:38%"><em>2</em></div><span class="l">W8</span></div>
        </div>
        <div class="kv" style="margin-top:16px"><span class="k">Returns on time</span><span class="v">27 of 28</span></div>
        <div class="kv"><span class="k">Items returned as issued</span><span class="v">26 of 27</span></div>
        <div class="kv"><span class="k">Average delay</span><span class="v">0.2 days</span></div>
        <div class="kv"><span class="k">Open disputes</span><span class="v">None</span></div>
        <p class="tiny" style="margin-top:14px">Bars show loans per week. Highlighted week is the exam period, when demand triples.</p>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="wrap">
      <div class="card card-pad cta-band" style="background:linear-gradient(105deg,#1E4635,#2C6650);border-color:#1E4635;color:#EFE9DC">
        <div>
          <span class="eyebrow" style="color:#A9C4B4">Open signup · ${CAMPUS}</span>
          <h2 style="color:#FDFAF2;margin-top:10px">You already own what someone else needs this week.</h2>
          <p style="margin-top:12px;color:#CFE0D5;font-size:15px;max-width:56ch">List a calculator during exams. List a projector the week of club screenings. Set the price once; it never moves after that.</p>
        </div>
        <div class="stack">
          <a class="btn btn-ochre btn-block" href="verify.html">${icon('idCard', 16)} Start with your student ID</a>
          <a class="btn btn-block" href="browse.html" style="background:rgba(255,255,255,.1);color:#F3EEE2;border:1px solid rgba(255,255,255,.24)">Browse the board first</a>
          <p class="tiny" style="color:#A9C4B4;text-align:center">Verification takes about 2 minutes.</p>
        </div>
      </div>
    </div>
  </section>

</main>`;

  return layout({
    title: 'Borrow what you need, from your own campus',
    active: 'home',
    body,
  });
};
