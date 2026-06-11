# Willy Burger — AGENTS.md

## Stack

- **Astro** (static output, no SSR) + **Tailwind CSS** + **TypeScript**
- All data from `src/data/menu.json` — no backend, no API routes

## Routes

- `/` — category grid (cards with image, clickable)
- `/categoria/[slug]` — dishes for one category, with "adicionales" per dish

## Expected file structure

```
src/
  data/menu.json          # single source of truth
  types/menu.ts           # TS types for menu data
  pages/
    index.astro
    categoria/[slug].astro
  components/
    CardCategoria.astro
    CardPlatillo.astro
  layouts/
    Layout.astro
```

## Design system (from DESIGN.md)

- **Red** (`#E30613`), **Gold** (`#C69C6D`), **Charcoal** (`#1A1A1A`), white/parchment backgrounds
- **Typography**: Anybody (headlines, heavy 700+), Work Sans (body), Space Mono (prices/labels)
- Headers in uppercase/title case — avoid sentence case
- **Shape**: sharp corners (0), square containers with thick borders (2–4pt)
- **Layout**: 12-column grid desktop, single-column mobile; 24px gutters, 64px/16px margins
- **Spacing** unit: 8px
- Price format: `S/ 00.00`

## Commands

Will need standard Astro commands once scaffolded:

```
pnpm create astro@latest
pnpm run dev
pnpm run build
pnpm run preview
```

## Conventions

- Mobile-first responsive
- Meta tags for SEO on every page
- Images via Astro Assets
- Clean, typed code
