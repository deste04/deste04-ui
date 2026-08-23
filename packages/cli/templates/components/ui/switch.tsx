import * as React from "react";
import { Switch as ArkSwitch } from "@ark-ui/react/switch";

import { cn } from "../../lib/utils";

export interface SwitchProps extends ArkSwitch.RootProps {
  size?: "sm" | "default";
}

function Switch({
  className,
  size = "default",
  children,
  ...props
}: Readonly<SwitchProps>) {
  return (
    <ArkSwitch.Root
      data-slot="switch"
      data-size={size}
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <ArkSwitch.Control
        data-slot="switch-control"
        className={cn(
          "peer relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-focus-visible:border-ring data-focus-visible:ring-3 data-focus-visible:ring-ring/50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
          size === "default" ? "h-[1.125rem] w-8" : "h-3.5 w-6"
        )}
      >
        <ArkSwitch.Thumb
          data-slot="switch-thumb"
          className={cn(
            "pointer-events-none block rounded-full bg-background ring-0 transition-transform dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground",
            size === "default"
              ? "size-4 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
              : "size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )}
        />
      </ArkSwitch.Control>
      {children && (
        <ArkSwitch.Label
          data-slot="switch-label"
          className="text-sm leading-none font-medium select-none peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50"
        >
          {children}
        </ArkSwitch.Label>
      )}
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  );
}

export { Switch };
