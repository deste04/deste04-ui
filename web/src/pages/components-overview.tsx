import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "deste04-ui/components/ui/input";
import { componentsByCategory, components } from "../data/components";
import { PageHeader } from "../components/docs/page-header";
import { ComponentCard } from "../components/docs/component-card";

export default function ComponentsOverview() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return components.filter(
      (c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="flex flex-col gap-8 pb-24">
      <PageHeader
        title="Components"
        description={`${components.length} components, each installed on its own with the CLI.`}
      >
        <div className="relative mt-2 max-w-sm">
          <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter components..."
            className="ps-9"
          />
        </div>
      </PageHeader>

      {filtered ? (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ComponentCard key={item.slug} item={item} />
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground">No components match "{query}".</p>
          )}
        </section>
      ) : (
        componentsByCategory().map(({ category, items }) => (
          <section key={category} className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <ComponentCard key={item.slug} item={item} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
