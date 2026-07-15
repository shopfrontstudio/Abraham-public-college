import { useLayoutEffect, useMemo, useState } from "react";
import { useMotionValue } from "framer-motion";
import { IntroContext } from "./intro-context";

export function IntroProvider({ children }) {
  const [headerVisible, setHeaderVisible] = useState(false);
  const progress = useMotionValue(0);

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const resetFrame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => {
      window.cancelAnimationFrame(resetFrame);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  const value = useMemo(
    () => ({
      headerVisible,
      progress,
      setHeaderVisible,
    }),
    [headerVisible, progress],
  );

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}
