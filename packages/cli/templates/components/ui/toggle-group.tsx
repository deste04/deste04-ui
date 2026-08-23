import * as React from "react";
import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react/toggle-group";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { toggleVariants } from "./toggle";

export interface ToggleGroupProps extends ArkToggleGroup.RootProps {}

function ToggleGroup({ className, ...props }: Readonly<ToggleGroupProps>) {
  return (
    <ArkToggleGroup.Root
      data-slot="toggle-group"
      className={cn(
        "inline-flex flex-wrap items-center gap-1 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
        className
      )}
      {...props}
    />
  );
}

export interface ToggleGroupItemProps
  extends ArkToggleGroup.ItemProps,
    VariantProps<typeof toggleVariants> {}

function ToggleGroupItem({
  className,
  variant,
  size,
  ...props
}: Readonly<ToggleGroupItemProps>) {
  return (
    <ArkToggleGroup.Item
      data-slot="toggle-group-item"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { ToggleGroup, ToggleGroupItem };
