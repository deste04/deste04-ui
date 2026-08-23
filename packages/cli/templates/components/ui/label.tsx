import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const labelVariants = cva(
  "flex items-center gap-2 leading-none font-medium select-none group-data-disabled:pointer-events-none group-data-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50 has-disabled:cursor-not-allowed has-disabled:opacity-50",
  {
    variants: {
      size: {
        "2xs": "text-xs",
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
        "2xl": "text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function Label({
  className,
  size,
  ...props
}: React.ComponentProps<"label"> & VariantProps<typeof labelVariants>) {
  return (
    <label
      data-slot="label"
      className={cn(labelVariants({ size }), className)}
      {...props}
    />
  );
}

export { Label, labelVariants };
