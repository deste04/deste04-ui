import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ThemeToggle } from "deste04-ui/components/theme/theme-toggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="brand">
          deste04-ui
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link to="/components">Components</Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="main">{children}</main>
    </div>
  );
}
