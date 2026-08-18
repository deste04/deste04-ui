import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const inputVariants = cva(
  "flex w-full min-w-0 items-center rounded-lg text-start font-sans transition-colors outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        outline:
          "border border-input bg-transparent focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50",
        surface:
          "border border-border bg-card focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive disabled:bg-muted",
        subtle:
          "border border-transparent bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive",
        flushed:
          "rounded-none border-0 border-b border-input bg-transparent focus-visible:border-ring focus-visible:ring-0 aria-invalid:border-destructive",
      },
      size: {
        "2xs": "h-7 px-1.5 text-xs",
        xs: "h-8 px-2 text-sm",
        sm: "h-9 px-2.5 text-sm",
        md: "h-10 px-3 text-base md:text-sm",
        lg: "h-11 px-3.5 text-base",
        xl: "h-12 px-4 text-lg",
        "2xl": "h-16 px-4.5 text-3xl",
      },
    },
    compoundVariants: [
      {
        variant: "flushed",
        className: "px-0",
      },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

function Input({
  className,
  type,
  variant,
  size,
  ...props
}: Omit<React.ComponentProps<"input">, "size"> & VariantProps<typeof inputVariants>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
