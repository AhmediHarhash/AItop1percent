import Link from "next/link";
import { coreSections } from "../lib/core-sections";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-kicker">AI doctrine, versioned and alive</div>
        <h1 className="hero-title">
          Build the system that makes you undeniable.
        </h1>
        <p className="hero-subtitle">
          This is a living knowledge base for elite AI engineers and leaders.
          It is structured for daily study, long-term mastery, and real-world
          decision making.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/core">
            Start the Core Spine
          </Link>
          <Link className="button ghost" href="/core/01-eval-strategy">
            Read Section 01
          </Link>
        </div>
        <div className="hero-meta">
          <div className="meta-card">
            <div className="meta-title">26 Sections</div>
            <div className="meta-text">Canonical spine for 2026 mastery</div>
          </div>
          <div className="meta-card">
            <div className="meta-title">Focus Mode</div>
            <div className="meta-text">Built for long reading sessions</div>
          </div>
          <div className="meta-card">
            <div className="meta-title">Always Live</div>
            <div className="meta-text">Continuously updated doctrine</div>
          </div>
        </div>
      </section>

      <section className="section-grid">
        <div className="section-grid-header">
          <h2>Core Spine</h2>
          <p>
            Each section is a self-contained mastery block. Complete in order for
            compounding depth.
          </p>
        </div>
        <div className="grid">
          {coreSections.map((section) => (
            <Link
              key={section.path}
              href={`/core/${section.path}`}
              className="card"
            >
              <div className="card-index">{section.id}</div>
              <div className="card-title">{section.title}</div>
              <div className="card-text">{section.summary}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
