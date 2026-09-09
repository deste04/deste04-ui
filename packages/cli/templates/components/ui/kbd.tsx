import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const kbdVariants = cva(
  "pointer-events-none inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-sm border border-border/60 bg-muted font-sans font-medium text-muted-foreground whitespace-nowrap select-none in-data-[slot=tooltip-content]:border-transparent in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      size: {
        sm: "h-4.5 min-w-4.5 px-1 text-[10px]",
        md: "h-5 min-w-5 px-1 text-xs",
        lg: "h-6 min-w-6 px-1.5 text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface KbdProps extends ComponentProps<"kbd">, VariantProps<typeof kbdVariants> {}

/**
 * A single key or shortcut, e.g. <Kbd>⌘</Kbd>. Inverts its own colors
 * automatically when nested inside this library's Tooltip, if you add one
 * (matched by that component's `data-slot="tooltip-content"`), so it stays
 * legible against the tooltip's own inverted surface with no extra prop.
 */
function Kbd({ className, size, ...props }: Readonly<KbdProps>) {
  return <kbd data-slot="kbd" className={cn(kbdVariants({ size, className }))} {...props} />;
}

/** Lays out a shortcut's keys in sequence, e.g. <KbdGroup><Kbd>Ctrl</Kbd><span>+</span><Kbd>K</Kbd></KbdGroup>. */
function KbdGroup({ className, ...props }: Readonly<ComponentProps<"div">>) {
  return (
    <div data-slot="kbd-group" className={cn("inline-flex items-center gap-1", className)} {...props} />
  );
}

export { Kbd, KbdGroup, kbdVariants };
