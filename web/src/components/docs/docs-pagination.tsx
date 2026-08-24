import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cardVariants } from "deste04-ui/components/ui/card";
import { cn } from "deste04-ui/lib/utils";
import { getAdjacentPages } from "../../data/nav";

/**
 * Previous / next links to the neighboring pages in the sidebar order.
 * Self contained: reads the current route itself, drop it at the bottom
 * of any docs page.
 */
export function DocsPagination() {
  const location = useLocation();
  const { prev, next } = getAdjacentPages(location.pathname);

  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Docs pages"
      className="grid grid-cols-1 gap-3 border-t border-border pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          to={prev.path}
          className={cn(
            cardVariants({ variant: "outline" }),
            "flex-row items-center gap-3 p-4 no-underline transition-colors hover:border-primary/40 hover:bg-primary/5"
          )}
        >
          <ChevronLeft className="size-4 shrink-0 text-muted-foreground" />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-muted-foreground">Previous</span>
            <span className="font-medium text-foreground">{prev.title}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          to={next.path}
          className={cn(
            cardVariants({ variant: "outline" }),
            "flex-row items-center justify-end gap-3 p-4 text-end no-underline transition-colors hover:border-primary/40 hover:bg-primary/5 sm:col-start-2"
          )}
        >
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-muted-foreground">Next</span>
            <span className="font-medium text-foreground">{next.title}</span>
          </div>
          <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
        </Link>
      )}
    </nav>
  );
}
