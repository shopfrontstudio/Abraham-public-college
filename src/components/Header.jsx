import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { content } from "../content";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";
import Crest from "./Crest";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const { school, nav, navCta } = content;
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [nav]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-navy/15 bg-paper/95 shadow-[0_8px_30px_rgba(20,33,61,0.08)] backdrop-blur-lg"
          : "border-navy/10 bg-paper/80 backdrop-blur-md"
      }`}
    >
      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-between px-6"
        animate={{ paddingTop: scrolled ? 10 : 16, paddingBottom: scrolled ? 10 : 16 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <a href="#home" className="flex items-center gap-3">
          <Crest className="h-11 w-11 shrink-0 drop-shadow-sm" />
          <span className="font-heading text-lg font-bold leading-tight text-navy sm:text-xl">
            {school.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative font-body transition-colors ${
                activeHref === item.href ? "text-coral" : "text-ink/80 hover:text-coral"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-sun transition-all duration-300 ${
                  activeHref === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
          <Magnetic strength={0.25}>
            <a
              href="#admissions"
              className="rounded-xl border-2 border-navy bg-sun px-5 py-2 font-body text-sm font-bold text-navy shadow-sticker-sm transition-all hover:-translate-y-0.5"
            >
              {navCta}
            </a>
          </Magnetic>
        </nav>

        <button
          type="button"
          className="text-navy md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </motion.div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-navy/10 px-6 py-6 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-ink/80"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Ripple color="rgba(20,33,61,0.15)" className="relative block overflow-hidden rounded-xl">
            <a
              href="#admissions"
              className="block rounded-xl border-2 border-navy bg-sun px-5 py-2.5 text-center font-body font-bold text-navy shadow-sticker-sm"
              onClick={() => setMenuOpen(false)}
            >
              {navCta}
            </a>
          </Ripple>
        </nav>
      )}
    </header>
  );
}

export default Header;
