import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Spinner } from "./spinner";

const spinnerSizeBySize = {
  "2xs": "xs",
  xs: "xs",
  sm: "sm",
  md: "default",
  lg: "lg",
  xl: "xl",
  "2xl": "xl",
  "icon-2xs": "xs",
  "icon-xs": "xs",
  "icon-sm": "sm",
  "icon-md": "default",
  "icon-lg": "lg",
  "icon-xl": "xl",
  "icon-2xl": "xl",
} as const;

const buttonVariants = cva(
  "group/button relative isolate inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-transparent bg-clip-padding align-middle font-sans font-semibold whitespace-nowrap transition-colors outline-none select-none cursor-pointer focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 not-disabled:active:not-aria-[haspopup]:translate-y-px disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        solid:
          "bg-primary text-primary-foreground hover:bg-primary/80 disabled:bg-muted disabled:text-muted-foreground",
        surface:
          "border-primary/20 bg-primary/10 text-primary hover:border-primary/40 hover:bg-primary/15 active:bg-primary/20 aria-expanded:bg-primary/15 dark:border-primary/25 dark:bg-primary/15 disabled:border-border disabled:bg-muted disabled:text-muted-foreground",
        subtle:
          "bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/20 aria-expanded:bg-primary/15 dark:bg-primary/15 disabled:bg-muted disabled:text-muted-foreground",
        outline:
          "border-border bg-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 disabled:bg-muted disabled:text-muted-foreground disabled:hover:bg-muted",
        plain:
          "text-foreground hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 disabled:text-muted-foreground disabled:hover:bg-transparent",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40 disabled:bg-muted disabled:text-muted-foreground",
      },
      size: {
        "2xs":
          "h-6 min-w-6 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        xs: "h-8 min-w-8 rounded-[min(var(--radius-md),12px)] px-2.5 text-sm in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-4",
        sm: "h-9 min-w-9 px-3 text-sm [&_svg:not([class*='size-'])]:size-4",
        md: "h-10 min-w-10 px-3.5 text-sm [&_svg:not([class*='size-'])]:size-5",
        lg: "h-11 min-w-11 px-4 text-base [&_svg:not([class*='size-'])]:size-5",
        xl: "h-12 min-w-12 px-4.5 text-base [&_svg:not([class*='size-'])]:size-6",
        "2xl": "h-16 min-w-16 px-6 text-xl [&_svg:not([class*='size-'])]:size-7",
        "icon-2xs":
          "size-6 rounded-[min(var(--radius-md),10px)] p-0 in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        "icon-xs":
          "size-8 rounded-[min(var(--radius-md),12px)] p-0 in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-9 p-0 [&_svg:not([class*='size-'])]:size-4",
        "icon-md": "size-10 p-0 [&_svg:not([class*='size-'])]:size-5",
        "icon-lg": "size-11 p-0 [&_svg:not([class*='size-'])]:size-5",
        "icon-xl": "size-12 p-0 [&_svg:not([class*='size-'])]:size-5",
        "icon-2xl": "size-16 p-0 [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: ReactNode;
}

function Button({
  className,
  variant = "solid",
  size = "md",
  loading = false,
  loadingText,
  disabled,
  children,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  ButtonLoadingProps) {
  return (
    <button
      type="button"
      data-slot="button"
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {loading && <Spinner size={spinnerSizeBySize[size ?? "md"]} />}
      {loading ? loadingText ?? children : children}
    </button>
  );
}

export { Button, buttonVariants };
