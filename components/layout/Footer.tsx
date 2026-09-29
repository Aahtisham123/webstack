import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/icons";
import {
  footerCompany,
  footerResources,
  footerServices,
  legalLinks,
  site,
  socialLinks,
} from "@/lib/site";

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-muted transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="md:col-span-2 lg:col-span-1">
          <Logo id="footer" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">{site.tagline}</p>
        </div>
        <Column title="Services" links={footerServices} />
        <Column title="Company" links={footerCompany} />
        <Column title="Resources" links={footerResources} />
        <div>
          <p className="text-sm font-semibold text-white">Connect</p>
          <ul className="mt-4 space-y-2.5">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name={link.icon} className="h-4 w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Webstack. All Rights Reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
