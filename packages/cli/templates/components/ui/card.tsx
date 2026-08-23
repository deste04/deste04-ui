import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const cardVariants = cva(
  "relative flex overflow-hidden rounded-xl text-card-foreground",
  {
    variants: {
      variant: {
        outline: "border border-border bg-transparent",
        elevated: "border border-transparent bg-card shadow-lg border-border",
        subtle: "border border-transparent bg-muted",
      },
      size: {
        sm: "[--card-p:1rem]",
        md: "[--card-p:1.5rem]",
        lg: "[--card-p:2rem]",
      },
      orientation: {
        vertical: "flex-col",
        horizontal: "flex-row",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      orientation: "vertical",
    },
  }
);

function Card({
  className,
  variant,
  size,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      data-orientation={orientation}
      className={cn(cardVariants({ variant, size, orientation, className }))}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-1 p-(--card-p) has-data-[slot=card-action]:grid has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-action]:items-start",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-sans text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("flex flex-1 flex-col px-(--card-p) pb-(--card-p)", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center justify-end gap-3 px-(--card-p) pt-[calc(var(--card-p)/3)] pb-(--card-p)",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
};
