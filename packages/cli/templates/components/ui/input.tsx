import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const inputVariants = cva(
  "flex w-full items-center rounded-lg text-start font-sans transition-colors outline-none h-(--input-height) min-h-(--input-height) min-w-(--input-height) selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:text-destructive",
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
          "rounded-none border-0 border-b border-input bg-transparent text-foreground focus-visible:border-b-2 focus-visible:border-primary aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive",
      },
      size: {
        "2xs": "text-xs px-1.5 [--input-height:1.75rem]",
        xs: "text-sm px-2 [--input-height:2rem]",
        sm: "text-sm px-2.5 [--input-height:2.25rem]",
        md: "text-base md:text-sm px-3 [--input-height:2.5rem]",
        lg: "text-base px-3.5 [--input-height:2.75rem]",
        xl: "text-lg px-4 [--input-height:3rem]",
        "2xl": "text-3xl px-4.5 [--input-height:4rem]",
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
