'use strict';

const { layout } = require('../lib/layout');
const { icon } = require('../lib/icons');
const { LADDER } = require('../lib/data');

module.exports = function rules() {
  const ladder = LADDER.map(
    (s) => `
        <div class="step-row ${s.tone}">
          <span class="dot"></span>
          <div class="hdr"><b>${s.when}</b><span class="amt">${s.amount}</span></div>
          <p>${s.text}</p>
        </div>`
  ).join('');

  const body = `
<main id="main">
  <div class="wrap">
    <div class="crumbs" style="padding-top:24px">
      <a href="index.html">Home</a>${icon('chevronRight', 12)}<span>Rules</span>
    </div>

    <div class="page-head" style="border-bottom:0;padding-bottom:8px">
      <span class="eyebrow">The five rules this prototype is built on</span>
      <h1 style="margin-top:12px;max-width:20ch">The rules are short on purpose.</h1>
      <p class="lede" style="margin-top:14px;max-width:66ch">Borrowing breaks down over three things: a stranger who cannot be found again, a price that changes after the deal, and damage nobody can prove. Each rule below closes one of those gaps.</p>
    </div>

    <div class="rules-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:28px 0 10px">

        <div class="card card-pad" id="id">
          <div class="inline" style="gap:10px;align-items:flex-start">
            <span class="ico-badge">${icon('idCard', 15)}</span>
            <div>
              <span class="eyebrow">Rule 01</span>
              <h3 style="margin-top:5px">One student ID, one account</h3>
              <p class="muted" style="margin-top:8px;font-size:13px">Only verified students of this campus can list or borrow. A second account on the same ID is refused at database level, so a bad review cannot be escaped by starting again.</p>
            </div>
          </div>
          <div class="note" style="margin-top:14px;background:#FCFAF4">
            ${icon('ban', 16)}<div>No phone-number-only signups. No "borrow on behalf of a friend". No cross-campus visibility.</div>
          </div>
        </div>

        <div class="card card-pad" id="price">
          <div class="inline" style="gap:10px;align-items:flex-start">
            <span class="ico-badge">${icon('lock', 15)}</span>
            <div>
              <span class="eyebrow">Rule 02</span>
              <h3 style="margin-top:5px">The price cannot move</h3>
              <p class="muted" style="margin-top:8px;font-size:13px">The owner sets a daily rate and a deposit once, at listing. Both are frozen. When a borrower requests, they see a total computed from those numbers — and there is no input on either side to change it.</p>
            </div>
          </div>
          <div class="note" style="margin-top:14px;background:#FCFAF4">
            ${icon('scale', 16)}<div>Late fees and damage costs are added by the system against published rates, never typed in by the owner.</div>
          </div>
        </div>

        <div class="card card-pad" id="photos">
          <div class="inline" style="gap:10px;align-items:flex-start">
            <span class="ico-badge">${icon('camera', 15)}</span>
            <div>
              <span class="eyebrow">Rule 03</span>
              <h3 style="margin-top:5px">Two photos, two sides, timestamped</h3>
              <p class="muted" style="margin-top:8px;font-size:13px">Before handover and again at return: two opposite sides of the item. The app stamps date and time to the minute. Live in-app capture is an option; gallery upload is allowed but still stamped.</p>
            </div>
          </div>
          <div class="note" style="margin-top:14px;background:#FCFAF4">
            ${icon('clock', 16)}<div>No timestamp, no loan. The handover button stays disabled until both sides are captured.</div>
          </div>
        </div>

        <div class="card card-pad" id="reviews">
          <div class="inline" style="gap:10px;align-items:flex-start">
            <span class="ico-badge">${icon('star', 15)}</span>
            <div>
              <span class="eyebrow">Rule 04</span>
              <h3 style="margin-top:5px">Reviews are earned, not posted</h3>
              <p class="muted" style="margin-top:8px;font-size:13px">A review can only be written after a loan closes. Bad reviews are allowed after a 5-day delay or a damage claim. Reviews cannot be edited or deleted by either student.</p>
            </div>
          </div>
          <div class="note" style="margin-top:14px;background:#FCFAF4">
            ${icon('shield', 16)}<div>Your profile shows return score, item-care score and average delay — read from the photo record, not from what someone typed.</div>
          </div>
        </div>

        <div class="card card-pad" id="suspension" style="grid-column:1/-1">
          <div class="inline" style="gap:10px;align-items:flex-start">
            <span class="ico-badge">${icon('ban', 15)}</span>
            <div>
              <span class="eyebrow">Rule 05</span>
              <h3 style="margin-top:5px">Major incidents suspend the account</h3>
              <p class="muted" style="margin-top:8px;font-size:13px;max-width:78ch">Damage above ₹2,000, or any delay of five days or more, is a major incident. Two major incidents in one academic year suspend the account for the rest of the term: no new requests, no new listings, existing loans must still be settled.</p>
            </div>
          </div>
          <div class="note danger" style="margin-top:14px">
            ${icon('alert', 16)}<div><b>Reinstatement is not automatic.</b> The suspended student writes a request to the campus moderation team, and any owner with an open claim has to confirm it was settled first.</div>
          </div>
        </div>

    </div>

    <hr class="rule" style="margin:34px 0 0">

      <div class="section" style="padding-bottom:20px">
        <span class="eyebrow">Rule 03 &amp; 05 in practice</span>
        <h2 style="margin-top:10px">The penalty ladder</h2>
        <p class="lede" style="margin-top:10px;max-width:64ch">Every step is published in advance and applied by the system. Nobody negotiates a fee at the door.</p>
      </div>

      <div class="two-col" style="padding-top:0">
        <div class="card card-pad">
          <div class="ladder">${ladder}</div>
        </div>

        <aside>
          <div class="card">
            <div class="card-head"><h3>How each score is built</h3></div>
            <div class="card-body">
              <div class="kv"><span class="k">On-time return</span><span class="v">60%</span></div>
              <div class="bar"><i style="width:60%"></i></div>
              <div class="kv" style="margin-top:14px"><span class="k">Returned as issued</span><span class="v">30%</span></div>
              <div class="bar"><i style="width:30%"></i></div>
              <div class="kv" style="margin-top:14px"><span class="k">Owner reviews</span><span class="v">10%</span></div>
              <div class="bar"><i style="width:10%"></i></div>
              <p class="tiny" style="margin-top:16px">Scores recompute when a loan closes. They never move because of a message, a report alone, or a manual edit.</p>
            </div>
          </div>

          <div class="card" style="margin-top:18px">
            <div class="card-head"><h3>What is never allowed</h3></div>
            <div class="card-body">
              <div class="stack">
                <div class="inline" style="gap:8px;align-items:flex-start"><span style="color:var(--clay);margin-top:2px">${icon('x', 14)}</span><span style="font-size:12.5px">Hacking, scraping, or accessing another student's account</span></div>
                <div class="inline" style="gap:8px;align-items:flex-start"><span style="color:var(--clay);margin-top:2px">${icon('x', 14)}</span><span style="font-size:12.5px">Changing a price after a request is sent</span></div>
                <div class="inline" style="gap:8px;align-items:flex-start"><span style="color:var(--clay);margin-top:2px">${icon('x', 14)}</span><span style="font-size:12.5px">Taking an item off campus without telling the owner</span></div>
                <div class="inline" style="gap:8px;align-items:flex-start"><span style="color:var(--clay);margin-top:2px">${icon('x', 14)}</span><span style="font-size:12.5px">Re-uploading an old photo instead of a fresh one at return</span></div>
                <div class="inline" style="gap:8px;align-items:flex-start"><span style="color:var(--clay);margin-top:2px">${icon('x', 14)}</span><span style="font-size:12.5px">A second account on the same student ID</span></div>
              </div>
            </div>
          </div>

          <div class="note" style="margin-top:18px">
            ${icon('info', 16)}
            <div>A stale photo is caught by the metadata mismatch against the return timestamp. If the EXIF time predates the loan window, the return is rejected and the borrower has to re-capture.</div>
          </div>
        </aside>
      </div>
  </div>
</main>`;

  return layout({ title: 'Rules & the penalty ladder', active: 'rules', body });
};
