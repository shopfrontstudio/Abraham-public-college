function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center border border-sun-light bg-sky text-ink/50 ${className}`}
    >
      <span className="font-body text-sm tracking-wide uppercase">{label}</span>
    </div>
  );
}

export default ImagePlaceholder;
