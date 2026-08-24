import { useParams, Link } from "react-router-dom";
import { linkVariants } from "deste04-ui/components/ui/link";
import { CopyButton } from "deste04-ui/components/ui/copy-button";
import { cn } from "deste04-ui/lib/utils";
import { getComponent } from "../data/components";
import { getRegistryEntry } from "../registry";
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

export default function ComponentPage() {
  const { slug = "" } = useParams();
  const meta = getComponent(slug);
  const entry = getRegistryEntry(slug);

  if (!meta || !entry) {
    return <NotFound />;
  }

  const { examples, source } = entry;
  const markdown = "```tsx\n" + source + "\n```\n";

  const tocItems = [
    ...examples.map((example) => ({ id: slugify(example.title), label: example.title })),
    { id: "source", label: "Source" },
    { id: "installation", label: "Installation" },
  ];

  return (
    <div className="flex items-start gap-10 xl:gap-12">
      <div className="mx-auto flex min-w-0 max-w-4xl flex-1 flex-col gap-10 pb-24">
        <Link
          to="/docs/components"
          className={cn(
            linkVariants({ variant: "no-underline" }),
            "inline-flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          )}
        >
          &larr; All components
        </Link>

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
