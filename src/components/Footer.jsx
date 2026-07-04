import { content } from "../content";

function Footer() {
  const { footer } = content;

  return (
    <footer className="bg-maroon py-10 text-center text-cream">
      <p className="font-heading text-xl font-semibold">{footer.name}</p>
      <p className="mt-1 font-body text-gold-light">{footer.tagline}</p>
      <p className="mt-4 font-body text-sm text-cream/70">{footer.copyright}</p>
    </footer>
  );
}

export default Footer;
