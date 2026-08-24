import { Link } from "react-router-dom";
import { ArrowRight, Code2 } from "lucide-react";
import { buttonVariants } from "deste04-ui/components/ui/button";
import { Badge } from "deste04-ui/components/ui/badge";
import { cn } from "deste04-ui/lib/utils";
import { CodeBlock } from "../docs/code-block";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 pt-20 pb-16 text-center sm:pt-28">
      <Badge variant="subtle" size="md">
        Copy and paste components
      </Badge>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Build interfaces without leaving your codebase.
      </h1>

      <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
        deste04-ui is a React component library that installs one piece at a time,
        straight into your project. No package to depend on, no black box to work
        around. Just code you own, styled with Tailwind CSS.
      </p>

      <div className="w-full max-w-md">
        <CodeBlock code="npx deste04-ui add button" />
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Link to="/docs/components" className={cn(buttonVariants({ variant: "solid", size: "md" }))}>
          Browse components <ArrowRight />
        </Link>
        <Link to="/docs/introduction" className={cn(buttonVariants({ variant: "outline", size: "md" }))}>
          Read the docs
        </Link>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "plain", size: "md" }))}
        >
          <Code2 /> GitHub
        </a>
      </div>
    </section>
  );
}
