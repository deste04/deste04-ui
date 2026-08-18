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
import { Badge } from "deste04-ui/components/ui/badge";
import badgeSource from "deste04-ui/components/ui/badge.tsx?raw";
import { Trash, Users } from "lucide-react";

const previews: Record<string, ReactNode> = {
  button: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Variants</p>
        <div className="preview-row">
          <Button variant="solid">Solid</Button>
          <Button variant="surface">Surface</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="plain">Plain</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sizes</p>
        <div className="preview-row">
          <Button size="2xs">2xs</Button>
          <Button size="xs">Xs</Button>
          <Button size="sm">Sm</Button>
          <Button size="md">Md</Button>
          <Button size="lg">Lg</Button>
          <Button size="xl">Xl</Button>
          <Button size="2xl">2xl</Button>
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Icon only</p>
        <div className="preview-row">
          <Button size="icon-2xs" variant="outline"><Users /></Button>
          <Button size="icon-xs" variant="outline"><Users /></Button>
          <Button size="icon-sm" variant="surface"><Users /></Button>
          <Button size="icon-md" variant="solid"><Users /></Button>
          <Button size="icon-lg" variant="plain"><Users /></Button>
          <Button size="icon-xl" variant="destructive"><Trash /></Button>
          <Button size="icon-2xl" variant="destructive"><Trash /></Button>
        </div>
      </div>
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
        variant="plain"
      />
    </div>
  ),
  input: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Variants</p>
        <div className="preview-row">
          <Input placeholder="Outline" variant="outline" style={{ width: "12rem" }} />
          <Input placeholder="Surface" variant="surface" style={{ width: "12rem" }} />
          <Input placeholder="Subtle" variant="subtle" style={{ width: "12rem" }} />
          <Input placeholder="Flushed" variant="flushed" style={{ width: "12rem" }} />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sizes</p>
        <div className="preview-row" style={{ alignItems: "flex-end" }}>
          <Input placeholder="2xs" size="2xs" style={{ width: "8rem" }} />
          <Input placeholder="xs" size="xs" style={{ width: "8rem" }} />
          <Input placeholder="sm" size="sm" style={{ width: "8rem" }} />
          <Input placeholder="md" size="md" style={{ width: "8rem" }} />
          <Input placeholder="lg" size="lg" style={{ width: "8rem" }} />
          <Input placeholder="xl" size="xl" style={{ width: "8rem" }} />
          <Input placeholder="2xl" size="2xl" style={{ width: "8rem" }} />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>States</p>
        <div className="preview-row">
          <Input placeholder="Default" style={{ width: "12rem" }} />
          <Input defaultValue="Prefilled value" style={{ width: "12rem" }} />
          <Input placeholder="Read only" readOnly defaultValue="Read only" style={{ width: "12rem" }} />
          <Input placeholder="Disabled" disabled style={{ width: "12rem" }} />
          <Input placeholder="Invalid" aria-invalid style={{ width: "12rem" }} />
        </div>
      </div>
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
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Variants</p>
        <div className="preview-row" style={{ alignItems: "flex-start" }}>
          <Textarea placeholder="Outline" variant="outline" style={{ width: "12rem" }} />
          <Textarea placeholder="Surface" variant="surface" style={{ width: "12rem" }} />
          <Textarea placeholder="Subtle" variant="subtle" style={{ width: "12rem" }} />
          <Textarea placeholder="Flushed" variant="flushed" style={{ width: "12rem" }} />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sizes</p>
        <div className="preview-row" style={{ alignItems: "flex-start" }}>
          <Textarea placeholder="xs" size="xs" style={{ width: "10rem" }} />
          <Textarea placeholder="sm" size="sm" style={{ width: "10rem" }} />
          <Textarea placeholder="md" size="md" style={{ width: "10rem" }} />
          <Textarea placeholder="lg" size="lg" style={{ width: "10rem" }} />
          <Textarea placeholder="xl" size="xl" style={{ width: "10rem" }} />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>States</p>
        <div className="preview-row" style={{ alignItems: "flex-start" }}>
          <Textarea placeholder="Default" style={{ width: "12rem" }} />
          <Textarea
            defaultValue="Prefilled value that grows with the content."
            style={{ width: "12rem" }}
          />
          <Textarea placeholder="Disabled" disabled style={{ width: "12rem" }} />
          <Textarea placeholder="Invalid" aria-invalid style={{ width: "12rem" }} />
        </div>
      </div>
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
      <Label className="gap-3">
        <Checkbox defaultChecked /> Email notifications
      </Label>
      <Label className="gap-3">
        <Checkbox /> Weekly newsletter
      </Label>
      <Label className="gap-3">
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
      <div className="flex items-center gap-3">
        <RadioGroupItem value="disabled" id="r4" disabled />
        <Label htmlFor="r4">Disabled</Label>
      </div>
    </RadioGroup>
  ),
  badge: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Solid</p>
        <div className="preview-row">
          <Badge variant="solid" size="sm">Sm</Badge>
          <Badge variant="solid" size="md">Md</Badge>
          <Badge variant="solid" size="lg">Lg</Badge>
          <Badge variant="solid" size="xl">Xl</Badge>
          <Badge variant="solid" size="2xl">2xl</Badge>
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Surface</p>
        <div className="preview-row">
          <Badge variant="surface" size="sm">Sm</Badge>
          <Badge variant="surface" size="md">Md</Badge>
          <Badge variant="surface" size="lg">Lg</Badge>
          <Badge variant="surface" size="xl">Xl</Badge>
          <Badge variant="surface" size="2xl">2xl</Badge>
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Subtle</p>
        <div className="preview-row">
          <Badge variant="subtle" size="sm">Sm</Badge>
          <Badge variant="subtle" size="md">Md</Badge>
          <Badge variant="subtle" size="lg">Lg</Badge>
          <Badge variant="subtle" size="xl">Xl</Badge>
          <Badge variant="subtle" size="2xl">2xl</Badge>
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Outline</p>
        <div className="preview-row">
          <Badge variant="outline" size="sm">Sm</Badge>
          <Badge variant="outline" size="md">Md</Badge>
          <Badge variant="outline" size="lg">Lg</Badge>
          <Badge variant="outline" size="xl">Xl</Badge>
          <Badge variant="outline" size="2xl">2xl</Badge>
        </div>
      </div>
    </div>
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
      <Button loading size="sm" variant="surface">
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
  badge: badgeSource,
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
