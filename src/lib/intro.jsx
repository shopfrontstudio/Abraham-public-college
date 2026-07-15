import { useCallback, useMemo, useState } from "react";
import { useMotionValue } from "framer-motion";
import { IntroContext } from "./intro-context";

const INTRO_STORAGE_KEY = "abraham-intro-seen-v1";

function hasCompletedIntro() {
  try {
    return window.localStorage.getItem(INTRO_STORAGE_KEY) === "complete";
  } catch {
    return false;
  }
}

export function IntroProvider({ children }) {
  const [isIntroVisit] = useState(() => !hasCompletedIntro());
  const [headerVisible, setHeaderVisible] = useState(() => !isIntroVisit);
  const progress = useMotionValue(isIntroVisit ? 0 : 1);

  const completeIntro = useCallback(() => {
    try {
      window.localStorage.setItem(INTRO_STORAGE_KEY, "complete");
    } catch {
      // The current visit still works when storage is unavailable.
    }
  }, []);

  const value = useMemo(
    () => ({
      completeIntro,
      headerVisible,
      isIntroVisit,
      progress,
      setHeaderVisible,
    }),
    [completeIntro, headerVisible, isIntroVisit, progress],
  );

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}
