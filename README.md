# BorrowBuy

An HTML prototype for a **campus-only borrowing marketplace**. Students lend what they already own to other verified students on the same campus, at a price the owner sets once and cannot change.

Grounded in the supplied spec (`security - no external hacking, no price change` → trust & review rules).

---

## Open it

No build step, no server, no dependencies. Open `index.html` directly in a browser — all assets are local, all icons are inline SVG.

```
index.html          ← start here
```

## The nine screens

| # | File | What it demonstrates |
|---|------|----------------------|
| 01 | `index.html` | Landing page, trust premise, sample trust card, borrow loop |
| 02 | `browse.html` | The campus board — 8 items, working category filters, deep-linkable via `?`/`#` hash |
| 03 | `item.html` | Item detail, locked price, before/after photo protocol, owner scores. Reads `?id=<slug>` |
| 04 | `request.html` | Dates, terms, the penalty ladder the borrower accepts, live cost breakdown |
| 05 | `handover.html` | **The core step** — two-sided timestamped photos, condition checklist, live-capture option |
| 06 | `returns.html` | Countdown, before/after comparison, late-fee escalation, owner trust snapshot |
| 07 | `profile.html` | Trust profile: return score, item-care score, avg. delay, loan history, reviews, photo log |
| 08 | `verify.html` | One student ID → one account. Email domain check, ID card upload, selfie match |
| 09 | `rules.html` | Five rules + the full penalty ladder + score weighting |

Working interactions: category filtering, `?id=` item routing, gallery thumbnails, URL-hash filters.

## How the spec maps to the UI

| Spec requirement | Where it lives |
|---|---|
| Security, no external hacking | `rules.html` — "What is never allowed"; campus-scoped data, no cross-campus visibility |
| **No price change** | Price is rendered read-only everywhere; `request.html` and `item.html` both state the rate is frozen at listing. There is no input field for it anywhere in the prototype |
| One college ID → one account | `verify.html` — ID + roll-number hash, second signup refused; `profile.html` shows "Accounts on this ID: 1" |
| 1-day delay = light penalty | `returns.html` grace window: "no fee, score unchanged", only a *logged* marker |
| Long delay / no answer = bad review + extra money | `returns.html` and `rules.html`: 2–4 days → ₹50/day (capped ₹300), 5+ days or unreachable → ₹150/day + public bad review |
| Damage → extra money | Repair at quote + ₹500 handling, decided on the before/after photo pair |
| Major bad reviews → suspension | Two major incidents in one academic year = suspension for the term |
| Before/after photos, **2 sides**, date+time mandatory, live photo optional | `handover.html` — two sides, app-stamped timestamp, live capture switch; `item.html` shows the pair |
| Profile shows reviews + returned condition + delay + return/issue score | `profile.html` — Return score, Item care, Average delay, loan table with per-loan condition, photo log |
| No multiple profiles / less cheating | `verify.html` + `profile.html` standing panel |

## Design

- **Palette:** warm paper `#F6F3EC`, forest ink `#1E4635`, ochre `#B96A16`, clay for warnings
- **Type:** system serif for display (Iowan/Palatino/Georgia stack), system sans for UI, monospace for numbers and labels
- **Rationale:** it should feel like a noticeboard and a receipt, not a startup dashboard. Numbers are printed like a ledger, not styled like a dashboard metric.
- Fully responsive; no external fonts, scripts, or images beyond the local `assets/img/*.jpg`
- Accessible: semantic landmarks, one `h1` per page, `alt` text on every image, `aria-current` on the active nav item

## Regenerating the HTML

The `.html` files are generated from `tools/pages/*.js` so the header, footer and nav stay identical. **You do not need this to view the prototype.**

```bash
node tools/build.js
```

```
tools/
  build.js            # writes every page
  lib/layout.js       # header, nav, footer, <head>
  lib/data.js         # items, people, categories, penalty ladder
  lib/icons.js        # inline SVG icon set
  pages/*.js          # one file per screen
```

Editing a `.html` file directly works fine, but the next `node tools/build.js` will overwrite it — change `tools/pages/` instead.

## Sample data

Eight items: DSLR, TI calculator, city cycle, mini projector, acoustic guitar, tripod, desk lamp, badminton racket. Five owners (Aarav, Ishita, Kabir, Meher, Tanvi) and one borrower, Rhea Kapoor. The same people own and borrow the same items consistently across every screen — the camera that Aarav lends on `item.html` is the camera Rhea is holding on `returns.html`.

## Not included (deliberately)

This is a visual prototype: no backend, no auth, no payment processing. Deposit and fee amounts are illustrative, and the photo upload, OTP and live-capture controls are UI-only. The suspension and dispute flows are described, not wired.
