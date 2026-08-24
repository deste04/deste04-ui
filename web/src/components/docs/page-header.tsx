import type { ReactNode } from "react";
import { Badge } from "deste04-ui/components/ui/badge";

export function PageHeader({
  title,
  description,
  category,
  children,
}: {
  title: string;
  description: string;
  category?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border pb-8">
      {category && (
        <Badge variant="subtle" size="sm" className="w-fit">
          {category}
        </Badge>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
      <p className="max-w-2xl text-muted-foreground leading-relaxed">{description}</p>
      {children}
    </div>
  );
}
