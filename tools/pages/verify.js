'use strict';

const { layout } = require('../lib/layout');
const { icon } = require('../lib/icons');

module.exports = function verify() {
  const body = `
<main id="main">
  <div class="wrap">
    <div class="crumbs" style="padding-top:24px">
      <a href="index.html">Home</a>${icon('chevronRight', 12)}<span>Verify</span>
    </div>

    <div class="verify-shell">
      <div>
        <span class="eyebrow">Before you can list or borrow</span>
        <h1 style="margin-top:12px">One student ID.<br>One account. Ever.</h1>
        <p class="lede" style="margin-top:16px">This is the whole safety model. If a student can quietly make a second profile, an owner can be cheated and the bad review lands on an account that disappears. So verification is the gate — not an optional badge.</p>

        <div class="step-card" style="margin-top:28px">
          <div class="step-card-head">
            <span class="n">1</span>
            <div>
              <b style="font-size:13.5px">College email</b>
              <div class="tiny">Must end in @sitpune.edu.in — the domain is hard-coded per campus.</div>
            </div>
          </div>
          <div class="step-card-body">
            <div class="field">
              <label>College email address</label>
              <input class="input" type="email" value="aarav.menon@sitpune.edu.in">
            </div>
            <div class="inline" style="margin-top:6px">
              <button class="btn btn-primary btn-sm" onclick="return false">Send code ${icon('arrowRight', 14)}</button>
              <span class="tiny">${icon('checkCircle', 11)} Domain recognised</span>
            </div>

            <hr class="rule" style="margin:20px 0">

            <div class="field" style="margin-bottom:8px">
              <label>Enter the 6-digit code</label>
              <div class="otp">
                <input maxlength="1" value="4"><input maxlength="1" value="8"><input maxlength="1" value="2">
                <input maxlength="1" value="0"><input maxlength="1" value="9"><input maxlength="1" value="">
              </div>
            </div>
            <div class="inline" style="margin-top:10px">
              <button class="btn btn-ghost btn-sm" onclick="return false">Verify code</button>
              <span class="tiny">Code expires in 9:41 · resend in 0:24</span>
            </div>
          </div>
        </div>

        <div class="step-card" style="margin-top:16px">
          <div class="step-card-head">
            <span class="n">2</span>
            <div>
              <b style="font-size:13.5px">Student ID card</b>
              <div class="tiny">Front of the card, photo and roll number legible. Nothing else is accepted.</div>
            </div>
          </div>
          <div class="step-card-body">
            <div class="upload done">
              ${icon('checkCircle', 20)}
              <div style="flex:1">
                <b>student-id-front.jpg</b>
                <span class="tiny">Uploaded · 1.2 MB · under review</span>
              </div>
              <span class="chip ochre">${icon('clock', 11)} Pending</span>
            </div>
            <div class="upload" style="margin-top:10px">
              ${icon('upload', 22)}
              <b>Upload the front of your ID</b>
              <span>JPG or PNG · max 5 MB</span>
            </div>

            <div class="note warn" style="margin-top:14px">
              ${icon('alert', 16)}
              <div><b>One ID, one account — enforced at the database.</b> The roll number on the card is hashed and stored. A second signup that matches a hash already on file is refused before a profile is ever created. There is no "family account" or shared login.</div>
            </div>
          </div>
        </div>

        <div class="step-card" style="margin-top:16px">
          <div class="step-card-head">
            <span class="n">3</span>
            <div>
              <b style="font-size:13.5px">A short selfie check</b>
              <div class="tiny">Matches your face against the ID photo. Done once, never shown to other students.</div>
            </div>
          </div>
          <div class="step-card-body">
            <div class="upload">
              ${icon('camera', 22)}
              <b>Take a live photo</b>
              <span>Handled on-device · the image is not stored after the match</span>
            </div>
            <label class="switch" style="margin-top:14px">
              <input type="checkbox" checked>
              <span class="track"></span>
              I confirm this ID belongs to me and I have no other BorrowBuy account
            </label>
          </div>
        </div>
      </div>

      <aside class="booking" style="top:86px">
        <div class="booking-head">
          <div class="price-lock">${icon('shield', 12)} Verification status</div>
          <h3 style="margin-top:8px;font-size:18px">Almost there</h3>
          <p class="tiny" style="margin-top:5px">2 of 3 checks complete. Usually reviewed within 4 hours on weekdays.</p>
        </div>
        <div class="booking-body">
          <div class="stack">
            <div class="kv"><span class="k">College email</span><span class="v" style="color:var(--forest-2)">${icon('checkCircle', 14)} Verified</span></div>
            <div class="kv"><span class="k">Student ID card</span><span class="v" style="color:var(--ochre)">${icon('clock', 14)} In review</span></div>
            <div class="kv"><span class="k">Selfie match</span><span class="v" style="color:var(--ink-3)">${icon('calendar', 14)} Not started</span></div>
          </div>

          <div class="meter" style="margin-top:14px">
            <i class="on"></i><i class="warn"></i><i></i><i></i>
          </div>

          <hr class="rule" style="margin:18px 0">

          <div class="note" style="background:#FCFAF4">
            ${icon('idCard', 16)}
            <div><b>What you get when verified</b>
              <ul style="margin:8px 0 0;padding-left:16px;font-size:12px;line-height:1.7">
                <li>List items and set your own price</li>
                <li>Request anything on the campus board</li>
                <li>A public trust profile other students can read</li>
              </ul>
            </div>
          </div>

          <p class="fine" style="text-align:left;margin-top:14px">Your ID image and selfie are visible only to the campus verification team. Other students see your name, department, and score — never your ID number in full.</p>
        </div>
      </aside>
    </div>
  </div>
</main>`;

  return layout({ title: 'Verify your student ID', active: 'verify', body });
};
