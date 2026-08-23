import * as React from "react";
import { Check, Copy, X } from "lucide-react";
import { TextMorph } from "torph/react";

import { Button } from "./button";
import { Swap, SwapIndicator } from "./swap";

export interface CopyButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick" | "children"> {
  value: string;
  label?: string;
  copiedLabel?: string;
  errorLabel?: string;
  resetDelay?: number;
  onCopy?: () => void;
  onCopyError?: (error: unknown) => void;
}

type CopyStatus = "idle" | "copied" | "error";

export function CopyButton({
  value,
  label,
  copiedLabel = "Copiato",
  errorLabel = "Copia non riuscita",
  resetDelay = 1500,
  onCopy,
  onCopyError,
  size,
  variant = "outline",
  ...props
}: Readonly<CopyButtonProps>) {
  const [status, setStatus] = React.useState<CopyStatus>("idle");
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const handleCopy = React.useCallback(async () => {
    clearTimeout(timeoutRef.current);
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
      onCopy?.();
    } catch (error) {
      setStatus("error");
      onCopyError?.(error);
    } finally {
      timeoutRef.current = setTimeout(() => setStatus("idle"), resetDelay);
    }
  }, [value, resetDelay, onCopy, onCopyError]);

  const statusLabel =
    status === "copied" ? copiedLabel : status === "error" ? errorLabel : "Copia";
  const IdleIcon = status === "error" ? X : Copy;

  return (
    <Button
      type="button"
      variant={status === "error" ? "destructive" : variant}
      size={size ?? (label ? "md" : "icon-md")}
      onClick={handleCopy}
      aria-label={label ? undefined : statusLabel}
      {...props}
    >
      <Swap swap={status === "copied"}>
        <SwapIndicator type="on">
          <Check />
        </SwapIndicator>
        <SwapIndicator type="off">
          <IdleIcon />
        </SwapIndicator>
      </Swap>
      {label && <TextMorph as="span">{status === "idle" ? label : statusLabel}</TextMorph>}
      <span role="status" aria-live="polite" className="sr-only">
        {status !== "idle" ? statusLabel : ""}
      </span>
    </Button>
  );
}
