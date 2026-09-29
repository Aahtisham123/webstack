"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/icons";
import { navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled || open
          ? "border-line bg-[#070a0f]/75 shadow-[0_10px_40px_-24px_rgb(0_0_0_/_0.8)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Logo id="header" />
        <nav className="hidden items-center gap-1 min-[1100px]:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  active ? "text-white" : "text-muted hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-accent to-violet px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-12px_rgb(99_102_241_/_0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-10px_rgb(99_102_241_/_1)] sm:inline-flex"
          >
            Get a Free Consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-white min-[1100px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-[#070a0f]/95 backdrop-blur-xl min-[1100px]:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-white/90 transition hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-violet px-4 py-3 text-sm font-semibold text-white sm:hidden"
            >
              Get a Free Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
