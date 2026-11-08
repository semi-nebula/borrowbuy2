'use strict';

const { layout } = require('../lib/layout');
const { icon, stars } = require('../lib/icons');
const { ME } = require('../lib/data');

module.exports = function profile() {
  const body = `
<main id="main">
  <div class="wrap">
    <div class="profile-head">
      <div class="profile-id">
        <span class="avatar lg" style="width:74px;height:74px;font-size:24px">AM</span>
        <div>
          <h1>${ME.name}</h1>
          <div class="profile-meta">
            <span class="chip green">${icon('checkCircle', 11)} ID verified</span>
            <span class="chip outline mono">${ME.id}</span>
            <span class="chip sky">${icon('pin', 11)} Hostel B · 214</span>
            <span class="chip">${ME.dept}</span>
          </div>
          <p class="muted" style="margin-top:11px;font-size:13.5px;max-width:54ch">One account, tied to one student ID. Duplicate signups with the same ID are rejected, so this profile is the only place these loans can live.</p>
        </div>
      </div>
      <div class="inline">
        <a class="btn btn-ghost btn-sm" href="rules.html">${icon('scale', 14)} Rules</a>
        <a class="btn btn-primary btn-sm" href="browse.html">${icon('box', 14)} Your listings</a>
      </div>
    </div>

    <div class="profile-stats">
      <div class="pstat">
        <div class="k">Return score</div>
        <div class="v">98<small>/100</small></div>
        <div class="d">27 on time · 28 loans</div>
      </div>
      <div class="pstat">
        <div class="k">Item care</div>
        <div class="v">96<small>/100</small></div>
        <div class="d">1 minor issue in 27 returns</div>
      </div>
      <div class="pstat">
        <div class="k">Average delay</div>
        <div class="v">0.2<small> days</small></div>
        <div class="d">Campus median 0.9</div>
      </div>
      <div class="pstat">
        <div class="k">Reviews</div>
        <div class="v">4.9<small> · 41</small></div>
        <div class="d">Deposit returned 100%</div>
      </div>
    </div>

    <div class="two-col">
      <div>
        <div class="card">
          <div class="card-head">
            <h3>Borrowing record</h3>
            <div class="filters">
              <button class="filter is-on">90 days</button>
              <button class="filter">Year</button>
              <button class="filter">All</button>
            </div>
          </div>
          <div class="card-body">
            <div class="chart" style="height:150px">
              <div class="col"><div class="b" style="height:40%"><em>1</em></div><span class="l">W1</span></div>
              <div class="col"><div class="b" style="height:55%"><em>2</em></div><span class="l">W2</span></div>
              <div class="col"><div class="b" style="height:32%"><em>1</em></div><span class="l">W3</span></div>
              <div class="col"><div class="b" style="height:70%"><em>3</em></div><span class="l">W4</span></div>
              <div class="col"><div class="b" style="height:48%"><em>2</em></div><span class="l">W5</span></div>
              <div class="col"><div class="b hi" style="height:88%"><em>4</em></div><span class="l">W6</span></div>
              <div class="col"><div class="b" style="height:60%"><em>2</em></div><span class="l">W7</span></div>
              <div class="col"><div class="b" style="height:38%"><em>2</em></div><span class="l">W8</span></div>
            </div>

            <table class="table" style="margin-top:20px">
              <thead>
                <tr><th>Item</th><th>Loan</th><th>Returned</th><th class="r">Condition</th><th class="r">Deposit</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td class="b">Badminton racket</td><td>6–7 Mar</td>
                  <td><span class="chip green">${icon('check', 10)} On time</span></td>
                  <td class="r">As issued</td><td class="r">Released</td>
                </tr>
                <tr>
                  <td class="b">Mini projector</td><td>2–4 Mar</td>
                  <td><span class="chip green">${icon('check', 10)} On time</span></td>
                  <td class="r">As issued</td><td class="r">Released</td>
                </tr>
                <tr>
                  <td class="b">Acoustic guitar</td><td>21–25 Feb</td>
                  <td><span class="chip ochre">1 day late</span></td>
                  <td class="r">As issued</td><td class="r">Released · no fee</td>
                </tr>
                <tr>
                  <td class="b">TI calculator</td><td>9–10 Feb</td>
                  <td><span class="chip green">${icon('check', 10)} On time</span></td>
                  <td class="r">As issued</td><td class="r">Released</td>
                </tr>
                <tr>
                  <td class="b">Desk lamp</td><td>28 Jan–2 Feb</td>
                  <td><span class="chip green">${icon('check', 10)} On time</span></td>
                  <td class="r">Minor mark on base</td><td class="r">₹200 released</td>
                </tr>
              </tbody>
            </table>
            <p class="tiny" style="margin-top:12px">Condition column is generated from the before / after photo pair, not typed by either student. "Minor mark" is the lowest damage band.</p>
          </div>
        </div>

        <div class="card" style="margin-top:20px">
          <div class="card-head">
            <h3>Reviews on this profile</h3>
            <div class="inline">
              ${stars(5)}
              <span class="tiny">4.9 average</span>
            </div>
          </div>
          <div class="card-body" style="padding-top:6px">
            <div class="review">
              <div class="review-top">
                <span class="avatar sm">RK</span>
                <span class="who">Rhea Kapoor</span>
                <span class="chip sky">Lent you a DSLR</span>
                <span class="when">14 Mar 2026</span>
              </div>
              <p>Handed my camera back exactly on time, in the same condition it left in. The before/after photos matched frame for frame.</p>
              <div class="review-tags"><span class="chip">Returned on time</span><span class="chip">Photos matched</span></div>
            </div>

            <div class="review">
              <div class="review-top">
                <span class="avatar sm clay">TS</span>
                <span class="who">Tanvi Shah</span>
                <span class="chip ochre">Lent you a guitar</span>
                <span class="when">25 Feb 2026</span>
              </div>
              <p>One day late, messaged in advance and it was logged as late but the grace window covered it. Strings had been replaced, which was a nice touch.</p>
              <div class="review-tags"><span class="chip">Grace window</span><span class="chip">Item improved</span></div>
            </div>

            <div class="review">
              <div class="review-top">
                <span class="avatar sm sky">NV</span>
                <span class="who">Nikhil Verma</span>
                <span class="chip green">Borrowed your tripod</span>
                <span class="when">10 Feb 2026</span>
              </div>
              <p>Quick, easy, item exactly as listed. Deposit released the next morning.</p>
              <div class="review-tags"><span class="chip">Item as described</span><span class="chip">Fast handover</span></div>
            </div>

            <div class="note" style="margin-top:16px">
              ${icon('info', 16)}
              <div><b>Reviews cannot be edited or deleted.</b> They stay attached to the loan they came from, and the loan stays attached to the two photo pairs. Only the platform can remove a review, and only when a dispute is ruled in the other person's favour.</div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-top:20px">
          <div class="card-head">
            <h3>Photo log</h3>
            <span class="chip outline">Every handover, both sides</span>
          </div>
          <div class="card-body">
            <div class="photo-pair">
              <div class="photo-slot">
                <div class="ph"><img src="assets/img/item-projector.jpg" alt="Projector before"></div>
                <span class="corner chip green">Before</span>
                <span class="ts">${icon('clock', 10)} 2 Mar · 09:15</span>
              </div>
              <div class="photo-slot">
                <div class="ph"><img src="assets/img/item-projector.jpg" alt="Projector after"></div>
                <span class="corner chip green">After</span>
                <span class="ts">${icon('clock', 10)} 4 Mar · 17:58</span>
              </div>
            </div>
            <div class="inline" style="margin-top:12px;justify-content:space-between">
              <span class="tiny">Mini projector · BB-1029 · 2 days</span>
              <span class="chip green">${icon('checkCircle', 11)} Matched</span>
            </div>
          </div>
        </div>
      </div>

      <aside>
        <div class="card">
          <div class="card-head"><h3>Trust breakdown</h3></div>
          <div class="card-body">
            <div class="inline" style="gap:16px;justify-content:center;padding:6px 0 14px">
              <div class="ring" style="--pct:98">
                <span class="in"><b>98</b><span>Return</span></span>
              </div>
              <div class="ring ochre" style="--pct:96;--size:78px;--thick:7px">
                <span class="in"><b style="font-size:19px">96</b><span>Care</span></span>
              </div>
            </div>

            <div style="margin-top:6px">
              <div class="kv"><span class="k">On-time returns</span><span class="v">96%</span></div>
              <div class="bar"><i style="width:96%"></i></div>
            </div>
            <div style="margin-top:14px">
              <div class="kv"><span class="k">Returned as issued</span><span class="v">26 / 27</span></div>
              <div class="bar"><i style="width:96%"></i></div>
            </div>
            <div style="margin-top:14px">
              <div class="kv"><span class="k">Response within 12h</span><span class="v">100%</span></div>
              <div class="bar"><i style="width:100%"></i></div>
            </div>

            <p class="tiny" style="margin-top:16px">Score = 60% condition record + 30% punctuality + 10% owner reviews. It moves once per closed loan, never by manual edit.</p>
          </div>
        </div>

        <div class="card" style="margin-top:18px">
          <div class="card-head"><h3>Standing</h3></div>
          <div class="card-body">
            <div class="inline" style="gap:9px">
              <span class="chip green lg">${icon('checkCircle', 13)} Good standing</span>
            </div>
            <div class="stack" style="margin-top:14px">
              <div class="kv"><span class="k">Major incidents</span><span class="v">0 of 2</span></div>
              <div class="kv"><span class="k">Open disputes</span><span class="v">None</span></div>
              <div class="kv"><span class="k">Account since</span><span class="v">Aug 2023</span></div>
              <div class="kv"><span class="k">Accounts on this ID</span><span class="v">1</span></div>
            </div>
            <div class="note" style="margin-top:14px;background:#FCFAF4">
              ${icon('idCard', 16)}
              <div>Only one account can exist per student ID. Attempting a second signup with the same ID blocks it at verification.</div>
            </div>
          </div>
        </div>

        <div class="card" style="margin-top:18px">
          <div class="card-head"><h3>Frequency</h3></div>
          <div class="card-body">
            <div class="kv"><span class="k">Loans this term</span><span class="v">11</span></div>
            <div class="kv"><span class="k">Items listed</span><span class="v">1</span></div>
            <div class="kv"><span class="k">Repeat borrowers</span><span class="v">5</span></div>
            <div class="kv"><span class="k">Total earned</span><span class="v">₹4,180</span></div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</main>`;

  return layout({ title: `${ME.name} · trust profile`, active: 'profile', body });
};
