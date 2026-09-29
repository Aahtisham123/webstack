const palettes = {
  dev: ["#6366F1", "#06B6D4"],
  wordpress: ["#8B5CF6", "#6366F1"],
  seo: ["#06B6D4", "#6366F1"],
  ai: ["#8B5CF6", "#06B6D4"],
  security: ["#6366F1", "#22D3EE"],
  technical: ["#818CF8", "#06B6D4"],
  content: ["#A78BFA", "#67E8F9"],
} as const;

export function MediaArt({
  variant,
  label,
}: {
  variant: keyof typeof palettes;
  label: string;
}) {
  const [from, to] = palettes[variant];

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#0b1220]" role="img" aria-label={label}>
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: `radial-gradient(circle at 20% 20%, ${from}55, transparent 42%), radial-gradient(circle at 80% 70%, ${to}40, transparent 46%), #0b1220` }}
      />
      <svg viewBox="0 0 640 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g fill="none" stroke="rgb(255 255 255 / 0.18)" strokeWidth="1.2">
          <rect x="48" y="56" width="360" height="220" rx="18" />
          <path d="M48 98h360" />
          <circle cx="78" cy="77" r="5" fill="rgb(255 255 255 / 0.35)" stroke="none" />
          <circle cx="98" cy="77" r="5" fill="rgb(255 255 255 / 0.2)" stroke="none" />
          <rect x="72" y="128" width="150" height="12" rx="6" fill="rgb(255 255 255 / 0.55)" stroke="none" />
          <rect x="72" y="154" width="240" height="8" rx="4" fill="rgb(255 255 255 / 0.2)" stroke="none" />
          <rect x="72" y="172" width="200" height="8" rx="4" fill="rgb(255 255 255 / 0.14)" stroke="none" />
          <rect x="72" y="214" width="92" height="28" rx="8" fill={from} stroke="none" opacity="0.9" />
          <rect x="430" y="78" width="160" height="150" rx="16" />
          <path d="M454 176c18-28 32-44 48-62 14 22 28 40 52 62" stroke={to} strokeWidth="3" />
          <path d="M450 196h124" stroke="rgb(255 255 255 / 0.25)" />
          <rect x="120" y="300" width="70" height="46" rx="8" fill="rgb(255 255 255 / 0.06)" />
          <rect x="204" y="274" width="70" height="72" rx="8" fill={from} opacity="0.55" />
          <rect x="288" y="286" width="70" height="60" rx="8" fill={to} opacity="0.4" />
          <rect x="372" y="258" width="70" height="88" rx="8" fill="rgb(255 255 255 / 0.1)" />
        </g>
      </svg>
    </div>
  );
}
