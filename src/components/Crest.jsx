// The official Abraham Public College crest — the real artwork committed at
// public/crest.png. To update the logo, replace that file (keep the name).
//
// BASE_URL keeps the path correct under the GitHub Pages sub-path
// (/Abraham-public-college/) as well as at the local dev root.
// Clipped to a circle so the crest's own round shape shows cleanly on any
// background (navy header/footer, cream hero card) with no square edges.
const crestUrl = `${import.meta.env.BASE_URL}crest.png`;

function Crest({ className = "", title = "Abraham Public College crest" }) {
  return (
    <img
      src={crestUrl}
      alt={title}
      loading="eager"
      decoding="async"
      className={`rounded-full object-cover ${className}`}
    />
  );
}

export default Crest;
