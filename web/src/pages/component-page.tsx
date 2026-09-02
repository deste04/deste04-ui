import { useParams, useLocation, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { linkVariants } from "deste04-ui/components/ui/link";
import { CopyButton } from "deste04-ui/components/ui/copy-button";
import { buttonVariants } from "deste04-ui/components/ui/button";
import { cn } from "deste04-ui/lib/utils";
import { getComponent, type ComponentMeta } from "../data/components";
import { getRegistryEntry } from "../registry";
import { getAdjacentPages } from "../data/nav";
import type { DemoExample } from "../registry/demos";
import { PageHeader } from "../components/docs/page-header";
import { ComponentDemo } from "../components/docs/preview-frame";
import { CodeBlock } from "../components/docs/code-block";
import { TableOfContents } from "../components/docs/table-of-contents";
import { DocsPagination } from "../components/docs/docs-pagination";
import NotFound from "./not-found";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Full page content as markdown: titles, explanations and code, no navbars/chrome. */
function buildMarkdown(meta: ComponentMeta, examples: DemoExample[], source: string) {
  const sections = [
    `# ${meta.name}`,
    meta.description,
    ...examples.flatMap((example) => [
      `## ${example.title}`,
      example.description,
      "```tsx\n" + example.code + "\n```",
    ]),
    "## Source",
    "```tsx\n" + source + "\n```",
    "## Installation",
    "```bash\n" + meta.install + "\n```",
  ];
  return sections.join("\n\n") + "\n";
}

export default function ComponentPage() {
  const { slug = "" } = useParams();
  const location = useLocation();
  const meta = getComponent(slug);
  const entry = getRegistryEntry(slug);

  if (!meta || !entry) {
    return <NotFound />;
  }

  const { examples, source } = entry;
  const markdown = buildMarkdown(meta, examples, source);
  const { prev, next } = getAdjacentPages(location.pathname);

  const tocItems = [
    ...examples.map((example) => ({ id: slugify(example.title), label: example.title })),
    { id: "source", label: "Source" },
    { id: "installation", label: "Installation" },
  ];

  return (
    <div className="flex items-start gap-10 xl:gap-12">
      <div className="mx-auto flex min-w-0 max-w-4xl flex-1 flex-col gap-10 pb-24">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/docs/components"
            className={cn(
              linkVariants({ variant: "no-underline" }),
              "inline-flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            )}
          >
            <ArrowLeft className="size-4" />
            All components
          </Link>

          <div className="flex items-center gap-2">
            {prev ? (
              <Link
                to={prev.path}
                aria-label={`Previous: ${prev.title}`}
                title={prev.title}
                className={cn(buttonVariants({ variant: "outline", size: "icon-xs" }))}
              >
                <ChevronLeft />
              </Link>
            ) : (
              <span
                aria-hidden="true"
                className={cn(buttonVariants({ variant: "outline", size: "icon-xs" }), "opacity-40")}
              >
                <ChevronLeft />
              </span>
            )}
            {next ? (
              <Link
                to={next.path}
                aria-label={`Next: ${next.title}`}
                title={next.title}
                className={cn(buttonVariants({ variant: "outline", size: "icon-xs" }))}
              >
                <ChevronRight />
              </Link>
            ) : (
              <span
                aria-hidden="true"
                className={cn(buttonVariants({ variant: "outline", size: "icon-xs" }), "opacity-40")}
              >
                <ChevronRight />
              </span>
            )}
          </div>
        </div>

        <PageHeader
          title={meta.name}
          description={meta.description}
          category={meta.category}
          actions={
            <CopyButton
              value={markdown}
              label="Copy Markdown"
              copiedLabel="Copied"
              errorLabel="Copy failed"
              variant="outline"
              size="sm"
            />
          }
        />

        {examples.map((example) => (
          <section
            key={example.title}
            id={slugify(example.title)}
            className="flex scroll-mt-24 flex-col gap-3"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {example.title}
              </h2>
              <p className="text-sm text-muted-foreground">{example.description}</p>
            </div>
            <ComponentDemo demo={example.render()} source={example.code} />
          </section>
        ))}

        <section id="source" className="flex scroll-mt-24 flex-col gap-3">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Source
          </h2>
          <CodeBlock code={source} maxHeight="32rem" />
        </section>

        <section id="installation" className="flex scroll-mt-24 flex-col gap-3">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Installation
          </h2>
          <CodeBlock code={meta.install} />
        </section>

        <DocsPagination />
      </div>

      <TableOfContents
        items={tocItems}
        className="sticky top-24 hidden h-fit w-48 shrink-0 xl:flex"
      />
    </div>
  );
}
