import type { ComponentProps } from "react";
import { ExternalLink } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const linkVariants = cva(
  "relative inline-flex items-center gap-1 text-foreground font-medium cursor-pointer outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        underline:
          "after:absolute after:inset-x-0 after:bottom-[1px] after:h-[1.5px] after:bg-current after:opacity-60 after:transition-opacity hover:after:opacity-100",
        "no-underline": "",
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  }
);

export interface LinkProps
  extends ComponentProps<"a">,
    VariantProps<typeof linkVariants> {
  external?: boolean;
}

function Link({
  className,
  variant,
  external = false,
  children,
  target,
  rel,
  ...props
}: LinkProps) {
  return (
    <a
      className={cn(linkVariants({ variant }), className)}
      target={external ? (target ?? "_blank") : target}
      rel={external ? (rel ?? "noopener noreferrer") : rel}
      {...props}
    >
      {children}
      {external && <ExternalLink className="size-3.5" />}
    </a>
  );
}

export { Link, linkVariants };
