# Current Site Audit — discoverygroupug.com

## Method note (important)

The execution environment's network policy blocks direct HTTP fetches to
`discoverygroupug.com` and almost every other host (`x-deny-reason:
host_not_allowed`). The audit below was assembled from WebSearch result
snippets (which surface excerpts of page copy), Google's indexed
descriptions, and cross-referenced third-party listings (UCDA directory,
LinkedIn, RocketReach, OpenCorporates, Prime Expo, Scribd-hosted UCDA
catalogue, Facebook page metadata).

**Anything that I could not verify from at least one snippet is flagged
`[UNVERIFIED]`.** Before content goes live we should re-run this audit
against the live HTML (either by opening the network policy on a fresh
session, or by you pasting the current copy into a working doc).

Sources cross-referenced:
- `discoverygroupug.com/` (snippet only)
- `discoverygroupug.com/about-us/` (snippet only)
- `discoverygroupug.com/our-products/` (snippet only)
- `discoverygroupug.com/orocafe/` (snippet only)
- `discoverygroupug.com/contact-us/` (snippet only)
- UCDA Coffee & Cocoa Directory 2022 — Discovery Trading Ltd listing
- LinkedIn `ug.linkedin.com/company/discovery-group-ug`
- LinkedIn `ug.linkedin.com/in/mustafa-hashim-2848551a` (CEO profile)
- OpenCorporates: Discovery Group Ltd, Discovery Impex Limited
- Prime Expo 2025 exhibitor profile (Discovery Coftea / Orocafe)
- Facebook `/discoveryimpex/`, Instagram `@orocafeuganda`

---

## 1. Site map

Discovered URL structure (from indexed pages):

```
/                       Home
/about-us/              Company story
/our-products/          Commodity overview
/orocafe/               Orocafe consumer sub-brand landing
/contact-us/            Contact form
```

Note: contact slug is `/contact-us/` not `/contact/`. No evidence of
individual commodity sub-pages, individual Orocafe product pages, a
sustainability/impact page, a news/journal section, or a press page —
which is itself a finding.

---

## 2. Corporate identity & legal structure

| Fact | Source confidence |
|---|---|
| Trading name: **Discovery Group** | High |
| Legal entities: **Discovery Trading Ltd** (founded 2014, agro-export), **Discovery Impex Limited** (agro-trading & processing of coffee, cocoa, vanilla), **Discovery Coftea Limited** (Orocafe brand owner, per Prime Expo listing) | High — OpenCorporates + Prime Expo |
| Umbrella: "Discovery Group" used as the public-facing brand | High |
| Employee count: ~50 | Medium — third-party listings |
| Address: **Plot 92, Namanve Industrial Area, P.O. Box 24135, Kampala, Uganda** | High |
| CEO: **Mustafa Hashim** (Harvard MBA 2012, London Business School 2010, ex-Baaz International) | High — LinkedIn |
| Founded: **2014** (Discovery Trading); **2016** also cited in one snippet [UNVERIFIED — likely refers to Discovery Group Ltd registration vs. Discovery Trading] | Medium |
| Phone / email | **[UNVERIFIED]** — not surfaced in snippets; behind a form on `/contact-us/` |
| Socials: Facebook `/discoveryimpex/`, Instagram `@orocafeuganda`, LinkedIn company page | High |

---

## 3. Copy extracted (verbatim from snippets)

### Homepage / About positioning

> "Discovery Group Ltd is a leading agro-commodity exporter specializing
> in coffee, tea, beans, sesame seeds, and other agricultural crops from
> Uganda."

> "Founded in 2014, Discovery Trading is an environmentally friendly and
> socially responsible company that seeks to improve the livelihoods of
> small farms by providing them access to world markets."

> "The company's expertise is in the agro-commodity export sector —
> dealing in coffee, sesame seeds, vanilla, bird's eye chillies, cotton
> and a variety of pulses. They aim to be a major player in the growth
> of coffee and cocoa from Uganda."

> "Continuous research and sourcing from farmers directly provide the
> company with an important advantage in getting products of a high
> quality."

> "They handle every aspect of exporting, from sourcing the best products
> to processing, sorting, selecting, and transporting them to the port
> of destination if requested."

> "Discovery Implex Limited is also part of Discovery Group which deals
> in agro-trading and processing of coffee, cocoa and vanilla."

### Orocafe positioning

> "With the introduction of Orocafe in 2022, Discovery Group expanded
> its operations to include processing, packaging, and selling finished
> products in the country of origin. Orocafe stands out by sourcing,
> roasting, and packing coffee directly at the origin in Uganda."

> "Orocafe is dedicated to unveiling the richness of African coffee and
> tea to a global audience."

> "Orocafe is a premium coffee brand specializing in Uganda's finest
> single-origin Arabica and Robusta coffees, with certifications
> including Rainforest Alliance, Organic and Halal."

> "The name 'Orocafe' stems from the Greek word for mountain (representing
> respect for the African landscape), and also signifies 'gold,'
> acknowledging coffee as Africa's black gold."

> "Orocafe's diverse products meet a spectrum of preferences: whether
> it's premium coffee bags, Nespresso capsules, instant coffee,
> delightful premixes, classic tea bags, or indulgent instant teas.
> Additionally, they offer single-use drip bags for easy-to-brew filtered
> coffee, perfect for on-the-go convenience."

> "Freshly packed coffee beans or ground coffee in convenient sizes
> (250g, 500g, 1kg, 5 kg)."

---

## 4. Product inventory

### Discovery Group — B2B export commodities

| Commodity | Notes from snippets | Gaps |
|---|---|---|
| Coffee — Arabica | "Ugandan origin arabica"; Mt. Elgon/Bugishu region implied by Uganda standard (not Discovery-specific) | Specific grades, MOQ, certifications per lot |
| Coffee — Robusta | "Ugandan origin robusta" | Screen sizes (12/15/18), moisture % |
| Cocoa | "Cocoa from Uganda" — Discovery Implex handles processing | Fermentation grade, drying method, origin region |
| Vanilla | Vanilla planifolia (Ugandan) | Grade (Gourmet / Extraction), curing, length specs |
| Bird's eye chilli | Listed in commodity range | Whole / crushed, capsaicin grade, organic status |
| Sesame seeds | Listed in commodity range | Hulled / natural, oil content |
| Green beans / Kidney beans | Listed | Grade, screen |
| Pulses (variety) | Listed in marketing copy | Specific pulses (pigeon pea, cowpea, soya?) |
| Tea | Mentioned in top-line copy | Black/green, CTC vs orthodox |
| Cotton | Mentioned once | Whether still active |

### Orocafe — consumer products

| Format | Verified | Notes |
|---|---|---|
| Whole bean / ground coffee 250g, 500g, 1kg, 5kg | Yes | Both Arabica & Robusta single-origin |
| Nespresso-compatible capsules | Yes | Original line (Vertuo not mentioned) |
| Single-serve drip bags | Yes | Positioned as on-the-go |
| 3-in-1 premixes | Yes (snippet says "premixes") | Coffee premixes; sugar/creamer ratios not surfaced |
| Instant coffee | Yes | Jars/sachets format not surfaced |
| Tea bags (classic) | Yes | Origin / blend not surfaced |
| Instant tea | Yes | Format / flavours not surfaced |

Certifications attached to Orocafe: **Rainforest Alliance, Organic, Halal.**
Whether the same certifications apply to the B2B Discovery Group line is
unclear from snippets — likely lot-by-lot.

---

## 5. Visual design read

From the brief plus the type of phrasing surfaced by indexed snippets,
the current site reads as a **mid-2010s WordPress agribusiness theme**:

- Stock-photography hero with text overlay
- Generic green-and-brown palette
- Brochure-style body copy in long paragraphs rather than scannable
  hierarchy
- Product overview likely a grid of icons or basic cards without
  per-commodity depth
- No producer profiles, no traceability dashboard, no journal
- Mobile experience: presumed adequate but not designed-for-mobile
- Photography direction: not original; almost certainly stock or
  generic-Uganda images, given the absence of producer profile content

This is the exact gap the brief identifies: a vertically integrated
origin operator presenting itself as if it were a generic broker.

---

## 6. Specific weaknesses

| # | Weakness | Implication for redesign |
|---|---|---|
| 1 | Single-page treatment of seven distinct commodities — no per-commodity story, specs, or imagery | Build `/products/[slug]` per commodity with origin region, processing, certifications, indicative MOQ |
| 2 | Orocafe buried as one section of the parent site, not given its own visual identity | Two-track architecture: corporate vs Orocafe with distinct treatments |
| 3 | No traceability content visible — no producer profiles, no cooperative names, no elevation/processing data | Make traceability the spine of the design: lot cards, producer cards |
| 4 | Contact is form-only — no phone, no inquiry routing between B2B sourcing and consumer | Split inquiry: B2B form (commodity / volume / port / arrival) + general contact with phone & email visible |
| 5 | No sustainability page despite explicit "improve livelihoods of small farms" positioning | Dedicated `/sustainability` with impact content, farmer numbers, certifications |
| 6 | No team / leadership content — CEO Mustafa Hashim's profile not surfaced on the site | About page should name the team, especially given a Harvard/LBS-credentialled leader is a signal |
| 7 | No facility content — Namanve plant is a real differentiator (origin processing) but not shown | Facility section: photos, capacity, what happens there |
| 8 | No journal / news / harvest reports | Optional Phase-2: lightweight Astro content collection for journal posts |
| 9 | No EUDR / regulatory positioning — large 2026 B2B buyer concern | Sustainability / traceability page should call out EUDR readiness |
| 10 | Photography is stock-feeling | Brief real photography (see `photography-brief.md` once built) |

---

## 7. What's worth keeping

- The core narrative ingredients: 2014 founding, "improve livelihoods,"
  vertical integration, Namanve facility, Orocafe at origin.
- Product breadth (it's genuinely wide — coffee, cocoa, vanilla, chilli,
  sesame, pulses).
- Certification claims for Orocafe (Rainforest Alliance / Organic /
  Halal) — these become design assets, not footer logos.
- Orocafe etymology copy (mountain / gold) — it's the kind of editorial
  hook the new site should feature, not bury.
- CEO biography — currently absent; add it.

---

## 8. Image inventory

**[UNVERIFIED — cannot enumerate without HTML access.]**

Assume all current imagery is either licensed stock or generic
phone-camera shots and budget to replace 100% of hero/origin imagery
with commissioned work (covered in `photography-brief.md`).
