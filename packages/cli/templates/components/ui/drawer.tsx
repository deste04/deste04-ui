import * as React from "react";
import { Drawer as ArkDrawer } from "@ark-ui/react/drawer";
import { Portal } from "@ark-ui/react/portal";
import { X } from "lucide-react";

import { cn } from "../../lib/utils";

export interface DrawerProps extends ArkDrawer.RootProps {}

function Drawer(props: Readonly<DrawerProps>) {
  return <ArkDrawer.Root data-slot="drawer" {...props} />;
}

export interface DrawerTriggerProps extends ArkDrawer.TriggerProps {}

/** Renders its own <button>: either style it directly, or pass asChild with your own Button. */
function DrawerTrigger({ className, ...props }: Readonly<DrawerTriggerProps>) {
  return <ArkDrawer.Trigger data-slot="drawer-trigger" className={cn(className)} {...props} />;
}

export interface DrawerCloseTriggerProps extends ArkDrawer.CloseTriggerProps {}

/** Same deal as DrawerTrigger: bare by default, style it or pass asChild. */
function DrawerCloseTrigger({ className, ...props }: Readonly<DrawerCloseTriggerProps>) {
  return (
    <ArkDrawer.CloseTrigger data-slot="drawer-close-trigger" className={cn(className)} {...props} />
  );
}

export interface DrawerContentProps extends ArkDrawer.ContentProps {
  /** Hide the default close button in the top right corner. */
  hideCloseTrigger?: boolean;
  /** Hide the dimmed backdrop, e.g. alongside Drawer's `modal={false}`. */
  hideBackdrop?: boolean;
  /** Hide the drag handle shown on top/bottom drawers. */
  hideGrabber?: boolean;
}

/**
 * Docks to whichever edge `swipeDirection` resolves to (default "down", a
 * bottom sheet), reading Ark's own `data-swipe-direction` to size, round and
 * slide itself in from the right side.
 */
function DrawerContent({
  className,
  children,
  hideCloseTrigger = false,
  hideBackdrop = false,
  hideGrabber = false,
  ...props
}: Readonly<DrawerContentProps>) {
  return (
    <Portal>
      {!hideBackdrop && (
        <ArkDrawer.Backdrop
          data-slot="drawer-backdrop"
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in duration-200 ease-out fade-in data-[state=closed]:animate-out data-[state=closed]:duration-150 data-[state=closed]:ease-in data-[state=closed]:fade-out"
        />
      )}
      <ArkDrawer.Positioner
        data-slot="drawer-positioner"
        className="fixed inset-0 z-50 flex data-[swipe-direction=down]:items-end data-[swipe-direction=left]:justify-start data-[swipe-direction=right]:justify-end data-[swipe-direction=up]:items-start"
      >
        <ArkDrawer.Content
          data-slot="drawer-content"
          className={cn(
            "group relative flex flex-col gap-4 bg-card p-6 text-card-foreground shadow-lg outline-none animate-in duration-300 ease-out data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=closed]:ease-in",
            "data-[swipe-direction=down]:w-full data-[swipe-direction=down]:max-h-[85vh] data-[swipe-direction=down]:rounded-t-xl data-[swipe-direction=down]:slide-in-from-bottom data-[swipe-direction=down]:data-[state=closed]:slide-out-to-bottom",
            "data-[swipe-direction=up]:w-full data-[swipe-direction=up]:max-h-[85vh] data-[swipe-direction=up]:rounded-b-xl data-[swipe-direction=up]:slide-in-from-top data-[swipe-direction=up]:data-[state=closed]:slide-out-to-top",
            "data-[swipe-direction=left]:h-full data-[swipe-direction=left]:w-full data-[swipe-direction=left]:max-w-sm data-[swipe-direction=left]:rounded-e-xl data-[swipe-direction=left]:slide-in-from-left data-[swipe-direction=left]:data-[state=closed]:slide-out-to-left",
            "data-[swipe-direction=right]:h-full data-[swipe-direction=right]:w-full data-[swipe-direction=right]:max-w-sm data-[swipe-direction=right]:rounded-s-xl data-[swipe-direction=right]:slide-in-from-right data-[swipe-direction=right]:data-[state=closed]:slide-out-to-right",
            className
          )}
          {...props}
        >
          {!hideGrabber && (
            <ArkDrawer.Grabber
              data-slot="drawer-grabber"
              className="mx-auto -mt-2 mb-1 hidden shrink-0 cursor-grab touch-none items-center justify-center py-2 active:cursor-grabbing group-data-[swipe-direction=down]:flex group-data-[swipe-direction=up]:flex"
            >
              <ArkDrawer.GrabberIndicator
                data-slot="drawer-grabber-indicator"
                className="h-1.5 w-12 rounded-full bg-muted-foreground/30"
              />
            </ArkDrawer.Grabber>
          )}
          {children}
          {!hideCloseTrigger && (
            <DrawerCloseTrigger
              className="absolute top-4 right-4 flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50"
              aria-label="Close"
            >
              <X className="size-4" />
            </DrawerCloseTrigger>
          )}
        </ArkDrawer.Content>
      </ArkDrawer.Positioner>
    </Portal>
  );
}

function DrawerHeader({ className, ...props }: Readonly<React.ComponentProps<"div">>) {
  return (
    <div data-slot="drawer-header" className={cn("flex flex-col gap-1.5", className)} {...props} />
  );
}

export interface DrawerTitleProps extends ArkDrawer.TitleProps {}

function DrawerTitle({ className, ...props }: Readonly<DrawerTitleProps>) {
  return (
    <ArkDrawer.Title
      data-slot="drawer-title"
      className={cn("pe-6 font-sans text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

export interface DrawerDescriptionProps extends ArkDrawer.DescriptionProps {}

function DrawerDescription({ className, ...props }: Readonly<DrawerDescriptionProps>) {
  return (
    <ArkDrawer.Description
      data-slot="drawer-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: Readonly<React.ComponentProps<"div">>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerCloseTrigger,
};
