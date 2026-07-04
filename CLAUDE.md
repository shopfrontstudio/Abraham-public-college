
## Premium UI/UX Standard

For all website work in this project, maintain a premium UI/UX quality bar.

Prioritize:
- premium typography
- cinematic scrolling
- elegant animations
- parallax where suitable
- touch-friendly interactions
- smooth micro-interactions
- strong spacing and alignment
- refined colour palette
- polished mobile design
- accessibility and reduced-motion support

Avoid:
- generic template design
- random animations
- clutter
- weak contrast
- childish layouts unless intentionally designed for children
- overcomplicated sections
- poor mobile responsiveness

Before major visual changes, inspect the current design and briefly explain the creative direction. After changes, provide preview/build commands.

## Premium Interaction & Background Effects

When adding or extending interactive and ambient effects on this site, use:
- tasteful touch interactions — ripple feedback, swipe-friendly cards, and drag/touch micro-interactions that feel native on mobile, never a broken half-state of a desktop effect
- animated backgrounds — aurora gradients, mesh gradients, floating orbs, grid backgrounds, and noise/grain overlays, applied one or two at a time per section, never stacked together
- parallax layers scoped to the section they belong to, for depth without disorienting scroll
- aurora gradients as slow, heavily blurred drifting bands behind hero/feature sections
- floating orbs as soft blurred shapes with idle float animation, kept to a small number (2–4) per section
- spotlight effects that follow the cursor on cards to draw the eye, mouse-only with a static resting state elsewhere
- magnetic buttons reserved for primary CTAs, using spring physics, mouse-only
- subtle card tilt (cursor-driven 3D) reserved for one or two signature surfaces, not every card
- button shine sweeps on a single accent CTA style, not applied to every button
- mobile-safe micro-interactions — every pointer-driven effect must have a working touch/tap equivalent and respect `prefers-reduced-motion`

Avoid:
- over-animation — stacking multiple effects (e.g. parallax + aurora + tilt + shine) on the same element or section
- poor performance — animating layout-triggering properties instead of `transform`/`opacity`/`filter`, or piling on heavy blur/gradient layers without restraint
- chaotic visual effects — motion with no pacing or hierarchy, or applying every technique to every element instead of choosing a few deliberate signature moments
- shipping any effect without a touch-safe fallback and a `prefers-reduced-motion` fallback
