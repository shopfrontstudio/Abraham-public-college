import { content } from "../content";
import { Icon } from "../lib/icons";
import Crest from "./Crest";

function Footer() {
  const { school, footer } = content;

  return (
    <footer className="border-t border-gold/45 bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid items-start gap-10 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            {/* Replace the Crest component with the real logo image here if preferred. */}
            <Crest className="h-14 w-14 shrink-0" />
            <div className="leading-none">
              <p className="font-heading text-lg font-bold tracking-wide">{school.nameTop}</p>
              <p className="mt-1 font-body text-[0.6rem] font-bold uppercase tracking-[0.3em] text-gold">
                {school.nameBottom}
              </p>
              <p className="mt-2 font-body text-xs text-white/70">{footer.tagline}</p>
            </div>
          </div>

          <div>
            <p className="font-body text-sm font-bold uppercase tracking-wide text-gold">
              {footer.quickLinksTitle}
            </p>
            <ul className="mt-3 space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <p className="font-body text-sm leading-relaxed text-white/70 sm:text-right">
              {footer.copyright}
            </p>
            <ul className="flex gap-3">
              {footer.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon name={social.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
