# Handoff: Bonus Radar Ghana — iGaming Affiliate Comparison Site

## Overview
**Bonus Radar Ghana** is a mobile-first, SEO-oriented affiliate comparison website for online
casino bonuses in Ghana and English-speaking Africa. It compares casino bonuses, promo codes,
free spins, no-deposit offers and betting/casino promotions. The visual goal is a **premium,
trustworthy fintech / crypto-dashboard feel** — NOT a spammy casino look.

Core jobs of the page: let a user understand, within ~5 seconds per bonus:
1. what the bonus is, 2. whether a deposit is required, 3. the wagering requirement,
4. whether a promo code is available, 5. how valuable the bonus is (0–10 score).

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes that show the
intended look, layout and behavior. They are **not** meant to be shipped verbatim. The task is to
**recreate these designs inside your target codebase** using its existing environment, patterns and
component library. If there is no codebase yet, pick the most appropriate stack — the included
React + Tailwind file is the most production-shaped starting point and maps cleanly to Next.js /
Vite + React.

Two reference implementations are included (identical design, your choice of starting point):
- `Bonus Radar Ghana (React + Tailwind).html` — single-file React 18 + Tailwind (CDN). **Recommended** base.
- `Bonus Radar Ghana.html` + `styles.css` + `app.js` — vanilla HTML/CSS/JS version (same design).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, score gauges and interactions are all
specified below. Recreate the UI pixel-accurately using your codebase's libraries; exact hex,
type and spacing values are in the Design Tokens section.

---

## Tech recommendations (for Claude Code)
- **Framework:** Next.js (App Router) or Vite + React 18 + TypeScript.
- **Styling:** Tailwind CSS (compiled via CLI/PostCSS — drop the CDN `<script>` used in the prototype).
  Port the token values below into `tailwind.config.ts` `theme.extend`.
- **Fonts:** self-host via `next/font` (or `@fontsource`) — Space Grotesk (display), Manrope (body),
  JetBrains Mono (data). Do not ship the Google Fonts CDN `<link>` in production.
- **Data:** the bonus list is hard-coded in the prototype (`BONUSES` array). In production this should
  come from a CMS / DB / API; keep the same shape (see Data Model).
- **No backend logic needed for the page itself** — filtering, copy-to-clipboard and the mobile menu
  are all client-side.

---

## Screens / Views
This is a single long landing page composed of stacked sections, in this order:

### 1. Header (sticky)
- **Purpose:** brand + primary nav + country + main CTA.
- **Layout:** sticky top bar, height 66px, `backdrop-blur`, translucent dark bg, 1px bottom border.
  Inner row is flex, max-width 1200px, 20px side padding, 20px gap.
- **Components:**
  - Brand: 34×34 rounded mark (emerald dot with glow rings) + "Bonus Radar" (Space Grotesk 600,
    15.5px) with "GHANA" eyebrow under it (JetBrains Mono, 10px, dim, tracking 0.12em).
  - Nav links (hidden < 980px): Casino Bonuses, No Deposit, Free Spins, Promo Codes, Reviews, Guides.
    14px, muted color, hover → full text color + surface2 bg, 8px radius.
  - Right cluster: Ghana country pill (flag swatch + "Ghana", hidden on mobile), primary "View Bonuses"
    button, and a hamburger (44×44) shown < 980px that toggles a mobile drawer.

### 2. Hero
- **Purpose:** value proposition + dual CTA + live "top value" ranking card.
- **Layout:** max-width 1200px; one column on mobile, two columns `1.05fr 0.95fr` ≥ 880px, vertically centered.
- **Left column:**
  - Status pill: live emerald dot (pulsing) + mono text "Bonus terms checked · Updated May 2026".
  - H1 (Space Grotesk 600, `clamp(34px,7.4vw,60px)`, line-height 1.02, tracking -0.03em):
    **"Find Real Casino Bonuses in Ghana — Ranked by Value, Not Hype"** — the word "Real" uses an
    emerald→warm-yellow gradient text clip.
  - Sub (muted, `clamp(16px,2.2vw,19px)`, max 540px):
    **"Compare free spins, no-deposit offers, promo codes, wagering terms and mobile money support before you claim."**
  - CTAs: primary "View Today's Bonuses" (52px tall) + ghost "How We Rate Bonuses".
  - Trust badges (2×2 grid, max 540px): **18+ Only**, **Gamble Responsibly**, **Bonus Terms Checked**,
    **Ghana-Focused Offers** — each is an icon chip (26px emerald-tinted icon) + label, 14px radius.
- **Right column — "Top value today" ranking card:**
  - Rounded 28px panel, surface bg, emerald radial glow top-right.
  - Header row: mono "Top value today" + "Live ranking" with pulsing dot.
  - 4 rows, each `[34px 1fr auto]` grid: logo, then a **mono emerald category label**
    (Best No Deposit / Best Welcome Bonus / Best Low Wagering / Best Mobile Money), casino name,
    offer text, and a score chip on the right (color by tier).

### 3. Compliance strip (under hero)
- Full-width band, `ink2` bg, 1px top+bottom borders.
- 5 items (1 col mobile → 2 cols ≥600px → 5 cols ≥980px): **Ghana availability checked**,
  **Bonus terms reviewed**, **Payment methods checked**, **18+ only**, **Affiliate disclosure**.
- Each: 28px rounded icon tile (emerald-tinted; the affiliate one is gold-tinted) + 13px label.

### 4. Best For (category winners)
- **Purpose:** quick "best in category" picks near the top.
- Section head: eyebrow "Category winners", H2 "Best for what you came for",
  sub "Top pick in each category, scored on real withdrawable value. Terms apply."
- 5 award cards (1 col → 2 ≥560px → 5 ≥980px): **Best No-Deposit Bonus**, **Best Free Spins**,
  **Best Low Wagering**, **Best Mobile Money Casino**, **Best Fast Withdrawal**.
- Each card: award title (Space Grotesk 600, 14.5px, min-height 2.4em for alignment), then a row of
  logo + casino name + stat (mono, muted) + score number (tier color). Hover: lift + emerald border.

### 5. Filters bar (sticky, below header at top:66px)
- Horizontally scrollable chip row (no scrollbar), `ink/80` bg + blur, 1px top+bottom borders.
- 8 toggle chips: No Deposit, Free Spins, Low Wagering, Mobile Money, New Players, Existing Players,
  Crypto Accepted, Fast Withdrawal. Plus a "Clear all" chip.
- Chip: pill, 42px min-height, 13.5px. Inactive = surface bg, muted text, white/10 border.
  Active (`aria-pressed=true`) = emerald-tinted bg, emerald border + text. Small leading dot.
- **Behavior:** AND-filtering — a bonus shows only if it has ALL active filter tags.

### 6. Bonus comparison
- Section head: eyebrow "Bonus comparison", H2 "Today's casino bonuses, ranked by real value",
  sub about scoring on withdrawable value.
- **Bonus cards grid:** 1 col → 2 ≥680px → 3 ≥1080px, 18px gap. (See "Bonus Card anatomy" below.)
- If no card matches filters → dashed-border empty state: "No bonuses match all selected filters. Try removing one."
- **Then** a second head ("Full comparison" / "Side-by-side table") + a horizontally-scrollable
  comparison **table** (min-width 860px) with columns: Casino, Bonus, Type, Code, Wagering, Deposit,
  KYC, Score, (Claim button). Header row is mono uppercase on `ink2`. Rows hover → surface2.
- Note under table (mono, dim): "All offers: 18+ · Terms apply · Check operator rules · Availability may change".

### 7. How We Rate
- `ink2` bg band with top+bottom borders. Eyebrow "Methodology", H2 "How we rate bonuses".
- 7 criteria cards (1 → 2 ≥640px → 3 ≥1000px): each has a mono number (01–07), title, description,
  and a **weight bar** (emerald gradient fill at the given %). Criteria + weights:
  - 01 Wagering Requirements — 92%
  - 02 Deposit Requirement — 78%
  - 03 Max Cashout — 70%
  - 04 KYC Clarity — 65%
  - 05 Expiry Date — 58%
  - 06 Country Availability — 84%
  - 07 Real Bonus Value — 96%

### 8. Reviews
- Eyebrow "Operator reviews", H2 "Casino reviews for Ghana".
- 5 review cards (1 → 2 ≥720px → 3 ≥1080px). Each: logo + name + star row (gold ★, 5 stars,
  filled = round(score/2)) + score number; then rows for **Best for**, **Payments**, **Bonus**;
  then a full-width ghost "Read Full Review" button (min 44px).

### 9. Responsible Gambling block
- Rounded 28px panel, surface bg + blue radial glow top-right, two columns ≥900px.
- Left: an 84px circular "18+" badge (emerald ring) + eyebrow "Play it safe" + H2
  "Gambling is for adults only." + paragraph
  "Play responsibly. Never gamble with money you cannot afford to lose. Bonuses are entertainment, not income."
  + pill row: 18+, Terms apply, Availability may change, Check local laws & operator terms.
- Right: two info cards — "Set limits before you start" and "Need support?" (each title + small muted paragraph).

### 10. Blog / Guides (SEO)
- `ink2` bg band. Eyebrow "Guides & insights", H2 "Understand bonuses before you claim".
- 5 article cards (1 → 2 ≥640px → 3 ≥1000px): 16:9 striped placeholder thumb with a category badge
  (top-left) and "[ article image ]" label, then title, excerpt, and meta (date · read time · "Read →").
  Articles: Best Casino Bonuses in Ghana; Best No-Deposit Bonuses in Ghana; Best Free Spins Offers;
  How Wagering Requirements Work; How to Use Casino Promo Codes.
- Centered ghost "Browse all guides" button below.

### 11. Footer
- **Affiliate strip** (top of footer): gold info icon + bold "Affiliate disclosure." + the disclaimer text (see Copy).
- Brand block (logo + description + 18+/Gamble Responsibly pills) next to 4 link columns
  (`1.4fr 2fr` ≥760px; columns 2-wide on mobile, 4-wide ≥760px):
  - **Company:** About, Contact, Sitemap
  - **Bonuses:** Casino Bonuses, No Deposit, Free Spins, Promo Codes
  - **Resources:** Reviews, Guides, How We Rate
  - **Legal:** Responsible Gambling, Affiliate Disclosure, Privacy Policy, Terms
- Long legal disclaimer paragraph (dim, 12.5px).
- Bottom row: "© 2026 Bonus Radar Ghana. All rights reserved." + mono badges 18+ ONLY · TERMS APPLY · PLAY RESPONSIBLY.

---

## Bonus Card anatomy (the most important component)
A vertical flex card, 20px radius, 22px padding, gradient bg `surface2 → surface`, 1px white/10 border.
Top-scoring card gets `border` = emerald/30 and a "Best value" ribbon tab at top-right.
Hover: translateY(-3px), emerald border, deeper shadow.

Top-to-bottom contents:
1. **Top row** (flex, 14px gap): logo box (46px, gradient bg, initials) · name + type tag + "🇬🇭 Ghana" tag · **score ring gauge** (right).
2. **Offer** (Space Grotesk 600, 23px) + offer sub (13px muted).
3. **Data grid** (2×2, 1px gutters, surface3 cells): **Wagering** (mono), **Deposit req.** (Yes = warm
   gold `#f0d68a`, No = emerald), **KYC** (colored dot + label), **Max cashout**. Values are bold 15.5px,
   high contrast — this is intentional for 5-second scanability.
4. **Pay row:** mono label "Pay in & out", then dot-coded payment chips (MTN MoMo, AirtelTigo Money,
   Vodafone Cash, Visa, Crypto, Skrill, Bank transfer), then signal chips **Mobile Money supported**
   (emerald) and/or **Fast withdrawal** (blue) when applicable.
5. **Promo code box** (dashed border, diagonal-stripe bg): label + code (mono bold) + **Copy** button.
   When no code: "No code needed — auto-applied". Copy writes to clipboard and flips to "✓ COPIED" for ~1.5s.
6. **Actions:** primary "Claim Bonus →" (flex-1, 50px tall, emerald gradient, arrow nudges on hover) +
   bordered "Read Review".
7. **Compliance microcopy** (mono, 10.5px, dim, centered): **"18+ · Terms apply · Check operator rules"**.

### Score gauge (0–10)
Radial ring (default style). SVG circle, radius = size/2 − 5, stroke 5px, rounded cap, rotated -90°.
Track = `#1d2835`; progress arc length = `score/10` of circumference, colored by tier. Center shows the
score number (mono bold, tier color) over "/ 10" (mono 8px dim).
**Tier colors:** score ≥ 8 → emerald `#1fd98a`; ≥ 6.5 → gold `#efc15c`; else `#6f8aa3`.
(The vanilla version also offers a horizontal-bar variant of the score via its Tweaks panel — optional.)

---

## Interactions & Behavior
- **Filtering:** clicking a chip toggles it in an active set; the bonus grid re-renders showing only
  cards whose `tags` include EVERY active filter (AND logic). "Clear all" empties the set.
- **Copy promo code:** `navigator.clipboard.writeText(code)`; button shows "✓ COPIED" ~1.5s; vanilla
  version also shows a center-bottom toast.
- **Mobile menu:** hamburger toggles a vertical drawer (< 980px); links close it on click.
- **Cards always render sorted by score descending.** The single highest score = "Best value" ribbon.
- **Hover states:** cards lift + gain emerald border; buttons brighten; primary-button arrow translates +3px.
- **Smooth scroll** on in-page anchor links.

## State Management
Minimal, all client-side:
- `activeFilters: Set<string>` — selected filter ids → drives the bonus grid.
- `copied` per card (boolean, transient) — copy-button feedback.
- `menuOpen` (boolean) — mobile drawer.
- (Vanilla only, optional) Tweaks state: accent color, score style (ring|bar), density, ambient glow.

## Responsive behavior (mobile-first priority)
- Bonus / award / review / blog grids collapse to a single column on mobile.
- Filters row scrolls horizontally (hidden scrollbar) on all sizes.
- Comparison table scrolls horizontally inside its container on mobile (min-width 860px).
- Touch targets: chips 42px, primary buttons 50–52px, secondary 44px+ (min 44px everywhere).
- Header nav + country pill hide < 980px; hamburger appears.

---

## Data Model
Each bonus object (keep this shape when wiring to a CMS/API):
```ts
type Bonus = {
  id: string;
  name: string;            // "Betway Ghana"
  initials: string;        // "BW" — used in logo placeholder
  logoBg: string;          // CSS gradient for placeholder logo
  logoColor: string;       // text color on the logo
  offer: string;           // "100% up to GHS 1,000"
  offerSub: string;        // "First deposit match"
  type: string;            // "Welcome Match" | "No Deposit" | "Free Spins"
  typeClass: "emerald" | "gold" | "blue";   // tag color
  code: string | null;     // promo code, or null = auto-applied
  deposit: boolean;        // deposit required?
  wagering: string;        // "8×"
  kyc: "req" | "maybe" | "unclear";
  maxCashout: string;      // "GHS 5,000" | "No cap stated"
  score: number;           // 0–10, one decimal
  tags: string[];          // filter ids this bonus matches
  pay: string[];           // payment method chips
  momo: boolean;           // show "Mobile Money supported"
  fast: boolean;           // show "Fast withdrawal"
  bestFor: string;         // review card
  payments: string;        // review card (human string)
  avail: string;           // "Available now"
};
```
Filter ids (and the `tags` they match): `no-deposit, free-spins, low-wagering, mobile-money,
new-players, existing-players, crypto, fast-withdrawal`.

> NOTE: Casino names (Betway, SportyBet, MSport, JackpotCity, Betwinner) and all numbers are
> **illustrative placeholders** for the design. Logos are styled initials, **not** real trademarks —
> swap in licensed assets and verified live terms before any real launch.

---

## Design Tokens

### Colors (hex)
```
Surfaces
  bg / ink         #080b10
  bg-2 / ink2      #0b0f15
  surface          #10161f
  surface-2        #161f2a
  surface-3        #1d2835
  border           rgba(255,255,255,0.07)
  border-2         rgba(255,255,255,0.12)

Text
  text             #eef3f8
  muted            #98a6b5
  dim              #5e6b79

Accents (emerald leads; all accents share chroma family)
  accent / brand   #1fd98a   (emerald)
  brand2 (deep)    #16b673
  gold             #efc15c   (warm gold)
  blue             #4d9dff   (electric blue)
  yellow           #f5d66e
  deposit-yes warn #f0d68a   (warm, NOT red — "Deposit: Yes")

Score tiers
  high  (≥8)       #1fd98a
  mid   (≥6.5)     #efc15c
  low   (else)     #6f8aa3

Payment dots
  MTN MoMo         #efc15c
  AirtelTigo Money #4d9dff
  Vodafone Cash    #c87d7d
  Visa / Bank      #8aa0b8
  Crypto           #1fd98a
  Skrill           #9d6dff

KYC dots
  Required         #4d9dff
  May be required  #efc15c
  Not clear        #98a6b5

Primary-button text  #04140d  (near-black on emerald)
```
Do **not** use aggressive red anywhere — "Deposit: Yes" uses warm gold, not red.

### Typography
```
Display  Space Grotesk   400/500/600/700   (headings, brand, offers, scores-as-display)
Body     Manrope         400/500/600/700   (paragraphs, labels, buttons)
Mono     JetBrains Mono  400/500/700       (eyebrows, data labels, codes, scores, badges)

H1        clamp(34px, 7.4vw, 60px), 600, line-height 1.02, tracking -0.03em
H2        clamp(26px, 4.6vw, 40px), 600, tracking -0.02em
Offer     23px / 600 (display)
Body      16px, muted for secondary
Data value 15.5px / 700
Eyebrow   11.5px mono, uppercase, tracking 0.16em, emerald
Microcopy 10.5px mono, dim
```

### Spacing / geometry
```
Max content width   1200px (range 1180–1240 acceptable), 20px side padding
Section padding      72px vertical (Best For pairs 72 top / 40 bottom)
Card padding         22px (compact density: 16px)
Grid gaps            14–18px
Radii    sm 9 · md 14 · lg 20 · xl 28 (px); pills 999px
Touch    chips 42px · primary buttons 50–52px · secondary ≥44px
```

### Shadows
```
Card     0 24px 48px -24px rgba(0,0,0,0.7)   (+ subtle inset top highlight)
Card hover 0 26px 50px -28px rgba(0,0,0,0.8) + 1px emerald inset ring
Primary btn 0 10px 26px -10px rgba(31,217,138,0.85), inset 1px emerald ring
```

### Ambient background
Fixed full-page layer behind content:
```
radial-gradient(900px 520px at 78% -8%, rgba(31,217,138,0.10), transparent 60%),
radial-gradient(760px 480px at 8% 4%,  rgba(77,157,255,0.07), transparent 58%),
linear-gradient(180deg, #0b0f15, #080b10 40%)
```

---

## Copy (exact strings)
- **H1:** "Find Real Casino Bonuses in Ghana — Ranked by Value, Not Hype" ("Real" = gradient).
- **Sub:** "Compare free spins, no-deposit offers, promo codes, wagering terms and mobile money support before you claim."
- **Primary CTA:** "View Today's Bonuses" · **Secondary CTA:** "How We Rate Bonuses".
- **Claim microcopy (per card):** "18+ · Terms apply · Check operator rules".
- **Table note:** "All offers: 18+ · Terms apply · Check operator rules · Availability may change".
- **Responsible gambling:** "Gambling is for adults only." / "Play responsibly. Never gamble with money you cannot afford to lose. Bonuses are entertainment, not income."
- **Affiliate disclosure (footer strip):** "We may earn affiliate commissions from some links. This does not affect our ratings. Bonus availability can change and depends on operator terms, KYC, payment methods and local regulations."
- **Footer legal:** "Gambling involves risk. Bonus Radar Ghana provides information for adults aged 18 and over. We do not operate gambling services. All bonus terms — including wagering, maximum cashout, KYC and expiry — are set by the operators and can change at any time. Always confirm the current terms, country availability and the legal status of online gambling in your location before claiming any offer."
- Avoid risk-implying phrases like "zero risk" — use "no-deposit testing" / "low-entry bonus" / "terms apply".

## Assets
- **No external image assets.** Casino logos are CSS-gradient placeholders with text initials —
  replace with licensed SVG/PNG logos in production.
- **Icons** are inline SVG (stroke style). Swap for your icon library (e.g. lucide-react) if you have one.
- **Fonts** from Google Fonts in the prototype — self-host in production.
- Blog thumbnails are striped placeholders — replace with real article images.

## Files in this bundle
- `Bonus Radar Ghana (React + Tailwind).html` — **recommended** reference (React 18 + Tailwind, single file).
- `Bonus Radar Ghana.html` — vanilla HTML reference (loads the two files below).
- `styles.css` — full stylesheet for the vanilla version (design tokens live in `:root`).
- `app.js` — data + rendering + interactions for the vanilla version.
- `README.md` — this document.

## Suggested implementation order (for Claude Code)
1. Port Design Tokens into `tailwind.config` + a `globals.css` (fonts, body bg layer).
2. Build primitives: `Button`, `Tag`, `Chip`, `ScoreRing`, `Logo`, `SectionHead`, `Eyebrow`.
3. Build `BonusCard` (the anchor component) against the Data Model; verify the 2×2 data grid + gauge.
4. Compose sections top-to-bottom: Header, Hero, ComplianceStrip, BestFor, Filters+Bonuses(+Table),
   HowWeRate, Reviews, ResponsibleGambling, Blog, Footer.
5. Wire filtering state + copy-to-clipboard + mobile menu.
6. Replace placeholder data/logos with the real source; add analytics + affiliate link handling.
