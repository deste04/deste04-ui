import { Link as RouterLink } from "react-router-dom";
import { components } from "../data/components";
import { cardVariants, CardTitle, CardDescription } from "deste04-ui/components/ui/card";
import { cn } from "deste04-ui/lib/utils";

export default function ComponentsIndex() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Components</h1>
      <p className="mt-1 text-muted-foreground">
        Each component installs individually via the CLI.
      </p>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
        {components.map((c) => (
          <RouterLink
            key={c.slug}
            to={`/components/${c.slug}`}
            className={cn(
              cardVariants({ variant: "outline" }),
              "gap-1.5 p-5 no-underline transition-colors hover:border-primary/40 hover:bg-primary/5"
            )}
          >
            <CardTitle>{c.name}</CardTitle>
            <CardDescription>{c.description}</CardDescription>
          </RouterLink>
        ))}
      </div>
    </div>
  );
}
