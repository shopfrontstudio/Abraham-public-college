import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { content } from "../content";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { school, nav, navCta } = content;

  return (
    <header className="sticky top-0 z-50 border-b border-gold-light/60 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy text-cream">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-semibold leading-tight text-navy sm:text-xl">
            {school.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-body text-ink/80 transition-colors hover:text-maroon"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#admissions"
            className="rounded-full bg-maroon px-5 py-2.5 font-body text-sm font-medium text-cream shadow-sm transition-all hover:bg-maroon-dark hover:shadow-md"
          >
            {navCta}
          </a>
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
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-gold-light/60 px-6 py-6 md:hidden">
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
          <a
            href="#admissions"
            className="rounded-full bg-maroon px-5 py-2.5 text-center font-body text-cream"
            onClick={() => setMenuOpen(false)}
          >
            {navCta}
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
