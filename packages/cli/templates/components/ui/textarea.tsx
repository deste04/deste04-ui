import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const textareaVariants = cva(
  "flex field-sizing-content min-h-16 w-full min-w-0 rounded-lg font-sans text-foreground transition-colors outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        outline:
          "border border-input bg-transparent focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-destructive dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50",
        surface:
          "border border-border bg-card focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-destructive disabled:bg-muted",
        subtle:
          "border border-transparent bg-muted focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-destructive",
        flushed:
          "rounded-none border-0 border-b-2 border-input bg-transparent text-foreground focus-visible:border-primary aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive",
      },
      size: {
        xs: "px-2 py-[5px] text-sm scroll-pb-[5px]",
        sm: "px-2.5 py-[7px] text-sm scroll-pb-[7px]",
        md: "px-3 py-[7px] text-base md:text-sm scroll-pb-[7px]",
        lg: "px-3.5 py-[9px] text-base scroll-pb-[9px]",
        xl: "px-4 py-[9px] text-lg scroll-pb-[9px]",
      },
    },
    compoundVariants: [
      {
        variant: "flushed",
        className: "px-0",
      },
    ],
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
