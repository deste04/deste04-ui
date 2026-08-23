import * as React from "react";

import { cn } from "../../lib/utils";

function Fieldset({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="fieldset"
      className={cn(
        "flex w-full flex-col justify-between gap-5 md:flex-row md:gap-8",
        className
      )}
      {...props}
    />
  );
}

function FieldsetControl({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fieldset-control"
      className={cn("flex w-full max-w-xs flex-col gap-1", className)}
      {...props}
    />
  );
}

function FieldsetContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="fieldset-content"
      className={cn("flex w-full max-w-2xl flex-col gap-4", className)}
      {...props}
    />
  );
}

function FieldsetLegend({ className, ...props }: React.ComponentProps<"legend">) {
  return (
    <legend
      data-slot="fieldset-legend"
      className={cn("font-sans font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function FieldsetHelperText({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="fieldset-helper-text"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function FieldsetErrorText({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="alert"
      data-slot="fieldset-error-text"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-destructive",
        className
      )}
      {...props}
    />
  );
}

export {
  Fieldset,
  FieldsetControl,
  FieldsetContent,
  FieldsetLegend,
  FieldsetHelperText,
  FieldsetErrorText,
};
