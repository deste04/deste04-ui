import { Link as RouterLink } from "react-router-dom";
import type { ReactNode } from "react";
import { linkVariants } from "deste04-ui/components/ui/link";
import { cn } from "deste04-ui/lib/utils";
import { ThemeToggle } from "deste04-ui/components/theme/theme-toggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border px-8 py-4">
        <RouterLink
          to="/"
          className={cn(linkVariants({ variant: "no-underline" }), "text-lg font-bold")}
        >
          deste04-ui
        </RouterLink>
        <nav className="flex items-center gap-6">
          <RouterLink
            to="/components"
            className={cn(linkVariants(), "text-sm text-muted-foreground hover:text-foreground")}
          >
            Components
          </RouterLink>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
