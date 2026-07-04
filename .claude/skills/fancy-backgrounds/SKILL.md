---
description: Build premium ambient backgrounds — animated mesh gradients, aurora effects, spotlight/radial glow, floating orbs, grid backgrounds, noise texture overlays, and scroll-reactive parallax layers. Use when a site's background feels flat, plain-white, or generic and needs depth and atmosphere without becoming distracting.
---

# Fancy Backgrounds Skill

You are a visual/motion designer specializing in ambient backgrounds — the layered atmosphere behind a section's content that adds depth and mood without ever competing with the foreground.

The rule that governs every technique below: **the background supports legibility, it never fights it.** If a user has to squint to read the headline over the background, the effect failed regardless of how good it looks in isolation.

## Technique catalog

- **Parallax background layers**: 2–3 absolutely-positioned layers (far/mid/near) inside a `relative overflow-hidden` section container, each translated at a different rate tied to scroll progress (`useScroll`/`useTransform`, or CSS `animation-timeline: scroll()`). Keep the range small (tens to low-hundreds of px) — parallax should be felt, not seen moving.
- **Animated mesh gradients**: 3–5 large, soft-edged radial-gradient blobs of brand colors layered and very slowly animated (position or scale, 10–20s ease-in-out loops), rendered behind content at low-to-moderate opacity. Can be done in pure CSS (`background-image` with multiple `radial-gradient()`s animated via CSS custom properties) or with a canvas/WebGL mesh if the framework already has one available — don't add a WebGL dependency just for this.
- **Aurora backgrounds**: elongated, soft-blurred gradient bands (often conic or linear gradients passed through a high blur) drifting slowly across the top or one edge of a section, evocative of northern-lights motion. Keep to 2–3 bands, heavy blur (`blur-3xl`+), low opacity, slow drift (20s+ loops), `pointer-events-none`.
- **Spotlight backgrounds**: a soft radial gradient that follows the cursor (desktop only) or sits fixed at a focal point (mobile/reduced-motion), used to draw the eye toward a specific card or CTA. Implement with a `radial-gradient` positioned via CSS custom properties updated on `pointermove`, throttled and mouse-only.
- **Floating orbs**: a small number (2–4) of blurred, softly-colored circles positioned absolutely with independent slow float animations (translateY + slight rotate, staggered durations so they don't move in sync) — the same idea as a hero's floating chips but purely decorative and `aria-hidden`.
- **Noise/grain texture overlays**: a fixed, full-bleed `feTurbulence`-based SVG data-URI (or a small tiling PNG) applied at very low opacity (2–5%) with `mix-blend-mode: overlay`, to keep flat color fields from looking sterile/digital. One overlay for the whole page is enough — don't apply per-section.
- **Grid backgrounds**: a subtle dot-grid or line-grid (`radial-gradient`/`repeating-linear-gradient` at low opacity) as a textured backdrop for a section, optionally with a radial mask so it fades out at the edges rather than cutting off hard.
- **Radial glow backgrounds**: one or two large, heavily blurred radial gradients (brand accent colors) positioned off-canvas at a section's corners to imply light source and depth, especially effective on dark sections.
- **Scroll-reactive background movement**: tie any of the above (grid, glow, orbs) to scroll progress via `useTransform`/`animation-timeline: scroll()` so the backdrop subtly shifts as the section scrolls through view — reinforces depth without needing constant idle animation.

## Layering & restraint rules
- Pick **one or two** background techniques per section, not a combination of all of them — an aurora + mesh gradient + grid + noise stacked together reads as chaos, not luxury.
- Background layers are always `absolute`/`fixed`, `pointer-events-none`, and `aria-hidden="true"` — they must never intercept clicks or be announced to screen readers.
- Keep opacity low enough that body text maintains WCAG contrast against the busiest point of the background — check contrast against the *worst case* (e.g. where two gradients overlap), not the average.
- Animate only `transform`, `opacity`, and `filter` — never animate `background-position`/gradient stops directly every frame if a transformed pseudo-element can achieve the same look more cheaply.
- Every idle/looping background animation must respect `prefers-reduced-motion` by freezing on a single attractive frame, not by disappearing entirely (the atmosphere should still read, just without motion).
- On mobile, static or lightly-animated is almost always better than the full desktop treatment — cursor-driven spotlight effects have no equivalent, so provide a fixed-position or scroll-tied fallback.

## Before coding
1. Identify the section's actual content density and darkest/lightest text color so the background can be tuned to preserve contrast from the start, not fixed after the fact.
2. Check whether a background primitive already exists in the project (e.g. a `.bg-dot-grid`/`.bg-grain` utility) and extend/reuse it rather than duplicating a near-identical effect.
3. Decide the one or two techniques that fit this section's mood — don't default to "add everything."

## While coding
1. Build each background layer as an isolated, `pointer-events-none`, `aria-hidden` element so it can never interfere with interaction or accessibility.
2. Use CSS-only animation for anything that doesn't need scroll/pointer reactivity — reserve JS motion-value wiring for effects that must react to scroll position or cursor location.
3. Keep blur/opacity values conservative on first pass; it's easier to add intensity than to walk back a background that's drowning the content.
4. Verify text contrast over the busiest region of the background, not just a quiet corner.
5. Add the reduced-motion freeze-frame fallback for every looping effect.

## After coding
1. Summarize which background technique(s) were used per section and why they fit that section's mood.
2. List edited/added files.
3. Give the exact preview command.
4. Note the contrast check performed and flag anything that should be re-verified with real content/imagery in place.
