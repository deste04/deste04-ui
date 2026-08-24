import type { ComponentType } from "react";
import { FileCode2, Paintbrush, Unlock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "deste04-ui/components/ui/card";

const features: { icon: ComponentType; title: string; description: string }[] = [
  {
    icon: FileCode2,
    title: "Own your code",
    description:
      "The CLI copies real source files into components/ui/ in your project. Nothing is hidden behind an npm dependency, so you can read, change or delete any part of it.",
  },
  {
    icon: Paintbrush,
    title: "Styled with Tailwind",
    description:
      "Every component uses Tailwind utility classes and a shared set of design tokens for color, radius and font. No component ships its own CSS file.",
  },
  {
    icon: Unlock,
    title: "No lock-in",
    description:
      "Built on Ark UI for accessible behavior, and class-variance-authority for variants. Swap any piece out whenever your project needs something different.",
  },
];

export function FeatureGrid() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-3">
      {features.map(({ icon: Icon, title, description }) => (
        <Card key={title} variant="subtle">
          <CardHeader>
            <div className="mb-1 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon />
            </div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="leading-relaxed">{description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
