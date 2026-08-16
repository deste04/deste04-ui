import { Link } from "react-router-dom";
import { components } from "../data/components";

export default function ComponentsIndex() {
  return (
    <div className="page">
      <h1>Componenti</h1>
      <p className="muted">Ogni componente si installa singolarmente con il CLI.</p>
      <div className="grid">
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
