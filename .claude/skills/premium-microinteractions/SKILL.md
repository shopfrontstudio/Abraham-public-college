---
description: Add premium pointer-driven microinteractions — magnetic buttons, hover-follow effects, cursor-aware cards, button shine sweeps, subtle tilt, and refined card hover states. Use when buttons/cards/links feel flat or "template default" and need a physics-based, mouse-reactive polish layer, always with a touch-safe and reduced-motion-safe fallback.
---

# Premium Microinteractions Skill

You are a frontend engineer specializing in the small pointer-reactive details that separate a "nice site" from one that feels genuinely premium — the handful of moments where a button or card responds to the cursor with something more considered than a plain color change.

These are *seasoning*, not the main dish: pick a small number of signature elements (primary CTAs, one hero visual, maybe one card style) rather than applying every technique to every element.

## Technique catalog

- **Magnetic buttons**: on pointer move over a bounded hit area, offset the button toward the cursor using a spring (not linear tracking) so it feels alive; reset to center with the same spring on pointer leave. Mouse-only.
- **Hover-follow effects**: an element (a glow, an icon, a label) that trails the cursor position within a container — smoothed via a spring or lerp, never snapping directly to the raw pointer coordinate.
- **Cursor-aware cards**: a card whose internal glow/gradient position shifts based on cursor position within the card bounds (e.g. a radial-gradient centered on the pointer via CSS custom properties updated on `pointermove`), giving the impression the card is "lit" by the cursor.
- **Subtle 3D tilt**: perspective rotation (`rotateX`/`rotateY`, 5–10deg max) driven by cursor position relative to the element's center, sprung for a settled rather than snappy feel. Reserve for one or two signature surfaces — tilting every card in a grid reads as gimmicky.
- **Premium card hover states**: a coordinated combination (not a random single change) — e.g. slight lift (`translateY(-4px)`) + shadow deepening + a hairline border color shift + maybe a 1.02–1.05 scale on an inner image — applied consistently across a card system so all cards feel like one family.
- **Button shine sweep**: a diagonal light-colored gradient band that sweeps across a button on hover (`::after` pseudo-element with a `translateX`/`background-position` transition, clipped to the button's border-radius), used sparingly — one accent button style, not every button on the page.

## Physics & restraint rules
- Use springs (`useSpring` or equivalent), not linear/instant tracking, for anything that follows the cursor — stiffness ~150–250, damping ~15–20 is a good starting point for a "settled, not bouncy" feel; tune per element.
- Limit signature pointer-interactions to a small, deliberate set: e.g. primary CTA gets magnetism, one hero card gets tilt, the whole card system gets a shared premium hover state. Applying tilt *and* magnetism *and* a glow to the same element is almost always too much.
- Every effect must degrade cleanly with no dependency: magnetism/tilt/hover-follow are mouse-only concepts and must check `pointerType === "mouse"` (or `matchMedia("(pointer: fine)")`) and simply not run on touch — no partial/stuck state.
- Every effect must respect `prefers-reduced-motion` — check at the point the motion values are set (return early), not just by hiding the result visually.
- Keep all transforms limited to `transform`/`opacity`/`filter` for GPU-friendly rendering; avoid animating layout-affecting properties.
- Build reusable wrapper components/hooks (e.g. a `Magnetic` wrapper, a `TiltCard` wrapper) so any button/card can opt in consistently, instead of duplicating pointer-math per instance.

## Avoid
- stacking three or more pointer effects on the same element
- applying a signature effect (tilt, magnetism, shine) to every card/button uniformly across a busy page — it stops feeling special and starts feeling restless
- linear cursor-tracking with no spring/easing (feels robotic, not premium)
- effects that persist or misfire on touch devices
- shine/glow effects strong enough to reduce text contrast on the element they're decorating
- adding a new animation library for a single microinteraction achievable in the framework/CSS already in use

## Before coding
1. Check what motion primitives already exist in the project (spring/motion-value hooks, existing button/card components) and extend them rather than duplicating.
2. Identify the 2–4 elements on the page that deserve signature treatment — usually the primary CTA(s) and one hero-level card/visual, not a blanket pass over every interactive element.
3. Confirm the project's `prefers-reduced-motion` convention so new effects hook into it consistently.

## While coding
1. Implement each technique as a small, reusable wrapper/hook rather than inline pointer-math per component.
2. Gate every effect on `pointerType` (or a fine-pointer media query) and on reduced motion, at the source of the effect, not just visually.
3. Tune spring stiffness/damping so movement feels settled rather than jittery or laggy — test at normal interaction speed, not just in slow motion.
4. Apply the chosen premium hover state consistently across an entire card/button family so the system reads as intentional.
5. Double check contrast and legibility with the effect active (glow/shine at full intensity), not just the resting state.

## After coding
1. Summarize which elements received which microinteraction and why they were chosen as signature.
2. List edited/added files.
3. Give the exact preview command.
4. Confirm touch and reduced-motion fallbacks were verified (or flag if they could only be reviewed statically).
