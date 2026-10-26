# Oakss Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Oakss site with five image-rich pages built around Digital Skills Training and Management Systems.

**Architecture:** Server-rendered page files under `app/` compose a small set of presentational section components in `components/sections/`. The only client component is `ContactButtons`, which opens the two existing dialog forms.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind 4, lucide-react, existing shadcn/ui.

**Spec:** `docs/superpowers/specs/2026-10-26-oakss-redesign-design.md`

## Global Constraints

- Palette: `amber-900` headings, `amber-600` accents/buttons, `amber-950` dark bands; Oakss logo unchanged.
- Copy verbatim from the client brief (in the spec's page sections).
- Images: plain `<img>`; sources are `public/cloudinary/*` or `https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=1200&q=80`.
- All "talk/enquire/book/start/build" CTAs link to `/contact`.
- No test framework exists; verification is `npm run lint`, `npm run build`, and browser checks.

## Review Focus

- Mobile width (375px): split sections stack, hero image shows below text, no horizontal scroll.
- Broken external image URL: every Unsplash URL must return 200 (checked in Task 5).
- Archived pages must not be routable: `/events` and `/consultations` return 404.
- Admin pages and `/api/*` still build after archiving (they don't import archived files).
- Mobile menu closes after tapping a link, including the "Talk to Oakss" button.

---

### Task 1: Archive old pages

**Files:**
- Move: `app/page.tsx` → `app/_archive/home/page.tsx`
- Move: `app/events/page.tsx` → `app/_archive/events/page.tsx`
- Move: `app/consultations/page.tsx` → `app/_archive/consultations/page.tsx`

- [ ] **Step 1:** `git mv` the three files.
- [ ] **Step 2:** Commit `chore: archive old home, events and consultations pages`.

### Task 2: Section components

**Files (create):** `components/sections/{PageHero,SplitFeature,CardGrid,ChecklistSection,ProcessSteps,CtaBand,SectionHeading,ContactButtons}.tsx`

**Interfaces (produces):**
- `type Action = { label: string; href: string; variant?: "primary" | "secondary" }`
- `PageHero({ eyebrow, title, accent?, body: string[], image, actions?: Action[], children? })` — `accent` renders in amber after `title`; `children` replaces `actions` slot.
- `SectionHeading({ eyebrow?, title, intro?, center? })`
- `SplitFeature({ eyebrow?, title, body: string[], bullets?: string[], image, reverse?, action?: Action, muted? })`
- `CardGrid({ id?, eyebrow?, title, intro?, items: CardItem[], cols: 2 | 3, muted? })` with `CardItem = { title, subtitle?, body: string[], icon?: LucideIcon, image?: string, action?: Action }`
- `ChecklistSection({ eyebrow?, title, intro?, items: string[], image, muted? })`
- `ProcessSteps({ eyebrow?, title, body: string[], steps: { title: string; text: string }[] })`
- `CtaBand({ title, body: string[], actions: Action[] })`
- `ActionLink({ action })` exported from `SectionHeading.tsx` — shared button styling.
- `ContactButtons()` — `"use client"`; renders "Book a Consultation" (opens `ConsultationForm` with `selectedServiceType=""`) and "Send an Enquiry" (opens `BookCallForm`).

- [ ] **Step 1:** Implement components per the interfaces.
- [ ] **Step 2:** `npx tsc --noEmit` passes. Commit `feat: add shared section components`.

### Task 3: Pages

**Files (create):** `app/page.tsx`, `app/digital-skills-training/page.tsx`, `app/management-systems/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`

Section order and copy exactly as in the spec's "Pages" section. Each page exports `metadata` with a page title.

- [ ] **Step 1:** Implement the five pages.
- [ ] **Step 2:** `npm run build` lists routes `/`, `/about`, `/contact`, `/digital-skills-training`, `/management-systems` and not `/events` or `/consultations`. Commit `feat: add redesigned pages`.

### Task 4: Header, footer, forms, metadata

**Files (modify):** `components/Header.tsx`, `components/Footer.tsx`, `components/BookCallForm.tsx` (`serviceOptions`), `app/layout.tsx` (`metadata.description`)

- Nav items: Home `/`, Digital Skills Training `/digital-skills-training`, Management Systems `/management-systems`, About `/about`, Contact `/contact`; amber "Talk to Oakss" button → `/contact` (desktop + mobile).
- `serviceOptions`: `digital-skills` "Digital Skills Training", `management-systems` "Management Systems", `other` "Other".
- Footer: blurb from About copy; Services list links to the two pages; Company list links to About and Contact.

- [ ] **Step 1:** Implement. **Step 2:** lint passes. Commit `feat: update navigation, footer and enquiry options`.

### Task 5: Verification

- [ ] `npm run lint` and `npm run build` succeed.
- [ ] Every Unsplash URL used returns HTTP 200.
- [ ] Browser: each route at desktop and 375px; no horizontal overflow (`document.documentElement.scrollWidth <= innerWidth`); both Contact buttons open dialogs; `/events` 404s.
