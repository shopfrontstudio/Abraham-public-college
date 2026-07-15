import { createContext, useContext } from "react";

export const IntroContext = createContext(null);

export function useIntro() {
  const value = useContext(IntroContext);

  if (!value) {
    throw new Error("useIntro must be used inside IntroProvider");
  }

  return value;
}

