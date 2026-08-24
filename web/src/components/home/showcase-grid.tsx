import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { Button } from "deste04-ui/components/ui/button";
import { Badge } from "deste04-ui/components/ui/badge";
import { Switch } from "deste04-ui/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsIndicator } from "deste04-ui/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "deste04-ui/components/ui/toggle-group";
import { Input } from "deste04-ui/components/ui/input";

function Tile({ label, path, children }: { label: string; path: string; children: ReactNode }) {
  return (
    <Link
      to={path}
      className="group flex flex-col justify-between gap-4 rounded-xl border border-border bg-card p-5 no-underline transition-colors hover:border-primary/40"
    >
      <div className="flex flex-1 items-center justify-center py-4">{children}</div>
      <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
        {label}
      </p>
    </Link>
  );
}

export function ShowcaseGrid() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="mb-4 text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        27 components and counting
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Tile label="Button" path="/docs/components/button">
          <div className="flex flex-wrap justify-center gap-2">
            <Button size="sm">Solid</Button>
            <Button size="sm" variant="outline">
              Outline
            </Button>
          </div>
        </Tile>
        <Tile label="Badge" path="/docs/components/badge">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="solid">New</Badge>
            <Badge variant="outline">Beta</Badge>
          </div>
        </Tile>
        <Tile label="Switch" path="/docs/components/switch">
          <Switch defaultChecked />
        </Tile>
        <Tile label="Tabs" path="/docs/components/tabs">
          <Tabs defaultValue="a" size="sm">
            <TabsList>
              <TabsTrigger value="a">Tab</TabsTrigger>
              <TabsTrigger value="b">Tab</TabsTrigger>
              <TabsIndicator />
            </TabsList>
          </Tabs>
        </Tile>
        <Tile label="Toggle Group" path="/docs/components/toggle-group">
          <ToggleGroup defaultValue={["center"]}>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight />
            </ToggleGroupItem>
          </ToggleGroup>
        </Tile>
        <Tile label="Input" path="/docs/components/input">
          <Input placeholder="you@example.com" className="w-40" />
        </Tile>
      </div>
    </section>
  );
}
