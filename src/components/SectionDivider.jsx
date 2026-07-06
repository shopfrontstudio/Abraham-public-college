// A soft curved divider between sections. `color` should match the
// background colour of the section that FOLLOWS this divider.
function SectionDivider({ color = "#fefefc", flip = false }) {
  return (
    <div
      aria-hidden="true"
      className={`-mb-px w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-[36px] w-full md:h-[56px]"
      >
        <path
          d="M0,32 C300,72 900,-8 1200,32 L1200,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default SectionDivider;
