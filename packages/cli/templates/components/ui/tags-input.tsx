import * as React from "react";
import {
  TagsInput as ArkTagsInput,
  useTagsInputContext,
} from "@ark-ui/react/tags-input";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const tagsInputVariants = cva(
  "flex w-full items-start gap-1.5 rounded-lg font-sans transition-colors outline-none min-h-(--tags-input-height) px-(--tags-input-px) py-1.5 data-focus:border-primary data-focus:ring-1 data-focus:ring-primary data-invalid:border-destructive data-invalid:ring-1 data-invalid:ring-destructive data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
  {
    variants: {
      variant: {
        outline: "border border-input bg-transparent dark:bg-input/30",
        surface: "border border-accent/15 bg-accent/5",
        subtle: "border border-transparent bg-muted",
      },
      size: {
        xs: "text-xs [--tags-input-height:1.75rem] [--tags-input-px:0.375rem] [--tags-input-item-height:1.125rem] [--tags-input-item-px:0.375rem]",
        sm: "text-sm [--tags-input-height:2rem] [--tags-input-px:0.375rem] [--tags-input-item-height:1.375rem] [--tags-input-item-px:0.5rem]",
        md: "text-sm [--tags-input-height:2.5rem] [--tags-input-px:0.375rem] [--tags-input-item-height:1.625rem] [--tags-input-item-px:0.625rem]",
        lg: "text-base [--tags-input-height:2.75rem] [--tags-input-px:0.375rem] [--tags-input-item-height:1.875rem] [--tags-input-item-px:0.75rem]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

function TagsInputItems() {
  const tagsInput = useTagsInputContext();

  return tagsInput.value.map((value, index) => (
    <ArkTagsInput.Item
      key={value + index}
      index={index}
      value={value}
      data-slot="tags-input-item"
    >
      <ArkTagsInput.ItemPreview
        data-slot="tags-input-item-preview"
        className="inline-flex h-(--tags-input-item-height) max-w-full items-center gap-1 rounded-md bg-accent/10 px-(--tags-input-item-px) text-accent select-none supports-[not(color:color-mix(in_oklab,red,red))]:text-accent-foreground"
      >
        <ArkTagsInput.ItemText
          data-slot="tags-input-item-text"
          className="max-w-40 truncate"
        >
          {value}
        </ArkTagsInput.ItemText>
        <ArkTagsInput.ItemDeleteTrigger
          data-slot="tags-input-item-delete-trigger"
          className="-me-1 flex size-4 shrink-0 items-center justify-center rounded-sm outline-none hover:bg-accent/20 focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <X className="size-3" />
        </ArkTagsInput.ItemDeleteTrigger>
      </ArkTagsInput.ItemPreview>
      <ArkTagsInput.ItemInput
        data-slot="tags-input-item-input"
        className="h-(--tags-input-item-height) min-w-8 rounded-md bg-transparent px-(--tags-input-item-px) text-inherit outline-none"
      />
    </ArkTagsInput.Item>
  ));
}

export interface TagsInputProps
  extends ArkTagsInput.RootProps,
    VariantProps<typeof tagsInputVariants> {
  label?: React.ReactNode;
  placeholder?: string;
}

function TagsInput({
  className,
  variant,
  size,
  label,
  placeholder = "Add tag...",
  ...props
}: Readonly<TagsInputProps>) {
  return (
    <ArkTagsInput.Root
      data-slot="tags-input"
      className={cn("flex w-full flex-col gap-1.5", className)}
      {...props}
    >
      {label && (
        <ArkTagsInput.Label
          data-slot="tags-input-label"
          className="text-sm leading-none font-medium select-none"
        >
          {label}
        </ArkTagsInput.Label>
      )}
      <ArkTagsInput.Control
        data-slot="tags-input-control"
        className={cn(tagsInputVariants({ variant, size }))}
      >
        <div className="flex flex-1 flex-wrap items-center gap-1.5">
          <TagsInputItems />
          <ArkTagsInput.Input
            data-slot="tags-input-input"
            placeholder={placeholder}
            className="h-(--tags-input-item-height) min-w-20 flex-1 bg-transparent px-1 text-inherit outline-none placeholder:text-muted-foreground data-readonly:hidden"
          />
        </div>
        <ArkTagsInput.ClearTrigger
          data-slot="tags-input-clear-trigger"
          className="flex size-5 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 data-readonly:hidden"
        >
          <X className="size-3.5" />
        </ArkTagsInput.ClearTrigger>
      </ArkTagsInput.Control>
      <ArkTagsInput.HiddenInput />
    </ArkTagsInput.Root>
  );
}

export { TagsInput, tagsInputVariants };
