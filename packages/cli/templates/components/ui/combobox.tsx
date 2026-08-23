import * as React from "react";
import {
  Combobox as ArkCombobox,
  useListCollection,
} from "@ark-ui/react/combobox";
import { Check, ChevronsUpDown, X } from "lucide-react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { inputVariants } from "./input";

export interface ComboboxItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface ComboboxProps
  extends Omit<ArkCombobox.RootProps<ComboboxItem>, "collection">,
    VariantProps<typeof inputVariants> {
  items: ComboboxItem[];
  label?: React.ReactNode;
  groupLabel?: React.ReactNode;
  placeholder?: string;
  emptyText?: React.ReactNode;
}

function Combobox({
  className,
  variant,
  size,
  items,
  label,
  groupLabel,
  placeholder = "Search...",
  emptyText = "No results found",
  ...props
}: Readonly<ComboboxProps>) {
  const { collection, filter } = useListCollection<ComboboxItem>({
    initialItems: items,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
  });

  return (
    <ArkCombobox.Root
      data-slot="combobox"
      collection={collection}
      onInputValueChange={(details) => filter(details.inputValue)}
      className={cn("relative flex w-full flex-col gap-1.5", className)}
      {...props}
    >
      {label && (
        <ArkCombobox.Label
          data-slot="combobox-label"
          className="text-sm leading-none font-medium select-none"
        >
          {label}
        </ArkCombobox.Label>
      )}
      <ArkCombobox.Control data-slot="combobox-control" className="relative">
        <ArkCombobox.Input
          data-slot="combobox-input"
          placeholder={placeholder}
          className={cn(inputVariants({ variant, size }), "truncate pe-14")}
        />
        <div className="absolute inset-y-0 end-1.5 flex items-center gap-0.5">
          <ArkCombobox.ClearTrigger
            data-slot="combobox-clear-trigger"
            className="flex size-6 items-center justify-center rounded-md text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <X className="size-3.5" />
          </ArkCombobox.ClearTrigger>
          <ArkCombobox.Trigger
            data-slot="combobox-trigger"
            className="flex size-6 items-center justify-center rounded-md text-muted-foreground outline-none data-disabled:pointer-events-none"
          >
            <ChevronsUpDown className="size-4" />
          </ArkCombobox.Trigger>
        </div>
      </ArkCombobox.Control>
      <ArkCombobox.Positioner data-slot="combobox-positioner">
        <ArkCombobox.Content
          data-slot="combobox-content"
          className="z-50 flex max-h-[min(var(--available-height),24rem)] min-w-[max(var(--reference-width),10rem)] flex-col gap-0.5 overflow-y-auto rounded-lg border border-border bg-card p-1 text-sm shadow-md outline-none starting:scale-95 starting:opacity-0"
        >
          <ArkCombobox.Empty
            data-slot="combobox-empty"
            className="flex min-h-9 items-center px-2 text-muted-foreground"
          >
            {emptyText}
          </ArkCombobox.Empty>
          <ArkCombobox.ItemGroup
            data-slot="combobox-item-group"
            className="flex flex-col gap-0.5"
          >
            {groupLabel && (
              <ArkCombobox.ItemGroupLabel
                data-slot="combobox-item-group-label"
                className="border-b border-border px-2 pt-1 pb-1.5 text-xs font-medium text-muted-foreground"
              >
                {groupLabel}
              </ArkCombobox.ItemGroupLabel>
            )}
            {collection.items.map((item) => (
              <ArkCombobox.Item
                key={item.value}
                item={item}
                data-slot="combobox-item"
                className="flex min-h-9 cursor-pointer items-center justify-between gap-2 rounded-md px-2 outline-none hover:bg-muted data-highlighted:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                <ArkCombobox.ItemText data-slot="combobox-item-text">
                  {item.label}
                </ArkCombobox.ItemText>
                <ArkCombobox.ItemIndicator
                  data-slot="combobox-item-indicator"
                  className="text-primary"
                >
                  <Check className="size-4" />
                </ArkCombobox.ItemIndicator>
              </ArkCombobox.Item>
            ))}
          </ArkCombobox.ItemGroup>
        </ArkCombobox.Content>
      </ArkCombobox.Positioner>
    </ArkCombobox.Root>
  );
}

export { Combobox };
