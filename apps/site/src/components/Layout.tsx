import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="brand">
          deste04-ui
        </Link>
        <nav>
          <Link to="/components">Componenti</Link>
        </nav>
      </header>
      <main className="main">{children}</main>
    </div>
  );
}
