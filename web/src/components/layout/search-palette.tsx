import { useEffect, useMemo, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Search, CornerDownLeft } from "lucide-react";
import { Input } from "deste04-ui/components/ui/input";
import { Badge } from "deste04-ui/components/ui/badge";
import { getSearchItems } from "../../data/nav";

const items = getSearchItems();

export function SearchTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex w-full max-w-56 items-center gap-2 rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
    >
      <Search className="size-4" />
      <span className="flex-1 text-start">Search components</span>
      <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px]">
        &#8984;K
      </kbd>
    </button>
  );
}

export function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) => item.title.toLowerCase().includes(q) || item.group.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  function select(path: string) {
    navigate(path);
    onClose();
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      select(results[active].path);
    }
  }

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/70 px-4 pt-24 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close search"
        className="fixed inset-0 cursor-default"
        onClick={onClose}
      />
      <div className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border px-4">
          <Search className="size-4 text-muted-foreground" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search components and guides..."
            variant="outline"
            className="border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="thin-scrollbar max-h-80 overflow-y-auto p-2">
          {results.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">
              No results for "{query}".
            </p>
          )}
          {results.map((item, index) => (
            <button
              key={item.path}
              type="button"
              onClick={() => select(item.path)}
              onMouseEnter={() => setActive(index)}
              className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-start text-sm transition-colors ${
                index === active ? "bg-primary/10 text-foreground" : "text-foreground/90"
              }`}
            >
              <span>{item.title}</span>
              <Badge variant="subtle" size="sm">
                {item.group}
              </Badge>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 border-t border-border px-4 py-2 text-xs text-muted-foreground">
          <CornerDownLeft className="size-3.5" /> to select, Esc to close
        </div>
      </div>
    </div>,
    document.body
  );
}
