import * as React from "react";
import {
  Toast as ArkToast,
  Toaster as ArkToaster,
  createToaster,
  type ToastOptions,
} from "@ark-ui/react/toast";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Spinner } from "./spinner";

type ToastType = "info" | "success" | "error" | "warning" | "loading";

const toaster = createToaster({
  placement: "bottom-end",
  gap: 12,
  overlap: false,
});

const toastVariants = cva(
  "relative flex w-(--toast-width) max-w-[calc(100vw-2rem)] items-start gap-3 rounded-lg border bg-card p-4 font-sans text-card-foreground shadow-lg outline-none [--toast-width:22rem] translate-x-[var(--x,0)] translate-y-[var(--y,100%)] scale-[var(--scale,1)] opacity-[var(--opacity,0)] transition-[translate,scale,opacity] duration-[var(--remove-delay)] ease-out data-disabled:pointer-events-none",
  {
    variants: {
      type: {
        info: "border-border",
        success: "border-primary/20",
        error: "border-destructive/20",
        warning: "border-border",
        loading: "border-border",
      },
    },
    defaultVariants: {
      type: "info",
    },
  }
);

const toastIconColorByType: Record<ToastType, string> = {
  info: "text-foreground",
  success: "text-primary",
  error: "text-destructive",
  warning: "text-amber-500 dark:text-amber-400",
  loading: "text-muted-foreground",
};

const toastIconByType: Record<Exclude<ToastType, "loading">, React.ReactNode> = {
  info: <Info />,
  success: <CheckCircle2 />,
  error: <XCircle />,
  warning: <AlertTriangle />,
};

function isKnownType(type: string): type is ToastType {
  return type in toastIconColorByType;
}

function ToastCard(toast: Readonly<ToastOptions>) {
  const rawType = toast.type ?? "info";
  const type: ToastType = isKnownType(rawType) ? rawType : "info";

  return (
    <ArkToast.Root data-slot="toast" className={cn(toastVariants({ type }))}>
      <span
        data-slot="toast-icon"
        className={cn("mt-0.5 shrink-0 [&_svg]:size-5", toastIconColorByType[type])}
      >
        {type === "loading" ? <Spinner size="sm" /> : (toastIconByType[type] ?? <Info />)}
      </span>
      <div className="flex flex-1 flex-col gap-1">
        {toast.title && (
          <ArkToast.Title data-slot="toast-title" className="text-sm leading-none font-semibold">
            {toast.title}
          </ArkToast.Title>
        )}
        {toast.description && (
          <ArkToast.Description data-slot="toast-description" className="text-sm text-muted-foreground">
            {toast.description}
          </ArkToast.Description>
        )}
        {toast.action && (
          <ArkToast.ActionTrigger
            data-slot="toast-action-trigger"
            className="mt-1 self-start text-sm font-medium text-primary outline-none underline-offset-4 hover:underline focus-visible:underline"
          >
            {toast.action.label}
          </ArkToast.ActionTrigger>
        )}
      </div>
      {toast.closable !== false && (
        <ArkToast.CloseTrigger
          data-slot="toast-close-trigger"
          className="flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <X className="size-3.5" />
        </ArkToast.CloseTrigger>
      )}
    </ArkToast.Root>
  );
}

export interface ToasterProps
  extends Omit<React.ComponentProps<typeof ArkToaster>, "toaster" | "children"> {}

function Toaster({ className, ...props }: Readonly<ToasterProps>) {
  return (
    <ArkToaster
      data-slot="toaster"
      toaster={toaster}
      className={cn("flex flex-col", className)}
      {...props}
    >
      {(toast) => <ToastCard {...toast} />}
    </ArkToaster>
  );
}

export { Toaster, toaster as toast };
