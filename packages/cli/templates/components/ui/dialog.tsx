import * as React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

export interface DialogProps extends ArkDialog.RootProps {}

function Dialog(props: Readonly<DialogProps>) {
  return <ArkDialog.Root data-slot="dialog" {...props} />;
}

export interface DialogTriggerProps extends ArkDialog.TriggerProps {}

/** Renders its own <button>: either style it directly, or pass asChild with your own Button. */
function DialogTrigger({ className, ...props }: Readonly<DialogTriggerProps>) {
  return <ArkDialog.Trigger data-slot="dialog-trigger" className={cn(className)} {...props} />;
}

export interface DialogCloseTriggerProps extends ArkDialog.CloseTriggerProps {}

/** Same deal as DialogTrigger: bare by default, style it or pass asChild. */
function DialogCloseTrigger({ className, ...props }: Readonly<DialogCloseTriggerProps>) {
  return (
    <ArkDialog.CloseTrigger data-slot="dialog-close-trigger" className={cn(className)} {...props} />
  );
}

const dialogContentVariants = cva(
  "relative flex w-full flex-col gap-4 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-lg outline-none animate-in duration-200 ease-out fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:duration-150 data-[state=closed]:ease-in data-[state=closed]:fade-out data-[state=closed]:zoom-out-95",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "max-w-[calc(100vw-2rem)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface DialogContentProps
  extends ArkDialog.ContentProps,
    VariantProps<typeof dialogContentVariants> {
  /** Hide the default close button in the top right corner. */
  hideCloseTrigger?: boolean;
  /** Hide the dimmed backdrop, e.g. alongside Dialog's `modal={false}`. */
  hideBackdrop?: boolean;
}

function DialogContent({
  className,
  size,
  children,
  hideCloseTrigger = false,
  hideBackdrop = false,
  ...props
}: Readonly<DialogContentProps>) {
  return (
    <Portal>
      {!hideBackdrop && (
        <ArkDialog.Backdrop
          data-slot="dialog-backdrop"
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in duration-200 ease-out fade-in data-[state=closed]:animate-out data-[state=closed]:duration-150 data-[state=closed]:ease-in data-[state=closed]:fade-out"
        />
      )}
      <ArkDialog.Positioner
        data-slot="dialog-positioner"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <ArkDialog.Content
          data-slot="dialog-content"
          className={cn(dialogContentVariants({ size }), className)}
          {...props}
        >
          {children}
          {!hideCloseTrigger && (
            <DialogCloseTrigger
              className="absolute top-4 right-4 flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50"
              aria-label="Close"
            >
              <X className="size-4" />
            </DialogCloseTrigger>
          )}
        </ArkDialog.Content>
      </ArkDialog.Positioner>
    </Portal>
  );
}

function DialogHeader({ className, ...props }: Readonly<React.ComponentProps<"div">>) {
  return (
    <div data-slot="dialog-header" className={cn("flex flex-col gap-1.5", className)} {...props} />
  );
}

export interface DialogTitleProps extends ArkDialog.TitleProps {}

function DialogTitle({ className, ...props }: Readonly<DialogTitleProps>) {
  return (
    <ArkDialog.Title
      data-slot="dialog-title"
      className={cn("pe-6 font-sans text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

export interface DialogDescriptionProps extends ArkDialog.DescriptionProps {}

function DialogDescription({ className, ...props }: Readonly<DialogDescriptionProps>) {
  return (
    <ArkDialog.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: Readonly<React.ComponentProps<"div">>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogCloseTrigger,
  dialogContentVariants,
};
