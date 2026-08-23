import * as React from "react";
import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";

import { cn } from "../../lib/utils";

function RadioGroup({
  className,
  ...props
}: Readonly<ArkRadioGroup.RootProps>) {
  return (
    <ArkRadioGroup.Root
      data-slot="radio-group"
      className={cn("grid w-full gap-2", className)}
      {...props}
    />
  );
}

export interface RadioGroupItemProps extends ArkRadioGroup.ItemProps {}

function RadioGroupItem({
  className,
  children,
  ...props
}: Readonly<RadioGroupItemProps>) {
  return (
    <ArkRadioGroup.Item
      data-slot="radio-group-item"
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <ArkRadioGroup.ItemControl
        data-slot="radio-group-item-control"
        className="peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none transition-[border-width] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] after:absolute after:-inset-x-3 after:-inset-y-2 data-focus-visible:border-ring data-focus-visible:ring-3 data-focus-visible:ring-ring/50 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:bg-input/30 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40 data-[state=checked]:border-[5px] data-[state=checked]:border-primary"
      />
      {children && (
        <ArkRadioGroup.ItemText
          data-slot="radio-group-item-text"
          className="text-sm leading-none font-medium select-none peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50"
        >
          {children}
        </ArkRadioGroup.ItemText>
      )}
      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
}

export { RadioGroup, RadioGroupItem };
