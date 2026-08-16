import * as React from "react";
import { Check, Copy } from "lucide-react";
import { TextMorph } from "torph/react";

import { Button } from "./button";

export interface CopyButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick" | "children"> {
  value: string;
  label?: string;
  copiedLabel?: string;
  resetDelay?: number;
  onCopy?: () => void;
}

export function CopyButton({
  value,
  label,
  copiedLabel = "Copiato",
  resetDelay = 1500,
  onCopy,
  size,
  variant = "outline",
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }
    setCopied(true);
    onCopy?.();
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
  }, [value, resetDelay, onCopy]);

  return (
    <Button
      type="button"
      variant={variant}
      size={size ?? (label ? "default" : "icon")}
      onClick={handleCopy}
      aria-label={label ? undefined : copied ? copiedLabel : "Copia"}
      {...props}
    >
      {copied ? <Check /> : <Copy />}
      {label && <TextMorph as="span">{copied ? copiedLabel : label}</TextMorph>}
    </Button>
  );
}
