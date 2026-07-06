import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { content } from "../content";
import Magnetic from "./Magnetic";
import Ripple from "./Ripple";
import Crest from "./Crest";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const { school, nav, navCta } = content;

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
    <header className="sticky top-0 z-50 bg-navy-deep shadow-[0_4px_24px_rgba(8,33,63,0.35)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-3">
          {/* Replace the Crest component with the real logo image here if preferred. */}
          <Crest className="h-12 w-12 shrink-0" />
          <span className="leading-none">
            <span className="block font-heading text-xl font-bold tracking-wide text-white sm:text-2xl">
              {school.nameTop}
            </span>
            <span className="mt-1 block font-body text-[0.65rem] font-bold uppercase tracking-[0.3em] text-gold">
              {school.nameBottom}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative font-body text-sm font-semibold transition-colors ${
                activeHref === item.href ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  activeHref === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
          <Magnetic strength={0.25}>
            <Ripple className="btn-shine relative inline-block overflow-hidden rounded-lg">
              <a
                href="#admissions"
                className="inline-flex items-center gap-2 rounded-lg bg-maroon px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-maroon-dark"
              >
                {navCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Ripple>
          </Magnetic>
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-6 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body font-medium text-white/85"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Ripple className="relative block overflow-hidden rounded-lg">
            <a
              href="#admissions"
              className="flex items-center justify-center gap-2 rounded-lg bg-maroon px-5 py-3 text-center font-body font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              {navCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Ripple>
        </nav>
      )}
    </header>
  );
}

export default Header;
