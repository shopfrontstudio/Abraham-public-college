import { GraduationCap } from "lucide-react";
import { content } from "../content";

function Footer() {
  const { footer } = content;

  return (
    <footer className="border-t-2 border-gold bg-navy text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/60 text-gold">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="font-heading text-lg font-semibold">{footer.name}</p>
            </div>
            <p className="mt-2 font-body text-sm text-gold-light">{footer.tagline}</p>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
              Contact
            </p>
            <p className="mt-3 font-body text-sm text-cream/80">
              {footer.contactPlaceholder}
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-cream/10 pt-6 text-center font-body text-sm text-cream/60">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
