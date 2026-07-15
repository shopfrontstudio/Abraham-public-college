import { useMemo, useState } from "react";
import { useMotionValue } from "framer-motion";
import { IntroContext } from "./intro-context";

export function IntroProvider({ children }) {
  const [headerVisible, setHeaderVisible] = useState(true);
  const progress = useMotionValue(1);

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
