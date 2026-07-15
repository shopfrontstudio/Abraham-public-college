import { useEffect } from "react";
import { gsap } from "./gsap";

// Eased in-page navigation via ScrollToPlugin. One delegated listener covers
// every `a[href^="#"]` (header, hero CTAs, footer quick links), scrolling on
// the signature ease with the sticky header height already accounted for by
// each section's CSS scroll-margin-top. Reduced-motion users jump instantly.
export function useAnchorScroll() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;

      if (reduceMotion) {
        window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - offset);
        return;
      }

      gsap.to(window, {
        duration: 1.05,
        ease: "apc",
        scrollTo: { y: target, offsetY: offset, autoKill: true },
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
