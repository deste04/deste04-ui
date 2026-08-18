import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-md font-sans leading-none font-medium tabular-nums whitespace-nowrap select-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid: "border border-transparent bg-primary text-primary-foreground",
        surface:
          "border border-primary/20 bg-primary/10 text-primary dark:border-primary/25 dark:bg-primary/15",
        subtle:
          "border border-transparent bg-primary/10 text-primary dark:bg-primary/15",
        outline: "border border-primary/30 bg-transparent text-primary",
      },
      size: {
        sm: "h-4.5 gap-0.5 px-1.5 text-xs [&_svg:not([class*='size-'])]:size-2.5",
        md: "h-5 gap-1 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        lg: "h-5.5 gap-1 px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        xl: "h-6 gap-1.5 px-2.5 text-sm [&_svg:not([class*='size-'])]:size-4",
        "2xl": "h-7 gap-1.5 px-3 text-base [&_svg:not([class*='size-'])]:size-4.5",
      },
    },
    defaultVariants: {
      variant: "subtle",
      size: "md",
    },
  }
);

function Badge({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
