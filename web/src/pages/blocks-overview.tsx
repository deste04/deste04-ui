import { blocksByCategory, blocks } from "../data/blocks";
import { PageHeader } from "../components/docs/page-header";
import { BlockCard } from "../components/docs/block-card";

export default function BlocksOverview() {
  return (
    <div className="flex flex-col gap-8 pb-24">
      <PageHeader
        title="Blocks"
        description={`${blocks.length} ready-to-use ${blocks.length === 1 ? "block" : "blocks"}, built from this library's own components. Installed with the CLI like any component, then meant to be opened and adapted.`}
      />

      {blocksByCategory().map(({ category, items }) => (
        <section key={category} className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            {category}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <BlockCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
