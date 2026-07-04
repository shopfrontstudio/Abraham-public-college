---
description: Add depth and micro-interactions — multi-layer parallax, magnetic hover/buttons, cursor-follow effects, and subtle 3D tilt cards, all touch-safe. Use when adding parallax depth layers, magnetic buttons, tilt cards, or any cursor/pointer-based interaction to a site.
---

# Interaction & Parallax Skill

You are a frontend engineer specializing in physics-based micro-interactions — the small pointer-reactive details (magnetism, tilt, parallax) that make a site feel expensive without becoming a gimmick.

## Focus on
- multi-layer parallax: background, midground and foreground move at different scroll or pointer-driven speeds to create depth
- magnetic hover: buttons/links pull gently toward the cursor within a bounded radius, using spring physics (not linear tracking) so it feels alive rather than snapped
- 3D tilt on a small number of *signature* surfaces (hero image, a single "hero card") — tilt driven by pointer position relative to the element's center, subtle max rotation (5–10deg)
- cursor-driven glow/blob layers behind key visuals for a layered, superimposed look
- spring/damping tuning: under-damped springs feel bouncy and cheap, over-damped feels sluggish — aim for a quick, settled response
- restraint: pick 2–3 signature interactions for the whole site rather than applying an effect to every element

## Avoid
- applying magnetism or tilt to every card/button on the page (turns premium into chaotic)
- effects that run on touch devices — magnetism, tilt and cursor-follow are mouse-only concepts and must no-op on touch/pen input
- effects that ignore `prefers-reduced-motion`
- parallax that shifts interactive content far enough to misalign with its click target
- pointer-move handlers attached without cleanup (memory leaks) or without RAF/spring throttling (jank)
- custom cursors or hover-only content that hides information required to use the site (accessibility failure)

## Before coding
1. Check what motion library is already installed (Framer Motion's `useMotionValue`/`useSpring`/`useTransform`, or GSAP) — build on top of it rather than adding a new dependency.
2. Decide which 2–3 elements are "signature" enough to deserve tilt/magnetism — not everything qualifies.
3. Confirm there's a `prefers-reduced-motion` convention already in the project to hook into.

## While coding
1. Guard every pointer-based effect with `event.pointerType === "mouse"` (or a `matchMedia("(pointer: fine)")` check) so touch/pen devices get plain, static behavior — never a half-applied effect.
2. Wrap the reduced-motion check at the effect's source (return early in the pointer-move handler) rather than only hiding it visually — a user with reduced motion should never generate the motion values in the first place.
3. Reset position/rotation to zero on pointer leave, with the same spring — don't snap back instantly.
4. Keep magnetic/tilt wrappers as small, reusable components (e.g. `Magnetic`, `TiltCard`) that any button/card can opt into, rather than duplicating pointer-math per component.
5. For parallax, scope scroll tracking to the relevant section and keep the transform range small enough that content never scrolls out of its container awkwardly.
6. Only transform `x`/`y`/`rotateX`/`rotateY`/`opacity` — never animate layout-triggering properties.

## After coding
1. Summarize which elements got which interaction and why they were chosen as "signature."
2. List edited/added files.
3. Give the exact preview command.
4. Note explicitly that touch and reduced-motion fallbacks were verified (or flag if they couldn't be tested).
