import type { ComponentProps } from "react";
import { LoaderCircle, LoaderIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-3.5",
      default: "size-4",
      lg: "size-5",
      xl: "size-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const spinnerIcons = {
  ticks: LoaderIcon,
  circle: LoaderCircle,
} as const;

interface SpinnerProps
  extends ComponentProps<"svg">,
    VariantProps<typeof spinnerVariants> {
  variant?: keyof typeof spinnerIcons;
}

function Spinner({
  className,
  size,
  variant = "ticks",
  ...props
}: Readonly<SpinnerProps>) {
  const Icon = spinnerIcons[variant];
  return (
    <Icon
      role="status"
      aria-label="Caricamento"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  );
}

export { Spinner, spinnerVariants };
export type { SpinnerProps };
