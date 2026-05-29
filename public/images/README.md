# Image assets

Drop binary image assets here. Expected files:

- `betwinner-100-bonus.jpg` — Betwinner promo banner for the
  "100% bonus on the first deposit up to €100" offer. Used by
  `components/BetwinnerPromo.tsx` on the homepage, `/reviews/betwinner-ghana`
  and `/bonuses`.

If a file is missing the promo component still renders (text + CTA); only the
image area will 404 until the asset is added. Recommended banner ratio is
roughly 16:9 (wide); it is rendered with `w-full h-auto` so it is never
stretched or distorted.
