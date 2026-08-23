import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const checkboxVariants = cva(
  "peer relative flex shrink-0 items-center justify-center rounded-lg border border-input outline-none transition-colors group-has-disabled/field:opacity-50 group-has-focus-visible/field-label:ring-0 group-has-focus-visible/field-label:not-data-checked:border-foreground/80 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary",
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

function Checkbox({
  className,
  size,
  indeterminate,
  ...props
}: Readonly<
  CheckboxPrimitive.Root.Props & VariantProps<typeof checkboxVariants>
>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      indeterminate={indeterminate}
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        keepMounted
        className={cn(
          "grid scale-0 place-content-center rotate-180 text-primary-foreground transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] data-checked:scale-100 data-checked:rotate-0 data-indeterminate:scale-100 data-indeterminate:rotate-0",
          size === "sm" ? "size-3.5 [&>svg]:size-3" : "size-4 [&>svg]:size-3.5"
        )}
      >
        {indeterminate ? <MinusIcon /> : <CheckIcon />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox, checkboxVariants };
