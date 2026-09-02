import type { ReactNode } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator } from "deste04-ui/components/ui/tabs";
import { CodeBlock } from "./code-block";

/**
 * The main showcase on a component page: a Preview / Code toggle, built
 * with the library's own Tabs component.
 */
export function ComponentDemo({ demo, source }: { demo: ReactNode; source: string }) {
  return (
    <Tabs defaultValue="preview" variant="enclosed">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="preview">
        <div className="relative flex min-h-48 items-start overflow-x-auto rounded-lg border border-border bg-background p-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 left-6 w-0 border-l border-dashed border-border/60" />
            <div className="absolute inset-y-0 right-6 w-0 border-l border-dashed border-border/60" />
            <div className="absolute inset-x-0 top-6 h-0 border-t border-dashed border-border/60" />
            <div className="absolute inset-x-0 bottom-6 h-0 border-t border-dashed border-border/60" />
          </div>
          {demo}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={source} maxHeight="32rem" />
      </TabsContent>
    </Tabs>
  );
}
