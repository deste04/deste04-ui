import { Link as RouterLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "deste04-ui/components/ui/button";
import { cn } from "deste04-ui/lib/utils";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">deste04-ui</h1>
      <p className="text-muted-foreground leading-relaxed">
        A React component library that installs one piece at a time,
        directly into <code className="font-mono text-foreground">components/ui/</code> in your project — no
        runtime dependency, just code you own.
      </p>
      <pre className="w-full overflow-x-auto rounded-lg border border-border bg-muted px-5 py-4 text-left font-mono text-sm text-foreground">
        <code>npx deste04-ui add button</code>
      </pre>
      <RouterLink
        to="/components"
        className={cn(buttonVariants({ variant: "solid", size: "md" }), "mt-2")}
      >
        Browse components <ArrowRight />
      </RouterLink>
    </div>
  );
}
