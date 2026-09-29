import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  layers: (
    <>
      <path d="m12 3 8 4.5-8 4.5L4 7.5 12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M4.9 6.5 7.8 8" />
      <path d="m16.2 16 2.9 1.5" />
      <path d="M4.9 17.5 7.8 16" />
      <path d="m16.2 8 2.9-1.5" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
  page: (
    <>
      <path d="M7 3.5h7l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-10.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M14 3.5V9h5" />
      <path d="M8.5 13h7" />
      <path d="M8.5 16.5h5" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M4.8 6.8l1.6 1.6M17.6 15.6l1.6 1.6M3.5 12h2.2M18.3 12h2.2M4.8 17.2l1.6-1.6M17.6 8.4l1.6-1.6" />
    </>
  ),
  bug: (
    <>
      <path d="M8 9a4 4 0 0 1 8 0v1H8V9Z" />
      <path d="M8 13h8v1a4 4 0 0 1-8 0v-1Z" />
      <path d="M5 10H3M21 10h-2M5 15H3M21 15h-2M12 5V3M8 20l-1.5 1.5M16 20l1.5 1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 8.8 4.2-1.6 7-4.6 7-8.8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  users: (
    <>
      <path d="M16 19v-1.2A3.8 3.8 0 0 0 12.2 14H7.8A3.8 3.8 0 0 0 4 17.8V19" />
      <circle cx="10" cy="8" r="3" />
      <path d="M20 19v-1.1A3.4 3.4 0 0 0 17.2 14.6" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
    </>
  ),
  gauge: (
    <>
      <path d="M5 16a7 7 0 1 1 14 0" />
      <path d="m12 16 3.2-3.8" />
      <path d="M8 19h8" />
    </>
  ),
  chat: (
    <>
      <path d="M6 16.5 4 19V7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v6.5a2.5 2.5 0 0 1-2.5 2.5H6Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 2" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5 5.2 5h13.6L20 9.5" />
      <path d="M4 9.5h16v9.5H4z" />
      <path d="M9 19v-5h6v5" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 10a4 4 0 0 0-4 4c-2 .4-3 2-3 2s1.6-1 2-3a4 4 0 0 0 4-4s1.6 1 2 3c0 0 1.6-1.6 2-3a6 6 0 0 0-3-6 6 6 0 0 0-6 3c1.4.4 3 .4 6 4Z" />
      <path d="M9 15c-.8 1.6-1 3.2-1 4 1.8 0 3.2-.6 4-1" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6-1.2A3.8 3.8 0 0 0 7 18Z" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="19" r="1.2" />
      <circle cx="17" cy="19" r="1.2" />
      <path d="M3 5h2l2.2 9.2a1.5 1.5 0 0 0 1.5 1.1H17a1.5 1.5 0 0 0 1.4-1L20 8H7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7" width="17" height="12" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3.5 12h17" />
    </>
  ),
  pen: (
    <>
      <path d="m14 6 4 4" />
      <path d="M5 19l1-4L15 6l4 4L10 19l-4 1Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.2 2.4 3.3 5.1 3.3 8S14.2 17.6 12 20c-2.2-2.4-3.3-5.1-3.3-8S9.8 6.4 12 4Z" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3.5v3.5M12 3.5v3.5M15 3.5v3.5M9 17v3.5M12 17v3.5M15 17v3.5M3.5 9H7M3.5 12H7M3.5 15H7M17 9h3.5M17 12h3.5M17 15h3.5" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8h.01" />
      <path d="M12 16v-3.2a1.8 1.8 0 0 1 3.2-1.1c.3.5.4 1 .4 1.6V16" />
    </>
  ),
  facebook: (
    <>
      <path d="M14 8h2V5h-2c-2.2 0-3.5 1.4-3.5 3.6V11H8v3h2.5v6H14v-6h2.2l.4-3H14V8.8c0-.5.2-.8.8-.8Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.2 6.8h.01" />
    </>
  ),
  x: (
    <>
      <path d="m5 5 14 14" />
      <path d="M19 5 5 19" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1.2-4-2-6-2" />
      <path d="M15 21v-3.2a2.6 2.6 0 0 0-.7-2c2.4-.3 4.7-1.2 4.7-5.2a3.8 3.8 0 0 0-1-2.6 3.6 3.6 0 0 0-.1-2.6s-.8-.2-2.6 1a9 9 0 0 0-4.6 0c-1.8-1.2-2.6-1-2.6-1a3.6 3.6 0 0 0-.1 2.6 3.8 3.8 0 0 0-1 2.6c0 4 2.3 4.9 4.7 5.2a2.6 2.6 0 0 0-.7 2V21" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  star: <path d="m12 3.8 2.1 4.4 4.8.7-3.5 3.4.8 4.8L12 15.2 7.8 17.1l.8-4.8L5.1 8.9l4.8-.7L12 3.8Z" />,
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      fill={name === "star" ? "currentColor" : "none"}
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
