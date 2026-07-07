# Brooklyn Tokes — Design System

## Brand
Brooklyn Tokes (bksmarts.com) — cannabis-culture streetwear + wellness brand out of Brooklyn.
Values: authenticity, ethical sourcing, clean/sustainable design, urban Brooklyn grit.
Voice: direct, confident, street-smart, never corporate, never stock-cannabis-cliché.

## Palette (avoid stock cannabis green)
- `--ink` #0B0B0C — near-black base, subway/asphalt
- `--bone` #EDE7DA — warm off-white / concrete bone for text on dark
- `--rust` #C4501B — Brooklyn brick/rust orange, primary accent (CTAs, highlights)
- `--acid` #D8FF3E — acid/safety yellow-green, secondary accent used sparingly for wellness line + tags
- `--steel` #4A4E52 — steel grey for dividers, secondary text
- `--brick` #2A1712 — deep brick-brown for section backgrounds/cards
- Wellness section uses `--acid` + `--ink` (lab/clinical contrast) to visually separate from apparel's `--rust`/`--ink`.

## Typography
- Display/headers: "Anton" (bold condensed display) — all-caps, tight tracking, huge scale for hero.
- Body: "Inter" — clean, readable, wide range of weights.
- Accent/tag labels: "JetBrains Mono" uppercase small-caps style for SKU tags, prices, stamps (graffiti-stencil/utility feel).
- Google Fonts: Anton, Inter, JetBrains Mono.

## Layout & Motion
- Single long-scroll page, full-bleed sections, asymmetric grid-breaking layout (not centered card grids).
- Diagonal cut dividers / torn-edge section breaks between apparel and wellness to signal tonal shift.
- Hero: full-bleed, large type overlapping edge, grain/texture overlay, one CTA button.
- Staggered fade/slide-up reveal on scroll (CSS + IntersectionObserver), subtle grain texture overlay on dark sections.
- Sticker/stamp elements (rotated tags, dashed borders) for streetwear editorial feel.

## Imagery (described, not stock)
- Hero: monochrome high-contrast photo of a hoodie silhouette against a Brooklyn brick wall / subway grate, rust-orange duotone overlay, torn paper/spray texture.
- Product grid: flat-lay product shots on concrete/asphalt background, hard shadow, no lifestyle stock.
- Brand story: textured collage — stitching close-up, dye-vat texture, hands sewing — desaturated with rust duotone.
- Wellness: clinical macro shot of tincture bottle on brushed steel, acid-green rim light, sharp contrast to apparel warmth.
- Social proof: grainy disposable-camera style portraits, dashed polaroid frames.

## Components
- Buttons: rectangular, sharp corners, thick 2px border, uppercase mono label, rust fill / bone outline hover invert.
- Tags: rotated -3deg stamp badges with dashed border, mono font, acid or rust color.
- Cards: hard-edged, 1px steel border, no rounded corners, hover = slight rotate + rust border glow.
- Nav: minimal, transparent over hero, logotype left, mono nav links right, CTA button.
