import * as React from "react";
import { Toggle as ArkToggle } from "@ark-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-sans font-medium whitespace-nowrap transition-colors outline-none select-none cursor-pointer focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-disabled:cursor-not-allowed data-disabled:opacity-50 in-data-[slot=toggle-group]:rounded-lg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        outline:
          "border-border bg-transparent text-foreground hover:bg-muted data-[state=on]:border-primary/20 data-[state=on]:bg-primary/10 data-[state=on]:text-primary dark:border-input dark:hover:bg-input/50 dark:data-[state=on]:border-primary/25",
        subtle:
          "bg-transparent text-foreground hover:bg-muted data-[state=on]:bg-primary/10 data-[state=on]:text-primary dark:hover:bg-muted/50",
      },
      size: {
        sm: "h-8 min-w-8 px-2 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        md: "h-9 min-w-9 px-2.5 text-sm",
        lg: "h-10 min-w-10 px-3 text-base [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

export interface ToggleProps
  extends ArkToggle.RootProps,
    VariantProps<typeof toggleVariants> {}

function Toggle({ className, variant, size, ...props }: Readonly<ToggleProps>) {
  return (
    <ArkToggle.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
