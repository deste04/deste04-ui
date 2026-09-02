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
          "border border-accent/20 bg-accent/10 text-accent supports-[not(color:color-mix(in_oklab,red,red))]:text-accent-foreground",
        subtle:
          "border border-transparent bg-accent/10 text-accent supports-[not(color:color-mix(in_oklab,red,red))]:text-accent-foreground",
        outline: "border border-accent/30 bg-transparent text-accent",
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
