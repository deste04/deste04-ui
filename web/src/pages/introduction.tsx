import { Link } from "react-router-dom";
import { linkVariants } from "deste04-ui/components/ui/link";
import { Card, CardContent } from "deste04-ui/components/ui/card";
import { cn } from "deste04-ui/lib/utils";
import { PageHeader } from "../components/docs/page-header";
import { CodeBlock } from "../components/docs/code-block";

export default function Introduction() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 pb-24">
      <PageHeader
        title="Introduction"
        description="deste04-ui is a React component library built in a copy and paste style, the same idea popularized by shadcn/ui."
      />

      <section className="flex flex-col gap-3">
        <p className="leading-relaxed text-foreground">
          Components are not a runtime dependency. Instead, they are installed one at a
          time with a small CLI that copies the actual source code into your project,
          under <code className="rounded bg-muted px-1.5 py-0.5 text-sm">components/ui/</code>.
          From that moment the code is yours. You can read it, change it, or delete it,
          without waiting on a new release from this library.
        </p>
        <p className="leading-relaxed text-foreground">
          Every component you see in this documentation has a live preview, its
          installation command, and its full source code, so you always know exactly
          what you are adding to your project.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-foreground">How components are styled</h2>
        <p className="leading-relaxed text-foreground">
          Styling is done only with Tailwind CSS utility classes. No component ships its
          own CSS file. A single shared stylesheet defines the design tokens, colors,
          font and radius, as CSS variables in the shadcn/ui style, with dark mode
          applied through a <code className="rounded bg-muted px-1.5 py-0.5 text-sm">.dark</code>{" "}
          class on the <code className="rounded bg-muted px-1.5 py-0.5 text-sm">html</code>{" "}
          element.
        </p>
        <p className="leading-relaxed text-foreground">
          Behavior comes from{" "}
          <a
            href="https://base-ui.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkVariants())}
          >
            Base UI
          </a>{" "}
          and{" "}
          <a
            href="https://ark-ui.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkVariants())}
          >
            Ark UI
          </a>
          , two headless, accessible primitive libraries. Variants are built with{" "}
          <a
            href="https://cva.style"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkVariants())}
          >
            class-variance-authority
          </a>
          .
        </p>
      </section>

      <Card variant="subtle">
        <CardContent className="gap-2 pt-6">
          <p className="font-medium text-foreground">Requirements</p>
          <p className="leading-relaxed text-muted-foreground">
            Your project needs Tailwind CSS v4 already configured. See{" "}
            <Link to="/docs/installation" className={cn(linkVariants())}>
              Installation
            </Link>{" "}
            for the setup steps.
          </p>
        </CardContent>
      </Card>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-foreground">Quick start</h2>
        <p className="leading-relaxed text-foreground">
          Install a component with the CLI. Dependencies it needs, such as Tailwind CSS
          or Ark UI, are installed automatically.
        </p>
        <CodeBlock code="npx deste04-ui add button" />
      </section>
    </div>
  );
}
