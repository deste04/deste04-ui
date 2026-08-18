import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const textareaVariants = cva(
  "flex field-sizing-content min-h-16 w-full min-w-0 font-sans transition-colors outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        outline:
          "rounded-lg border border-input bg-transparent focus-visible:border-ring aria-invalid:border-destructive dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50",
        surface:
          "rounded-lg border border-border bg-card focus-visible:border-ring aria-invalid:border-destructive disabled:bg-muted",
        subtle:
          "rounded-lg border border-transparent bg-muted focus-visible:border-ring aria-invalid:border-destructive",
        flushed:
          "rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:border-ring focus-visible:ring-0 aria-invalid:border-destructive",
      },
      size: {
        xs: "px-2.5 py-1.5 text-sm",
        sm: "px-3 py-1.5 text-base md:text-sm",
        md: "px-3.5 py-2 text-base md:text-sm",
        lg: "px-4 py-2 text-base",
        xl: "px-4.5 py-2.5 text-lg",
      },
    },
    defaultVariants: {
      variant: "surface",
      size: "md",
    },
  }
);

function Textarea({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Textarea, textareaVariants };
