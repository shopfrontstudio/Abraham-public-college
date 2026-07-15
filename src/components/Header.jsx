import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { content } from "../content";
import { EASE } from "../lib/motion";
import { useIntro } from "../lib/intro-context";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";
import Crest from "./Crest";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const { headerVisible } = useIntro();
  const { school, nav, navCta } = content;

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

  useEffect(() => {
    if (!headerVisible) setMenuOpen(false);
  }, [headerVisible]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b"
      animate={{
        backgroundColor: headerVisible ? "rgba(5, 22, 43, 0.94)" : "rgba(5, 22, 43, 0)",
        borderColor: headerVisible ? "rgba(215, 174, 82, 0.24)" : "rgba(215, 174, 82, 0)",
        boxShadow: headerVisible ? "0 12px 34px rgba(2, 13, 28, 0.28)" : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: headerVisible ? "blur(18px)" : "blur(0px)",
      }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <AnimatePresence initial={false}>
        {headerVisible && (
          <motion.div
            key="header-content"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.42, ease: EASE }}
          >
            <div className="mx-auto flex min-h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-6">
              <a href="#home" className="flex min-h-12 items-center gap-3" aria-label="Abraham Public College home">
                <Crest className="h-11 w-11 shrink-0 drop-shadow-[0_5px_14px_rgba(214,168,79,0.28)] sm:h-12 sm:w-12" />
                <span className="leading-none">
                  <span className="block font-heading text-lg font-semibold text-white sm:text-2xl">
                    {school.nameTop}
                  </span>
                  <span className="mt-1.5 block font-body text-[0.58rem] font-bold uppercase tracking-[0.28em] text-gold sm:text-[0.64rem]">
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

              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center text-white md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden border-t border-white/10 bg-navy-deep/98 px-6 md:hidden"
                  aria-label="Mobile navigation"
                >
                  <div className="flex flex-col gap-1 py-5">
                    {nav.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex min-h-12 items-center border-b border-white/8 font-body font-semibold text-white/85"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <Ripple className="relative mt-3 block overflow-hidden rounded-md">
                      <a
                        href="#admissions"
                        className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-ruby px-5 py-3 text-center font-body font-bold text-white"
                        onClick={() => setMenuOpen(false)}
                      >
                        {navCta}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Ripple>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
