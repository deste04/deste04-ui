import type { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { components } from "../data/components";
import { Button } from "deste04-ui/components/ui/button";
import buttonSource from "deste04-ui/components/ui/button.tsx?raw";
import { CopyButton } from "deste04-ui/components/ui/copy-button";
import copyButtonSource from "deste04-ui/components/ui/copy-button.tsx?raw";
import { Spinner } from "deste04-ui/components/ui/spinner";
import spinnerSource from "deste04-ui/components/ui/spinner.tsx?raw";
import { Link as UiLink } from "deste04-ui/components/ui/link";
import linkSource from "deste04-ui/components/ui/link.tsx?raw";
import { Input } from "deste04-ui/components/ui/input";
import inputSource from "deste04-ui/components/ui/input.tsx?raw";
import { Label } from "deste04-ui/components/ui/label";
import labelSource from "deste04-ui/components/ui/label.tsx?raw";
import { Separator } from "deste04-ui/components/ui/separator";
import separatorSource from "deste04-ui/components/ui/separator.tsx?raw";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldSet,
  FieldLegend,
} from "deste04-ui/components/ui/field";
import fieldSource from "deste04-ui/components/ui/field.tsx?raw";
import { Textarea } from "deste04-ui/components/ui/textarea";
import textareaSource from "deste04-ui/components/ui/textarea.tsx?raw";
import { Switch } from "deste04-ui/components/ui/switch";
import switchSource from "deste04-ui/components/ui/switch.tsx?raw";
import { Checkbox } from "deste04-ui/components/ui/checkbox";
import checkboxSource from "deste04-ui/components/ui/checkbox.tsx?raw";
import { RadioGroup, RadioGroupItem } from "deste04-ui/components/ui/radio-group";
import radioGroupSource from "deste04-ui/components/ui/radio-group.tsx?raw";
import { Trash, Users } from "lucide-react";

const previews: Record<string, ReactNode> = {
  button: (
    <div className="preview-row">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-xs" variant="outline"><Users /></Button>
      <Button size="icon-sm" variant="default"><Users /></Button>
      <Button size="icon" variant="ghost"><Users /></Button>
      <Button size="icon-lg" variant="destructive"><Trash /></Button>
    </div>
  ),
  "copy-button": (
    <div className="preview-row">
      <CopyButton value="npx deste04-ui add copy-button" />
      <CopyButton
        value="npx deste04-ui add copy-button"
        label="Copy"
        copiedLabel="Copied"
      />
      <CopyButton
        value="npx deste04-ui add copy-button"
        label="Copy"
        copiedLabel="Copied"
        variant="ghost"
      />
    </div>
  ),
  input: (
    <div className="preview-row">
      <Input placeholder="Outline" />
      <Input placeholder="Surface" variant="surface" />
      <Input placeholder="Subtle" variant="subtle" />
      <Input placeholder="Flushed" variant="flushed" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Invalid" aria-invalid />
      <Input placeholder="Small" size="xs" />
      <Input placeholder="Large" size="lg" />
    </div>
  ),
  label: (
    <div className="preview-row">
      <Label htmlFor="preview-label-input">Email</Label>
      <Input id="preview-label-input" placeholder="you@example.com" />
    </div>
  ),
  separator: (
    <div className="preview-row" style={{ flexDirection: "column", gap: "1rem" }}>
      <div>
        <p>Above</p>
        <Separator className="my-2" />
        <p>Below</p>
      </div>
      <div style={{ display: "flex", height: "2.5rem", alignItems: "center", gap: "1rem" }}>
        <span>A</span>
        <Separator orientation="vertical" />
        <span>B</span>
      </div>
    </div>
  ),
  field: (
    <div style={{ width: "100%", maxWidth: "24rem" }}>
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="preview-field-name">Name</FieldLabel>
            <Input id="preview-field-name" placeholder="Jane Doe" />
            <FieldDescription>Your public name.</FieldDescription>
          </Field>
          <Field data-invalid={true}>
            <FieldLabel htmlFor="preview-field-email">Email</FieldLabel>
            <Input
              id="preview-field-email"
              aria-invalid
              defaultValue="not-an-email"
            />
            <FieldError>Enter a valid email address.</FieldError>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
  textarea: (
    <div className="preview-row">
      <Textarea placeholder="Outline" variant="outline" />
      <Textarea placeholder="Surface" />
      <Textarea placeholder="Subtle" variant="subtle" />
      <Textarea placeholder="Flushed" variant="flushed" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Invalid" aria-invalid />
    </div>
  ),
  switch: (
    <div className="preview-row">
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch size="sm" />
      <Switch size="sm" defaultChecked />
    </div>
  ),
  checkbox: (
    <div className="preview-row" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.75rem" }}>
      <Label className="gap-2">
        <Checkbox defaultChecked /> Email notifications
      </Label>
      <Label className="gap-2">
        <Checkbox /> Weekly newsletter
      </Label>
      <Label className="gap-2">
        <Checkbox disabled /> Disabled option
      </Label>
    </div>
  ),
  "radio-group": (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
  link: (
    <div className="preview-row">
      <UiLink href="#">Underline</UiLink>
      <UiLink href="#" variant="no-underline">
        No underline
      </UiLink>
      <UiLink href="https://example.com" external>
        Open external
      </UiLink>
    </div>
  ),
  spinner: (
    <div className="preview-row">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
      <Spinner size="xl" />
      <Spinner variant="circle" />
      <Spinner variant="circle" size="lg" />
      <Button loading variant="outline">
        Loading
      </Button>
      <Button loading loadingText="Saving..." variant="outline">
        Click me
      </Button>
      <Button loading size="sm" variant="secondary">
        Small
      </Button>
      <Button loading size="lg" variant="destructive">
        Large
      </Button>
    </div>
  ),
};

/**
 * Sorgente reale mostrato nella pagina, importato con `?raw` così è
 * sempre allineato al file effettivamente installato dal CLI.
 */
const sources: Record<string, string> = {
  button: buttonSource,
  "copy-button": copyButtonSource,
  spinner: spinnerSource,
  link: linkSource,
  input: inputSource,
  label: labelSource,
  separator: separatorSource,
  field: fieldSource,
  textarea: textareaSource,
  switch: switchSource,
  checkbox: checkboxSource,
  "radio-group": radioGroupSource,
};

export default function ComponentPage() {
  const { slug = "" } = useParams();
  const meta = components.find((c) => c.slug === slug);

  if (!meta) {
    return (
      <div className="page">
        <p>
          Component not found.{" "}
          <Link to="/components">Back to the list</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/components" className="back-link">
        ← All components
      </Link>
      <h1>{meta.name}</h1>
      <p className="muted">{meta.description}</p>

      <section className="panel">
        <h2>Preview</h2>
        <div className="preview">{previews[slug]}</div>
      </section>

      <section className="panel">
        <h2>Installation</h2>
        <pre className="code-block">
          <code>{meta.install}</code>
        </pre>
      </section>

      <section className="panel">
        <h2>Source code</h2>
        <pre className="code-block">
          <code>{sources[slug]}</code>
        </pre>
      </section>
    </div>
  );
}
