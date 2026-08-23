import * as React from "react";
import { Swap as ArkSwap } from "@ark-ui/react/swap";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const swapIndicatorVariants = cva(
  "inline-flex items-center justify-center animate-in duration-200 ease-out data-[state=closed]:animate-out data-[state=closed]:duration-100 data-[state=closed]:ease-in",
  {
    variants: {
      variant: {
        fade: "fade-in data-[state=closed]:fade-out",
        scale: "zoom-in-50 fade-in data-[state=closed]:zoom-out-50 data-[state=closed]:fade-out",
        rotate: "spin-in-90 fade-in data-[state=closed]:spin-out-90 data-[state=closed]:fade-out",
      },
    },
    defaultVariants: {
      variant: "fade",
    },
  }
);

export interface SwapProps extends ArkSwap.RootProps {}

function Swap({ className, ...props }: Readonly<SwapProps>) {
  return (
    <ArkSwap.Root
      data-slot="swap"
      className={cn("place-items-center", className)}
      {...props}
    />
  );
}

export interface SwapIndicatorProps
  extends ArkSwap.IndicatorProps,
    VariantProps<typeof swapIndicatorVariants> {}

function SwapIndicator({ className, variant, ...props }: Readonly<SwapIndicatorProps>) {
  return (
    <ArkSwap.Indicator
      data-slot="swap-indicator"
      className={cn(swapIndicatorVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Swap, SwapIndicator, swapIndicatorVariants };
