# Discovery Group — website

Rebuild of [discoverygroupug.com](https://discoverygroupug.com) as a
static Astro site. Built mobile-first, editorially typeset, with a
two-track architecture covering both the Discovery Group corporate
B2B story and the Orocafe consumer sub-brand.

```
research/   Phase 1 audit + competitor teardown + design decisions
src/        Astro source
  content/    Markdown content collections (commodities, producers, Orocafe)
  components/ Astro components
  layouts/    Page layouts
  pages/      File-based routes
  styles/     Global CSS + Tailwind v4 setup
  lib/        Shared TS (site config, nav)
public/     Static assets (favicon, OG image)
```

## Stack

- **[Astro 5](https://astro.build)** — static site generator
- **[Tailwind CSS v4](https://tailwindcss.com)** via `@tailwindcss/vite`
- **Variable fonts**, self-hosted via `@fontsource-variable` (Fraunces,
  Inter, JetBrains Mono)
- **Content collections** with Zod schemas (no CMS)
- **Netlify** for hosting + form handling

## Quick start

```bash
# Node 22+, pnpm 10+
pnpm install
pnpm dev          # local dev at http://localhost:4321
pnpm build        # static build to ./dist
pnpm preview      # preview the built output
pnpm astro check  # type-check Astro files
```

## Routes

| Route | Description |
|---|---|
| `/` | Discovery corporate home |
| `/products` | Commodity index |
| `/products/[slug]` | Per-commodity spec page |
| `/producers` | Cooperative profile index (template placeholders today) |
| `/producers/[slug]` | Individual cooperative profile |
| `/sustainability` | Farmer impact, certifications, EUDR posture |
| `/about` | Company story, legal structure, leadership, facility, timeline |
| `/contact` | B2B inquiry form (Netlify Forms) + general contact |
| `/orocafe` | Orocafe consumer brand home (different visual track) |
| `/orocafe/products` | Orocafe product range |
| `/orocafe/products/[slug]` | Orocafe product detail |

Legacy URL redirects (handled by `netlify.toml`):
- `/contact-us` → `/contact`
- `/about-us` → `/about`
- `/our-products` → `/products`

## Content management

Everything editorial lives in `src/content/`. There is no CMS — content
is edited in markdown and shipped by PR.

### Commodities — `src/content/commodities/*.md`

Each commodity is one markdown file with frontmatter defined by the
schema in `src/content.config.ts`. Required fields include `title`,
`eyebrow`, `summary`, `origin`, `grades`, `processing`, `certifications`,
`packaging`, `moq`, `incoterms`, `heroCaption`. The markdown body is
rendered as the editorial section of the commodity page.

To add a commodity, create a new markdown file in the directory and
follow the structure of `coffee.md` as a reference. The slug is the
filename (without `.md`).

### Producers — `src/content/producers/*.md`

Cooperative / producer profiles. **All current entries are template
placeholders** with `placeholder: true` in their frontmatter — the index
page renders an editorial note when any are present. Replace these with
real profiles only after consent and verified data.

### Orocafe products — `src/content/orocafe/*.md`

Consumer products. `category` is constrained to one of `Whole bean`,
`Ground`, `Capsule`, `Drip bag`, `Instant`, `Premix`, `Tea`. The
product index page groups by category in the same order they appear.

### Photography

All current imagery is placeholder. See `photography-brief.md` for the
shotlist needed before going live. To replace placeholders:

1. Add the photograph (`.jpg`, `.webp`, or `.avif`) under
   `src/assets/photos/`.
2. Import it from the relevant `.astro` page and replace the
   `<PlaceholderPhoto>` instance with Astro's `<Image>` component
   (auto-optimised by Sharp).
3. Keep aspect ratios consistent with the existing tokens: `16/9`
   landscape, `4/5` portrait, `1/1` square, `3/2` Orocafe product card.

### Site-wide config

Address, email, social links, primary navigation labels and the
Discovery↔Orocafe switcher all live in `src/lib/site.ts`. Phone number
is empty — populate before launch.

## Design system at a glance

Tokens are defined in `src/styles/global.css` under `@theme` and a
`[data-brand="orocafe"]` override block. The body element receives a
`data-brand` attribute via the layout, which flips the relevant tokens
without forking components.

### Type

- **Fraunces** (variable serif) — display
- **Inter** (variable sans) — body, UI
- **JetBrains Mono** — lot IDs and traceability fields

### Colour (Discovery)

- `--color-paper` `#F6F1E8` page background
- `--color-ink` `#1B1815` body and headings
- `--color-clay` `#A33A2A` primary accent (red-clay)
- `--color-forest` `#2F4A35` sustainability accent
- `--color-line` `#D9CFBE` hairlines

### Colour (Orocafe)

- `--color-paper` `#FAF6EC` (lighter cream)
- `--color-oro` `#C99334` primary gold
- `--color-night` `#15110D` espresso dark surfaces

WCAG AA contrast pairings are pre-verified in `research/03-design-decisions.md`.

## Forms

The B2B inquiry form on `/contact` is wired for **Netlify Forms**.
Netlify auto-detects the `data-netlify="true"` attribute at build time
and provisions the form endpoint. Notifications and submissions are
managed in the Netlify dashboard:

- **Spam protection** — honeypot field (`bot-field`) only by default;
  add reCAPTCHA in Netlify dashboard if needed
- **Notifications** — configure email notifications in Site Settings →
  Forms → Notifications

The form posts back to `/contact` and Netlify handles the success page;
swap to a dedicated `/contact/thanks` page later if desired by adding
an `action` attribute.

## Deploy

### Netlify (default)

1. Connect the repo in Netlify (or use `netlify init`).
2. Netlify reads `netlify.toml` for build config: `pnpm build` →
   publish `dist`.
3. First deploy provisions the Netlify Forms endpoint automatically.
4. Point your DNS at the Netlify site.

### Alternative: any static host

The output of `pnpm build` is fully static. Upload the contents of
`dist/` to any static host (Vercel, Cloudflare Pages, S3+CloudFront).
You'll lose the Netlify Forms handling — replace the form action with
your own endpoint (e.g. a Cloudflare Worker, a Formspree URL).

## Performance & accessibility targets

- **Lighthouse target:** 90+ across Performance, Accessibility, Best
  Practices, SEO on all top-level pages.
- **Fonts:** woff2-only, self-hosted, latin subset prioritised, with
  the cache-control rule in `netlify.toml`.
- **Images:** all placeholder today; on real photography swap to Astro
  `<Image>` for automatic responsive variants and lazy loading.
- **Reduced motion:** respected globally (no animations for
  `prefers-reduced-motion: reduce` users).
- **Focus:** visible outline on all interactive elements, 44px
  minimum hit target.

## What's not yet built

Intentionally deferred — see `research/03-design-decisions.md` §11 for
the rationale:

- Multilingual setup
- Journal / news section
- E-commerce checkout for Orocafe
- B2B customer login portal
- Live commodity ticker
- CMS integration
- Analytics vendor (Plausible/Umami can be added in one block)

## Research artefacts

- `research/01-current-site-audit.md` — audit of the existing site
- `research/02-competitor-teardown.md` — competitor analysis with
  synthesised patterns
- `research/03-design-decisions.md` — every design judgment with
  the reasoning trail

## License

Proprietary. © Discovery Group Ltd.
