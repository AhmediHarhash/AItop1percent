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
  const [open, setOpen] = useState(false);
  const hasSubs = chapter.subchapters && chapter.subchapters.length > 0;

  return (
    <div className="nav-chapter">
      <a
        href={`/core/${sectionPath}#${chapter.anchor}`}
        className="nav-chapter-link"
        onClick={(e) => {
          if (hasSubs) {
            e.preventDefault();
            setOpen(!open);
          }
        }}
      >
        <span className="nav-chapter-title">{chapter.title}</span>
        {hasSubs && (
          <span className={`nav-chevron ${open ? "nav-chevron-open" : ""}`}>
            &#9656;
          </span>
        )}
      </a>
      {hasSubs && open && (
        <div className="nav-subchapters">
          {chapter.subchapters!.map((sub) => (
            <a
              key={sub.id}
              href={`/core/${sectionPath}#${sub.anchor}`}
              className="nav-sub-link"
            >
              <span className="nav-sub-id">{sub.id}</span>
              <span className="nav-sub-title">{sub.title}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionItem({ section }: { section: CoreSection }) {
  const pathname = usePathname() || "/";
  const isActive = pathname === `/core/${section.path}`;
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
          href={`/core/${section.path}`}
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
