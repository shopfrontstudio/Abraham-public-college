import { useState } from "react";
import { content } from "../content";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { school, nav, navCta } = content;

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-gold-light">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-heading text-xl font-semibold text-maroon sm:text-2xl">
          {school.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-ink/80 transition-colors hover:text-maroon"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#admissions"
            className="rounded-sm bg-maroon px-5 py-2 font-body text-cream transition-colors hover:bg-maroon-dark"
          >
            {navCta}
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-maroon" />
          <span className="h-0.5 w-6 bg-maroon" />
          <span className="h-0.5 w-6 bg-maroon" />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-gold-light px-6 py-6 md:hidden">
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
            className="rounded-sm bg-maroon px-5 py-2 text-center font-body text-cream"
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
