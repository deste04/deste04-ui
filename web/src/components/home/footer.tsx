import { Link } from "react-router-dom";
import { linkVariants } from "deste04-ui/components/ui/link";
import { cn } from "deste04-ui/lib/utils";
import { GithubIcon } from "../icons/github";

const footerLink = cn(linkVariants({ variant: "no-underline" }), "font-normal text-muted-foreground hover:text-foreground");

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>Built with React, Tailwind CSS and Ark UI.</p>
        <nav className="flex items-center gap-4">
          <Link to="/docs/introduction" className={footerLink}>
            Docs
          </Link>
          <Link to="/docs/components" className={footerLink}>
            Components
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(footerLink, "gap-1.5")}
          >
            <GithubIcon className="size-4" /> GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
