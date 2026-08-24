import type { ReactNode } from "react";
import { Badge } from "deste04-ui/components/ui/badge";

export function PageHeader({
  title,
  description,
  category,
  actions,
  children,
}: {
  title: string;
  description: string;
  category?: string;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border pb-8">
      {category && (
        <Badge variant="subtle" size="sm" className="w-fit">
          {category}
        </Badge>
      )}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
      <p className="max-w-2xl text-muted-foreground leading-relaxed">{description}</p>
      {children}
    </div>
  );
}
