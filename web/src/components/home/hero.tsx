import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "deste04-ui/components/ui/button";
import { Badge } from "deste04-ui/components/ui/badge";
import { cn } from "deste04-ui/lib/utils";
import { CodeBlock } from "../docs/code-block";
import { GithubIcon } from "../icons/github";
import { ComposedExamples } from "./composed-examples";

export function Hero() {
  return (
    <section className="grid grid-cols-1 gap-10 lg:h-full lg:grid-cols-[minmax(34rem,5fr)_6fr] lg:grid-rows-[1fr] lg:overflow-hidden">
      <div className="flex w-full flex-col px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:min-h-0 lg:py-0">
        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <div className="flex max-w-xl flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <Badge variant="subtle" size="md">
              Copy and paste components
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Build interfaces without leaving your codebase.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              deste04-ui is a React component library that installs one piece at a time,
              straight into your project. No package to depend on, no black box to work
              around. Just code you own, styled with Tailwind CSS.
            </p>

            <div className="w-full">
              <CodeBlock code="npx deste04-ui add button" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link to="/docs/components" className={cn(buttonVariants({ variant: "solid", size: "xl" }))}>
                Browse components <ArrowRight />
              </Link>
              <Link to="/docs/introduction" className={cn(buttonVariants({ variant: "outline", size: "xl" }))}>
                Read the docs
              </Link>
              <a
                href="https://github.com/deste04/deste04-ui"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "plain", size: "xl" }))}
              >
                <GithubIcon className="size-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto px-4 pb-12 sm:px-6 md:px-8 lg:min-h-0 lg:overflow-visible lg:px-0 lg:pb-0">
        <div className="lg:h-full lg:origin-top lg:rotate-[4deg] lg:pt-6">
          <ComposedExamples />
        </div>
      </div>
    </section>
  );
}
