'use strict';

const { layout } = require('../lib/layout');
const { icon } = require('../lib/icons');

module.exports = function returns() {
  const body = `
<main id="main">
  <div class="wrap" style="padding-top:26px">
    <div class="crumbs">
      <a href="index.html">Home</a>${icon('chevronRight', 12)}
      <span>Returns &amp; claims</span>
    </div>

    <div class="section-head" style="margin-top:20px;align-items:flex-end">
      <div>
        <span class="eyebrow">Active loan · BB-2291 · you are the borrower</span>
        <h1 style="font-size:clamp(28px,3.4vw,42px);margin-top:8px">Due back in 1 day, 6 hours.</h1>
        <p class="lede" style="margin-top:10px;max-width:58ch">You have Rhea's camera until tomorrow evening. The handover photo pair is on file; your return photo is matched against it before the deposit goes back.</p>
      </div>
      <div class="countdown">
        <div class="u"><b>1</b><span>days</span></div>
        <div class="u"><b>06</b><span>hrs</span></div>
        <div class="u"><b>42</b><span>min</span></div>
      </div>
    </div>

    <div class="two-col" style="padding-top:26px">
      <div>
        <div class="card">
          <div class="card-head">
            <h3>Before / after comparison</h3>
            <span class="chip ochre">${icon('clock', 11)} After photo pending</span>
          </div>
          <div class="card-body">
            <div class="photo-pair">
              <div class="photo-slot">
                <div class="ph"><img src="assets/img/item-camera.jpg" alt="Before handover"></div>
                <span class="corner chip green">Before</span>
                <span class="ts">${icon('clock', 10)} 12 Mar · 10:42</span>
              </div>
              <div class="photo-empty">
                ${icon('camera', 20)}
                <span><b>After</b><br>Capture at return</span>
              </div>
            </div>

            <div class="inline" style="margin-top:14px;gap:8px">
              <button class="btn btn-primary btn-sm" onclick="return false">${icon('camera', 14)} Start return</button>
              <button class="btn btn-ghost btn-sm" onclick="return false">${icon('calendar', 14)} Extend by 1 day</button>
            </div>

            <div class="note" style="margin-top:16px">
              ${icon('shield', 16)}
              <div><b>Clean return · deposit back in 24h.</b> On-time, undamaged returns release the deposit automatically. The owner can raise a claim for 24 hours after the return photo is filed — after that the loan closes clean.</div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-top:18px">
          <div class="card-head">
            <h3>What happens if it is late</h3>
            <span class="chip outline">Applied automatically</span>
          </div>
          <div class="card-body">
            <div class="ladder">
              <div class="step-row ok">
                <span class="dot"></span>
                <div class="hdr"><b>Within 24 hours</b><span class="amt">no fee</span><span class="chip green">Grace</span></div>
                <p>The return slot lapses and the owner is notified. A "returned late" marker is logged on your profile but nothing is charged and your score does not move.</p>
              </div>
              <div class="step-row warn">
                <span class="dot"></span>
                <div class="hdr"><b>2 – 4 days late</b><span class="amt">₹50 / day</span><span class="chip ochre">−8 score</span></div>
                <p>Capped at ₹300, taken from the deposit. The delay is published on your profile as a number — the average delay, not a comment from the owner.</p>
              </div>
              <div class="step-row warn">
                <span class="dot"></span>
                <div class="hdr"><b>5+ days, or unreachable</b><span class="amt">₹150 / day</span><span class="chip clay">−20 score</span></div>
                <p>The owner can leave a public bad review and file a recovery request. The item is flagged "in dispute" and the deposit is held until it is returned.</p>
              </div>
              <div class="step-row bad">
                <span class="dot"></span>
                <div class="hdr"><b>Two major incidents</b><span class="chip clay">Account suspended</span></div>
                <p>Major means damage over ₹2,000, or any delay of 5+ days. Suspension runs to the end of the term and blocks all new requests and listings.</p>
              </div>
            </div>

            <div class="note warn" style="margin-top:16px">
              ${icon('phone', 16)}
              <div><b>"No phone call answer" is evidence, not an excuse.</b> If the owner has called twice over two days and the borrower has not replied in-app, that is logged automatically and counted toward the 5-day escalation.</div>
            </div>
          </div>
        </div>
      </div>

      <aside>
        <div class="card">
          <div class="card-head"><h3>Loan details</h3></div>
          <div class="card-body">
            <div class="row-card" style="padding:10px 0;border:0;background:none">
              <img class="thumb" src="assets/img/item-camera.jpg" alt="">
              <div class="who"><b>Canon DSLR + kit lens</b><span>${icon('user', 11)} Rhea Kapoor</span></div>
              <span class="right"><span class="amt">₹500</span></span>
            </div>
            <div class="stack" style="margin-top:14px">
              <div class="kv"><span class="k">Picked up</span><span class="v">12 Mar, 10:42</span></div>
              <div class="kv"><span class="k">Due back</span><span class="v">14 Mar, 18:00</span></div>
              <div class="kv"><span class="k">Deposit held</span><span class="v">₹2,000</span></div>
              <div class="kv"><span class="k">Late fee so far</span><span class="v" style="color:var(--forest-2)">₹0</span></div>
              <div class="kv"><span class="k">Borrower</span><span class="v">Rhea Kapoor</span></div>
            </div>
            <div class="meter">
              <i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i>
            </div>
            <p class="tiny" style="margin-top:8px">Day 2 of 2. Grace period starts after the slot above.</p>
          </div>
        </div>

        <div class="card" style="margin-top:18px">
          <div class="card-head"><h3>Owner · trust snapshot</h3></div>
          <div class="card-body">
            <div class="inline" style="gap:11px">
              <span class="avatar clay">RK</span>
              <div class="who" style="flex:1">
                <b style="font-size:13.5px">Rhea Kapoor</b>
                <div class="tiny">Design · 3rd year</div>
              </div>
              <div class="ring" style="--pct:96;--size:56px;--thick:5px">
                <span class="in"><b style="font-size:15px">96</b></span>
              </div>
            </div>
            <div class="stack" style="margin-top:14px">
              <div class="kv"><span class="k">Returns on time</span><span class="v">19 / 20</span></div>
              <div class="kv"><span class="k">Avg. delay</span><span class="v">0.3 days</span></div>
              <div class="kv"><span class="k">Disputes raised</span><span class="v">None</span></div>
            </div>
            <a class="btn btn-ghost btn-block btn-sm" href="profile.html" style="margin-top:14px">Open full profile</a>
          </div>
        </div>

        <div class="note danger" style="margin-top:18px">
          ${icon('alert', 16)}
          <div><b>Something wrong with the item?</b> Report damage you found <em>before</em> using it, within 2 hours of handover. After that it is treated as damage that happened on your watch.</div>
        </div>
      </aside>
    </div>
  </div>
</main>`;

  return layout({ title: 'Returns & claims', active: 'returns', body });
};
