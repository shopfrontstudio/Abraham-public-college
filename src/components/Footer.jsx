import { content } from "../content";
import Crest from "./Crest";

function Footer() {
  const { footer } = content;

  return (
    <footer className="border-t-4 border-sun bg-navy-dark text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Crest className="h-16 w-16 shrink-0" />
              <div>
                <p className="font-heading text-lg font-semibold">{footer.name}</p>
                <p className="mt-1 font-body text-sm text-sun-light">{footer.tagline}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sun">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-paper/80 transition-colors hover:text-sun"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-sun">
              Contact
            </p>
            <p className="mt-3 font-body text-sm text-paper/80">
              {footer.contactPlaceholder}
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-paper/10 pt-6 text-center font-body text-sm text-paper/60">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
