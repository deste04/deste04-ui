import type { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { components } from "../data/components";
import { Button } from "deste04-ui/components/ui/button";
import buttonSource from "deste04-ui/components/ui/button.tsx?raw";
import { CopyButton } from "deste04-ui/components/ui/copy-button";
import copyButtonSource from "deste04-ui/components/ui/copy-button.tsx?raw";
import { Spinner } from "deste04-ui/components/ui/spinner";
import spinnerSource from "deste04-ui/components/ui/spinner.tsx?raw";
import { Link as UiLink } from "deste04-ui/components/ui/link";
import linkSource from "deste04-ui/components/ui/link.tsx?raw";
import { Trash, Users } from "lucide-react";

const previews: Record<string, ReactNode> = {
  button: (
    <div className="preview-row">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-xs" variant="outline"><Users /></Button>
      <Button size="icon-sm" variant="default"><Users /></Button>
      <Button size="icon" variant="ghost"><Users /></Button>
      <Button size="icon-lg" variant="destructive"><Trash /></Button>
    </div>
  ),
  "copy-button": (
    <div className="preview-row">
      <CopyButton value="npx deste04-ui add copy-button" />
      <CopyButton
        value="npx deste04-ui add copy-button"
        label="Copy"
        copiedLabel="Copied"
      />
      <CopyButton
        value="npx deste04-ui add copy-button"
        label="Copy"
        copiedLabel="Copied"
        variant="ghost"
      />
    </div>
  ),
  link: (
    <div className="preview-row">
      <UiLink href="#">Underline</UiLink>
      <UiLink href="#" variant="no-underline">
        No underline
      </UiLink>
      <UiLink href="https://example.com" external>
        Open external
      </UiLink>
    </div>
  ),
  spinner: (
    <div className="preview-row">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
      <Spinner size="xl" />
      <Spinner variant="circle" />
      <Spinner variant="circle" size="lg" />
      <Button loading variant="outline">
        Loading
      </Button>
      <Button loading loadingText="Saving..." variant="outline">
        Click me
      </Button>
      <Button loading size="sm" variant="secondary">
        Small
      </Button>
      <Button loading size="lg" variant="destructive">
        Large
      </Button>
    </div>
  ),
};

/**
 * Sorgente reale mostrato nella pagina, importato con `?raw` così è
 * sempre allineato al file effettivamente installato dal CLI.
 */
const sources: Record<string, string> = {
  button: buttonSource,
  "copy-button": copyButtonSource,
  spinner: spinnerSource,
  link: linkSource,
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
