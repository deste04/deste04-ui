import type { ReactNode } from "react";
import { cn } from "deste04-ui/lib/utils";

/** Vertical stack used to lay out the labeled groups inside a demo. */
export function PreviewStack({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("flex flex-col gap-6", className)}>{children}</div>;
}

/** A labeled group of controls, e.g. "Variants" or "Sizes", inside a demo. */
export function PreviewGroup({
  label,
  children,
  className,
  column,
}: {
  label?: string;
  children: ReactNode;
  className?: string;
  column?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
      <div
        className={cn(
          "flex flex-wrap items-center gap-3",
          column && "flex-col items-start",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function PreviewNote({ children }: { children: ReactNode }) {
  return <p className="text-xs text-muted-foreground">{children}</p>;
}
