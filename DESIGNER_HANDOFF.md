# Nana waitlist landing — designer handoff

This repository contains the complete Nana frontend currently deployed at:

- https://nana-wallet-hybrid.vercel.app

It includes the full hybrid landing, the interactive wallet demo, mobile shells, brand assets, product screenshots, Nani character states, social media material, and the complete bubble/texture system.

## Run the current hybrid landing

```sh
npm ci
npm run dev:hybrid
```

The local URL is printed by Vite. The hybrid variant must use `VITE_LANDING_VARIANT=hybrid`; the `dev:hybrid` script sets it automatically.

## Waitlist landing scope

The new design can keep the current visual language while replacing the product CTAs with one clear waitlist conversion flow. The existing wallet demo remains available at `/app` as product context.

Current positioning:

> Independence through voice. Protection when it matters.

Product definition:

> A voice-first agentic wallet for older adults and people with limited mobility.

Related context:

- Official product repository: https://github.com/theboyplunger0x/nana-wallet
- Pitch, mission and brand context kit: https://github.com/theboyplunger0x/nana-pitch-kit
- Current cross-medium visual reference: `design-assets/reference/nana-pitch-deck-current-montage.png`

## Where the landing lives

- `src/routes/index.tsx` — complete landing structure, sections, header, footer, metadata, and CTAs.
- `src/components/HybridLandingIntro.tsx` — hybrid hero used in production.
- `src/components/MinimalLanding.tsx` — minimal experiment and original bubble composition.
- `src/styles.css` — the full visual system and responsive behavior.
- `src/routes/app.tsx` — interactive wallet demo behind the landing.

## Bubbles and textures

The live landing bubbles are built in CSS, so the editable source is included in full:

- `.minimal-orb`
- `.minimal-orb-main`
- `.minimal-orb-small`
- `.landing-hero-orbit`
- `.landing-page-hybrid ...::before`
- `.landing-page-hybrid ...::after`

The hero places the primary bubbles in `HybridLandingIntro.tsx`. The rest of the landing extends the same language through section pseudo-elements in `src/styles.css`.

The same visual system is also available as production-ready raster assets:

- `design-assets/bubbles/` contains transparent standalone bubbles for compositing.
- `design-assets/deck-textures/` contains cream, lilac and purple 16:9 backgrounds in full-resolution PNG and lightweight JPEG formats.

Current visual rule: use smooth atmospheric gradients and translucent bubbles without a square background grid. Bubbles should establish depth, hierarchy or progression. Avoid scattering them as generic decoration.

## Asset library

- `src/assets/landing/` — English product screenshots used directly by the landing.
- `src/assets/nani/` — Nani states used by the app.
- `public/` — favicon, Nani icon, Open Graph image, and social card.
- `design-assets/logo/` — avatars, lockups, banners, and GitHub preview.
- `design-assets/bubbles/` — transparent high-resolution and deck-ready glass bubbles.
- `design-assets/deck-textures/` — current grid-free atmospheric backgrounds.
- `design-assets/reference/` — the current pitch-deck montage as a visual-system reference.
- `design-assets/screenshots-english/` — clean English product flow.
- `design-assets/screenshots/` — Spanish product flow and extra screens.
- `design-assets/sprites/` — high-resolution Nani character states.
- `design-assets/social/` — short animations and social graphics.
- `design-assets/market/` — market slides and supporting visuals.
- `design-assets/video-source/` — source footage available for the landing or waitlist campaign.

## Useful commands

```sh
npm run dev:hybrid   # current production visual direction
npm run dev:minimal  # original minimal reference
npm run build:demo   # static demo build used by Vercel
npm run typecheck
npm test
```

Do not place API secrets, wallet seeds, or private keys in any `VITE_*` variable. Those variables are visible in the browser bundle.
