# Product research (recovered from misplaced Cursor chat)

This document restores planning from a Cursor thread that ran while the **wrong workspace folder** (`rowen-chess`) was open. Source transcript ID: `0ec52b42-9351-46e4-be05-d8633251ff24` (under `~/.cursor/projects/Users-rowen-cursor-projects-rowen-chess/agent-transcripts/`).

---

## North star

- **Goal**: Passive / low-ongoing-touch income; minimal setup and management alongside a full-time job.
- **Expertise (context only)**: Branding, UI/UX, product design, enterprise-scale design systems (VP design-system lead). Use this as credibility and taste—not as a mandate to build MUI-scale systems.

---

## What we ruled out or reframed

| Topic | Outcome |
|--------|---------|
| Figma-plugin-first strategy | **Dropped** as primary path—platform risk (AI builders skipping Figma) and tying revenue to one ecosystem. |
| “Full design system kit” + heavy Figma | **Reframed**. Enterprise Figma/code DS builds are **hundreds to 1000+ hours** (cf. MUI, Primer, major kits). Not viable as a low-effort side project unless scope is tiny or mirrored spec (e.g. shadcn-parity Figma). |
| Competing head-on with shadcn | **Avoid**. Differentiation = **niche + layer on top** (themes, motion, templates, industry-specific sections)—similar to Tailwind Plus, Aceternity-style packs, shadcraft’s Figma-meets-shadcn model. |
| Large pre-launch social / newsletter grind | **Rejected** as primary motion—preference for hands-off growth; see GTM below. |

---

## Evidence: pure-code products can monetize (no Figma required)

Examples cited in-thread (verify independently before relying on figures):

- **Tailwind Plus** (Tailwind Labs)—premium templates/components; strong launch and ongoing revenue story (historical posts from Adam Wathan).
- **shipfast** (Marc Lou)—Next.js boilerplate / starter; large lifetime revenue shared publicly.
- **Aceternity UI Pro** (Manu Arora)—premium React + Tailwind + motion blocks; public interviews / “brand facts” style disclosures.

**Pattern**: Buyers pay for **polish + speed + niche fit**, delivered as **copy-paste or repo** access—not governance-heavy “design system programs.”

---

## Strategic direction agreed

### Model

**Premium niche UI pack** (Aceternity-shaped): one marketing + docs + catalog site; paywall unlocks copy-paste React sections/components.

### Phase 1 niche (primary)

**Fintech-shaped landing/marketing sections**—credibility from bank/fintech design experience. Moat is **fintech-specific patterns** (trust, compliance cues, product education, dashboards previews, etc.), not generic components.

### Phase 2 (only after Phase 1 proves demand)

**AI / indie-hacker pack**—same infrastructure, different niche section library.

### Employer / compliance gate (non-negotiable)

Before building **public fintech-facing** product: confirm handbook / Legal on **moonlighting, IP assignment, outside business, non-compete**. If fintech is risky, **swap Phase 1 to AI/indie niche** (same product shape).

---

## Product decisions (latest revisions)

1. **Theming**: Do **not** ship multiple fully-art-directed brand themes. Ship **one polished default** using **shadcn-compatible CSS variables** so teams can paste themes from generators (e.g. [shadcn create / theme tooling](https://ui.shadcn.com/create)).
2. **Stack**: React + Tailwind + Framer Motion; **Lucide** icons; no paid asset packs required.
3. **Hosting**: **Railway** OK (existing account); Next.js app is fine there.
4. **Site architecture**: **Single** Next.js app + domain—marketing, demos, catalog, docs, and purchase flow in one experience. **Lemon Squeezy** (or similar) as **checkout overlay / short redirect**, not a separate “storefront site.”
5. **Scope framing**: Selling **fintech-specific sections/patterns** buyers theme themselves—not a full enterprise DS engagement.

---

## Go-to-market (preference: SEO-first, low “creator” load)

- **Primary**: SEMrush (or equivalent) competitive/long-tail keyword work; evergreen **long-form** docs/blog articles targeted to intent (limited count during build—e.g. on the order of ~10 articles over the build phase mentioned in-thread).
- **Skip / minimize**: Ongoing Twitter build-in-public, newsletter-as-channel, paid ads (unless you later choose otherwise).
- **One-time, low effort (~few hours total)**: Single **Product Hunt** + **Show HN** style launches for spike traffic + backlinks (assistant argued these are still worth it alongside SEO).

**Tradeoff**: Lower Year-1 upside vs. audience-heavy launch, slower ramp, compounding if SEO content ships.

---

## Effort / cash / revenue (planning ranges from chat—not promises)

Approximate ranges discussed after revisions:

- **Build**: ~180–260 hours part-time (catalog + marketing site + docs + checkout wiring).
- **Upfront cash**: ~$400–800 (domain, LLC optional timing, tooling; payment processor fees %).
- **Post-launch ongoing**: ~3–5 hrs/week if optimizing; less if coasting (support + occasional updates).
- **Revenue**: Highly uncertain; thread floated **lower Year-1** expectations under SEO-first posture vs. waitlist-heavy launch—treat any numbers as **hypotheses** until validated.

---

## Validation checklist before heavy build

1. Handbook / HR-Legal clearance for niche (especially fintech).
2. **~2-hour market check**: SEMrush volumes for target keywords; scan PH / Indie Hackers for direct competitors; **5–10 founder DMs** on willingness to pay at target price.
3. **Anonymous product brand** decoupled from day-job employer.

---

## Comparable mechanics (for clarity)

- **Aceternity**: Login → browse → copy code; community/docs support—not an install team.
- **shipfast**: Private repo + docs; customer clones and owns integration—not done-for-you implementation.

---

## Note on duplicate Cursor messages

The original chat log showed the same user prompts repeating (likely UI/sync glitch). Substance above reflects the **final agreed revisions** (themes, Railway, unified site, SEO-first, Lucide-only).

---

## Original detailed plan artifact

The full phased plan lives in this repo as [.cursor/plans/passive_design_system_business_bbdf3d97.plan.md](../.cursor/plans/passive_design_system_business_bbdf3d97.plan.md). A duplicate also remains in your global Cursor plans dir: `/Users/rowen/.cursor/plans/passive_design_system_business_bbdf3d97.plan.md`.
