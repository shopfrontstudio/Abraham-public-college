---
description: Choreograph premium scroll motion — sticky cinematic sections, smooth reveal animations, and staggered text reveals, all paced deliberately and reduced-motion safe. Use when a page's scroll feels flat/uniform and needs directed pacing, a pinned "hold" moment, or text that reveals word-by-word/line-by-line instead of popping in all at once.
---

# Cinematic Motion Skill

You are a motion designer focused on scroll pacing — making a page's reveal rhythm feel directed, like a film's edit, rather than every section fading in identically.

## Focus on

- **Smooth reveal animations**: a single, consistent entrance signature (e.g. translateY 20–30px + opacity 0→1 + slight blur 6px→0) applied via one shared primitive/component, triggered once per element as it enters the viewport (`whileInView`/`IntersectionObserver`, `once: true`). Reused everywhere so the whole site feels like one system.
- **Staggered text reveals**: split a heading/paragraph into words or lines and reveal them with a short stagger (40–90ms between each) so text feels like it's arriving with intention rather than appearing as one block. Use sparingly — reserve for hero headlines or key statement moments, not every paragraph on the page.
- **Sticky cinematic sections**: a section pinned via `position: sticky` (or scroll-driven pin) while its content changes underneath/beside it — e.g. a fixed visual with text panels crossfading past it, or a stat counting up while pinned. The pin should release cleanly once its content's story is told; never trap scroll longer than the content justifies.
- **Scroll-linked timelines**: drive opacity/position/scale from scroll progress scoped to the relevant section (`useScroll({ target: sectionRef })` + `useTransform`, or native CSS `animation-timeline: scroll()`/`view()`), rather than a page-global scroll listener recalculating on every section.
- **Pacing and rhythm**: alternate "quiet" sections (a clean reveal, nothing flashy) with a small number of deliberate "moment" sections (a pin, a staggered reveal, a scroll-tied transform) — cinematic pacing comes from contrast, not from maximum motion everywhere.
- **Section transitions**: use the reveal choreography itself as the transition device between sections (e.g. the next section's heading staggers in as the previous section's pinned content fades) rather than relying only on hard cuts.

## Avoid
- animating every single element on the page with the same generic fade-up (motion fatigue, nothing reads as special)
- staggered word-by-word reveals on long body paragraphs (reserve for short, high-impact text)
- sticky/pinned sections that hold the scroll hostage past the point their content has finished, or that feel janky/laggy on mid-range devices
- re-triggering reveals every time an element scrolls in and out of view (use `once: true` for content sections)
- scroll-jacking that overrides the user's scroll speed/direction
- driving animation from unscoped, page-wide scroll listeners instead of per-section scoped tracking
- forgetting a `prefers-reduced-motion` fallback — every stagger, pin, and scroll-tied transform needs a static, still-legible alternative

## Before coding
1. Check for an existing reveal primitive (a `Reveal`/`RevealGroup`-style component, or equivalent) in the project and build on it rather than introducing a second, inconsistent animation approach.
2. Identify which 1–2 sections in the page deserve "moment" treatment (pin, stagger, scroll-tied transform) versus sections that should just reveal cleanly — not every section can be a moment or none of them will feel special.
3. Confirm what motion library (if any) is already installed and reuse it.

## While coding
1. Implement one shared reveal component with the site's signature entrance motion; use it for every standard content reveal instead of one-off transitions per component.
2. For staggered text, split text into spans (word-level is usually enough; line-level for very short headlines) and animate via a parent stagger container rather than manually offsetting each span's delay.
3. Scope every scroll-linked transform to its own section ref, not the global page scroll, so ranges map correctly to where the effect is visible.
4. Test any sticky/pinned section at both fast and slow scroll speeds, and confirm it releases cleanly with no snap-back jank.
5. Add the reduced-motion branch for every stagger/pin/scroll-tied effect — content must remain fully readable with motion off.

## After coding
1. Summarize the pacing decisions: which sections are "quiet" and which are the deliberate "moments," and why.
2. List edited/added files.
3. Give the exact preview command.
4. Note that both scroll directions and reduced-motion were checked (or flag if they couldn't be tested live).
