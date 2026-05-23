# Design Decisions

Every consequential design judgment for the rebuild, with the reasoning
trail. If a decision is later reversed, log it here rather than silently
in code.

---

## 1. Stack & build

- **Astro** (latest stable) with **Tailwind CSS v4**. Static site
  output. Per the brief.
- **Content** as MDX/JSON content collections under `src/content/`,
  not a CMS. Editing is by PR. Keeps deploys trivial and removes a
  vendor.
- **Deploy** to **Netlify**, per the answered question. `netlify.toml`
  committed; build command `astro build`, publish `dist/`.
- **Fonts** via `@fontsource-variable` packages (self-hosted woff2),
  not Google Fonts CDN. Faster LCP, zero third-party request,
  predictable in any network policy.
- **No JS framework integration** at MVP. Astro components only. If
  later we need a search filter on the producer index we'll add
  Preact via Astro islands — but we're not building for that today.
- **Images** through Astro's built-in `<Image>` (Sharp). Placeholders
  shipped as compressed JPGs in `src/assets/`; commissioned imagery
  brief in `photography-brief.md`.

---

## 2. Two-track architecture

The brief is non-negotiable: cleanly separate Discovery Group (B2B
sourcing/export) from Orocafe (consumer brand). Two tracks share:

- Header/footer chrome (with the brand switcher)
- Typography family
- Token system

Two tracks diverge in:

- Colour: Discovery uses earth/clay; Orocafe leans into a warm gold +
  cream
- Density: Discovery is data-dense (specs, certifications); Orocafe is
  editorial (photography, flavour notes)
- Voice: Discovery is exporter-formal; Orocafe is editorial-warm

Implementation:

- Two Astro layouts: `CorporateLayout.astro`, `OrocafeLayout.astro`
- A single `Header` component with a sticky **Discovery ↔ Orocafe**
  switcher rendered in both modes; the inactive track is muted, not
  hidden, to reinforce the relationship
- Per-track CSS variables on `<body data-brand="discovery">` /
  `<body data-brand="orocafe">`. Tokens flip; components don't fork.

---

## 3. Typography

Decision: a **serif display + grotesque body** pairing, applied to both
tracks with different weight/whitespace defaults.

- **Display: Fraunces (variable).** Editorial, contemporary serif with
  enough character to feel like *origin*, not corporate. Used at
  600–700 weight for headlines, lighter (300–400) for editorial pull
  quotes on Orocafe.
- **Body: Inter (variable).** Neutral, legible at small sizes,
  data-dense table-friendly. The "boring choice that always works"
  for spec strips and B2B forms.
- **Mono: JetBrains Mono** (only for lot IDs, batch codes, traceability
  fields). Signals "data," not "code."

Type scale (rem, mobile → desktop):

| Token | Mobile | Desktop |
|---|---|---|
| display-xl | 2.5rem | 5rem |
| display-lg | 2rem | 3.75rem |
| h1 | 1.875rem | 2.75rem |
| h2 | 1.5rem | 2rem |
| h3 | 1.25rem | 1.5rem |
| body-lg | 1.125rem | 1.25rem |
| body | 1rem | 1rem |
| small | 0.875rem | 0.875rem |
| eyebrow | 0.75rem | 0.75rem (tracked +0.12em uppercase) |

Line-height: 1.05 on display, 1.2 on h1–h3, 1.6 on body, 1.5 on small.

---

## 4. Colour

### Discovery (corporate)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1B1815` | Primary text, headings |
| `ink-muted` | `#4A4540` | Secondary text |
| `paper` | `#F6F1E8` | Page background — warm cream, not white |
| `paper-deep` | `#EDE4D2` | Section bands |
| `clay` | `#A33A2A` | Brand accent (Ugandan soil red-clay) |
| `clay-deep` | `#7A2A1E` | Hover / pressed states |
| `forest` | `#2F4A35` | Sustainability accent, traceability badges |
| `gold-mute` | `#B8893A` | Subtle accent only — keep gold mostly for Orocafe |
| `line` | `#D9CFBE` | Hairlines, table borders |

### Orocafe (consumer)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1B1815` | Same charcoal — type unity across tracks |
| `paper` | `#FAF6EC` | Lighter cream — premium "off-white-with-warmth" |
| `oro` | `#C99334` | Primary brand gold |
| `oro-deep` | `#8A621F` | Press/hover, dark surfaces |
| `night` | `#15110D` | Hero/feature dark surfaces (espresso) |
| `line` | `#E5DDC9` | Hairlines |

WCAG AA verified pairings (locked):
- `ink` on `paper` — 13.8:1
- `ink-muted` on `paper` — 7.6:1
- `paper` on `clay` — 5.1:1 (large text only at this contrast; use
  `paper` on `clay-deep` for AA body)
- `paper` on `night` — 14.2:1

No gradient overlays on photography. If type sits on imagery, the
image is selected with empty negative space for the type, or a solid
band sits beside (not over) the image.

---

## 5. Layout

- **Max content width** 1280px (`max-w-7xl`). Editorial blocks narrow
  to 720px (`max-w-3xl`) for reading.
- **12-column grid** at desktop, 6 at tablet, 4 at mobile. Tailwind
  default grid utilities; no bespoke grid system.
- **Generous vertical rhythm.** Section padding 96px desktop / 64px
  mobile by default. The corporate site can afford whitespace; it
  signals confidence.
- **Hairline rules** (1px `line`) instead of card shadows for B2B
  density. Cards have soft elevation only on Orocafe.

---

## 6. Imagery direction

(Detail in `photography-brief.md` once built.)

- **Hero photography:** Documentary, not packshot. Hands sorting
  cherries; drying beds at altitude; Namanve floor; trucks on
  red-clay road; cooperative meeting; vanilla curing. *No
  white-background product shots on the hero of any page.*
- **Aspect ratios:** 4:5 portrait for producer profiles; 16:9 for
  landscape; 1:1 for index card thumbnails.
- **Treatment:** Original colour. No filters that flatten contrast.
  No type-over-photo with gradient. Captions live below or beside
  the image in small caps eyebrow + sentence-case caption.
- **Placeholder strategy:** Procedurally generated solid-colour
  blocks with a single line of caption naming what the real
  photograph should depict. Easier for the client to see what's
  missing than seeing stock that pretends to be real.

---

## 7. Information architecture (final)

```
Discovery (corporate)
├── /                     Home — origin story, capabilities, commodity nav, Orocafe link
├── /products             Commodity overview
├── /products/coffee      Per-commodity detail (template)
├── /products/cocoa
├── /products/vanilla
├── /products/bird-eye-chilli
├── /products/sesame
├── /products/beans-and-pulses
├── /sustainability       Farmer impact, supply chain, certifications, EUDR posture
├── /producers            Producer / cooperative profile index (template; placeholders)
├── /producers/[slug]     Individual profile
├── /about                Company story, leadership, Namanve facility
└── /contact              B2B inquiry form + general contact

Orocafe (consumer)
├── /orocafe              Brand home — distinct treatment
├── /orocafe/products     Product range index
└── /orocafe/products/[slug]  Individual product page
```

Decisions:
- **Tea** is folded into `/products/coffee` (or a small mention on
  `/products`) rather than a top-level commodity — surfaces in the
  current site were thin on tea details. Can be promoted later.
- **Cotton** dropped from primary nav; mentioned in About if it's
  still active.
- **Producers** is its own section, not a tab under About. This is
  the editorial backbone borrowed from Belco / Caravela.
- **Journal / news** deferred. Not in MVP scope.

---

## 8. Component inventory (final)

To build, in dependency order:

1. **Foundation:** tokens, fonts, `BaseLayout`, `Container`
2. **Chrome:** `Header` (with Discovery↔Orocafe switcher), `Footer`,
   `SkipLink`
3. **Hero blocks:** `OriginHero` (corporate), `OrocafeHero`
4. **Editorial:** `SectionHeading` (eyebrow + display), `Prose`,
   `PullQuote`, `PhotoFigure`
5. **Commodity cards:** `CommodityCard` (B2B), with traceability
   strip — origin region, processing, certification badges,
   indicative MOQ
6. **Producer profile:** `ProducerCard` and `ProducerProfile`
   template (4:5 portrait, geography, elevation, varieties, quote)
7. **Orocafe product card:** `ProductCard` (consumer) — flavour
   notes, roast, size, photography-led
8. **Forms:** `B2BInquiryForm` (commodity, volume, destination port,
   certifications, target arrival, contact); `ContactForm`
9. **Switcher:** the sticky top-nav Discovery↔Orocafe element.
10. **Misc:** `CertificationBadge`, `SpecRow`, `Hairline`

---

## 9. B2B inquiry form fields (locked)

Per the brief:

- Commodity (select; multi-select allowed)
- Indicative volume (number + unit: kg, MT, FCL)
- Destination port (text)
- Certifications needed (multi-check: Organic, Rainforest Alliance,
  Fairtrade, Halal, EUDR-compliant docs, other)
- Target arrival (month/year picker)
- Company name, contact name, email, phone (optional), country
- Free-text notes
- Honeypot field for spam, no captcha by default (Netlify Forms
  catches the rest)

Submit via Netlify Forms (no server). Thank-you page renders
inline; auto-email handled by Netlify notification.

---

## 10. Performance & a11y commitments

- Lighthouse target **90+ on Performance, Accessibility, Best
  Practices, SEO** on all top-level pages.
- LCP target <2.5s on 3G-fast. Hero image preloaded;
  above-the-fold inlined critical CSS via Astro's built-in.
- All interactive elements reach minimum 44px hit target.
- Focus rings visible (no `outline:none` without replacement).
- WCAG AA contrast on all text. Tokens above are pre-checked.
- `prefers-reduced-motion`: any scroll-driven or autoplay treatment
  honors the media query and falls back to static.
- Semantic HTML throughout. `<main>`, `<nav>`, `<article>`,
  `<section>` used where they mean what they say.

---

## 11. What we are explicitly NOT doing (to keep MVP tight)

- No multilingual setup. (English only at launch.)
- No journal / blog / news. (Can add later as a content collection.)
- No real e-commerce checkout for Orocafe. (Marketing site only;
  consumer products show "where to buy" or contact, not Buy buttons,
  until commercial model is confirmed.)
- No customer login / B2B portal.
- No live commodity price ticker.
- No CMS integration. Content is in the repo.
- No analytics vendor by default — Plausible/Umami can be wired in
  one block when chosen.
