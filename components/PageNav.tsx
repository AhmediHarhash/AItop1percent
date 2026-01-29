"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { coreSections } from "../lib/core-sections";

type FlatPage = { href: string; label: string };

function buildFlatPages(): FlatPage[] {
  const pages: FlatPage[] = [];
  for (const section of coreSections) {
    const base = `/core/${section.path}`;
    if (section.chapters && section.chapters.length > 0) {
      for (const ch of section.chapters) {
        if (ch.subchapters && ch.subchapters.length > 0) {
          for (const sub of ch.subchapters) {
            pages.push({
              href: `${base}/${sub.slug}`,
              label: `${section.id} · ${sub.id} ${sub.title}`,
            });
          }
        } else {
          pages.push({
            href: `${base}/${ch.slug}`,
            label: `${section.id} · ${ch.title}`,
          });
        }
      }
    }
  }
  return pages;
}

const flatPages = buildFlatPages();

export default function PageNav() {
  const pathname = usePathname() || "/";
  const idx = flatPages.findIndex((p) => p.href === pathname);
  if (idx === -1) return null;

  const prev = idx > 0 ? flatPages[idx - 1] : null;
  const next = idx < flatPages.length - 1 ? flatPages[idx + 1] : null;

  return (
    <nav className="page-nav">
      {prev ? (
        <Link href={prev.href} className="page-nav-link page-nav-prev">
          <span className="page-nav-dir">← Previous</span>
          <span className="page-nav-label">{prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="page-nav-link page-nav-next">
          <span className="page-nav-dir">Next →</span>
          <span className="page-nav-label">{next.label}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
