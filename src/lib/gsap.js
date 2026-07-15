import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Only the plugins this site actually animates with are registered, keeping
// the bundle lean. ScrollSmoother is deliberately absent: it would hijack
// native scrolling and fight the hero's framer-motion pinned intro.
gsap.registerPlugin(CustomEase, DrawSVGPlugin, ScrollToPlugin, ScrollTrigger, SplitText);

// The site-wide signature ease — the same settle curve as framer-motion's
// EASE ([0.16, 1, 0.3, 1]) so both engines feel like one system.
CustomEase.create("apc", "0.16, 1, 0.3, 1");

// Shared defaults keep every tween on the same voice.
gsap.defaults({ ease: "apc", duration: 0.8 });

export { gsap, CustomEase, DrawSVGPlugin, ScrollToPlugin, ScrollTrigger, SplitText };
