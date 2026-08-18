import { Link } from "react-router-dom";
import { components } from "../data/components";

export default function ComponentsIndex() {
  return (
    <div className="page">
      <h1>Components</h1>
      <p className="muted">Each component installs individually via the CLI.</p>
      <div className="components-grid">
        {components.map((c) => (
          <Link key={c.slug} to={`/components/${c.slug}`} className="card">
            <h3>{c.name}</h3>
            <p>{c.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
