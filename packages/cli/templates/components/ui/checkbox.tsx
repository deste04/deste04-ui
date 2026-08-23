import * as React from "react";
import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const checkboxControlVariants = cva(
  "peer relative flex shrink-0 items-center justify-center rounded-lg border border-input outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 data-focus-visible:border-ring data-focus-visible:ring-3 data-focus-visible:ring-ring/50 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary",
  {
    variants: {
      size: {
        sm: "size-3.5",
        default: "size-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface CheckboxProps
  extends ArkCheckbox.RootProps,
    VariantProps<typeof checkboxControlVariants> {}

function Checkbox({
  className,
  size,
  children,
  ...props
}: Readonly<CheckboxProps>) {
  const indicatorClassName = cn(
    "grid place-content-center text-primary-foreground transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] starting:scale-0 starting:rotate-180",
    size === "sm" ? "size-3.5 [&>svg]:size-3" : "size-4 [&>svg]:size-3.5"
  );

  return (
    <ArkCheckbox.Root
      data-slot="checkbox"
      className={cn("group/checkbox inline-flex items-center gap-2", className)}
      {...props}
    >
      <ArkCheckbox.Control
        data-slot="checkbox-control"
        className={cn(checkboxControlVariants({ size }))}
      >
        <ArkCheckbox.Indicator
          data-slot="checkbox-indicator"
          className={indicatorClassName}
        >
          <CheckIcon />
        </ArkCheckbox.Indicator>
        <ArkCheckbox.Indicator
          indeterminate
          data-slot="checkbox-indicator"
          className={indicatorClassName}
        >
          <MinusIcon />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      {children && (
        <ArkCheckbox.Label
          data-slot="checkbox-label"
          className="text-sm leading-none font-medium select-none peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50"
        >
          {children}
        </ArkCheckbox.Label>
      )}
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
}

export { Checkbox, checkboxControlVariants };
