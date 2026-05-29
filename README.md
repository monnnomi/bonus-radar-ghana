# Bonus Radar Ghana

A mobile-first, SEO-oriented affiliate comparison site for online casino bonuses
in Ghana and English-speaking Africa. Built with **Next.js (App Router) +
TypeScript + Tailwind CSS**, ready for deployment on Vercel.

## Tech stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript** (strict)
- **Tailwind CSS** with design tokens ported into `tailwind.config.ts`
- Self-hosted fonts via `next/font/google` — Space Grotesk (display), Manrope
  (body), JetBrains Mono (data/mono)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx            # fonts + SEO metadata (Open Graph, Twitter, robots)
  page.tsx              # homepage — composes all sections
  globals.css           # Tailwind layers, ambient background, keyframes, helpers
  sitemap.ts            # /sitemap.xml
  robots.ts             # /robots.txt
components/
  ui/                   # primitives: Logo, ScoreRing, SectionHead + Eyebrow
  BonusCard.tsx         # the anchor component (client; copy-to-clipboard)
  sections/             # Header, Hero, ComplianceStrip, BestFor,
                        # BonusesSection, HowWeRate, Reviews,
                        # ResponsibleGambling, Guides, Footer
data/
  types.ts              # domain types (Bonus, Filter, Guide, …)
  bonuses.ts            # BONUSES + FILTERS + lookup maps (KYC/PAY/TYPE)
  operators.ts          # category winners, hero ranking, scoring methodology
  guides.ts             # SEO guide/blog articles
lib/
  score.ts              # scoreColor tiers, sortByScore, bestId
prototype/              # original Claude Design export, kept as visual reference
```

## Data

All content currently lives in local TypeScript files under `data/`. The shapes
(see `data/types.ts`) match the original design handoff, so they can later be
swapped for a CMS / DB / API without touching the components.

> Casino names, logos and numbers are **illustrative placeholders**. Logos are
> styled initials, not real trademarks. Swap in licensed assets and verified
> live terms before any real launch.

## Client vs. server components

The page renders on the server by default. Only the interactive pieces opt into
`"use client"`:

- `sections/Header.tsx` — mobile drawer toggle
- `sections/BonusesSection.tsx` — filter state (AND-logic) + comparison table
- `BonusCard.tsx` — copy-to-clipboard promo codes

## Design reference

The original Claude Design export is preserved in `prototype/` — including
`prototype/DESIGN-HANDOFF.md`, which documents every design token, section,
component anatomy and exact copy string.

## Deploying to Vercel

Push the repo and import it in Vercel. No configuration is required — Vercel
auto-detects Next.js. The build command is `next build` and the output is
served automatically.

---

Gambling involves risk. This site provides information for adults aged 18 and
over and does not operate gambling services. 18+ · Terms apply · Play responsibly.
