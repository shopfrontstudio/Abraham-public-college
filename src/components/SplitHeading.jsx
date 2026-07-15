import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "../lib/gsap";

// Premium masked text reveal: words rise out of an overflow clip with a
// gentle stagger the first time the heading scrolls into view.
//
// - autoSplit re-splits after web fonts load, so line breaks stay correct.
// - Under prefers-reduced-motion the text simply renders; no split, no motion.
// - `as` keeps the semantic tag (h1/h2/p) intact for accessibility and SEO.
function SplitHeading({
  as: Tag = "h2",
  children,
  className = "",
  delay = 0,
  disabled = false,
  stagger = 0.055,
  start = "top 82%",
  y = "110%",
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const target = ref.current;
      if (!target || disabled) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      SplitText.create(target, {
        type: "words",
        mask: "words",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.words, {
            yPercent: 0,
            y,
            opacity: 0,
            duration: 0.9,
            stagger,
            delay,
            scrollTrigger: {
              trigger: target,
              start,
              once: true,
            },
          });
        },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export default SplitHeading;
