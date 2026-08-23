"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

import { Button } from "../ui/button";
import { Swap, SwapIndicator } from "../ui/swap";

const themeOrder = ["light", "dark", "system"] as const;

type Theme = (typeof themeOrder)[number];

export interface ThemeToggleProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick" | "children"> {}

export function ThemeToggle({ ...props }: Readonly<ThemeToggleProps>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const current: Theme = mounted && themeOrder.includes(theme as Theme) ? (theme as Theme) : "system";
  const isLight = current === "light";
  const OnIcon = current === "system" ? Monitor : Moon;
  const next = themeOrder[(themeOrder.indexOf(current) + 1) % themeOrder.length];

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-md"
      aria-label={`Theme: ${current}. Click to switch to ${next}.`}
      onClick={() => setTheme(next)}
      {...props}
    >
      <Swap swap={!isLight}>
        <SwapIndicator type="off" variant="rotate">
          <Sun />
        </SwapIndicator>
        <SwapIndicator type="on" variant="rotate">
          <OnIcon />
        </SwapIndicator>
      </Swap>
    </Button>
  );
}
