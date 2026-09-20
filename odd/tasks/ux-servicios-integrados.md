# UX/UI fixes — integrated management platform positioning

## Objective

Align the landing page with the stated offer: digitalization of **integrated**
management systems (ERP-class). Fix the lead-losing form bug, restructure the
services section so it communicates one integrated platform instead of four
standalone products, and clear the technical/accessibility debt.

## Problem

- The contact form reports success when the network request fails, so failed
  leads are silently lost.
- The services section renders four symmetrical, independent cards. That reads
  as a catalogue of separate products and contradicts the "integrated" promise
  that is the core differentiator.
- Feature lists are technical capabilities, not buyer-facing outcomes.
- Two card accents (`#4a7c9b`, `#b86a5a`) sit outside the gold design system.
- `about.astro` is orphaned; footer navigation omits Servicios.
- No Open Graph tags: link previews are empty on WhatsApp/LinkedIn.
- `.btn` has no `:focus-visible`; `--text-muted` is 4.27:1 against `--bg-deep`
  (fails WCAG AA for normal text).

## Scope

Authorized: `src/components/`, `src/layouts/`, `src/styles/`, `src/pages/`.

Out of scope: a case-study / portfolio section. See TASK-03.

## Constraints

- Astro 7 static site. No test runner in `package.json`.
- Strict TDD is configured globally but this project has no test
  infrastructure and the changes are markup/CSS. Verification is
  `npm run build` (runs `astro check`) plus structural readback.
- Do not fabricate client names, metrics, logos, or delivered-work evidence.

## Revision — actual product identified

The user confirmed the real product: a professional-services ERP with six
modules — Propuestas, Control de Proyectos, Timesheet, Control Documentario,
Logística, Personal. "Control documentario" places it in engineering /
consulting, not distribution.

TASK-02 shipped a goods flow (Compras → Inventario → Ventas → Facturación →
Dashboard) because the old copy listed kardex, multi-almacén and barcodes.
That was the wrong buyer. TASK-05 corrects it.

**Assumption stated:** the services ERP *replaces* the distribution framing
rather than sitting beside it. Nothing the user described involves merchandise
inventory. If distribution work also exists, the stock modules come back.

## Tasks

- [x] **TASK-01** — Fix the contact form failure path (`Cotizar.astro`)
  - Split `.catch()` from `.then()`; never show success on failure
  - Add an error state with retry + direct email fallback
  - Add `aria-live` to both status regions
  - Drop `required` from the Empresa field
  - Add a data-handling note (Ley 29733)

- [x] **TASK-02** — Restructure Servicios as one integrated platform
  - Reframe four services as four modules of a single system
  - Add a visual that shows how the modules exchange data
  - Rewrite feature bullets as buyer outcomes
  - Return card accents to the gold design system
  - Carry the chosen module into the quote form select

- [x] **TASK-03** — ~~Case studies section~~ → replaced by a trust section
  - The four files in `public/images/` are AI-generated concept renders, not
    screenshots of delivered software. `ventiflow.png` contains the prompt
    fragment "BUILT OF HEAVY STEEL, RUST AND GRIME"; `weighflow.png` reads
    "Industar Interface"; `tiretrack.png` and `loadgrade.png` show
    Caterpillar and Michelin trademarks. They are not usable as evidence.
  - The user confirmed real client screenshots exist but are covered by NDA,
    so a screenshot-based portfolio is impossible, not merely unavailable.
  - Built `Confianza.astro` instead: it states the NDA position openly and
    turns it into a trust signal, since the buyer is granting access to their
    own billing, stock and margin data.
  - Every claim in it already appears elsewhere on the site (Proceso steps
    03-04, hero, quote benefits). No new claim was invented.
  - Anonymised case studies still pending: needs sector, scale, problem and
    outcome per project, confirmed by the user.
  - The four renders were deleted with `git rm` at the user's explicit request.
    They stay recoverable from git history; nothing referenced them.

- [x] **TASK-04** — Technical and accessibility debt
  - Open Graph / Twitter / canonical in `MainLayout.astro`
  - `.btn:focus-visible` in `global.css`
  - Raise `--text-muted` to pass WCAG AA
  - Footer: add Servicios + Sobre mí, point module links at real anchors
  - Correct the "frontend freelance" positioning in the hero

- [x] **TASK-05** — Repoint the whole site at the services-firm buyer
  - Six real modules replace the four generic ones, each with its
    `#modulo-*` anchor and its integration line
  - Flow diagram rewritten as the margin chain:
    Propuesta → Proyecto → Timesheet → Costos → Rentabilidad
  - Quote form options rebuilt to match the six modules, plus
    "plataforma completa" and "integrar sistemas que ya tengo"
  - Hero, footer, `about`, page title and meta description realigned
  - Two design tokens added (`--gold-amber`, `--sand`) so six accents stay
    inside the gold system; both above 10:1 against `--bg-deep`
  - All distribution wording removed from `src/`

- [x] **TASK-06** — Drop the Hermes framing, use the real name
  - Hero badge `ΕΡΜΗΣ` → `STEEP SALVADOR`; the glyph chip is reused rather
    than removed, so the badge keeps its design
  - Hero h1 "Como Hermes, conecto tu empresa con sistemas que crecen" →
    "Construyo el sistema que te dice si un proyecto gana o pierde plata"
  - Footer byline and `about` now read "Steep Salvador, programador freelance"
  - Two stylesheet comments that named Hermes cleaned up
  - `rg -in "hermes|ΕΡΜΗΣ|mensajero"` over `src/` and `dist/`: zero hits

- [x] **TASK-07** — Unify the brand on CodeCraft Perú
  - Resolves the three-name problem: logo, title and copy now agree
  - `SteepDev` and the personal name are gone from all 9 places they appeared
    (page titles, `og:site_name`, hero badge, footer byline, copyright,
    the quote email subject, and the about page)
  - `about` reframed as "Quiénes somos"; the footer nav link follows
  - **Voice decision:** company name, first-person singular voice. The rest
    of the site already spoke that way ("Construyo", "te respondo",
    "Despliego"), and it keeps "hablas directo con quien programa" credible.
    A plural voice would contradict the direct-dealing differentiator.

- [x] **TASK-08** — Swap the gold design system for navy
  - Not a token swap: the grounds were warm too (`#060504`, `#0c0a06`, the
    body gradient, the starfield, the logo mark). Navy accents over a warm
    black read muddy, so the whole system moved cool.
  - **Navy is the ground, not the accent.** A true navy accent on a near-black
    page is invisible, so the accents are the lighter end of the blue ramp.
  - Tokens renamed rather than left lying: `--gold*` → `--blue*`,
    `--bronze` → `--blue`, `--aegean` → `--cyan`, `--sand` → `--slate`,
    `--marble` → `--ice`, `--gold-amber` → `--steel`.
  - `--terracotta` → `--danger` (#d98a7a) and stays warm on purpose: an error
    toast rendered in the same blue as everything else stops reading as an error.
  - Two scripted passes over 15 files, then hand fixes: the first pass had
    produced a self-referential `--blue: var(--blue)` (from
    `--bronze: var(--gold)`), and had turned the Control Documentario module
    accent red via the terracotta rename.
  - Every text token measured against `--bg-deep` and annotated in place;
    lowest is `--text-muted` at 6.0:1. `--blue-dark` (3.2:1) is marked
    decorative-only.
  - `--bg-warm` renamed `--bg-elevated` — it held a navy and was unused.

- [x] **TASK-09** — Convert every stylesheet to mobile-first
  - The whole project was desktop-first: 15 viewport media queries, all
    `max-width`, walking a desktop base back down to the phone.
  - Inverted to a `min-width` scale of **577 / 769 / 993px**. Those exact
    values (not 576/768/992) keep behaviour identical at every pixel width
    instead of shifting each boundary by one.
  - `navbar.css` was rewritten rather than patched: the off-canvas drawer is
    now the base and the inline desktop row is rebuilt at 769px, which needs
    an explicit unwind (`position: static`, `transform: none`, overlay off).
  - `hero.css` inverted across two levels: the 769px step restores type scale
    and the metrics row; the 993px step restores the left-aligned layout.
  - Preference saved to memory as `mobile-first-css` so it holds in future work.
  - Verified: `rg "@media \(max-width" src/styles/` returns nothing.
    Compiled output carries 4 queries at 577px, 7 at 769px, 5 at 993px, and
    `.hamburger` is `display:flex` at base with `display:none` from 769px up.
  - `prefers-reduced-motion` blocks deliberately left alone — a user
    preference, not a viewport query.

- [x] **TASK-10** — Full SEO pass
  - `astro.config.mjs` reads the origin from `SITE_URL`. Everything that needs
    an absolute URL — canonical, `og:url`, sitemap, robots — derives from it,
    and is omitted rather than guessed when it is unset. **The domain is the
    one thing still missing; set `SITE_URL` and the rest switches on.**
  - `@astrojs/sitemap` installed and registered only when the origin exists.
  - `src/pages/robots.txt.ts` generates robots.txt with a matching Sitemap line.
  - JSON-LD graph: `ProfessionalService` (Lima/PE, areaServed Perú, email) with
    an `OfferCatalog` of all six modules, plus `WebSite` and `WebPage`.
  - **`src/data/modulos.ts` is now the single source of truth.** `Servicios.astro`
    renders from it and the OfferCatalog is built from it, so the structured
    data cannot drift from what the page offers.
  - `noindex` prop added; `src/pages/404.astro` uses it.
  - `lang` tightened to `es-PE`; `robots` meta emitted on every page.
  - Heading hierarchy repaired: Cotizar jumped h2→h4 (benefit titles are now
    h3) and the footer used h6 with no h3/h4/h5 above it (now h3).
  - Skip link to `#main` added for keyboard users.
  - Meta lengths in range: home 47/153, about 30/151 (title/description).
  - Verified with `SITE_URL` set: canonical correct, sitemap lists `/` and
    `/about/` (404 excluded), 404 emits `noindex, follow`, JSON-LD contains
    1 ProfessionalService, 1 OfferCatalog, 6 Offer/Service pairs.

- [x] **TASK-11** — Generate the Open Graph image at build time
  - `src/pages/og-image.png.ts` renders a 1200x630 card with satori, then
    rasterises it with resvg. Scrapers need a raster at an absolute URL and
    will not render SVG, so a PNG is the only option.
  - Built from `src/data/modulos.ts` and the navy tokens, so the card cannot
    drift from the palette or the module list.
  - Source Sans 3 (OFL) vendored under `src/assets/fonts/` — satori takes font
    buffers and has no system fallback.
  - `image` now defaults to `/og-image.png` in `MainLayout`, so `og:image` and
    `twitter:image` fill in automatically once `SITE_URL` is set, and
    `twitter:card` upgrades to `summary_large_image`.
  - **Gotcha:** the first build failed with ENOENT because the endpoint is
    bundled into `dist/.prerender/` before it runs, so `import.meta.url`
    pointed at the chunk. Fonts resolve from `process.cwd()` instead.
  - Verified: output is 1200x630, 74 KB, visually correct; the PNG is not
    listed in the sitemap; without `SITE_URL` the image tags are omitted.

## Acceptance criteria

- A failed form submission shows an error, never a success message.
- The services section states the integration explicitly and shows it.
- `npm run build` passes (`astro check` clean).
- No contrast value below 4.5:1 for normal body text.
- No page claims work that cannot be evidenced.

## Progress

All four tasks are done. TASK-03 changed shape: a screenshot portfolio is
impossible under NDA, so it shipped as a trust section instead.

### Verification evidence

`npm run build` (runs `astro check` then `astro build`):

```
Result (18 files):
- 0 errors
- 0 warnings
- 0 hints
2 page(s) built
```

Structural readback of `dist/index.html`:

- 5 `og:*` tags emitted; `canonical` / `og:url` / `og:image` correctly absent
  because `site` is not set in `astro.config.mjs`
- 5 flow nodes: Compras → Inventario → Ventas → Facturación → Dashboard
- 4 module anchors (`#modulo-erp`, `-inventarios`, `-crm`, `-bi`), 4 `servicio-conecta` rows
- `#error-toast` present with `role="alert"` / `aria-live="assertive"`;
  success toast carries `role="status"` / `aria-live="polite"`
- Off-system accents `#4a7c9b` / `#b86a5a` / `#b8945f` gone from `src/`
- `#confianza` section renders with its 4 cards

Not verified: no runtime test of the FormSubmit failure path (no test runner in
this project). The error branch was checked by reading the code, not by exercising it.

### Follow-ups not done

- Anonymised case studies (sector, scale, problem, outcome — no screenshots).
  The `Confianza.astro` header comment marks where they slot in.
- `src/components/icons/Caduceus.astro` is Hermes' staff, is imported by
  nothing, and is untracked in git. Safe to delete once confirmed.
- `src/styles/greek.css` still draws the meander ornaments. They are purely
  decorative (no text) so they survived this pass — remove only on request.

- Set `site` in `astro.config.mjs` so canonical and absolute OG URLs emit
- Create an OG preview image and pass it as the `image` prop
- `public/favicon.svg` still uses `#4a7c9b`, outside the gold system
- No pricing ranges anywhere, while the form asks the user to pick a budget
- No low-commitment CTA (WhatsApp, 15-minute call) beside the quote form

Engram mirror: **pending** — MCP memory tools were unavailable this session.
Resynchronize `odd/ux-servicios-integrados/tasks` when Engram is reachable.
