import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <h1>deste04-ui</h1>
      <p className="muted">
        A React component library that installs one piece at a time,
        directly into <code>components/ui/</code> in your project — no
        runtime dependency, just code you own.
      </p>
      <pre className="code-block">
        <code>npx deste04-ui add button</code>
      </pre>
      <Link to="/components" className="cta">
        Browse components →
      </Link>
    </div>
  );
}
