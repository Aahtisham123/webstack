import Image from "next/image";
import type { TeamMember } from "@/lib/team";

const accents = {
  indigo: ["#6366F1", "#8B5CF6"],
  violet: ["#8B5CF6", "#06B6D4"],
  cyan: ["#06B6D4", "#6366F1"],
} as const;

export function Portrait({
  member,
  image,
  className = "",
}: {
  member: Pick<TeamMember, "name" | "accent" | "role">;
  image?: string;
  className?: string;
}) {
  if (image) {
    return (
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={`${member.name}, ${member.role} at Webstack`}
          fill
          className={`object-cover object-center ${className}`}
          sizes="(max-width: 1024px) 72vw, 288px"
        />
      </div>
    );
  }

  const [from, to] = accents[member.accent];
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${from} 0%, #0d1117 58%, ${to} 140%)`,
        }}
      />
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full opacity-80">
        <circle cx="300" cy="90" r="90" fill={to} opacity="0.35" />
        <circle cx="80" cy="380" r="120" fill={from} opacity="0.35" />
        <path d="M40 180h220" stroke="white" strokeOpacity="0.25" strokeWidth="8" />
        <path d="M70 210h160" stroke="white" strokeOpacity="0.18" strokeWidth="8" />
        <rect x="230" y="250" width="120" height="160" rx="24" fill="white" fillOpacity="0.06" />
      </svg>
      <span className="absolute bottom-5 left-5 font-display text-4xl font-semibold tracking-tight text-white/90">
        {initials}
      </span>
    </div>
  );
}
