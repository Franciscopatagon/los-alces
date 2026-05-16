type Props = { size?: number; className?: string };

export function Logo({ size = 48, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      aria-label="Alces FC"
    >
      <defs>
        <radialGradient id="lg-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#050505" />
        </radialGradient>
        <linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F2E6B8" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#7A5F1F" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill="url(#lg-bg)" stroke="url(#lg-gold)" strokeWidth="2" />
      {/* antlers */}
      <g stroke="url(#lg-gold)" strokeWidth="3.2" strokeLinecap="round" fill="none">
        <path d="M44 38 C 36 28, 26 28, 22 22" />
        <path d="M44 38 C 38 32, 30 36, 24 32" />
        <path d="M44 38 C 40 30, 34 26, 32 18" />
        <path d="M76 38 C 84 28, 94 28, 98 22" />
        <path d="M76 38 C 82 32, 90 36, 96 32" />
        <path d="M76 38 C 80 30, 86 26, 88 18" />
      </g>
      {/* head */}
      <path
        d="M44 38 C 44 56, 50 70, 60 78 C 70 70, 76 56, 76 38 Z"
        fill="url(#lg-gold)"
      />
      <circle cx="53" cy="52" r="2" fill="#050505" />
      <circle cx="67" cy="52" r="2" fill="#050505" />
      <text
        x="60"
        y="100"
        textAnchor="middle"
        fontFamily="Bebas Neue, Impact"
        fontSize="14"
        letterSpacing="2"
        fill="url(#lg-gold)"
      >
        ALCES FC
      </text>
    </svg>
  );
}
