import * as React from "react";
import { cn } from "../../lib/utils";

export type ButtonVariant = "default" | "outline" | "ghost" | "destructive";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * Button — componente base della libreria.
 *
 * Stile fatto SOLO con classi utility Tailwind (nessun CSS custom): i
 * colori vengono dai design token di styles/global.css tramite la
 * sintassi arbitraria di Tailwind, es. `bg-[var(--du-primary-bg)]`.
 *
 * Modello da seguire per i prossimi componenti:
 * - props tipizzate che estendono l'elemento HTML nativo
 * - varianti/dimensioni gestite come mappe di classi Tailwind
 * - cn() da lib/utils per unire le classi in modo sicuro
 */
const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--du-radius)] border border-transparent text-sm font-medium cursor-pointer transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--du-focus-ring)]";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-[var(--du-primary-bg)] text-[var(--du-primary-fg)] hover:bg-[var(--du-primary-bg-hover)]",
  outline:
    "bg-transparent border-[var(--du-outline-border)] text-[var(--du-outline-fg)] hover:bg-[var(--du-outline-bg-hover)]",
  ghost:
    "bg-transparent text-[var(--du-ghost-fg)] hover:bg-[var(--du-ghost-bg-hover)]",
  destructive:
    "bg-[var(--du-destructive-bg)] text-[var(--du-destructive-fg)] hover:bg-[var(--du-destructive-bg-hover)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 py-1.5 text-[0.8125rem]",
  lg: "h-11 px-6 py-2.5 text-[0.9375rem]",
  icon: "h-10 w-10 p-0",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
