import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { content } from "../content";
import { EASE } from "../lib/motion";
import { useIntro } from "../lib/intro-context";
import { useMediaQuery } from "../lib/use-media-query";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";
import Crest from "./Crest";

function Header() {
  const [activeHref, setActiveHref] = useState("#home");
  const { headerVisible } = useIntro();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { school, nav, navCta } = content;
  const showHeader = headerVisible || isMobile;

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [nav]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b"
      animate={{
        backgroundColor: showHeader ? "rgba(5, 22, 43, 0.96)" : "rgba(5, 22, 43, 0)",
        borderColor: showHeader ? "rgba(215, 174, 82, 0.24)" : "rgba(215, 174, 82, 0)",
        boxShadow: showHeader ? "0 12px 34px rgba(2, 13, 28, 0.28)" : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: showHeader ? "blur(18px)" : "blur(0px)",
      }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {showHeader && (
          <motion.div
            key="header-content"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.42, ease: EASE }}
          >
            <div className="mx-auto flex min-h-[4rem] max-w-7xl items-center justify-between px-4 sm:min-h-[4.75rem] sm:px-6">
              <a href="#home" className="flex min-h-12 items-center gap-3" aria-label="Abraham Public College home">
                <Crest className="h-10 w-10 shrink-0 drop-shadow-[0_5px_14px_rgba(214,168,79,0.28)] sm:h-12 sm:w-12" />
                <span className="leading-none">
                  <span className="block font-heading text-base font-semibold text-white sm:text-2xl">
                    {school.nameTop}
                  </span>
                  <span className="mt-1 block font-body text-[0.5rem] font-bold uppercase tracking-[0.22em] text-gold sm:mt-1.5 sm:text-[0.64rem] sm:tracking-[0.28em]">
                    {school.nameBottom}
                  </span>
                </span>
              </a>

              <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`group relative flex min-h-11 items-center font-body text-sm font-semibold transition-colors ${
                      activeHref === item.href ? "text-white" : "text-white/68 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-300 ${
                        activeHref === item.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                ))}
                <Magnetic strength={0.22}>
                  <Ripple className="btn-shine relative inline-block overflow-hidden rounded-md">
                    <a
                      href="#admissions"
                      className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ruby px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-ruby-dark"
                    >
                      {navCta}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Ripple>
                </Magnetic>
              </nav>

              <Ripple className="relative block overflow-hidden rounded-md md:hidden">
                <a
                  href="#admissions"
                  className="flex min-h-10 items-center gap-1.5 rounded-md bg-ruby px-3 font-body text-xs font-bold text-white"
                >
                  Enquire
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </Ripple>
            </div>

            <nav
              className="grid h-11 grid-cols-4 border-t border-white/10 px-2 md:hidden"
              aria-label="Mobile navigation"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative flex min-h-11 items-center justify-center font-body text-[0.7rem] font-bold transition-colors ${
                    activeHref === item.href ? "text-white" : "text-white/66"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 h-0.5 bg-gold transition-all ${
                      activeHref === item.href ? "w-8" : "w-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
    </motion.header>
  );
}

export default Header;
