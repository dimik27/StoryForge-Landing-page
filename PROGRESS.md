# StoryForge Landing Page — Build Progress & Plan

## Status: Complete — Production build passing ✅

---

## Changelog

### v1.9 — 2026-06-07

| # | Change | File |
|---|--------|------|
| 1 | Navigation: removed "Get Started" button; "Book a Demo" promoted to `variant="primary"` (both desktop and mobile) | `Navigation.tsx` |
| 2 | Hero: removed "See How It Works" secondary button; single primary "Book a Demo" CTA remains | `Hero.tsx` |
| 3 | Benefits CTA card: removed "Start Free" button; "Book a Demo" is now the sole action | `Benefits.tsx` |
| 4 | Integrations: removed "Request an integration" link | `Integrations.tsx` |
| 5 | Pricing: removed all per-tier CTA buttons from all three pricing cards | `Pricing.tsx` |
| 6 | FinalCTA: removed "Start Free" button; single "Book a Demo" link (HubSpot) centered | `FinalCTA.tsx` |

---

### v1.8 — 2026-06-07

| # | Change | File |
|---|--------|------|
| 1 | Created `DemoModalContext` — React context providing `openModal` / `closeModal` / `isOpen` state to the whole app | `src/context/DemoModalContext.tsx` |
| 2 | Created `DemoModal` component — centered overlay with backdrop blur, HubSpot Meetings embed (`meetings-iframe-container`), branded header, Escape-key + backdrop-click close, body scroll lock | `src/components/ui/DemoModal.tsx` |
| 3 | HubSpot Meetings embed script loaded in `index.html` (`MeetingsEmbedCode.js`) | `index.html` |
| 4 | `App.tsx` wrapped with `DemoModalProvider`; `<DemoModal />` rendered at root level | `src/App.tsx` |
| 5 | All 5 "Book a Demo" buttons wired to `openModal`: Navigation (desktop + mobile), Hero, Benefits CTA card, FinalCTA | `Navigation.tsx`, `Hero.tsx`, `Benefits.tsx`, `FinalCTA.tsx` |

---

### v1.7 — 2026-06-04

| # | Change | File |
|---|--------|------|
| 1 | Logos replaced with real remote images from each company's website (`<img>` tags, `h-12`); `.logo-img` CSS class added with `brightness(0) opacity(0.38)` filter — normalises white, coloured, and dark logos to consistent grey on white background with hover lift | `TrustBar.tsx`, `index.css` |

---

### v1.6 — 2026-06-04

| # | Change | File |
|---|--------|------|
| 1 | Logos swapped to Accedia, Paysafe, zigiwave, ICT Strypes (4 logos, down from 6) | `TrustBar.tsx` |

---

### v1.5 — 2026-06-04

| # | Change | File |
|---|--------|------|
| 1 | Problem mockup replaced: transcript→story view removed (matches Hero); new **Decision Log + Action Items** dashboard showing 3 captured decisions (confirmed/open) + 3 assigned action items with owner, due date, and done state | `Problem.tsx` |
| 2 | Logo height increased from `h-7` to `h-9` across all 6 Bulgarian IT company SVGs | `TrustBar.tsx` |

---

### v1.4 — 2026-06-04

| # | Change | File |
|---|--------|------|
| 1 | TrustBar logos swapped to Bulgarian IT companies: Telerik, Musala Soft, Sirma BS, Proxiad, SoftUni Group, Borica; logos made taller (`h-7`) with larger spacing | `TrustBar.tsx` |
| 2 | Problem heading aligned to other sections: standard `section-padding`, `container-width`, blue `text-sm uppercase tracking-wider` label above h2 | `Problem.tsx` |
| 3 | Problem visual replaced: progress-bar cards removed; new product mockup card (dark chrome header, transcript conversation, generated user story, acceptance criteria, action footer) | `Problem.tsx` |
| 4 | `ProcessMockup` function and `CheckCircle2`/`Sparkles` imports removed from HowItWorks; step cards now stand alone | `HowItWorks.tsx` |

---

### v1.3 — 2026-06-04

| # | Change | File |
|---|--------|------|
| 1 | TrustBar split into two distinct bands: (a) white logo strip — monochrome `currentColor` SVG wordmarks, no opacity hack; (b) `slate-900` dark stats band — 5xl font-black numbers, vertical `divide-slate-700` separators, no cards | `TrustBar.tsx` |
| 2 | Problem section redesigned in Miro style: `slate-50` background, thin label bar across top, h2 followed by three `01/02/03` oversized-numeral pain points (wide gap layout), progress-bar visual comparison replaces timeline cards | `Problem.tsx` |

---

### v1.2 — 2026-06-04

| # | Change | File |
|---|--------|------|
| 1 | Problem section redesigned: text shortened, 4 cards replaced with pain/outcome bullet lists, sticky `ProblemVisual` timeline added on right | `Problem.tsx` |
| 2 | TrustBar header redesigned: centered label between two horizontal rules replacing plain uppercase text | `TrustBar.tsx` |
| 3 | HowItWorks step numbers moved beside the icon (not behind it); color changed from `slate-100` to `slate-300` for visibility | `HowItWorks.tsx` |
| 4 | `BacklogMockup` removed from Features section; feature cards now stand alone | `Features.tsx` |
| 5 | All remaining `Slack` references replaced with `Microsoft Teams` | `Benefits.tsx`, `Integrations.tsx` |
| 6 | Newsletter and FAQ sections swapped — Newsletter now appears before FAQ in page order | `App.tsx` |

---

### v1.1 — 2026-06-04

| # | Change | File |
|---|--------|------|
| 1 | Replaced placeholder company text with inline SVG logos (Microsoft, Atlassian, SAP, Deloitte, Accenture, Spotify) | `TrustBar.tsx` |
| 2 | Metrics redesigned as individual cards with color-coded values; labels updated to "Hours saved", "Meetings processed", "Artifacts generated" | `TrustBar.tsx` |
| 3 | Step numbers now rendered as large 7xl background numerals; removed blue pill detail tags | `HowItWorks.tsx` |
| 4 | Added `ProcessMockup` — 3-column static UI card (transcript / generated story / review queue) below the step cards | `HowItWorks.tsx` |
| 5 | Removed Slack, Google Meet, GitHub cards; kept only Teams, Jira, Confluence; redesigned as feature-rich cards with benefit lists | `Integrations.tsx` |
| 6 | Plus plan price changed to €20/seat; Pro plan price changed to €45/seat; "Dedicated Slack channel" feature removed from Pro | `Pricing.tsx` |
| 7 | Newsletter completely redesigned as a split-panel card (dark blue gradient) with perk list and inline form | `Newsletter.tsx` |
| 8 | Footer simplified to 2 link columns (Product + Legal); removed Company and Resources; Twitter replaced with Instagram + Facebook | `Footer.tsx` |
| 9 | Added `BacklogMockup` — generated backlog items table with ID / title / type / priority / status columns | `Features.tsx` |
| 10 | Added `BeforeAfterMockup` — side-by-side before/after sprint timeline (9h → 35min) on dark background | `Benefits.tsx` |

---

## What Was Built

A fully working, production-ready SaaS landing page for **StoryForge** using:
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- lucide-react icons
- No external UI library dependencies (all components are custom)

---

## File Structure

```
storyforge-landing/
├── index.html                          # Entry HTML with SEO meta
├── package.json                        # Dependencies
├── vite.config.ts                      # Vite config with React plugin
├── tsconfig.json / tsconfig.node.json  # TypeScript config
├── tailwind.config.js                  # Tailwind with brand color palette
├── postcss.config.js                   # PostCSS for Tailwind
├── public/
│   └── favicon.svg                     # SVG favicon with StoryForge branding
└── src/
    ├── main.tsx                        # React app entry point
    ├── App.tsx                         # Root component — assembles all sections
    ├── index.css                       # Tailwind directives + utility classes
    ├── lib/
    │   └── utils.ts                    # cn() utility (clsx + tailwind-merge)
    └── components/
        ├── ui/
        │   ├── Button.tsx              # Button with 4 variants + 3 sizes
        │   ├── Badge.tsx               # Badge with 4 color variants
        │   └── Card.tsx                # Card with optional hover effect
        ├── layout/
        │   ├── Navigation.tsx          # Sticky nav with mobile menu + scroll detection
        │   └── Footer.tsx              # Simplified dark footer: Product + Legal + 4 social icons
        └── sections/
            ├── Hero.tsx                # Hero with headline + live UI mockup card
            ├── TrustBar.tsx            # Accedia, Paysafe, zigiwave, ICT Strypes logos (h-9) + dark stats band
            ├── Problem.tsx             # Blue label + 01/02/03 numerals + Decision Log mockup
            ├── HowItWorks.tsx          # 4-step cards, number beside icon (no mockup)
            ├── Features.tsx            # 8 feature cards (no mockup)
            ├── Benefits.tsx            # 5 outcome cards + BeforeAfterMockup timeline
            ├── Security.tsx            # Sticky left copy + 6 trust feature cards
            ├── Integrations.tsx        # 3 integration cards (Teams, Jira, Confluence) with benefit lists
            ├── Pricing.tsx             # 3-tier pricing (Free / €20 Plus / €45 Pro)
            ├── FAQ.tsx                 # 7-question accordion
            ├── Newsletter.tsx          # Split-panel blue card with perk list + subscribe form
            └── FinalCTA.tsx            # Gradient CTA with two action buttons
```

---

## Section Map

| # | Section | Component | Anchor |
|---|---------|-----------|--------|
| 1 | Navigation | `Navigation.tsx` | (sticky) |
| 2 | Hero | `Hero.tsx` | — |
| 3 | Trust Bar | `TrustBar.tsx` | — |
| 4 | Problem | `Problem.tsx` | `#problem` |
| 5 | How It Works | `HowItWorks.tsx` | `#how-it-works` |
| 6 | Features | `Features.tsx` | `#features` |
| 7 | Benefits | `Benefits.tsx` | `#benefits` |
| 8 | Security | `Security.tsx` | `#security` |
| 9 | Integrations | `Integrations.tsx` | `#integrations` |
| 10 | Pricing | `Pricing.tsx` | `#pricing` |
| 11 | Newsletter | `Newsletter.tsx` | — |
| 12 | FAQ | `FAQ.tsx` | `#faq` |
| 13 | Final CTA | `FinalCTA.tsx` | — |
| 14 | Footer | `Footer.tsx` | — |

---

## How to Run Locally

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
# → Opens at http://localhost:5173

# Production build
npm run build
# → Outputs to /dist

# Preview production build
npm run preview
```

---

## Design Decisions

- **Color palette**: Custom `brand` blue scale (#2040f5 primary) — enterprise-appropriate, not playful
- **Typography**: System font stack — fast loading, OS-native rendering quality
- **Dark sections**: Benefits uses `slate-950` background for contrast and visual rhythm
- **TrustBar**: Two-band layout — white logo strip (monochrome SVGs via `currentColor`) + `slate-900` stats band with vertical dividers and 5xl numbers; Miro-inspired
- **Problem**: `slate-50` section with top label bar, 01/02/03 oversized numerals, minimal copy, progress-bar visual; Miro-inspired
- **HowItWorks mockup**: 3-panel card showing transcript → generated story → review queue flow
- **Features mockup**: Backlog items table mimicking Jira-style interface
- **Benefits mockup**: Before/after sprint timeline (9h → 35min) for immediate impact communication
- **Navigation**: Transparent on load, becomes frosted glass on scroll
- **Pricing**: Plus tier offset with negative margin for visual prominence; EUR pricing
- **Security**: Left-sticky column with right feature grid — anchored reading pattern
- **Newsletter**: Full-bleed blue card with perks on left, form on right — higher engagement than plain form
- **Footer**: Simplified to brand + Product + Legal; social: LinkedIn, GitHub, Instagram, Facebook

---

## What to Customize Next

### High priority
- [ ] Wire up CTA buttons to your booking tool (Calendly, HubSpot, etc.)
- [ ] Replace SVG logo placeholders with real partner/customer logos once available
- [ ] Add real metrics to `TrustBar.tsx` once you have data
- [ ] Set up analytics (Segment, PostHog, Plausible)

### Copy & content
- [ ] Add real testimonials / quotes section (between Benefits and Security)
- [ ] Refine hero headline through A/B testing
- [ ] Add a comparison table (vs. manual process, vs. Otter.ai)

### Technical
- [ ] Add `@fontsource/inter` or Google Fonts for a sharper headline font
- [ ] Connect Newsletter form to an email provider (Mailchimp, Resend, ConvertKit)
- [ ] Add Open Graph / Twitter card meta tags for social sharing
- [ ] Set up Cloudflare Pages or Vercel for deployment
- [ ] Add cookie consent for GDPR compliance if targeting EU

### Future sections to consider
- [ ] Testimonials / customer quotes section
- [ ] Interactive product demo / embedded video
- [ ] Team / about section for credibility

---

## Build Stats (Production)

| Asset | Size | Gzip |
|-------|------|------|
| CSS | 33.54 kB | 6.18 kB |
| JS | 239.59 kB | 70.79 kB |

Fast load times — no heavy dependencies.

