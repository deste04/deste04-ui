import type { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { components } from "../data/components";
import { Button } from "deste04-ui/components/ui/button";
import buttonSource from "deste04-ui/components/ui/button.tsx?raw";

/**
 * Anteprima live di ogni componente.
 * Per aggiungerne uno nuovo: aggiungi una entry con lo stesso slug
 * usato in data/components.ts.
 */
const previews: Record<string, ReactNode> = {
  button: (
    <div className="preview-row">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * Sorgente reale mostrato nella pagina, importato con `?raw` così è
 * sempre allineato al file effettivamente installato dal CLI.
 */
const sources: Record<string, string> = {
  button: buttonSource,
};

export default function ComponentPage() {
  const { slug = "" } = useParams();
  const meta = components.find((c) => c.slug === slug);

  if (!meta) {
    return (
      <div className="page">
        <p>
          Componente non trovato.{" "}
          <Link to="/components">Torna all'elenco</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/components" className="back-link">
        ← Tutti i componenti
      </Link>
      <h1>{meta.name}</h1>
      <p className="muted">{meta.description}</p>

      <section className="panel">
        <h2>Anteprima</h2>
        <div className="preview">{previews[slug]}</div>
      </section>

      <section className="panel">
        <h2>Installazione</h2>
        <pre className="code-block">
          <code>{meta.install}</code>
        </pre>
      </section>

      <section className="panel">
        <h2>Codice sorgente</h2>
        <pre className="code-block">
          <code>{sources[slug]}</code>
        </pre>
      </section>
    </div>
  );
}
