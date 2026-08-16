import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <h1>deste04-ui</h1>
      <p className="muted">
        Una libreria di componenti React che si installa un pezzo alla
        volta, direttamente dentro <code>components/ui/</code> del tuo
        progetto — nessuna dipendenza runtime, solo codice che possiedi tu.
      </p>
      <pre className="code-block">
        <code>npx deste04-ui add button</code>
      </pre>
      <Link to="/components" className="cta">
        Esplora i componenti →
      </Link>
    </div>
  );
}
