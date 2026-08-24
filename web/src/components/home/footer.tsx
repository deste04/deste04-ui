import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>Built with React, Tailwind CSS and Ark UI.</p>
        <nav className="flex items-center gap-4">
          <Link to="/docs/introduction" className="no-underline hover:text-foreground">
            Docs
          </Link>
          <Link to="/docs/components" className="no-underline hover:text-foreground">
            Components
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
