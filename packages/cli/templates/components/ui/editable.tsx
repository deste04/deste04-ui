import * as React from "react";
import { Editable as ArkEditable } from "@ark-ui/react/editable";
import { Check, Pencil, X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const editableFieldVariants = cva(
  "rounded-lg font-sans transition-colors outline-none selection:bg-primary selection:text-primary-foreground",
  {
    variants: {
      size: {
        "2xs": "px-2 py-0.5 text-xs",
        xs: "px-2.5 py-1.5 text-sm",
        sm: "px-3 py-2 text-sm",
        md: "px-3.5 py-2.5 text-sm",
        lg: "px-4 py-2.5 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const triggerClassName =
  "flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50 data-disabled:pointer-events-none data-disabled:opacity-50";

export interface EditableProps
  extends ArkEditable.RootProps,
    VariantProps<typeof editableFieldVariants> {
  label?: React.ReactNode;
}

function Editable({
  className,
  size,
  label,
  ...props
}: Readonly<EditableProps>) {
  return (
    <ArkEditable.Root
      data-slot="editable"
      className={cn("relative inline-flex w-full items-center gap-1.5", className)}
      {...props}
    >
      {label && (
        <ArkEditable.Label
          data-slot="editable-label"
          className="text-sm leading-none font-medium select-none"
        >
          {label}
        </ArkEditable.Label>
      )}
      <ArkEditable.Area data-slot="editable-area" className="flex-1">
        <ArkEditable.Input
          data-slot="editable-input"
          className={cn(
            editableFieldVariants({ size }),
            "w-full focus-visible:-outline-offset-1 focus-visible:ring-2 focus-visible:ring-ring/50"
          )}
        />
        <ArkEditable.Preview
          data-slot="editable-preview"
          className={cn(
            editableFieldVariants({ size }),
            "inline-flex w-full cursor-default select-none truncate transition-colors hover:bg-muted"
          )}
        />
      </ArkEditable.Area>
      <ArkEditable.Control
        data-slot="editable-control"
        className="inline-flex shrink-0 items-center gap-1"
      >
        <ArkEditable.EditTrigger
          data-slot="editable-edit-trigger"
          aria-label="Edit"
          className={triggerClassName}
        >
          <Pencil className="size-3.5" />
        </ArkEditable.EditTrigger>
        <ArkEditable.SubmitTrigger
          data-slot="editable-submit-trigger"
          aria-label="Save"
          className={triggerClassName}
        >
          <Check className="size-3.5" />
        </ArkEditable.SubmitTrigger>
        <ArkEditable.CancelTrigger
          data-slot="editable-cancel-trigger"
          aria-label="Cancel"
          className={triggerClassName}
        >
          <X className="size-3.5" />
        </ArkEditable.CancelTrigger>
      </ArkEditable.Control>
    </ArkEditable.Root>
  );
}

export { Editable, editableFieldVariants };
