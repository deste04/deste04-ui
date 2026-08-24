import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { Button } from "deste04-ui/components/ui/button";
import { ThemeToggle } from "deste04-ui/components/theme/theme-toggle";
import { cn } from "deste04-ui/lib/utils";
import { GithubIcon } from "../icons/github";
import { SearchPalette, SearchTrigger } from "./search-palette";

const GITHUB_URL = "https://github.com/deste04/deste04-ui";

export function SiteHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-border bg-background/85 px-4 py-3 backdrop-blur sm:px-6">
      {onMenuClick && (
        <Button
          variant="plain"
          size="icon-sm"
          className="md:hidden"
          aria-label="Toggle navigation"
          onClick={onMenuClick}
        >
          <Menu />
        </Button>
      )}

      <Link to="/" className="flex items-center gap-2 text-lg font-bold text-foreground no-underline">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary text-sm text-primary-foreground">
          d
        </span>
        deste04-ui
      </Link>

      <nav className="ms-2 hidden items-center gap-1 sm:flex">
        <HeaderLink to="/docs/introduction">Docs</HeaderLink>
        <HeaderLink to="/docs/components">Components</HeaderLink>
      </nav>

      <div className="ms-auto flex items-center gap-2 sm:gap-3">
        <div className="hidden sm:block">
          <SearchTrigger onOpen={() => setSearchOpen(true)} />
        </div>
        <Button
          variant="plain"
          size="icon-sm"
          className="sm:hidden"
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
        >
          <Search />
        </Button>
        <Button
          variant="outline"
          size="icon-md"
          aria-label="GitHub"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
          >
            <GithubIcon className="size-5" />
          </a>
        </Button>
        <ThemeToggle />
      </div>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

function HeaderLink({ to, children }: { to: string; children: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "rounded-md px-3 py-1.5 text-sm no-underline transition-colors",
          isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
        )
      }
    >
      {children}
    </NavLink>
  );
}
