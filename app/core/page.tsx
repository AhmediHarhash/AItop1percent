import Link from "next/link";
import { coreSections } from "../../lib/core-sections";

export default function CoreIndex() {
  return (
    <div className="page">
      <section className="page-intro">
        <h1>Core AI Mastery Sections</h1>
        <p>
          The 26 canonical sections form the spine of the system. Each one is a
          non-negotiable capability for elite AI engineering and leadership.
        </p>
      </section>

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
    </div>
  );
}
