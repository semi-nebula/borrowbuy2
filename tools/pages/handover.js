'use strict';

const { layout } = require('../lib/layout');
const { icon } = require('../lib/icons');
const { ME } = require('../lib/data');

module.exports = function handover() {
  const body = `
<main id="main">
  <div class="wrap" style="padding-top:26px">
    <div class="crumbs">
      <a href="index.html">Home</a>${icon('chevronRight', 12)}
      <a href="request.html">Request</a>${icon('chevronRight', 12)}
      <span>Handover</span>
    </div>

    <div class="stepper" style="margin-top:22px">
      <div class="s done"><span class="b">${icon('check', 12)}</span> Item chosen</div>
      <div class="s done"><span class="b">${icon('check', 12)}</span> Owner accepted</div>
      <div class="s now"><span class="b">3</span> Handover &amp; photos</div>
      <div class="s"><span class="b">4</span> In your hands</div>
    </div>

    <div class="page-head" style="border-bottom:0;padding-top:0;padding-bottom:20px">
      <div class="section-head" style="margin-bottom:0;align-items:center">
        <div>
          <span class="eyebrow">Request BB-2291 · accepted by Rhea</span>
          <h1 style="font-size:clamp(28px,3.4vw,40px);margin-top:8px">Photograph it before it moves.</h1>
          <p class="lede" style="margin-top:10px;max-width:62ch">This is the one step neither side can skip. Two angles, date and time stamped, taken at the moment of handover. Both students see the same image.</p>
        </div>
        <span class="chip ochre lg">${icon('clock', 13)} Slot · 10:30–11:00</span>
      </div>
    </div>

    <div class="two-col">
      <div>
        <div class="card">
          <div class="card-head">
            <h3>Handover photos · 2 sides</h3>
            <span class="chip green">${icon('camera', 11)} 1 of 2 captured</span>
          </div>
          <div class="card-body">
            <div class="photo-pair">
              <div class="photo-slot">
                <div class="ph"><img src="assets/img/item-camera.jpg" alt="Front of the camera at handover"></div>
                <span class="corner chip green">${icon('check', 10)} Side 1</span>
                <span class="live"><i></i>Live</span>
                <span class="ts">${icon('clock', 10)} 12 Mar 2026 · 10:42:07</span>
              </div>

              <div class="photo-empty" style="cursor:pointer">
                ${icon('camera', 20)}
                <span><b>Side 2 — lens &amp; body</b><br>Tap to capture, or upload from gallery</span>
              </div>
            </div>

            <div class="inline" style="margin-top:14px;gap:8px;flex-wrap:wrap">
              <button class="btn btn-primary btn-sm" onclick="return false">${icon('camera', 14)} Take live photo</button>
              <button class="btn btn-ghost btn-sm" onclick="return false">${icon('upload', 14)} Upload from gallery</button>
              <span class="spacer"></span>
              <span class="tiny">${icon('lock', 11)} Timestamp applied by the app</span>
            </div>

            <div class="note warn" style="margin-top:16px">
              ${icon('alert', 16)}
              <div><b>Why both angles?</b> One photo can hide a scratch on the far edge. Two opposite sides mean a returned item can be compared like for like — and a damage claim is decided on the photo pair, not on memory.</div>
            </div>

            <hr class="rule" style="margin:20px 0">

            <label class="switch">
              <input type="checkbox">
              <span class="track"></span>
              Require live capture only (no gallery upload)
            </label>
            <p class="tiny" style="margin-top:6px;margin-left:43px">Live capture geotags the photo to campus and cannot be back-dated. Recommended for items above ₹1,000.</p>
          </div>
        </div>

        <div class="card" style="margin-top:18px">
          <div class="card-head">
            <h3>Condition checklist</h3>
            <span class="chip outline">Both sides tick</span>
          </div>
          <div class="card-body">
            <div class="spec-grid" style="border-top:0;margin-top:0">
              <div class="spec" style="border-bottom:1px solid var(--line)"><span class="k">Lens glass</span><span class="v" style="color:var(--forest-2)">${icon('checkCircle', 15)} Clean</span></div>
              <div class="spec" style="border-bottom:1px solid var(--line)"><span class="k">Body scuffs</span><span class="v">1, left lug</span></div>
              <div class="spec" style="border-bottom:1px solid var(--line)"><span class="k">Battery</span><span class="v" style="color:var(--forest-2)">${icon('checkCircle', 15)} Charged</span></div>
              <div class="spec" style="border-bottom:1px solid var(--line)"><span class="k">Memory card</span><span class="v">32GB · empty</span></div>
              <div class="spec" style="border-bottom:1px solid var(--line)"><span class="k">Strap</span><span class="v" style="color:var(--forest-2)">${icon('checkCircle', 15)} Present</span></div>
              <div class="spec" style="border-bottom:1px solid var(--line)"><span class="k">Case / bag</span><span class="v" style="color:var(--forest-2)">${icon('checkCircle', 15)} Present</span></div>
            </div>
            <p class="tiny" style="margin-top:12px">Anything not ticked here is recorded as "missing at handover" and cannot be claimed as damage at return.</p>
          </div>
        </div>
      </div>

      <aside class="booking">
        <div class="booking-head">
          <div class="price-lock">${icon('shield', 12)} Both students present</div>
          <h3 style="margin-top:8px;font-size:18px">Confirm handover</h3>
        </div>
        <div class="booking-body">
          <div class="row-card" style="padding:10px 0;border:0;background:none">
            <img class="thumb" src="assets/img/item-camera.jpg" alt="">
            <div class="who"><b>Canon DSLR + kit lens</b><span>Return by 14 Mar, 18:00</span></div>
          </div>

          <div style="border-top:1px solid var(--line);margin-top:12px;padding-top:14px" class="stack">
            <div class="kv"><span class="k">Lender</span><span class="v">Rhea Kapoor</span></div>
            <div class="kv"><span class="k">Borrower</span><span class="v">${ME.name}</span></div>
            <div class="kv"><span class="k">Both IDs verified</span><span class="v">${icon('checkCircle', 14)}</span></div>
            <div class="kv"><span class="k">Photos attached</span><span class="v">1 of 2</span></div>
          </div>

          <button class="btn btn-primary btn-block is-disabled" style="margin-top:16px" aria-disabled="true">${icon('lock', 15)} Waiting on side 2</button>
          <p class="fine">The loan does not start until both photos are captured and both students tap confirm.</p>

          <div class="note" style="margin-top:16px;background:#FCFAF4">
            ${icon('info', 16)}
            <div>Need to cancel? Before handover there is no charge. After the item changes hands, cancelling means an immediate return — the same photo rule applies.</div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</main>`;

  return layout({ title: 'Handover & condition photos', active: 'handover', body });
};
