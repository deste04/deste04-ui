import { useState, type ComponentType } from "react";
import {
  Trash,
  Users,
  BookOpen,
  GitFork,
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

import { PreviewStack, PreviewGroup, PreviewNote } from "../components/docs/preview-parts";

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

export const demos: Record<string, () => JSX.Element> = {
  button: () => (
    <PreviewStack>
      <PreviewGroup label="Variants">
        <Button variant="solid">Solid</Button>
        <Button variant="surface">Surface</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="plain">Plain</Button>
        <Button variant="destructive">Destructive</Button>
        <Button disabled>Disabled</Button>
      </PreviewGroup>
      <PreviewGroup label="Sizes">
        <Button size="2xs">2xs</Button>
        <Button size="xs">Xs</Button>
        <Button size="sm">Sm</Button>
        <Button size="md">Md</Button>
        <Button size="lg">Lg</Button>
        <Button size="xl">Xl</Button>
        <Button size="2xl">2xl</Button>
      </PreviewGroup>
      <PreviewGroup label="Icon only">
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
    </PreviewStack>
  ),

  "copy-button": () => (
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

  link: () => (
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

  "card-link": () => (
    <PreviewGroup>
      <CardLink
        href="/docs/components"
        icon={<BookOpen />}
        title="Documentation"
        description="Browse every component, its variants and how to install it."
        cta="Browse"
      />
      <CardLink
        href="https://github.com"
        icon={<GitFork />}
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

  toggle: () => (
    <PreviewStack>
      <PreviewGroup label="Variants">
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
      <PreviewGroup label="Sizes">
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
      <PreviewGroup label="With text">
        <Toggle defaultPressed>
          <Bold /> Bold
        </Toggle>
      </PreviewGroup>
    </PreviewStack>
  ),

  "toggle-group": () => (
    <PreviewStack>
      <PreviewGroup label="Single selection">
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
      <PreviewGroup label="Multiple selection">
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
      <PreviewGroup label="Vertical">
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
    </PreviewStack>
  ),

  input: () => (
    <PreviewStack>
      <PreviewGroup label="Variants">
        <Input placeholder="Outline" variant="outline" className="w-48" />
        <Input placeholder="Surface" variant="surface" className="w-48" />
        <Input placeholder="Subtle" variant="subtle" className="w-48" />
        <Input placeholder="Flushed" variant="flushed" className="w-48" />
      </PreviewGroup>
      <PreviewGroup label="Sizes" className="items-end">
        <Input placeholder="2xs" size="2xs" className="w-32" />
        <Input placeholder="xs" size="xs" className="w-32" />
        <Input placeholder="sm" size="sm" className="w-32" />
        <Input placeholder="md" size="md" className="w-32" />
        <Input placeholder="lg" size="lg" className="w-32" />
        <Input placeholder="xl" size="xl" className="w-32" />
        <Input placeholder="2xl" size="2xl" className="w-32" />
      </PreviewGroup>
      <PreviewGroup label="States">
        <Input placeholder="Default" className="w-48" />
        <Input defaultValue="Prefilled value" className="w-48" />
        <Input placeholder="Read only" readOnly defaultValue="Read only" className="w-48" />
        <Input placeholder="Disabled" disabled className="w-48" />
        <Input placeholder="Invalid" aria-invalid className="w-48" />
      </PreviewGroup>
    </PreviewStack>
  ),

  textarea: () => (
    <PreviewStack>
      <PreviewGroup label="Variants" className="items-start">
        <Textarea placeholder="Outline" variant="outline" className="w-48" />
        <Textarea placeholder="Surface" variant="surface" className="w-48" />
        <Textarea placeholder="Subtle" variant="subtle" className="w-48" />
        <Textarea placeholder="Flushed" variant="flushed" className="w-48" />
      </PreviewGroup>
      <PreviewGroup label="Sizes" className="items-start">
        <Textarea placeholder="xs" size="xs" className="w-40" />
        <Textarea placeholder="sm" size="sm" className="w-40" />
        <Textarea placeholder="md" size="md" className="w-40" />
        <Textarea placeholder="lg" size="lg" className="w-40" />
        <Textarea placeholder="xl" size="xl" className="w-40" />
      </PreviewGroup>
      <PreviewGroup label="States" className="items-start">
        <Textarea placeholder="Default" className="w-48" />
        <Textarea defaultValue="Prefilled value that grows with the content." className="w-48" />
        <Textarea placeholder="Disabled" disabled className="w-48" />
        <Textarea placeholder="Invalid" aria-invalid className="w-48" />
      </PreviewGroup>
    </PreviewStack>
  ),

  label: () => (
    <PreviewGroup>
      <Label htmlFor="preview-label-input">Email</Label>
      <Input id="preview-label-input" placeholder="you@example.com" />
    </PreviewGroup>
  ),

  separator: () => (
    <PreviewStack>
      <div>
        <p className="text-foreground">Above</p>
        <Separator className="my-2" />
        <p className="text-foreground">Below</p>
      </div>
      <div className="flex h-10 items-center gap-4">
        <span className="text-foreground">A</span>
        <Separator orientation="vertical" />
        <span className="text-foreground">B</span>
      </div>
    </PreviewStack>
  ),

  field: () => (
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

  fieldset: () => (
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

  editable: () => (
    <PreviewStack>
      <PreviewGroup label="Sizes" column>
        <Editable size="xs" defaultValue="Extra small" className="w-64" />
        <Editable size="sm" defaultValue="Small" className="w-64" />
        <Editable size="md" defaultValue="Medium" className="w-64" />
        <Editable size="lg" defaultValue="Large" className="w-64" />
      </PreviewGroup>
      <PreviewGroup label="Full example">
        <Editable
          label="Project name"
          defaultValue="Untitled project"
          placeholder="Enter a name..."
          className="w-72"
        />
      </PreviewGroup>
    </PreviewStack>
  ),

  combobox: () => (
    <PreviewStack>
      <PreviewGroup label="Variants" column>
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
      <PreviewGroup label="Sizes" column>
        <Combobox size="xs" placeholder="Xs" items={frameworkItems} className="w-80" />
        <Combobox size="sm" placeholder="Sm" items={frameworkItems} className="w-80" />
        <Combobox size="md" placeholder="Md" items={frameworkItems} className="w-80" />
        <Combobox size="lg" placeholder="Lg" items={frameworkItems} className="w-80" />
      </PreviewGroup>
      <PreviewGroup label="Full example">
        <div className="w-80">
          <Combobox
            label="Framework"
            groupLabel="Frameworks"
            placeholder="Search framework..."
            items={frameworkItems}
          />
        </div>
      </PreviewGroup>
    </PreviewStack>
  ),

  "tags-input": () => (
    <PreviewStack>
      <PreviewGroup label="Variants" column>
        <TagsInput variant="outline" defaultValue={["React", "Solid", "Vue"]} className="w-80" />
        <TagsInput variant="surface" defaultValue={["React", "Solid", "Vue"]} className="w-80" />
        <TagsInput variant="subtle" defaultValue={["React", "Solid", "Vue"]} className="w-80" />
      </PreviewGroup>
      <PreviewGroup label="Sizes" column>
        <TagsInput size="xs" defaultValue={["Xs"]} className="w-80" />
        <TagsInput size="sm" defaultValue={["Sm"]} className="w-80" />
        <TagsInput size="md" defaultValue={["Md"]} className="w-80" />
        <TagsInput size="lg" defaultValue={["Lg"]} className="w-80" />
      </PreviewGroup>
      <PreviewGroup label="States" column>
        <TagsInput defaultValue={["Read only"]} readOnly className="w-80" />
        <TagsInput defaultValue={["Disabled"]} disabled className="w-80" />
        <TagsInput defaultValue={["Invalid"]} invalid className="w-80" />
      </PreviewGroup>
      <PreviewGroup label="Full example">
        <div className="w-80">
          <TagsInput label="Tags" defaultValue={["React", "Solid", "Vue"]} max={6} />
          <PreviewNote>Press Enter to add a tag, double click one to edit it.</PreviewNote>
        </div>
      </PreviewGroup>
    </PreviewStack>
  ),

  switch: () => (
    <PreviewGroup>
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch size="sm" />
      <Switch size="sm" defaultChecked />
      <Switch defaultChecked>Notifications</Switch>
    </PreviewGroup>
  ),

  checkbox: () => (
    <PreviewGroup column>
      <Checkbox defaultChecked>Email notifications</Checkbox>
      <Checkbox>Weekly newsletter</Checkbox>
      <Checkbox defaultChecked="indeterminate">Select all (partial)</Checkbox>
      <Checkbox disabled>Disabled option</Checkbox>
    </PreviewGroup>
  ),

  "radio-group": () => (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <RadioGroupItem value="default">Default</RadioGroupItem>
      <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
      <RadioGroupItem value="compact">Compact</RadioGroupItem>
      <RadioGroupItem value="disabled" disabled>
        Disabled
      </RadioGroupItem>
    </RadioGroup>
  ),

  tabs: () => (
    <PreviewStack className="w-full max-w-md">
      <PreviewGroup label="Line" column className="w-full">
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
      <PreviewGroup label="Subtle" column className="w-full">
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
      <PreviewGroup label="Enclosed, fitted" column className="w-full">
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
      <PreviewGroup label="Sizes" column className="w-full">
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
      <PreviewGroup label="Vertical, line" column className="w-full">
        <Tabs defaultValue="general" orientation="vertical" variant="line" className="h-40 w-full">
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
    </PreviewStack>
  ),

  badge: () => (
    <PreviewStack>
      <PreviewGroup label="Solid">
        <Badge variant="solid" size="sm">Sm</Badge>
        <Badge variant="solid" size="md">Md</Badge>
        <Badge variant="solid" size="lg">Lg</Badge>
        <Badge variant="solid" size="xl">Xl</Badge>
        <Badge variant="solid" size="2xl">2xl</Badge>
      </PreviewGroup>
      <PreviewGroup label="Surface">
        <Badge variant="surface" size="sm">Sm</Badge>
        <Badge variant="surface" size="md">Md</Badge>
        <Badge variant="surface" size="lg">Lg</Badge>
        <Badge variant="surface" size="xl">Xl</Badge>
        <Badge variant="surface" size="2xl">2xl</Badge>
      </PreviewGroup>
      <PreviewGroup label="Subtle">
        <Badge variant="subtle" size="sm">Sm</Badge>
        <Badge variant="subtle" size="md">Md</Badge>
        <Badge variant="subtle" size="lg">Lg</Badge>
        <Badge variant="subtle" size="xl">Xl</Badge>
        <Badge variant="subtle" size="2xl">2xl</Badge>
      </PreviewGroup>
      <PreviewGroup label="Outline">
        <Badge variant="outline" size="sm">Sm</Badge>
        <Badge variant="outline" size="md">Md</Badge>
        <Badge variant="outline" size="lg">Lg</Badge>
        <Badge variant="outline" size="xl">Xl</Badge>
        <Badge variant="outline" size="2xl">2xl</Badge>
      </PreviewGroup>
    </PreviewStack>
  ),

  spinner: () => (
    <PreviewGroup>
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
    </PreviewGroup>
  ),

  card: () => (
    <PreviewStack className="w-full">
      <PreviewGroup label="Variants" className="items-start">
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

      <PreviewGroup label="Full example">
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

      <PreviewGroup label="Horizontal orientation">
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

      <PreviewGroup label="Sign up form">
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
    </PreviewStack>
  ),

  toast: () => (
    <PreviewStack>
      <PreviewGroup label="Types">
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
      <PreviewGroup label="With action">
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
      <PreviewGroup label="Promise">
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
    </PreviewStack>
  ),

  "file-upload": () => (
    <PreviewStack>
      <PreviewGroup label="Dropzone" className="w-full max-w-md">
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
      <PreviewGroup label="Trigger and clear" className="w-full max-w-md">
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
    </PreviewStack>
  ),

  swap: () => (
    <PreviewGroup label="Click a button to toggle the swap">
      <SwapButton variant="fade" iconOn={Check} iconOff={Copy} label="Fade" />
      <SwapButton variant="scale" iconOn={Volume2} iconOff={VolumeX} label="Scale" />
      <SwapButton variant="rotate" iconOn={Moon} iconOff={Sun} label="Rotate" />
    </PreviewGroup>
  ),

  "theme-provider": () => (
    <div className="w-full max-w-md">
      <p className="text-muted-foreground">
        Mount it once at the app entrypoint, wrapping the whole app:
      </p>
      <pre className="mt-2 overflow-x-auto rounded-lg border border-border bg-muted px-5 py-4 font-mono text-sm text-foreground">
        <code>{`<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <App />
</ThemeProvider>`}</code>
      </pre>
      <PreviewNote>
        This site uses it. Try the theme toggle in the header, or the Theme Toggle preview.
      </PreviewNote>
    </div>
  ),

  "theme-toggle": () => (
    <PreviewGroup>
      <ThemeToggle />
      <p className="text-muted-foreground">Click to cycle light, dark, then system.</p>
    </PreviewGroup>
  ),
};
