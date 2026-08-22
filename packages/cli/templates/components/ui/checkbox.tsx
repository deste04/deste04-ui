import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "../../lib/utils";

function Checkbox({ className, ...props }: Readonly<CheckboxPrimitive.Root.Props>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-lg border border-input outline-none transition-colors group-has-disabled/field:opacity-50 group-has-focus-visible/field-label:ring-0 group-has-focus-visible/field-label:not-data-checked:border-foreground/80 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        keepMounted
        className="grid size-4 scale-0 place-content-center rotate-180 text-primary-foreground transition-transform duration-400 ease-[cubic-bezier(0.54,0.01,0,1.49)] data-checked:scale-100 data-checked:rotate-0 [&>svg]:size-3.5"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
