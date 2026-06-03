import type { Metadata } from "next";
import Link from "next/link";
import { NAV_ITEMS, isNavGroup } from "@/lib/navigation";
import { LOCATIONS, HOURS } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Site Map",
  description:
    "Browse every page on yhnhealth.com — chiropractic care, functional medicine, physiotherapy services, locations and resources.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 lg:px-6">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-charcoal/70">
        <Link href="/" className="hover:text-teal">
          Home
        </Link>{" "}
        / <span className="text-charcoal">Site Map</span>
      </nav>

      <h1 className="font-display text-3xl font-bold tracking-tight text-navy">
        Site Map - Your Health Now
      </h1>
      <p className="mt-2 max-w-2xl text-charcoal/80">
        A complete index of every page on the Your Health Now website.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-lg font-semibold uppercase tracking-wider text-navy">
          Pages
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-charcoal">
          <li>
            <Link href="/" className="hover:text-teal">
              Home
            </Link>
          </li>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <Link href={item.href} className="hover:text-teal">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-navy">{item.label}</span>
              )}
              {item.children.length > 0 && (
                <ul className="ml-6 mt-1 list-disc space-y-1">
                  {item.children.map((child) =>
                    isNavGroup(child) ? (
                      <li key={child.label}>
                        {child.href ? (
                          <Link href={child.href} className="hover:text-teal">
                            {child.label}
                          </Link>
                        ) : (
                          <span className="font-medium text-navy">{child.label}</span>
                        )}
                        <ul className="ml-6 mt-1 list-disc space-y-1">
                          {child.children.map((leaf) => (
                            <li key={leaf.label}>
                              <Link href={leaf.href} className="hover:text-teal">
                                {leaf.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={child.label}>
                        <Link href={child.href} className="hover:text-teal">
                          {child.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-semibold uppercase tracking-wider text-navy">
            Locations
          </h2>
          <ul className="mt-4 space-y-4">
            {LOCATIONS.map((loc) => (
              <li key={loc.name}>
                <h3 className="font-semibold text-navy">{loc.name}</h3>
                <address className="mt-1 not-italic text-sm text-charcoal">
                  {loc.address}
                  <br />
                  <a href={loc.tel} className="hover:text-teal">
                    {loc.phone}
                  </a>
                  <br />
                  <a
                    href={loc.social.maps}
                    className="hover:text-teal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on map
                  </a>
                </address>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold uppercase tracking-wider text-navy">
            Hours
          </h2>
          <dl className="mt-4 space-y-1 text-sm text-charcoal">
            {HOURS.map(({ day, hours }) => (
              <div
                key={day}
                className="flex justify-between border-b border-zinc-100 py-1"
              >
                <dt>{day}</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
