import { useEffect, useState } from "react";
import { cn } from "deste04-ui/lib/utils";

export interface TocItem {
  id: string;
  label: string;
}

/**
 * Sticky "on this page" outline for a docs page, e.g. every example title
 * on a component page. Highlights whichever section is currently in view.
 */
export function TableOfContents({
  items,
  className,
}: {
  items: TocItem[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState<string | undefined>(items[0]?.id);

  useEffect(() => {
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    // The last section can be too short to ever reach the observer's
    // "active" zone once the page has scrolled all the way down, so fall
    // back to highlighting it once we hit the bottom of the page.
    function onScroll() {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveId(items[items.length - 1].id);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className={cn("flex flex-col gap-3", className)}>
      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        On this page
      </p>
      <ul className="flex flex-col border-s border-border text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "-ms-px block border-s-2 px-3 py-1.5 no-underline transition-colors",
                activeId === item.id
                  ? "border-primary font-medium text-primary"
                  : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
