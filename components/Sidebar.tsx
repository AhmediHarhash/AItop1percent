"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { coreSections, type CoreSection, type Chapter } from "../lib/core-sections";

function ChapterItem({
  chapter,
  sectionPath,
}: {
  chapter: Chapter;
  sectionPath: string;
}) {
  const pathname = usePathname() || "/";
  const hasSubs = chapter.subchapters && chapter.subchapters.length > 0;
  const chapterHref = `/core/${sectionPath}/${chapter.slug}`;
  const isChildActive = hasSubs && chapter.subchapters!.some(
    (sub) => pathname === `/core/${sectionPath}/${sub.slug}`
  );
  const [open, setOpen] = useState(isChildActive);

  if (hasSubs) {
    return (
      <div className="nav-chapter">
        <button
          className="nav-chapter-link"
          onClick={() => setOpen(!open)}
          type="button"
        >
          <span className="nav-chapter-title">{chapter.title}</span>
          <span className={`nav-chevron ${open ? "nav-chevron-open" : ""}`}>
            &#9656;
          </span>
        </button>
        {open && (
          <div className="nav-subchapters">
            {chapter.subchapters!.map((sub) => {
              const subHref = `/core/${sectionPath}/${sub.slug}`;
              const isActive = pathname === subHref;
              return (
                <Link
                  key={sub.id}
                  href={subHref}
                  className={`nav-sub-link ${isActive ? "nav-sub-active" : ""}`}
                >
                  <span className="nav-sub-id">{sub.id}</span>
                  <span className="nav-sub-title">{sub.title}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  const isActive = pathname === chapterHref;
  return (
    <div className="nav-chapter">
      <Link
        href={chapterHref}
        className={`nav-chapter-link ${isActive ? "nav-chapter-active" : ""}`}
      >
        <span className="nav-chapter-title">{chapter.title}</span>
      </Link>
    </div>
  );
}

function SectionItem({ section }: { section: CoreSection }) {
  const pathname = usePathname() || "/";
  const sectionBase = `/core/${section.path}`;
  const isActive = pathname.startsWith(sectionBase);
  const [expanded, setExpanded] = useState(isActive);
  const hasChapters = section.chapters && section.chapters.length > 0;

  return (
    <div className="nav-section-item">
      <div
        className={`nav-link ${isActive ? "nav-link-active" : ""}`}
        onClick={() => {
          if (hasChapters) setExpanded(!expanded);
        }}
      >
        <Link
          href={sectionBase}
          className="nav-link-inner"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="nav-index">{section.id}</span>
          <span className="nav-title">{section.title}</span>
        </Link>
        {hasChapters && (
          <span
            className={`nav-expand ${expanded ? "nav-expand-open" : ""}`}
          >
            &#9656;
          </span>
        )}
      </div>
      {hasChapters && expanded && (
        <div className="nav-chapters">
          {section.chapters!.map((ch) => (
            <ChapterItem
              key={ch.id}
              chapter={ch}
              sectionPath={section.path}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div className="brand">
          <Link href="/" className="brand-title">
            AItop1percent
          </Link>
          <div className="brand-sub">Living AI doctrine</div>
        </div>

        <nav className="nav">
          <div className="nav-section">
            <div className="nav-label">Core Spine</div>
            <div className="nav-items">
              {coreSections.map((section) => (
                <SectionItem key={section.path} section={section} />
              ))}
            </div>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="status-pill">2026 Standard</div>
          <div className="status-pill">Always Live</div>
        </div>
      </div>
    </aside>
  );
}
