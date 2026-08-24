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

type TabsVariant = NonNullable<VariantProps<typeof tabsVariants>["variant"]>;
type TabsSize = NonNullable<VariantProps<typeof tabsVariants>["size"]>;

interface TabsContextValue {
  variant: TabsVariant;
  size: TabsSize;
  fitted: boolean;
}

const TabsContext = React.createContext<TabsContextValue>({
  variant: "line",
  size: "md",
  fitted: false,
});

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
  const resolvedVariant = variant ?? "line";
  const resolvedSize = size ?? "md";
  const resolvedFitted = fitted ?? false;
  const context = React.useMemo(
    () => ({ variant: resolvedVariant, size: resolvedSize, fitted: resolvedFitted }),
    [resolvedVariant, resolvedSize, resolvedFitted]
  );

  return (
    <TabsContext.Provider value={context}>
      <ArkTabs.Root
        data-slot="tabs"
        data-variant={resolvedVariant}
        data-size={resolvedSize}
        data-fitted={resolvedFitted}
        className={cn(tabsVariants({ variant, size, fitted, className }))}
        {...props}
      />
    </TabsContext.Provider>
  );
}

function TabsList({ className, ...props }: Readonly<ArkTabs.ListProps>) {
  const { variant } = React.useContext(TabsContext);
  return (
    <ArkTabs.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(
        "relative isolate flex gap-1 bg-transparent data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
        "data-[variant=line]:data-[orientation=horizontal]:border-b data-[variant=line]:data-[orientation=vertical]:border-s data-[variant=line]:border-border",
        "data-[variant=enclosed]:rounded-lg data-[variant=enclosed]:bg-muted data-[variant=enclosed]:p-1",
        className
      )}
      {...props}
    />
  );
}

export interface TabsTriggerProps extends ArkTabs.TriggerProps {}

function TabsTrigger({ className, ...props }: Readonly<TabsTriggerProps>) {
  const { variant, size, fitted } = React.useContext(TabsContext);
  return (
    <ArkTabs.Trigger
      data-slot="tabs-trigger"
      data-variant={variant}
      data-size={size}
      data-fitted={fitted}
      className={cn(
        "relative z-0 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg font-sans font-semibold whitespace-nowrap text-muted-foreground outline-none transition-colors select-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring/50 data-disabled:pointer-events-none data-disabled:opacity-50",
        "data-[size=xs]:h-8 data-[size=xs]:min-w-8 data-[size=xs]:px-3 data-[size=xs]:text-xs",
        "data-[size=sm]:h-9 data-[size=sm]:min-w-9 data-[size=sm]:px-3.5 data-[size=sm]:text-sm",
        "data-[size=md]:h-10 data-[size=md]:min-w-10 data-[size=md]:px-4 data-[size=md]:text-sm",
        "data-[size=lg]:h-11 data-[size=lg]:min-w-11 data-[size=lg]:px-4.5 data-[size=lg]:text-base",
        "data-[fitted=true]:flex-1",
        "data-[variant=line]:rounded-none",
        "data-[variant=line]:data-selected:bg-primary/10 data-[variant=line]:data-selected:text-primary data-[variant=line]:dark:data-selected:bg-primary/15 data-[variant=line]:data-selected:supports-[not(color:color-mix(in_oklab,red,red))]:text-primary-foreground",
        "data-[variant=subtle]:data-selected:text-primary data-[variant=subtle]:data-selected:supports-[not(color:color-mix(in_oklab,red,red))]:text-primary-foreground",
        "data-[variant=enclosed]:data-selected:text-foreground",
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
  const { variant } = React.useContext(TabsContext);
  return (
    <ArkTabs.Indicator
      data-slot="tabs-indicator"
      data-variant={variant}
      className={cn(
        "absolute z-[-1] h-(--height) w-(--width) [--transition-duration:200ms] [--transition-timing-function:cubic-bezier(0.4,0,0.2,1)]",
        "data-[variant=line]:bg-primary",
        "data-[variant=line]:data-[orientation=horizontal]:top-auto data-[variant=line]:data-[orientation=horizontal]:bottom-0 data-[variant=line]:data-[orientation=horizontal]:h-0.5 data-[variant=line]:data-[orientation=horizontal]:translate-y-px",
        "data-[variant=line]:data-[orientation=vertical]:left-0 data-[variant=line]:data-[orientation=vertical]:w-0.5 data-[variant=line]:data-[orientation=vertical]:-translate-x-px",
        "data-[variant=subtle]:rounded-md data-[variant=subtle]:bg-primary/10 data-[variant=subtle]:dark:bg-primary/15",
        "data-[variant=enclosed]:rounded-md data-[variant=enclosed]:bg-card data-[variant=enclosed]:shadow-sm data-[variant=enclosed]:dark:bg-white/10",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator, tabsVariants };
