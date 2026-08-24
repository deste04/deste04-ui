import { useParams, Link } from "react-router-dom";
import { linkVariants } from "deste04-ui/components/ui/link";
import { cn } from "deste04-ui/lib/utils";
import { getComponent } from "../data/components";
import { getRegistryEntry } from "../registry";
import { PageHeader } from "../components/docs/page-header";
import { ComponentDemo } from "../components/docs/preview-frame";
import { CodeBlock } from "../components/docs/code-block";
import NotFound from "./not-found";

export default function ComponentPage() {
  const { slug = "" } = useParams();
  const meta = getComponent(slug);
  const entry = getRegistryEntry(slug);

  if (!meta || !entry) {
    return <NotFound />;
  }

  const { Demo, source } = entry;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 pb-24">
      <Link
        to="/docs/components"
        className={cn(
          linkVariants({ variant: "no-underline" }),
          "inline-flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        )}
      >
        &larr; All components
      </Link>

      <PageHeader title={meta.name} description={meta.description} category={meta.category} />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Preview
        </h2>
        <ComponentDemo demo={<Demo />} source={source} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Installation
        </h2>
        <CodeBlock code={meta.install} />
      </section>
    </div>
  );
}
