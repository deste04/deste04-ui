import { useLocation, useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { linkVariants } from "deste04-ui/components/ui/link";
import { CopyButton } from "deste04-ui/components/ui/copy-button";
import { buttonVariants } from "deste04-ui/components/ui/button";
import { cn } from "deste04-ui/lib/utils";
import { getBlock, type BlockMeta } from "../data/blocks";
import { getBlockEntry } from "../registry/blocks";
import { getAdjacentPages } from "../data/nav";
import { PageHeader } from "../components/docs/page-header";
import { ComponentDemo } from "../components/docs/preview-frame";
import { CodeBlock } from "../components/docs/code-block";
import { TableOfContents } from "../components/docs/table-of-contents";
import { DocsPagination } from "../components/docs/docs-pagination";
import NotFound from "./not-found";

const tocItems = [
  { id: "preview", label: "Preview" },
  { id: "installation", label: "Installation" },
  { id: "source", label: "Source" },
];

/** Full page content as markdown: title, description and code, no navbars/chrome. */
function buildMarkdown(meta: BlockMeta, source: string) {
  return [
    `# ${meta.name}`,
    meta.description,
    "## Installation",
    "```bash\n" + meta.install + "\n```",
    "## Source",
    "```tsx\n" + source + "\n```",
  ].join("\n\n") + "\n";
}

export default function BlockPage() {
  const { slug = "" } = useParams();
  const location = useLocation();
  const meta = getBlock(slug);
  const entry = getBlockEntry(slug);

  if (!meta || !entry) {
    return <NotFound />;
  }

  const { source, render } = entry;
  const markdown = buildMarkdown(meta, source);
  const { prev, next } = getAdjacentPages(location.pathname);

  return (
    <div className="flex items-start gap-10 xl:gap-12">
      <div className="mx-auto flex min-w-0 flex-1 flex-col gap-10 pb-24">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/docs/blocks"
            className={cn(
              linkVariants({ variant: "no-underline" }),
              "inline-flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            )}
          >
            <ArrowLeft className="size-4" />
            All blocks
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

        <section id="preview" className="flex scroll-mt-24 flex-col gap-3">
          <ComponentDemo demo={render()} source={source} />
        </section>

        <section id="installation" className="flex scroll-mt-24 flex-col gap-3">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Installation
          </h2>
          <p className="text-sm text-muted-foreground">
            Installs into <code className="rounded bg-muted px-1.5 py-0.5 text-sm">components/blocks/</code>, on
            top of whatever ui components it needs. It's your code from that point: open it and adapt it, it
            is not meant to be used as-is.
          </p>
          <CodeBlock code={meta.install} />
        </section>

        <section id="source" className="flex scroll-mt-24 flex-col gap-3">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Source
          </h2>
          <CodeBlock code={source} maxHeight="32rem" />
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
