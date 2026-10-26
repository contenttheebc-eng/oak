# Oakss Consult Website Redesign — Design

**Date:** 2026-10-26
**Status:** Awaiting review

## Goal

Reposition the site around two offers — **Digital Skills Training** (experienced
professionals) and **Management Systems** (small and medium-sized businesses) —
using the supplied copy, with a dense, image-rich layout modelled on Diligent's
board-management landing page. Success: five pages, each well populated with
imagery and structured sections, none looking sparse.

## Decisions

- Keep the Oakss logo and amber/brown palette (`amber-900`, `amber-600`,
  `amber-950`). Borrow Diligent's *layout*, not its branding.
- Copy is used verbatim from the client brief.
- Imagery: existing `public/cloudinary/*` photos plus Unsplash photos served
  from `images.unsplash.com`. Plain `<img>` tags, matching existing code.
- Old content is replaced but preserved (see Archive).
- Contact buttons reuse existing forms.

## Diligent patterns we adopt

- Split hero: eyebrow label, large headline with accent-coloured phrase,
  supporting text, two buttons on the left; large photo on the right.
- Alternating white / `gray-50` section backgrounds.
- Cards in 2/3-column grids with icons or images.
- Text-beside-image split sections, alternating sides.
- Checklist of benefits beside a photo.
- Full-width dark CTA band closing every page.
- Header with a primary CTA button ("Talk to Oakss").

## Shared components — `components/sections/`

| Component | Purpose | Key props |
|---|---|---|
| `PageHero` | Split hero | `eyebrow`, `title`, `accent`, `body` (paragraphs), `image`, `actions` |
| `SplitFeature` | Text + image side by side | `eyebrow`, `title`, `body`, `image`, `reverse`, `action`, `bg` |
| `CardGrid` | Grid of icon/image cards | `eyebrow`, `title`, `intro`, `items[]` (`title`, `body`, `icon?`, `image?`, `href?`, `cta?`), `cols` (2/3) |
| `ChecklistSection` | Bullet list beside photo | `eyebrow`, `title`, `intro`, `items[]`, `image` |
| `ProcessSteps` | Numbered step strip | `eyebrow`, `title`, `body`, `steps[]` |
| `CtaBand` | Dark closing band | `title`, `body`, `actions` |
| `ContactButtons` | Client component; opens `ConsultationForm` / `BookCallForm` | `variant` |

Buttons link with `next/link`; the "Talk to Oakss" style CTAs go to `/contact`.
Icons come from `lucide-react` (already installed).

## Pages

### `/` Home
1. **PageHero** — eyebrow "Digital Skills Training | Management Systems";
   "Helping Experienced Professionals Stay Relevant. Helping Businesses Scale.";
   CTA "Explore Our Services" (→ `#what-we-do`) + "Talk to Oakss".
2. **What We Do** — `CardGrid` cols=2, two large image cards (Digital Skills
   Training, Management Systems) with full copy and "Explore … →" buttons.
3. **Why Oakss** — `SplitFeature` "Better Skills. Better Systems. Better Performance."
4. **Who We Serve** — `CardGrid` cols=2, image cards for Professionals / Businesses.
5. **Our Approach** — `ProcessSteps` Understand → Design → Implement → Improve.
6. **CtaBand** — "Ready to Strengthen Your Skills or Your Systems?" → "Talk to Oakss".

### `/digital-skills-training`
1. PageHero — "Helping Experienced Professionals Stay Relevant." + "Enquire About Training".
2. ChecklistSection — "Who Is This For?" (7 bullets).
3. CardGrid cols=3 — "What We Cover" (6 icon cards).
4. SplitFeature — "More Than Learning Technology / We Build Confidence."
5. CtaBand — "Start Your Digital Skills Journey →".

### `/management-systems`
1. PageHero — "Helping Small & Medium-Sized Businesses Scale With Structure." + "Talk to Us About Your Business".
2. CardGrid cols=3 — "What We Help You Build" (6 icon cards).
3. SplitFeature — "Build a Business That Can Grow Beyond You." with the "It needs…" lines as a list.
4. CtaBand — "Build Your Management System →".

### `/about`
1. PageHero — "Helping People Work Better. Helping Businesses Grow Better."
2. CardGrid cols=2 — the two core areas, linking to their pages.
3. SplitFeature — "Our work is practical, people-focused…".
4. CtaBand → `/contact`.

### `/contact`
1. PageHero — "Let's Talk About What You Need to Build." with `ContactButtons`
   (Book a Consultation → `ConsultationForm`; Send an Enquiry → `BookCallForm`).
2. Contact details strip: email `office@oakssconsult.co.uk`, Instagram, LinkedIn, Facebook.

All CTA buttons labelled "Book a Consultation", "Enquire About Training",
"Talk to Us…", "Start Your…", "Build Your…" route to `/contact`.

## Header & Footer

- Header nav: Home · Digital Skills Training · Management Systems · About ·
  Contact, plus amber "Talk to Oakss" button (desktop and mobile menu).
- Footer: replace old service list and blurb with the two offers and links to
  the new pages; keep email, socials and copyright.
- Update `metadata.description` in `app/layout.tsx`.

## Forms

- `ConsultForm.tsx`: unchanged.
- `BookCallForm.tsx`: `serviceOptions` becomes Digital Skills Training /
  Management Systems / Other. Submission (mailto) unchanged.

## Archive

- Git tag `old-site` on the commit before the redesign.
- Move `app/page.tsx`, `app/events/page.tsx`, `app/consultations/page.tsx` to
  `app/_archive/{home,events,consultations}/page.tsx` (private folder — not routed).
- `WorkCarousel`, `EventRegistrationFormNew`, `Form`, API routes, admin pages and
  models stay in place untouched.

## Config

- `next.config.ts`: no change needed (plain `<img>`, not `next/image`).

## Testing

- `npm run build` and `npm run lint` pass.
- Visual check of all five routes at desktop and mobile widths in the browser.
- Both Contact buttons open their dialogs; all nav and CTA links resolve.

## Out of scope

- New backend, CMS, or form endpoints.
- Testimonials, stats, or client logos (no source copy supplied).
