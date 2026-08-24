import { useState, type ComponentType } from "react";
import {
  Trash,
  Users,
  BookOpen,
  History,
  KeyRound,
  CircleAlert,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Sun,
  Moon,
  Check,
  Copy,
  Volume2,
  VolumeX,
  Upload,
  FileText,
} from "lucide-react";

import { Button } from "deste04-ui/components/ui/button";
import { Swap, SwapIndicator } from "deste04-ui/components/ui/swap";
import {
  FileUpload,
  FileUploadLabel,
  FileUploadDropzone,
  FileUploadTrigger,
  FileUploadClearTrigger,
  FileUploadItemGroup,
  FileUploadItem,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemName,
  FileUploadItemSizeText,
  FileUploadItemDeleteTrigger,
  FileUploadHiddenInput,
  FileUploadContext,
} from "deste04-ui/components/ui/file-upload";
import { ThemeToggle } from "deste04-ui/components/theme/theme-toggle";
import { CopyButton } from "deste04-ui/components/ui/copy-button";
import { Spinner } from "deste04-ui/components/ui/spinner";
import { Link as UiLink } from "deste04-ui/components/ui/link";
import { Input } from "deste04-ui/components/ui/input";
import { Label } from "deste04-ui/components/ui/label";
import { Separator } from "deste04-ui/components/ui/separator";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldSet,
  FieldLegend,
} from "deste04-ui/components/ui/field";
import {
  Fieldset,
  FieldsetControl,
  FieldsetContent,
  FieldsetLegend,
  FieldsetHelperText,
  FieldsetErrorText,
} from "deste04-ui/components/ui/fieldset";
import { Textarea } from "deste04-ui/components/ui/textarea";
import { TagsInput } from "deste04-ui/components/ui/tags-input";
import { Combobox } from "deste04-ui/components/ui/combobox";
import { Editable } from "deste04-ui/components/ui/editable";
import { Switch } from "deste04-ui/components/ui/switch";
import { Checkbox } from "deste04-ui/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "deste04-ui/components/ui/radio-group";
import { Toggle } from "deste04-ui/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "deste04-ui/components/ui/toggle-group";
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator } from "deste04-ui/components/ui/tabs";
import { Badge } from "deste04-ui/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "deste04-ui/components/ui/card";
import { CardLink } from "deste04-ui/components/ui/card-link";
import { toast } from "deste04-ui/components/ui/toast";

import { PreviewGroup, PreviewNote } from "../components/docs/preview-parts";
import { GithubIcon } from "../components/icons/github";

/**
 * One example shown on a component page: a title, a one line explanation,
 * the JSX a user would actually paste (shown in the Code tab) and the
 * rendered preview. A component can have several of these.
 */
export interface DemoExample {
  title: string;
  description: string;
  code: string;
  render: () => JSX.Element;
}

const frameworkItems = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Angular", value: "angular" },
  { label: "Astro", value: "astro" },
];

function SwapButton({
  variant,
  iconOn: IconOn,
  iconOff: IconOff,
  label,
}: {
  variant: "fade" | "scale" | "rotate";
  iconOn: ComponentType;
  iconOff: ComponentType;
  label: string;
}) {
  const [on, setOn] = useState(false);
  return (
    <Button variant="outline" size="icon-md" aria-label={label} onClick={() => setOn((v) => !v)}>
      <Swap swap={on}>
        <SwapIndicator type="on" variant={variant}>
          <IconOn />
        </SwapIndicator>
        <SwapIndicator type="off" variant={variant}>
          <IconOff />
        </SwapIndicator>
      </Swap>
    </Button>
  );
}

export const demos: Record<string, DemoExample[]> = {
  button: [
    {
      title: "Variants",
      description: "All six visual variants, plus the disabled state.",
      code: `<Button variant="solid">Solid</Button>
<Button variant="surface">Surface</Button>
<Button variant="subtle">Subtle</Button>
<Button variant="outline">Outline</Button>
<Button variant="plain">Plain</Button>
<Button variant="destructive">Destructive</Button>
<Button disabled>Disabled</Button>`,
      render: () => (
        <PreviewGroup>
          <Button variant="solid">Solid</Button>
          <Button variant="surface">Surface</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="plain">Plain</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </PreviewGroup>
      ),
    },
    {
      title: "Sizes",
      description: "Every size, from 2xs to 2xl.",
      code: `<Button size="2xs">2xs</Button>
<Button size="xs">Xs</Button>
<Button size="sm">Sm</Button>
<Button size="md">Md</Button>
<Button size="lg">Lg</Button>
<Button size="xl">Xl</Button>
<Button size="2xl">2xl</Button>`,
      render: () => (
        <PreviewGroup>
          <Button size="2xs">2xs</Button>
          <Button size="xs">Xs</Button>
          <Button size="sm">Sm</Button>
          <Button size="md">Md</Button>
          <Button size="lg">Lg</Button>
          <Button size="xl">Xl</Button>
          <Button size="2xl">2xl</Button>
        </PreviewGroup>
      ),
    },
    {
      title: "Icon only",
      description: "Square buttons sized to match their icon, from icon-2xs to icon-2xl.",
      code: `<Button size="icon-2xs" variant="outline">
  <Users />
</Button>
<Button size="icon-xs" variant="outline">
  <Users />
</Button>
<Button size="icon-sm" variant="surface">
  <Users />
</Button>
<Button size="icon-md" variant="solid">
  <Users />
</Button>
<Button size="icon-lg" variant="plain">
  <Users />
</Button>
<Button size="icon-xl" variant="destructive">
  <Trash />
</Button>
<Button size="icon-2xl" variant="destructive">
  <Trash />
</Button>`,
      render: () => (
        <PreviewGroup>
          <Button size="icon-2xs" variant="outline">
            <Users />
          </Button>
          <Button size="icon-xs" variant="outline">
            <Users />
          </Button>
          <Button size="icon-sm" variant="surface">
            <Users />
          </Button>
          <Button size="icon-md" variant="solid">
            <Users />
          </Button>
          <Button size="icon-lg" variant="plain">
            <Users />
          </Button>
          <Button size="icon-xl" variant="destructive">
            <Trash />
          </Button>
          <Button size="icon-2xl" variant="destructive">
            <Trash />
          </Button>
        </PreviewGroup>
      ),
    },
  ],

  "copy-button": [
    {
      title: "Variants",
      description: "Icon only, with a text label, and the plain variant.",
      code: `<CopyButton value="npx deste04-ui add copy-button" />
<CopyButton value="npx deste04-ui add copy-button" label="Copy" copiedLabel="Copied" />
<CopyButton
  value="npx deste04-ui add copy-button"
  label="Copy"
  copiedLabel="Copied"
  variant="plain"
/>`,
      render: () => (
        <PreviewGroup>
          <CopyButton value="npx deste04-ui add copy-button" />
          <CopyButton value="npx deste04-ui add copy-button" label="Copy" copiedLabel="Copied" />
          <CopyButton
            value="npx deste04-ui add copy-button"
            label="Copy"
            copiedLabel="Copied"
            variant="plain"
          />
        </PreviewGroup>
      ),
    },
  ],

  link: [
    {
      title: "Variants",
      description: "Underlined, no underline, and an external link with an icon.",
      code: `<Link href="#">Underline</Link>
<Link href="#" variant="no-underline">
  No underline
</Link>
<Link href="https://example.com" external>
  Open external
</Link>`,
      render: () => (
        <PreviewGroup>
          <UiLink href="#">Underline</UiLink>
          <UiLink href="#" variant="no-underline">
            No underline
          </UiLink>
          <UiLink href="https://example.com" external>
            Open external
          </UiLink>
        </PreviewGroup>
      ),
    },
  ],

  "card-link": [
    {
      title: "Examples",
      description: "Hover a card to see the content fade and the call to action take over.",
      code: `<CardLink
  href="/docs/components"
  icon={<BookOpen />}
  title="Documentation"
  description="Browse every component, its variants and how to install it."
  cta="Browse"
/>
<CardLink
  href="https://github.com"
  icon={<GithubIcon />}
  title="GitHub"
  description="Source code, issues and releases."
  cta="Open"
  external
/>
<CardLink
  href="#"
  icon={<History />}
  title="Changelog"
  description="What changed in the latest release."
  cta="Read"
/>`,
      render: () => (
        <PreviewGroup className="items-stretch">
          <CardLink
            href="/docs/components"
            icon={<BookOpen />}
            title="Documentation"
            description="Browse every component, its variants and how to install it."
            cta="Browse"
          />
          <CardLink
            href="https://github.com"
            icon={<GithubIcon />}
            title="GitHub"
            description="Source code, issues and releases."
            cta="Open"
            external
          />
          <CardLink
            href="#"
            icon={<History />}
            title="Changelog"
            description="What changed in the latest release."
            cta="Read"
          />
        </PreviewGroup>
      ),
    },
  ],

  toggle: [
    {
      title: "Variants",
      description: "Outline and subtle variants, unpressed, pressed, and disabled.",
      code: `<Toggle variant="outline" aria-label="Bold">
  <Bold />
</Toggle>
<Toggle variant="outline" defaultPressed aria-label="Italic">
  <Italic />
</Toggle>
<Toggle variant="subtle" aria-label="Underline">
  <Underline />
</Toggle>
<Toggle variant="subtle" defaultPressed aria-label="Underline pressed">
  <Underline />
</Toggle>
<Toggle variant="outline" disabled aria-label="Disabled">
  <Bold />
</Toggle>`,
      render: () => (
        <PreviewGroup>
          <Toggle variant="outline" aria-label="Bold">
            <Bold />
          </Toggle>
          <Toggle variant="outline" defaultPressed aria-label="Italic">
            <Italic />
          </Toggle>
          <Toggle variant="subtle" aria-label="Underline">
            <Underline />
          </Toggle>
          <Toggle variant="subtle" defaultPressed aria-label="Underline pressed">
            <Underline />
          </Toggle>
          <Toggle variant="outline" disabled aria-label="Disabled">
            <Bold />
          </Toggle>
        </PreviewGroup>
      ),
    },
    {
      title: "Sizes",
      description: "Small, medium and large.",
      code: `<Toggle size="sm" defaultPressed aria-label="Bold small">
  <Bold />
</Toggle>
<Toggle size="md" defaultPressed aria-label="Bold medium">
  <Bold />
</Toggle>
<Toggle size="lg" defaultPressed aria-label="Bold large">
  <Bold />
</Toggle>`,
      render: () => (
        <PreviewGroup>
          <Toggle size="sm" defaultPressed aria-label="Bold small">
            <Bold />
          </Toggle>
          <Toggle size="md" defaultPressed aria-label="Bold medium">
            <Bold />
          </Toggle>
          <Toggle size="lg" defaultPressed aria-label="Bold large">
            <Bold />
          </Toggle>
        </PreviewGroup>
      ),
    },
    {
      title: "With text",
      description: "Icon and label combined.",
      code: `<Toggle defaultPressed>
  <Bold /> Bold
</Toggle>`,
      render: () => (
        <PreviewGroup>
          <Toggle defaultPressed>
            <Bold /> Bold
          </Toggle>
        </PreviewGroup>
      ),
    },
  ],

  "toggle-group": [
    {
      title: "Single selection",
      description: "Only one item can be pressed at a time.",
      code: `<ToggleGroup defaultValue={["center"]}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight />
  </ToggleGroupItem>
</ToggleGroup>`,
      render: () => (
        <PreviewGroup>
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
        </PreviewGroup>
      ),
    },
    {
      title: "Multiple selection",
      description: "Any number of items can be pressed at once.",
      code: `<ToggleGroup multiple defaultValue={["bold"]}>
  <ToggleGroupItem value="bold" variant="subtle" aria-label="Bold">
    <Bold />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" variant="subtle" aria-label="Italic">
    <Italic />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" variant="subtle" aria-label="Underline">
    <Underline />
  </ToggleGroupItem>
</ToggleGroup>`,
      render: () => (
        <PreviewGroup>
          <ToggleGroup multiple defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" variant="subtle" aria-label="Bold">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" variant="subtle" aria-label="Italic">
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" variant="subtle" aria-label="Underline">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </PreviewGroup>
      ),
    },
    {
      title: "Vertical",
      description: "Stacked top to bottom instead of side by side.",
      code: `<ToggleGroup orientation="vertical" defaultValue={["center"]}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight />
  </ToggleGroupItem>
</ToggleGroup>`,
      render: () => (
        <PreviewGroup>
          <ToggleGroup orientation="vertical" defaultValue={["center"]}>
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
        </PreviewGroup>
      ),
    },
  ],

  input: [
    {
      title: "Variants",
      description: "Outline, surface, subtle and flushed.",
      code: `<Input placeholder="Outline" variant="outline" className="w-48" />
<Input placeholder="Surface" variant="surface" className="w-48" />
<Input placeholder="Subtle" variant="subtle" className="w-48" />
<Input placeholder="Flushed" variant="flushed" className="w-48" />`,
      render: () => (
        <PreviewGroup>
          <Input placeholder="Outline" variant="outline" className="w-48" />
          <Input placeholder="Surface" variant="surface" className="w-48" />
          <Input placeholder="Subtle" variant="subtle" className="w-48" />
          <Input placeholder="Flushed" variant="flushed" className="w-48" />
        </PreviewGroup>
      ),
    },
    {
      title: "Sizes",
      description: "Every size, from 2xs to 2xl.",
      code: `<Input placeholder="2xs" size="2xs" className="w-32" />
<Input placeholder="xs" size="xs" className="w-32" />
<Input placeholder="sm" size="sm" className="w-32" />
<Input placeholder="md" size="md" className="w-32" />
<Input placeholder="lg" size="lg" className="w-32" />
<Input placeholder="xl" size="xl" className="w-32" />
<Input placeholder="2xl" size="2xl" className="w-32" />`,
      render: () => (
        <PreviewGroup className="items-end">
          <Input placeholder="2xs" size="2xs" className="w-32" />
          <Input placeholder="xs" size="xs" className="w-32" />
          <Input placeholder="sm" size="sm" className="w-32" />
          <Input placeholder="md" size="md" className="w-32" />
          <Input placeholder="lg" size="lg" className="w-32" />
          <Input placeholder="xl" size="xl" className="w-32" />
          <Input placeholder="2xl" size="2xl" className="w-32" />
        </PreviewGroup>
      ),
    },
    {
      title: "States",
      description: "Default, prefilled, read only, disabled and invalid.",
      code: `<Input placeholder="Default" className="w-48" />
<Input defaultValue="Prefilled value" className="w-48" />
<Input placeholder="Read only" readOnly defaultValue="Read only" className="w-48" />
<Input placeholder="Disabled" disabled className="w-48" />
<Input placeholder="Invalid" aria-invalid className="w-48" />`,
      render: () => (
        <PreviewGroup>
          <Input placeholder="Default" className="w-48" />
          <Input defaultValue="Prefilled value" className="w-48" />
          <Input placeholder="Read only" readOnly defaultValue="Read only" className="w-48" />
          <Input placeholder="Disabled" disabled className="w-48" />
          <Input placeholder="Invalid" aria-invalid className="w-48" />
        </PreviewGroup>
      ),
    },
  ],

  textarea: [
    {
      title: "Variants",
      description: "Outline, surface, subtle and flushed.",
      code: `<Textarea placeholder="Outline" variant="outline" className="w-48" />
<Textarea placeholder="Surface" variant="surface" className="w-48" />
<Textarea placeholder="Subtle" variant="subtle" className="w-48" />
<Textarea placeholder="Flushed" variant="flushed" className="w-48" />`,
      render: () => (
        <PreviewGroup className="items-start">
          <Textarea placeholder="Outline" variant="outline" className="w-48" />
          <Textarea placeholder="Surface" variant="surface" className="w-48" />
          <Textarea placeholder="Subtle" variant="subtle" className="w-48" />
          <Textarea placeholder="Flushed" variant="flushed" className="w-48" />
        </PreviewGroup>
      ),
    },
    {
      title: "Sizes",
      description: "From xs to xl.",
      code: `<Textarea placeholder="xs" size="xs" className="w-40" />
<Textarea placeholder="sm" size="sm" className="w-40" />
<Textarea placeholder="md" size="md" className="w-40" />
<Textarea placeholder="lg" size="lg" className="w-40" />
<Textarea placeholder="xl" size="xl" className="w-40" />`,
      render: () => (
        <PreviewGroup className="items-start">
          <Textarea placeholder="xs" size="xs" className="w-40" />
          <Textarea placeholder="sm" size="sm" className="w-40" />
          <Textarea placeholder="md" size="md" className="w-40" />
          <Textarea placeholder="lg" size="lg" className="w-40" />
          <Textarea placeholder="xl" size="xl" className="w-40" />
        </PreviewGroup>
      ),
    },
    {
      title: "States",
      description: "Default, prefilled, disabled and invalid.",
      code: `<Textarea placeholder="Default" className="w-48" />
<Textarea defaultValue="Prefilled value that grows with the content." className="w-48" />
<Textarea placeholder="Disabled" disabled className="w-48" />
<Textarea placeholder="Invalid" aria-invalid className="w-48" />`,
      render: () => (
        <PreviewGroup className="items-start">
          <Textarea placeholder="Default" className="w-48" />
          <Textarea defaultValue="Prefilled value that grows with the content." className="w-48" />
          <Textarea placeholder="Disabled" disabled className="w-48" />
          <Textarea placeholder="Invalid" aria-invalid className="w-48" />
        </PreviewGroup>
      ),
    },
  ],

  label: [
    {
      title: "Usage",
      description: "Pair it with a form control via htmlFor and a matching id.",
      code: `<Label htmlFor="email">Email</Label>
<Input id="email" placeholder="you@example.com" />`,
      render: () => (
        <PreviewGroup>
          <Label htmlFor="preview-label-input">Email</Label>
          <Input id="preview-label-input" placeholder="you@example.com" />
        </PreviewGroup>
      ),
    },
  ],

  separator: [
    {
      title: "Horizontal",
      description: "Divides stacked content.",
      code: `<p className="text-foreground">Above</p>
<Separator className="my-2" />
<p className="text-foreground">Below</p>`,
      render: () => (
        <div>
          <p className="text-foreground">Above</p>
          <Separator className="my-2" />
          <p className="text-foreground">Below</p>
        </div>
      ),
    },
    {
      title: "Vertical",
      description: "Divides inline content. Give the container a height.",
      code: `<div className="flex h-10 items-center gap-4">
  <span className="text-foreground">A</span>
  <Separator orientation="vertical" />
  <span className="text-foreground">B</span>
</div>`,
      render: () => (
        <div className="flex h-10 items-center gap-4">
          <span className="text-foreground">A</span>
          <Separator orientation="vertical" />
          <span className="text-foreground">B</span>
        </div>
      ),
    },
  ],

  field: [
    {
      title: "Profile form",
      description:
        "FieldSet, FieldGroup, Field, FieldLabel, FieldDescription and FieldError working together.",
      code: `<FieldSet>
  <FieldLegend>Profile</FieldLegend>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Name</FieldLabel>
      <Input id="name" placeholder="Jane Doe" />
      <FieldDescription>Your public name.</FieldDescription>
    </Field>
    <Field data-invalid={true}>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" aria-invalid defaultValue="not-an-email" />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  </FieldGroup>
</FieldSet>`,
      render: () => (
        <div className="w-full max-w-sm">
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
                <Input id="preview-field-email" aria-invalid defaultValue="not-an-email" />
                <FieldError>Enter a valid email address.</FieldError>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      ),
    },
  ],

  fieldset: [
    {
      title: "Public profile",
      description:
        "Legend and helper text sit beside the fields, with an inline error on the invalid one.",
      code: `<Fieldset>
  <FieldsetControl>
    <FieldsetLegend>Public profile</FieldsetLegend>
    <FieldsetHelperText>Shown on your profile and in comments.</FieldsetHelperText>
  </FieldsetControl>
  <FieldsetContent>
    <Field>
      <FieldLabel htmlFor="name">Name</FieldLabel>
      <Input id="name" placeholder="Jane Doe" />
    </Field>
    <Field data-invalid={true}>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" aria-invalid defaultValue="not-an-email" />
      <FieldsetErrorText>
        <CircleAlert className="size-4" />
        Enter a valid email address.
      </FieldsetErrorText>
    </Field>
  </FieldsetContent>
</Fieldset>`,
      render: () => (
        <div className="w-full">
          <Fieldset>
            <FieldsetControl>
              <FieldsetLegend>Public profile</FieldsetLegend>
              <FieldsetHelperText>Shown on your profile and in comments.</FieldsetHelperText>
            </FieldsetControl>
            <FieldsetContent>
              <Field>
                <FieldLabel htmlFor="preview-fieldset-name">Name</FieldLabel>
                <Input id="preview-fieldset-name" placeholder="Jane Doe" />
              </Field>
              <Field data-invalid={true}>
                <FieldLabel htmlFor="preview-fieldset-email">Email</FieldLabel>
                <Input id="preview-fieldset-email" aria-invalid defaultValue="not-an-email" />
                <FieldsetErrorText>
                  <CircleAlert className="size-4" />
                  Enter a valid email address.
                </FieldsetErrorText>
              </Field>
            </FieldsetContent>
          </Fieldset>
        </div>
      ),
    },
  ],

  editable: [
    {
      title: "Sizes",
      description: "From xs to lg.",
      code: `<Editable size="xs" defaultValue="Extra small" className="w-64" />
<Editable size="sm" defaultValue="Small" className="w-64" />
<Editable size="md" defaultValue="Medium" className="w-64" />
<Editable size="lg" defaultValue="Large" className="w-64" />`,
      render: () => (
        <PreviewGroup column>
          <Editable size="xs" defaultValue="Extra small" className="w-64" />
          <Editable size="sm" defaultValue="Small" className="w-64" />
          <Editable size="md" defaultValue="Medium" className="w-64" />
          <Editable size="lg" defaultValue="Large" className="w-64" />
        </PreviewGroup>
      ),
    },
    {
      title: "Full example",
      description: "With a label. Click the value to start editing.",
      code: `<Editable
  label="Project name"
  defaultValue="Untitled project"
  placeholder="Enter a name..."
  className="w-72"
/>`,
      render: () => (
        <PreviewGroup>
          <Editable
            label="Project name"
            defaultValue="Untitled project"
            placeholder="Enter a name..."
            className="w-72"
          />
        </PreviewGroup>
      ),
    },
  ],

  combobox: [
    {
      title: "Variants",
      description: "Outline, surface and subtle.",
      code: `<Combobox
  variant="outline"
  label="Framework"
  placeholder="Search framework..."
  items={frameworkItems}
  className="w-80"
/>
<Combobox
  variant="surface"
  label="Framework"
  placeholder="Search framework..."
  items={frameworkItems}
  className="w-80"
/>
<Combobox
  variant="subtle"
  label="Framework"
  placeholder="Search framework..."
  items={frameworkItems}
  className="w-80"
/>`,
      render: () => (
        <PreviewGroup column>
          <Combobox
            variant="outline"
            label="Framework"
            placeholder="Search framework..."
            items={frameworkItems}
            className="w-80"
          />
          <Combobox
            variant="surface"
            label="Framework"
            placeholder="Search framework..."
            items={frameworkItems}
            className="w-80"
          />
          <Combobox
            variant="subtle"
            label="Framework"
            placeholder="Search framework..."
            items={frameworkItems}
            className="w-80"
          />
        </PreviewGroup>
      ),
    },
    {
      title: "Sizes",
      description: "From xs to lg.",
      code: `<Combobox size="xs" placeholder="Xs" items={frameworkItems} className="w-80" />
<Combobox size="sm" placeholder="Sm" items={frameworkItems} className="w-80" />
<Combobox size="md" placeholder="Md" items={frameworkItems} className="w-80" />
<Combobox size="lg" placeholder="Lg" items={frameworkItems} className="w-80" />`,
      render: () => (
        <PreviewGroup column>
          <Combobox size="xs" placeholder="Xs" items={frameworkItems} className="w-80" />
          <Combobox size="sm" placeholder="Sm" items={frameworkItems} className="w-80" />
          <Combobox size="md" placeholder="Md" items={frameworkItems} className="w-80" />
          <Combobox size="lg" placeholder="Lg" items={frameworkItems} className="w-80" />
        </PreviewGroup>
      ),
    },
    {
      title: "Full example",
      description: "With a label and a grouped list of items.",
      code: `<Combobox
  label="Framework"
  groupLabel="Frameworks"
  placeholder="Search framework..."
  items={frameworkItems}
/>`,
      render: () => (
        <PreviewGroup>
          <div className="w-80">
            <Combobox
              label="Framework"
              groupLabel="Frameworks"
              placeholder="Search framework..."
              items={frameworkItems}
            />
          </div>
        </PreviewGroup>
      ),
    },
  ],

  "tags-input": [
    {
      title: "Variants",
      description: "Outline, surface and subtle.",
      code: `<TagsInput variant="outline" defaultValue={["React", "Solid", "Vue"]} className="w-80" />
<TagsInput variant="surface" defaultValue={["React", "Solid", "Vue"]} className="w-80" />
<TagsInput variant="subtle" defaultValue={["React", "Solid", "Vue"]} className="w-80" />`,
      render: () => (
        <PreviewGroup column>
          <TagsInput variant="outline" defaultValue={["React", "Solid", "Vue"]} className="w-80" />
          <TagsInput variant="surface" defaultValue={["React", "Solid", "Vue"]} className="w-80" />
          <TagsInput variant="subtle" defaultValue={["React", "Solid", "Vue"]} className="w-80" />
        </PreviewGroup>
      ),
    },
    {
      title: "Sizes",
      description: "From xs to lg.",
      code: `<TagsInput size="xs" defaultValue={["Xs"]} className="w-80" />
<TagsInput size="sm" defaultValue={["Sm"]} className="w-80" />
<TagsInput size="md" defaultValue={["Md"]} className="w-80" />
<TagsInput size="lg" defaultValue={["Lg"]} className="w-80" />`,
      render: () => (
        <PreviewGroup column>
          <TagsInput size="xs" defaultValue={["Xs"]} className="w-80" />
          <TagsInput size="sm" defaultValue={["Sm"]} className="w-80" />
          <TagsInput size="md" defaultValue={["Md"]} className="w-80" />
          <TagsInput size="lg" defaultValue={["Lg"]} className="w-80" />
        </PreviewGroup>
      ),
    },
    {
      title: "States",
      description: "Read only, disabled and invalid.",
      code: `<TagsInput defaultValue={["Read only"]} readOnly className="w-80" />
<TagsInput defaultValue={["Disabled"]} disabled className="w-80" />
<TagsInput defaultValue={["Invalid"]} invalid className="w-80" />`,
      render: () => (
        <PreviewGroup column>
          <TagsInput defaultValue={["Read only"]} readOnly className="w-80" />
          <TagsInput defaultValue={["Disabled"]} disabled className="w-80" />
          <TagsInput defaultValue={["Invalid"]} invalid className="w-80" />
        </PreviewGroup>
      ),
    },
    {
      title: "Full example",
      description: "With a label and a max of 6 tags. Press Enter to add, double click to edit.",
      code: `<TagsInput label="Tags" defaultValue={["React", "Solid", "Vue"]} max={6} />`,
      render: () => (
        <PreviewGroup>
          <div className="w-80">
            <TagsInput label="Tags" defaultValue={["React", "Solid", "Vue"]} max={6} />
            <PreviewNote>Press Enter to add a tag, double click one to edit it.</PreviewNote>
          </div>
        </PreviewGroup>
      ),
    },
  ],

  switch: [
    {
      title: "Usage",
      description: "Default and small sizes, checked, unchecked, disabled, and with a label.",
      code: `<Switch />
<Switch defaultChecked />
<Switch disabled />
<Switch size="sm" />
<Switch size="sm" defaultChecked />
<Switch defaultChecked>Notifications</Switch>`,
      render: () => (
        <PreviewGroup>
          <Switch />
          <Switch defaultChecked />
          <Switch disabled />
          <Switch size="sm" />
          <Switch size="sm" defaultChecked />
          <Switch defaultChecked>Notifications</Switch>
        </PreviewGroup>
      ),
    },
  ],

  checkbox: [
    {
      title: "States",
      description: "Checked, unchecked, indeterminate and disabled.",
      code: `<Checkbox defaultChecked>Email notifications</Checkbox>
<Checkbox>Weekly newsletter</Checkbox>
<Checkbox defaultChecked="indeterminate">Select all (partial)</Checkbox>
<Checkbox disabled>Disabled option</Checkbox>`,
      render: () => (
        <PreviewGroup column>
          <Checkbox defaultChecked>Email notifications</Checkbox>
          <Checkbox>Weekly newsletter</Checkbox>
          <Checkbox defaultChecked="indeterminate">Select all (partial)</Checkbox>
          <Checkbox disabled>Disabled option</Checkbox>
        </PreviewGroup>
      ),
    },
  ],

  "radio-group": [
    {
      title: "Usage",
      description: "Only one item can be selected at a time.",
      code: `<RadioGroup defaultValue="comfortable">
  <RadioGroupItem value="default">Default</RadioGroupItem>
  <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
  <RadioGroupItem value="compact">Compact</RadioGroupItem>
  <RadioGroupItem value="disabled" disabled>
    Disabled
  </RadioGroupItem>
</RadioGroup>`,
      render: () => (
        <RadioGroup defaultValue="comfortable" className="w-fit">
          <RadioGroupItem value="default">Default</RadioGroupItem>
          <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
          <RadioGroupItem value="compact">Compact</RadioGroupItem>
          <RadioGroupItem value="disabled" disabled>
            Disabled
          </RadioGroupItem>
        </RadioGroup>
      ),
    },
  ],

  tabs: [
    {
      title: "Line",
      description: "The default variant, with an underline indicator.",
      code: `<Tabs defaultValue="account" variant="line">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="team" disabled>
      Team
    </TabsTrigger>
    <TabsIndicator />
  </TabsList>
  <TabsContent value="account">Manage your account settings here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
  <TabsContent value="team">Invite and manage your team members.</TabsContent>
</Tabs>`,
      render: () => (
        <PreviewGroup column className="w-full max-w-md">
          <Tabs defaultValue="account" variant="line" className="w-full">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="team" disabled>
                Team
              </TabsTrigger>
              <TabsIndicator />
            </TabsList>
            <TabsContent value="account">Manage your account settings here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
            <TabsContent value="team">Invite and manage your team members.</TabsContent>
          </Tabs>
        </PreviewGroup>
      ),
    },
    {
      title: "Subtle",
      description: "Muted background on the selected tab.",
      code: `<Tabs defaultValue="overview" variant="subtle">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
    <TabsIndicator />
  </TabsList>
  <TabsContent value="overview">A summary of your workspace activity.</TabsContent>
  <TabsContent value="analytics">Traffic and usage broken down by day.</TabsContent>
  <TabsContent value="reports">Export and schedule recurring reports.</TabsContent>
</Tabs>`,
      render: () => (
        <PreviewGroup column className="w-full max-w-md">
          <Tabs defaultValue="overview" variant="subtle" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsIndicator />
            </TabsList>
            <TabsContent value="overview">A summary of your workspace activity.</TabsContent>
            <TabsContent value="analytics">Traffic and usage broken down by day.</TabsContent>
            <TabsContent value="reports">Export and schedule recurring reports.</TabsContent>
          </Tabs>
        </PreviewGroup>
      ),
    },
    {
      title: "Enclosed, fitted",
      description: "Bordered tab list where triggers share the available width equally.",
      code: `<Tabs defaultValue="day" variant="enclosed" fitted>
  <TabsList>
    <TabsTrigger value="day">Day</TabsTrigger>
    <TabsTrigger value="week">Week</TabsTrigger>
    <TabsTrigger value="month">Month</TabsTrigger>
    <TabsIndicator />
  </TabsList>
  <TabsContent value="day">Showing data for today.</TabsContent>
  <TabsContent value="week">Showing data for this week.</TabsContent>
  <TabsContent value="month">Showing data for this month.</TabsContent>
</Tabs>`,
      render: () => (
        <PreviewGroup column className="w-full max-w-md">
          <Tabs defaultValue="day" variant="enclosed" fitted className="w-full">
            <TabsList>
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsIndicator />
            </TabsList>
            <TabsContent value="day">Showing data for today.</TabsContent>
            <TabsContent value="week">Showing data for this week.</TabsContent>
            <TabsContent value="month">Showing data for this month.</TabsContent>
          </Tabs>
        </PreviewGroup>
      ),
    },
    {
      title: "Sizes",
      description: "xs, sm and lg.",
      code: `<Tabs defaultValue="a" size="xs">
  <TabsList>
    <TabsTrigger value="a">Xs</TabsTrigger>
    <TabsTrigger value="b">Tab</TabsTrigger>
    <TabsIndicator />
  </TabsList>
</Tabs>
<Tabs defaultValue="a" size="sm">
  <TabsList>
    <TabsTrigger value="a">Sm</TabsTrigger>
    <TabsTrigger value="b">Tab</TabsTrigger>
    <TabsIndicator />
  </TabsList>
</Tabs>
<Tabs defaultValue="a" size="lg">
  <TabsList>
    <TabsTrigger value="a">Lg</TabsTrigger>
    <TabsTrigger value="b">Tab</TabsTrigger>
    <TabsIndicator />
  </TabsList>
</Tabs>`,
      render: () => (
        <PreviewGroup column className="w-full max-w-md">
          <Tabs defaultValue="a" size="xs">
            <TabsList>
              <TabsTrigger value="a">Xs</TabsTrigger>
              <TabsTrigger value="b">Tab</TabsTrigger>
              <TabsIndicator />
            </TabsList>
          </Tabs>
          <Tabs defaultValue="a" size="sm">
            <TabsList>
              <TabsTrigger value="a">Sm</TabsTrigger>
              <TabsTrigger value="b">Tab</TabsTrigger>
              <TabsIndicator />
            </TabsList>
          </Tabs>
          <Tabs defaultValue="a" size="lg">
            <TabsList>
              <TabsTrigger value="a">Lg</TabsTrigger>
              <TabsTrigger value="b">Tab</TabsTrigger>
              <TabsIndicator />
            </TabsList>
          </Tabs>
        </PreviewGroup>
      ),
    },
    {
      title: "Vertical, line",
      description: "Tab list on the side instead of on top.",
      code: `<Tabs defaultValue="general" orientation="vertical" variant="line" className="h-40">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="security">Security</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
    <TabsIndicator />
  </TabsList>
  <TabsContent value="general">General settings for your account.</TabsContent>
  <TabsContent value="security">Two factor auth and sessions.</TabsContent>
  <TabsContent value="billing">Plan, invoices and payment method.</TabsContent>
</Tabs>`,
      render: () => (
        <PreviewGroup column className="w-full max-w-md">
          <Tabs
            defaultValue="general"
            orientation="vertical"
            variant="line"
            className="h-40 w-full"
          >
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsIndicator />
            </TabsList>
            <TabsContent value="general">General settings for your account.</TabsContent>
            <TabsContent value="security">Two factor auth and sessions.</TabsContent>
            <TabsContent value="billing">Plan, invoices and payment method.</TabsContent>
          </Tabs>
        </PreviewGroup>
      ),
    },
  ],

  badge: [
    {
      title: "Solid",
      description: "Solid background, every size from sm to 2xl.",
      code: `<Badge variant="solid" size="sm">Sm</Badge>
<Badge variant="solid" size="md">Md</Badge>
<Badge variant="solid" size="lg">Lg</Badge>
<Badge variant="solid" size="xl">Xl</Badge>
<Badge variant="solid" size="2xl">2xl</Badge>`,
      render: () => (
        <PreviewGroup>
          <Badge variant="solid" size="sm">Sm</Badge>
          <Badge variant="solid" size="md">Md</Badge>
          <Badge variant="solid" size="lg">Lg</Badge>
          <Badge variant="solid" size="xl">Xl</Badge>
          <Badge variant="solid" size="2xl">2xl</Badge>
        </PreviewGroup>
      ),
    },
    {
      title: "Surface",
      description: "Tinted background, every size from sm to 2xl.",
      code: `<Badge variant="surface" size="sm">Sm</Badge>
<Badge variant="surface" size="md">Md</Badge>
<Badge variant="surface" size="lg">Lg</Badge>
<Badge variant="surface" size="xl">Xl</Badge>
<Badge variant="surface" size="2xl">2xl</Badge>`,
      render: () => (
        <PreviewGroup>
          <Badge variant="surface" size="sm">Sm</Badge>
          <Badge variant="surface" size="md">Md</Badge>
          <Badge variant="surface" size="lg">Lg</Badge>
          <Badge variant="surface" size="xl">Xl</Badge>
          <Badge variant="surface" size="2xl">2xl</Badge>
        </PreviewGroup>
      ),
    },
    {
      title: "Subtle",
      description: "Muted background, every size from sm to 2xl.",
      code: `<Badge variant="subtle" size="sm">Sm</Badge>
<Badge variant="subtle" size="md">Md</Badge>
<Badge variant="subtle" size="lg">Lg</Badge>
<Badge variant="subtle" size="xl">Xl</Badge>
<Badge variant="subtle" size="2xl">2xl</Badge>`,
      render: () => (
        <PreviewGroup>
          <Badge variant="subtle" size="sm">Sm</Badge>
          <Badge variant="subtle" size="md">Md</Badge>
          <Badge variant="subtle" size="lg">Lg</Badge>
          <Badge variant="subtle" size="xl">Xl</Badge>
          <Badge variant="subtle" size="2xl">2xl</Badge>
        </PreviewGroup>
      ),
    },
    {
      title: "Outline",
      description: "Just a border, every size from sm to 2xl.",
      code: `<Badge variant="outline" size="sm">Sm</Badge>
<Badge variant="outline" size="md">Md</Badge>
<Badge variant="outline" size="lg">Lg</Badge>
<Badge variant="outline" size="xl">Xl</Badge>
<Badge variant="outline" size="2xl">2xl</Badge>`,
      render: () => (
        <PreviewGroup>
          <Badge variant="outline" size="sm">Sm</Badge>
          <Badge variant="outline" size="md">Md</Badge>
          <Badge variant="outline" size="lg">Lg</Badge>
          <Badge variant="outline" size="xl">Xl</Badge>
          <Badge variant="outline" size="2xl">2xl</Badge>
        </PreviewGroup>
      ),
    },
  ],

  spinner: [
    {
      title: "Sizes & variants",
      description: "The default and circle variant, from xs to xl.",
      code: `<Spinner size="xs" />
<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner size="xl" />
<Spinner variant="circle" />
<Spinner variant="circle" size="lg" />`,
      render: () => (
        <PreviewGroup>
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
          <Spinner size="xl" />
          <Spinner variant="circle" />
          <Spinner variant="circle" size="lg" />
        </PreviewGroup>
      ),
    },
    {
      title: "Button loading state",
      description: "Button uses Spinner internally for its loading prop, with an optional loadingText.",
      code: `<Button loading variant="outline">
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
</Button>`,
      render: () => (
        <PreviewGroup>
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
        </PreviewGroup>
      ),
    },
  ],

  card: [
    {
      title: "Variants",
      description: "Outline, elevated and subtle.",
      code: `<Card>
  <CardHeader>
    <CardTitle>Outline</CardTitle>
    <CardDescription>Just a border, no background.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">The default variant.</p>
  </CardContent>
</Card>
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Elevated</CardTitle>
    <CardDescription>No border, drop shadow instead.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">Stands out from the page.</p>
  </CardContent>
</Card>
<Card variant="subtle">
  <CardHeader>
    <CardTitle>Subtle</CardTitle>
    <CardDescription>Muted background, no border.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">For less prominent surfaces.</p>
  </CardContent>
</Card>`,
      render: () => (
        <PreviewGroup className="items-start">
          <Card className="w-64">
            <CardHeader>
              <CardTitle>Outline</CardTitle>
              <CardDescription>Just a border, no background.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">The default variant.</p>
            </CardContent>
          </Card>
          <Card variant="elevated" className="w-64">
            <CardHeader>
              <CardTitle>Elevated</CardTitle>
              <CardDescription>No border, drop shadow instead.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Stands out from the page.</p>
            </CardContent>
          </Card>
          <Card variant="subtle" className="w-64">
            <CardHeader>
              <CardTitle>Subtle</CardTitle>
              <CardDescription>Muted background, no border.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">For less prominent surfaces.</p>
            </CardContent>
          </Card>
        </PreviewGroup>
      ),
    },
    {
      title: "Full example",
      description: "Header with an action badge, content with form controls, and a footer.",
      code: `<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>Choose how you want to be notified.</CardDescription>
    <CardAction>
      <Badge variant="subtle">New</Badge>
    </CardAction>
  </CardHeader>
  <CardContent className="gap-3">
    <div className="flex items-center justify-between">
      <Label htmlFor="email-notifications">Email notifications</Label>
      <Switch id="email-notifications" defaultChecked />
    </div>
    <Separator />
    <div className="flex items-center justify-between">
      <Label htmlFor="weekly-newsletter">Weekly newsletter</Label>
      <Checkbox id="weekly-newsletter" />
    </div>
  </CardContent>
  <CardFooter className="border-t">
    <Button variant="plain" size="sm">
      Cancel
    </Button>
    <Button size="sm">Save</Button>
  </CardFooter>
</Card>`,
      render: () => (
        <PreviewGroup>
          <Card className="w-80">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Choose how you want to be notified.</CardDescription>
              <CardAction>
                <Badge variant="subtle">New</Badge>
              </CardAction>
            </CardHeader>
            <CardContent className="gap-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="card-preview-switch">Email notifications</Label>
                <Switch id="card-preview-switch" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <Label htmlFor="card-preview-checkbox">Weekly newsletter</Label>
                <Checkbox id="card-preview-checkbox" />
              </div>
            </CardContent>
            <CardFooter className="border-t">
              <Button variant="plain" size="sm">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </CardFooter>
          </Card>
        </PreviewGroup>
      ),
    },
    {
      title: "Horizontal orientation",
      description: "Places an image alongside the content instead of above it.",
      code: `<Card orientation="horizontal">
  <img src="/laptop.jpg" alt="Laptop showing lines of code" className="h-auto w-48 object-cover" />
  <div className="flex flex-1 flex-col">
    <CardHeader>
      <CardTitle>Built for React and Tailwind</CardTitle>
      <CardDescription>
        Copy and paste components you fully own, styled with Tailwind and Ark UI
        underneath. No hidden abstractions to fight later.
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-row gap-2">
      <Badge variant="subtle">Tailwind</Badge>
      <Badge variant="subtle">Ark UI</Badge>
    </CardContent>
    <CardFooter>
      <Button size="sm">Get started</Button>
    </CardFooter>
  </div>
</Card>`,
      render: () => (
        <PreviewGroup>
          <Card orientation="horizontal" className="w-full max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60"
              alt="Laptop showing lines of code"
              className="h-auto w-48 object-cover"
            />
            <div className="flex flex-1 flex-col">
              <CardHeader>
                <CardTitle>Built for React and Tailwind</CardTitle>
                <CardDescription>
                  Copy and paste components you fully own, styled with Tailwind and Ark UI
                  underneath. No hidden abstractions to fight later.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-row gap-2">
                <Badge variant="subtle">Tailwind</Badge>
                <Badge variant="subtle">Ark UI</Badge>
              </CardContent>
              <CardFooter>
                <Button size="sm">Get started</Button>
              </CardFooter>
            </div>
          </Card>
        </PreviewGroup>
      ),
    },
    {
      title: "Sign up form",
      description: "A realistic composition: header, OAuth buttons, separator, fields and a footer button.",
      code: `<Card>
  <CardHeader>
    <CardTitle>Sign up</CardTitle>
    <CardDescription>Create an account to start using deste04-ui.</CardDescription>
  </CardHeader>
  <CardContent className="gap-4">
    <div className="flex gap-2">
      <Button variant="outline" className="flex-1">
        <KeyRound /> GitLab
      </Button>
      <Button variant="outline" className="flex-1">
        <KeyRound /> GitHub
      </Button>
    </div>
    <div className="flex items-center gap-3">
      <Separator className="flex-1" />
      <span className="text-xs whitespace-nowrap text-muted-foreground">
        or sign up with
      </span>
      <Separator className="flex-1" />
    </div>
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" placeholder="you@example.com" />
    </Field>
    <Field>
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input id="password" type="password" placeholder="********" />
    </Field>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Create account</Button>
  </CardFooter>
</Card>`,
      render: () => (
        <PreviewGroup>
          <Card className="w-80">
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>Create an account to start using deste04-ui.</CardDescription>
            </CardHeader>
            <CardContent className="gap-4">
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <KeyRound /> GitLab
                </Button>
                <Button variant="outline" className="flex-1">
                  <KeyRound /> GitHub
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Separator className="flex-1" />
                <span className="text-xs whitespace-nowrap text-muted-foreground">
                  or sign up with
                </span>
                <Separator className="flex-1" />
              </div>
              <Field>
                <FieldLabel htmlFor="card-preview-email">Email</FieldLabel>
                <Input id="card-preview-email" type="email" placeholder="you@example.com" />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-preview-password">Password</FieldLabel>
                <Input id="card-preview-password" type="password" placeholder="********" />
              </Field>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create account</Button>
            </CardFooter>
          </Card>
        </PreviewGroup>
      ),
    },
  ],

  toast: [
    {
      title: "Types",
      description: "Info, success, error, warning and loading.",
      code: `toast.info({ title: "Heads up", description: "This is an info toast." });
toast.success({ title: "Saved", description: "Your changes were saved." });
toast.error({ title: "Something went wrong", description: "Please try again." });
toast.warning({ title: "Careful", description: "This action can't be undone." });
toast.loading({ title: "Uploading...", description: "This can take a moment." });`,
      render: () => (
        <PreviewGroup>
          <Button
            variant="outline"
            onClick={() => toast.info({ title: "Heads up", description: "This is an info toast." })}
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success({ title: "Saved", description: "Your changes were saved." })}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.error({ title: "Something went wrong", description: "Please try again." })
            }
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.warning({ title: "Careful", description: "This action can't be undone." })
            }
          >
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.loading({ title: "Uploading...", description: "This can take a moment." })
            }
          >
            Loading
          </Button>
        </PreviewGroup>
      ),
    },
    {
      title: "With action",
      description: "Add a button the user can click straight from the toast, e.g. to undo.",
      code: `toast.create({
  title: "File deleted",
  description: "trash.txt was moved to the bin.",
  action: { label: "Undo", onClick: () => toast.success({ title: "Restored" }) },
});`,
      render: () => (
        <PreviewGroup>
          <Button
            variant="outline"
            onClick={() =>
              toast.create({
                title: "File deleted",
                description: "trash.txt was moved to the bin.",
                action: { label: "Undo", onClick: () => toast.success({ title: "Restored" }) },
              })
            }
          >
            Delete file
          </Button>
        </PreviewGroup>
      ),
    },
    {
      title: "Promise",
      description: "Automatically swaps between loading, success and error toasts for an async task.",
      code: `toast.promise(fetchData(), {
  loading: { title: "Loading...", description: "Fetching your data." },
  success: { title: "Done", description: "Data loaded successfully." },
  error: { title: "Error", description: "Could not load data." },
});`,
      render: () => (
        <PreviewGroup>
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
                loading: { title: "Loading...", description: "Fetching your data." },
                success: { title: "Done", description: "Data loaded successfully." },
                error: { title: "Error", description: "Could not load data." },
              })
            }
          >
            Run async task
          </Button>
        </PreviewGroup>
      ),
    },
  ],

  "file-upload": [
    {
      title: "Dropzone",
      description: "Drag and drop files, or click to browse. Shows an image preview when possible.",
      code: `<FileUpload maxFiles={5}>
  <FileUploadLabel>Attachments</FileUploadLabel>
  <FileUploadDropzone>
    <Upload />
    <div>
      <p className="font-medium">Drag and drop files here</p>
      <p className="text-xs text-muted-foreground">or click to browse</p>
    </div>
  </FileUploadDropzone>
  <FileUploadItemGroup>
    <FileUploadContext>
      {({ acceptedFiles }) =>
        acceptedFiles.map((file) => (
          <FileUploadItem key={file.name} file={file}>
            <FileUploadItemPreview type="image/*">
              <FileUploadItemPreviewImage />
            </FileUploadItemPreview>
            <FileUploadItemPreview type=".*">
              <FileText />
            </FileUploadItemPreview>
            <FileUploadItemName />
            <FileUploadItemSizeText />
            <FileUploadItemDeleteTrigger />
          </FileUploadItem>
        ))
      }
    </FileUploadContext>
  </FileUploadItemGroup>
  <FileUploadHiddenInput />
</FileUpload>`,
      render: () => (
        <PreviewGroup className="w-full max-w-md">
          <FileUpload maxFiles={5} className="w-full">
            <FileUploadLabel>Attachments</FileUploadLabel>
            <FileUploadDropzone>
              <Upload />
              <div>
                <p className="font-medium">Drag and drop files here</p>
                <p className="text-xs text-muted-foreground">or click to browse</p>
              </div>
            </FileUploadDropzone>
            <FileUploadItemGroup>
              <FileUploadContext>
                {({ acceptedFiles }) =>
                  acceptedFiles.map((file) => (
                    <FileUploadItem key={file.name} file={file}>
                      <FileUploadItemPreview type="image/*">
                        <FileUploadItemPreviewImage />
                      </FileUploadItemPreview>
                      <FileUploadItemPreview type=".*">
                        <FileText />
                      </FileUploadItemPreview>
                      <FileUploadItemName />
                      <FileUploadItemSizeText />
                      <FileUploadItemDeleteTrigger />
                    </FileUploadItem>
                  ))
                }
              </FileUploadContext>
            </FileUploadItemGroup>
            <FileUploadHiddenInput />
          </FileUpload>
        </PreviewGroup>
      ),
    },
    {
      title: "Trigger and clear",
      description: "A button trigger instead of a dropzone, plus a clear all action. Small size.",
      code: `<FileUpload maxFiles={3} size="sm">
  <FileUploadLabel>Documents</FileUploadLabel>
  <div className="flex gap-3">
    <FileUploadTrigger>
      <Upload />
      Choose file(s)
    </FileUploadTrigger>
    <FileUploadClearTrigger>Clear</FileUploadClearTrigger>
  </div>
  <FileUploadItemGroup>
    <FileUploadContext>
      {({ acceptedFiles }) =>
        acceptedFiles.map((file) => (
          <FileUploadItem key={file.name} file={file}>
            <FileUploadItemPreview type=".*">
              <FileText />
            </FileUploadItemPreview>
            <FileUploadItemName />
            <FileUploadItemSizeText />
            <FileUploadItemDeleteTrigger />
          </FileUploadItem>
        ))
      }
    </FileUploadContext>
  </FileUploadItemGroup>
  <FileUploadHiddenInput />
</FileUpload>`,
      render: () => (
        <PreviewGroup className="w-full max-w-md">
          <FileUpload maxFiles={3} size="sm" className="w-full">
            <FileUploadLabel>Documents</FileUploadLabel>
            <div className="flex gap-3">
              <FileUploadTrigger>
                <Upload />
                Choose file(s)
              </FileUploadTrigger>
              <FileUploadClearTrigger>Clear</FileUploadClearTrigger>
            </div>
            <FileUploadItemGroup>
              <FileUploadContext>
                {({ acceptedFiles }) =>
                  acceptedFiles.map((file) => (
                    <FileUploadItem key={file.name} file={file}>
                      <FileUploadItemPreview type=".*">
                        <FileText />
                      </FileUploadItemPreview>
                      <FileUploadItemName />
                      <FileUploadItemSizeText />
                      <FileUploadItemDeleteTrigger />
                    </FileUploadItem>
                  ))
                }
              </FileUploadContext>
            </FileUploadItemGroup>
            <FileUploadHiddenInput />
          </FileUpload>
        </PreviewGroup>
      ),
    },
  ],

  swap: [
    {
      title: "Variants",
      description:
        "Set swap to toggle between the on and off indicator. Fade, scale and rotate shown here — click a button to try it.",
      code: `const [on, setOn] = useState(false);

<Button variant="outline" size="icon-md" aria-label="Toggle" onClick={() => setOn((v) => !v)}>
  <Swap swap={on}>
    <SwapIndicator type="on" variant="fade">
      <Check />
    </SwapIndicator>
    <SwapIndicator type="off" variant="fade">
      <Copy />
    </SwapIndicator>
  </Swap>
</Button>`,
      render: () => (
        <PreviewGroup>
          <SwapButton variant="fade" iconOn={Check} iconOff={Copy} label="Fade" />
          <SwapButton variant="scale" iconOn={Volume2} iconOff={VolumeX} label="Scale" />
          <SwapButton variant="rotate" iconOn={Moon} iconOff={Sun} label="Rotate" />
        </PreviewGroup>
      ),
    },
  ],

  "theme-provider": [
    {
      title: "Usage",
      description: "Mount it once at the app entrypoint, wrapping the whole app.",
      code: `<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <App />
</ThemeProvider>`,
      render: () => (
        <div className="w-full max-w-md">
          <p className="text-muted-foreground">
            This component has no visual output of its own — it provides theme context to its
            children.
          </p>
          <PreviewNote>
            This site uses it. Try the theme toggle in the header, or the Theme Toggle preview.
          </PreviewNote>
        </div>
      ),
    },
  ],

  "theme-toggle": [
    {
      title: "Usage",
      description: "Cycles through light, dark and system on click.",
      code: `<ThemeToggle />`,
      render: () => (
        <PreviewGroup>
          <ThemeToggle />
        </PreviewGroup>
      ),
    },
  ],
};
