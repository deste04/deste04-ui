import { Link } from "react-router-dom";
import { cardVariants, CardTitle, CardDescription } from "deste04-ui/components/ui/card";
import { Badge } from "deste04-ui/components/ui/badge";
import { cn } from "deste04-ui/lib/utils";
import type { BlockMeta } from "../../data/blocks";

export function BlockCard({ item }: { item: BlockMeta }) {
  return (
    <Link
      to={`/docs/blocks/${item.slug}`}
      className={cn(
        cardVariants({ variant: "outline" }),
        "gap-2 p-5 no-underline transition-colors hover:border-primary/40 hover:bg-primary/5"
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <CardTitle>{item.name}</CardTitle>
        <Badge variant="subtle" size="sm">
          {item.category}
        </Badge>
      </div>
      <CardDescription className="line-clamp-2">{item.description}</CardDescription>
    </Link>
  );
}
