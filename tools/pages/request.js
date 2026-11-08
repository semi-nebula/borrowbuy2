'use strict';

const { layout, money } = require('../lib/layout');
const { icon } = require('../lib/icons');
const { ME } = require('../lib/data');

module.exports = function request() {
  const body = `
<main id="main">
  <div class="wrap" style="padding-top:26px">
    <div class="crumbs">
      <a href="index.html">Home</a>${icon('chevronRight', 12)}
      <a href="item.html">Canon DSLR</a>${icon('chevronRight', 12)}
      <span>Request</span>
    </div>

    <div class="section-head" style="margin-top:18px;margin-bottom:16px;align-items:flex-end">
      <div>
        <span class="eyebrow">Request · Canon DSLR</span>
        <h1 style="font-size:clamp(26px,3vw,36px);margin-top:7px">Set the dates, then it is fixed.</h1>
      </div>
      <span class="chip green lg">${icon('lock', 13)} Rate locked at ₹250 / day</span>
    </div>

    <div class="stepper">
      <div class="s done"><span class="b">${icon('check', 12)}</span> Item chosen</div>
      <div class="s now"><span class="b">2</span> Dates &amp; terms</div>
      <div class="s"><span class="b">3</span> Owner accepts</div>
      <div class="s"><span class="b">4</span> Handover</div>
    </div>

    <div class="two-col">
      <div>
        <div class="card">
          <div class="card-head">
            <h3>Loan window</h3>
            <span class="chip outline">${icon('clock', 11)} Min. 1 day</span>
          </div>
          <div class="card-body">
            <div class="input-row">
              <div class="field" style="margin-bottom:0">
                <label>Pickup date</label>
                <input class="input" type="date" value="2026-03-12">
              </div>
              <div class="field" style="margin-bottom:0">
                <label>Return date</label>
                <input class="input" type="date" value="2026-03-14">
              </div>
            </div>

            <div class="input-row" style="margin-top:13px">
              <div class="field" style="margin-bottom:0">
                <label>Pickup time</label>
                <input class="input" type="time" value="10:30">
              </div>
              <div class="field" style="margin-bottom:0">
                <label>Return time</label>
                <input class="input" type="time" value="18:00">
              </div>
            </div>

            <div class="note" style="margin-top:16px">
              ${icon('info', 16)}
              <div><b>Nights count, not hours.</b> A loan that starts Wednesday morning and ends Friday evening bills as 2 days. If you return early, the unused days are refunded automatically — you do not need to ask the owner.</div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-top:18px">
          <div class="card-head">
            <h3>Pickup location</h3>
            <span class="chip green">${icon('shield', 11)} On campus</span>
          </div>
          <div class="card-body">
            <div class="row-card" style="background:#FCFAF4">
              <span class="avatar clay">RK</span>
              <div class="who">
                <b>Design studio · Block C</b>
                <span>Exact room is shared only after the owner accepts</span>
              </div>
              <span class="chip outline">${icon('pin', 11)} 6 min walk</span>
            </div>

            <div class="field" style="margin-top:16px">
              <label>Message to the owner <span class="tiny" style="text-transform:none;letter-spacing:0">(optional)</span></label>
              <textarea class="input" rows="3" placeholder="e.g. Using it for the design club shoot on Friday. Can pick up between lectures."></textarea>
            </div>

            <div class="note warn" style="margin-top:4px">
              ${icon('alert', 16)}
              <div><b>The item must stay on campus.</b> If it needs to leave campus for any reason, tell the owner in the app before it does. Taking an item off campus without agreeing it first is a major incident.</div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-top:18px">
          <div class="card-head"><h3>Terms you are accepting</h3></div>
          <div class="card-body">
            <div class="ladder">
              <div class="step-row ok">
                <span class="dot"></span>
                <div class="hdr"><b>Before / after photos</b><span class="chip green">Required</span></div>
                <p>Two timestamped photos — one at handover, one at return. Date and time are stamped automatically. Live in-app capture is available as an option.</p>
              </div>
              <div class="step-row ok">
                <span class="dot"></span>
                <div class="hdr"><b>Price is final</b><span class="chip green">${icon('lock', 10)} Locked</span></div>
                <p>${money(250)} per day and a ${money(2000)} deposit. Neither side can change these once you send the request.</p>
              </div>
              <div class="step-row warn">
                <span class="dot"></span>
                <div class="hdr"><b>Late return</b><span class="amt">grace 1 day</span><span class="amt">then ₹50/day</span></div>
                <p>A single day late carries no fee. Beyond that, ₹50 per day up to ₹300, and a return-score drop of 8 points.</p>
              </div>
              <div class="step-row bad">
                <span class="dot"></span>
                <div class="hdr"><b>Damage or 5+ days late</b><span class="amt">repair + ₹500</span></div>
                <p>The owner can leave a public review and claim repair cost plus a ₹500 handling fee. Two major incidents in a year is suspension for the term.</p>
              </div>
            </div>

            <label class="switch" style="margin-top:18px">
              <input type="checkbox" checked>
              <span class="track"></span>
              I have read the return terms and the photo protocol
            </label>
          </div>
        </div>
      </div>

      <!-- summary -->
      <aside class="booking">
        <div class="booking-head">
          <div class="price-lock">${icon('lock', 12)} Locked at listing</div>
          <div class="big-price"><span class="amt">₹2,520</span><span class="unit">due at pickup</span></div>
        </div>
        <div class="booking-body">
          <div class="row-card" style="padding:10px 0;border:0;background:none">
            <img class="thumb" src="assets/img/item-camera.jpg" alt="">
            <div class="who"><b>Canon DSLR + kit lens</b><span>2 days · 12–14 Mar</span></div>
          </div>

          <div class="calc" style="border-top:1px solid var(--line);margin-top:12px">
            <div class="r"><span>2 days × ₹250</span><span class="mono">₹500</span></div>
            <div class="r"><span>Refundable deposit</span><span class="mono">₹2,000</span></div>
            <div class="r"><span>Platform fee</span><span class="mono">₹20</span></div>
            <div class="r total"><span>Total</span><span class="mono">₹2,520</span></div>
          </div>

          <a class="btn btn-primary btn-block" href="handover.html" style="margin-top:14px">Send request ${icon('arrowRight', 16)}</a>
          <p class="fine">The owner has 6 hours to accept. You are not charged until the item is handed over.</p>

          <div class="note" style="margin-top:16px;background:#FCFAF4">
            ${icon('shield', 16)}
            <div>Requesting as <b>${ME.name}</b><br><span class="mono tiny">${ME.id}</span></div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</main>`;

  return layout({ title: 'Request · Canon DSLR', active: 'request', body });
};
