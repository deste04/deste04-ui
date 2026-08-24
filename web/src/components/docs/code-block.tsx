import { CopyButton } from "deste04-ui/components/ui/copy-button";
import { cn } from "deste04-ui/lib/utils";

export function CodeBlock({
  code,
  className,
  maxHeight,
}: {
  code: string;
  className?: string;
  maxHeight?: string;
}) {
  return (
    <div className={cn("group relative", className)}>
      <pre
        className="thin-scrollbar overflow-auto rounded-lg border border-border bg-muted px-5 py-4 pe-14 font-mono text-sm text-foreground"
        style={maxHeight ? { maxHeight } : undefined}
      >
        <code>{code}</code>
      </pre>
      <CopyButton
        value={code}
        variant="plain"
        size="icon-sm"
        className="absolute end-2 top-2"
      />
    </div>
  );
}
