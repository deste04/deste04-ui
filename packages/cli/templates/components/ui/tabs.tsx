import * as React from "react";
import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const tabsVariants = cva(
  "relative flex items-start data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:gap-2 data-[orientation=vertical]:flex-row data-[orientation=vertical]:gap-4 data-[variant=line]:items-stretch data-[fitted=true]:items-stretch",
  {
    variants: {
      variant: {
        line: "",
        subtle: "",
        enclosed: "",
      },
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
      },
      fitted: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "line",
      size: "md",
      fitted: false,
    },
  }
);

export interface TabsProps
  extends ArkTabs.RootProps,
    VariantProps<typeof tabsVariants> {}

function Tabs({
  className,
  variant = "line",
  size = "md",
  fitted = false,
  ...props
}: Readonly<TabsProps>) {
  return (
    <ArkTabs.Root
      data-slot="tabs"
      data-variant={variant}
      data-size={size}
      data-fitted={fitted}
      className={cn(tabsVariants({ variant, size, fitted, className }))}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: Readonly<ArkTabs.ListProps>) {
  return (
    <ArkTabs.List
      data-slot="tabs-list"
      className={cn(
        "relative isolate flex gap-1 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
        "in-data-[variant=line]:data-[orientation=horizontal]:border-b in-data-[variant=line]:data-[orientation=vertical]:border-s in-data-[variant=line]:border-border",
        "in-data-[variant=enclosed]:rounded-lg in-data-[variant=enclosed]:bg-muted in-data-[variant=enclosed]:p-1",
        className
      )}
      {...props}
    />
  );
}

export interface TabsTriggerProps extends ArkTabs.TriggerProps {}

function TabsTrigger({ className, ...props }: Readonly<TabsTriggerProps>) {
  return (
    <ArkTabs.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative z-0 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg font-sans font-semibold whitespace-nowrap text-muted-foreground outline-none transition-colors select-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring/50 data-disabled:pointer-events-none data-disabled:opacity-50",
        "in-data-[size=xs]:h-8 in-data-[size=xs]:min-w-8 in-data-[size=xs]:px-3 in-data-[size=xs]:text-xs",
        "in-data-[size=sm]:h-9 in-data-[size=sm]:min-w-9 in-data-[size=sm]:px-3.5 in-data-[size=sm]:text-sm",
        "in-data-[size=md]:h-10 in-data-[size=md]:min-w-10 in-data-[size=md]:px-4 in-data-[size=md]:text-sm",
        "in-data-[size=lg]:h-11 in-data-[size=lg]:min-w-11 in-data-[size=lg]:px-4.5 in-data-[size=lg]:text-base",
        "in-data-[fitted=true]:flex-1",
        "in-data-[variant=line]:rounded-none",
        "in-data-[variant=line]:data-selected:bg-primary/10 in-data-[variant=line]:data-selected:text-primary in-data-[variant=line]:dark:data-selected:bg-primary/15 in-data-[variant=line]:data-selected:supports-[not(color:color-mix(in_oklab,red,red))]:text-primary-foreground",
        "in-data-[variant=subtle]:data-selected:text-primary in-data-[variant=subtle]:data-selected:supports-[not(color:color-mix(in_oklab,red,red))]:text-primary-foreground",
        "in-data-[variant=enclosed]:data-selected:text-foreground",
        className
      )}
      {...props}
    />
  );
}

export interface TabsContentProps extends ArkTabs.ContentProps {}

function TabsContent({ className, ...props }: Readonly<TabsContentProps>) {
  return (
    <ArkTabs.Content
      data-slot="tabs-content"
      className={cn(
        "flex-1 rounded-lg text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full",
        className
      )}
      {...props}
    />
  );
}

function TabsIndicator({ className, ...props }: Readonly<ArkTabs.IndicatorProps>) {
  return (
    <ArkTabs.Indicator
      data-slot="tabs-indicator"
      className={cn(
        "absolute z-[-1] h-(--height) w-(--width) [--transition-duration:200ms] [--transition-timing-function:cubic-bezier(0.4,0,0.2,1)]",
        "in-data-[variant=line]:bg-primary",
        "in-data-[variant=line]:data-[orientation=horizontal]:top-auto in-data-[variant=line]:data-[orientation=horizontal]:bottom-0 in-data-[variant=line]:data-[orientation=horizontal]:h-0.5 in-data-[variant=line]:data-[orientation=horizontal]:translate-y-px",
        "in-data-[variant=line]:data-[orientation=vertical]:left-0 in-data-[variant=line]:data-[orientation=vertical]:w-0.5 in-data-[variant=line]:data-[orientation=vertical]:-translate-x-px",
        "in-data-[variant=subtle]:rounded-md in-data-[variant=subtle]:bg-primary/10 in-data-[variant=subtle]:dark:bg-primary/15",
        "in-data-[variant=enclosed]:rounded-md in-data-[variant=enclosed]:bg-card in-data-[variant=enclosed]:shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator, tabsVariants };
