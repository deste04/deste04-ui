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
        <div className="flex min-h-48 items-start overflow-x-auto rounded-lg border border-border bg-background p-8">
          {demo}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={source} maxHeight="32rem" />
      </TabsContent>
    </Tabs>
  );
}
