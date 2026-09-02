import * as React from "react";

import { cn } from "../../lib/utils";

export interface CardLinkProps extends React.ComponentProps<"a"> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  cta?: string;
  external?: boolean;
}

function CardLink({
  className,
  icon,
  title,
  description,
  cta = "Open",
  external = false,
  target,
  rel,
  children,
  ...props
}: Readonly<CardLinkProps>) {
  return (
    <a
      data-slot="card-link"
      target={external ? (target ?? "_blank") : target}
      rel={external ? (rel ?? "noopener noreferrer") : rel}
      className={cn(
        "group/card-link relative flex w-64 flex-col items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-muted px-5 py-10 text-center text-foreground no-underline outline-none transition-colors select-none hover:border-accent/20 hover:bg-accent/10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-5 transition-opacity duration-200 group-hover/card-link:opacity-0">
        {icon && (
          <span className="[&_svg]:size-10 [&_svg]:text-foreground">{icon}</span>
        )}
        <strong className="font-sans text-xl font-bold">{title}</strong>
        {description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        )}
        {children}
      </div>
      <span className="absolute top-full left-1/2 -translate-x-1/2 translate-y-0 font-sans text-2xl leading-none font-bold text-accent opacity-0 transition-all duration-200 group-hover/card-link:top-1/2 group-hover/card-link:-translate-y-1/2 group-hover/card-link:opacity-100">
        {cta}
      </span>
    </a>
  );
}

export { CardLink };
