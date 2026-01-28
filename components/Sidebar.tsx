import Link from "next/link";
import { coreSections } from "../lib/core-sections";

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
                <Link
                  key={section.path}
                  href={`/core/${section.path}`}
                  className="nav-link"
                >
                  <span className="nav-index">{section.id}</span>
                  <span className="nav-title">{section.title}</span>
                </Link>
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
