import { useState, type ComponentType, type ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { components } from "../data/components";
import { Button } from "deste04-ui/components/ui/button";
import buttonSource from "deste04-ui/components/ui/button.tsx?raw";
import { Swap, SwapIndicator } from "deste04-ui/components/ui/swap";
import swapSource from "deste04-ui/components/ui/swap.tsx?raw";
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
import {
  Fieldset,
  FieldsetControl,
  FieldsetContent,
  FieldsetLegend,
  FieldsetHelperText,
  FieldsetErrorText,
} from "deste04-ui/components/ui/fieldset";
import fieldsetSource from "deste04-ui/components/ui/fieldset.tsx?raw";
import { Textarea } from "deste04-ui/components/ui/textarea";
import textareaSource from "deste04-ui/components/ui/textarea.tsx?raw";
import { TagsInput } from "deste04-ui/components/ui/tags-input";
import tagsInputSource from "deste04-ui/components/ui/tags-input.tsx?raw";
import { Combobox } from "deste04-ui/components/ui/combobox";
import comboboxSource from "deste04-ui/components/ui/combobox.tsx?raw";
import { Editable } from "deste04-ui/components/ui/editable";
import editableSource from "deste04-ui/components/ui/editable.tsx?raw";
import { Switch } from "deste04-ui/components/ui/switch";
import switchSource from "deste04-ui/components/ui/switch.tsx?raw";
import { Checkbox } from "deste04-ui/components/ui/checkbox";
import checkboxSource from "deste04-ui/components/ui/checkbox.tsx?raw";
import { RadioGroup, RadioGroupItem } from "deste04-ui/components/ui/radio-group";
import radioGroupSource from "deste04-ui/components/ui/radio-group.tsx?raw";
import { Toggle } from "deste04-ui/components/ui/toggle";
import toggleSource from "deste04-ui/components/ui/toggle.tsx?raw";
import { ToggleGroup, ToggleGroupItem } from "deste04-ui/components/ui/toggle-group";
import toggleGroupSource from "deste04-ui/components/ui/toggle-group.tsx?raw";
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator } from "deste04-ui/components/ui/tabs";
import tabsSource from "deste04-ui/components/ui/tabs.tsx?raw";
import { Badge } from "deste04-ui/components/ui/badge";
import badgeSource from "deste04-ui/components/ui/badge.tsx?raw";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "deste04-ui/components/ui/card";
import cardSource from "deste04-ui/components/ui/card.tsx?raw";
import { CardLink } from "deste04-ui/components/ui/card-link";
import cardLinkSource from "deste04-ui/components/ui/card-link.tsx?raw";
import { Toaster, toast } from "deste04-ui/components/ui/toast";
import toastSource from "deste04-ui/components/ui/toast.tsx?raw";
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
} from "lucide-react";

function SwapDemo({
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
    <Button
      variant="outline"
      size="icon-md"
      aria-label={label}
      onClick={() => setOn((v) => !v)}
    >
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

const frameworkItems = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Angular", value: "angular" },
  { label: "Astro", value: "astro" },
];

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
  swap: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Variants</p>
        <div className="preview-row">
          <SwapDemo variant="fade" iconOn={Check} iconOff={Copy} label="Fade" />
          <SwapDemo variant="scale" iconOn={Volume2} iconOff={VolumeX} label="Scale" />
          <SwapDemo variant="rotate" iconOn={Moon} iconOff={Sun} label="Rotate" />
        </div>
        <p className="muted" style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>
          Click a button to toggle the swap.
        </p>
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
  fieldset: (
    <div style={{ width: "100%" }}>
      <Fieldset>
        <FieldsetControl>
          <FieldsetLegend>Public profile</FieldsetLegend>
          <FieldsetHelperText>
            Shown on your profile and in comments.
          </FieldsetHelperText>
        </FieldsetControl>
        <FieldsetContent>
          <Field>
            <FieldLabel htmlFor="preview-fieldset-name">Name</FieldLabel>
            <Input id="preview-fieldset-name" placeholder="Jane Doe" />
          </Field>
          <Field data-invalid={true}>
            <FieldLabel htmlFor="preview-fieldset-email">Email</FieldLabel>
            <Input
              id="preview-fieldset-email"
              aria-invalid
              defaultValue="not-an-email"
            />
            <FieldsetErrorText>
              <CircleAlert className="size-4" />
              Enter a valid email address.
            </FieldsetErrorText>
          </Field>
        </FieldsetContent>
      </Fieldset>
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
  editable: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sizes</p>
        <div className="preview-row" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Editable size="xs" defaultValue="Extra small" style={{ width: "16rem" }} />
          <Editable size="sm" defaultValue="Small" style={{ width: "16rem" }} />
          <Editable size="md" defaultValue="Medium" style={{ width: "16rem" }} />
          <Editable size="lg" defaultValue="Large" style={{ width: "16rem" }} />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Full example</p>
        <Editable
          label="Project name"
          defaultValue="Untitled project"
          placeholder="Enter a name..."
          style={{ width: "18rem" }}
        />
      </div>
    </div>
  ),
  combobox: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Variants</p>
        <div className="preview-row" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Combobox
            variant="outline"
            label="Framework"
            placeholder="Search framework..."
            items={frameworkItems}
            style={{ width: "20rem" }}
          />
          <Combobox
            variant="surface"
            label="Framework"
            placeholder="Search framework..."
            items={frameworkItems}
            style={{ width: "20rem" }}
          />
          <Combobox
            variant="subtle"
            label="Framework"
            placeholder="Search framework..."
            items={frameworkItems}
            style={{ width: "20rem" }}
          />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sizes</p>
        <div className="preview-row" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Combobox size="xs" placeholder="Xs" items={frameworkItems} style={{ width: "20rem" }} />
          <Combobox size="sm" placeholder="Sm" items={frameworkItems} style={{ width: "20rem" }} />
          <Combobox size="md" placeholder="Md" items={frameworkItems} style={{ width: "20rem" }} />
          <Combobox size="lg" placeholder="Lg" items={frameworkItems} style={{ width: "20rem" }} />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Full example</p>
        <div style={{ width: "20rem" }}>
          <Combobox
            label="Framework"
            groupLabel="Frameworks"
            placeholder="Search framework..."
            items={frameworkItems}
          />
        </div>
      </div>
    </div>
  ),
  "tags-input": (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Variants</p>
        <div className="preview-row" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <TagsInput
            variant="outline"
            defaultValue={["React", "Solid", "Vue"]}
            style={{ width: "20rem" }}
          />
          <TagsInput
            variant="surface"
            defaultValue={["React", "Solid", "Vue"]}
            style={{ width: "20rem" }}
          />
          <TagsInput
            variant="subtle"
            defaultValue={["React", "Solid", "Vue"]}
            style={{ width: "20rem" }}
          />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sizes</p>
        <div className="preview-row" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <TagsInput size="xs" defaultValue={["Xs"]} style={{ width: "20rem" }} />
          <TagsInput size="sm" defaultValue={["Sm"]} style={{ width: "20rem" }} />
          <TagsInput size="md" defaultValue={["Md"]} style={{ width: "20rem" }} />
          <TagsInput size="lg" defaultValue={["Lg"]} style={{ width: "20rem" }} />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>States</p>
        <div className="preview-row" style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <TagsInput
            defaultValue={["Read only"]}
            readOnly
            style={{ width: "20rem" }}
          />
          <TagsInput
            defaultValue={["Disabled"]}
            disabled
            style={{ width: "20rem" }}
          />
          <TagsInput
            defaultValue={["Invalid"]}
            invalid
            style={{ width: "20rem" }}
          />
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Full example</p>
        <div style={{ width: "20rem" }}>
          <TagsInput
            label="Tags"
            defaultValue={["React", "Solid", "Vue"]}
            max={6}
          />
          <p className="muted" style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>
            Press Enter to add a tag, double-click one to edit it.
          </p>
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
      <Switch defaultChecked>Notifications</Switch>
    </div>
  ),
  checkbox: (
    <div className="preview-row" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.75rem" }}>
      <Checkbox defaultChecked>Email notifications</Checkbox>
      <Checkbox>Weekly newsletter</Checkbox>
      <Checkbox defaultChecked="indeterminate">Select all (partial)</Checkbox>
      <Checkbox disabled>Disabled option</Checkbox>
    </div>
  ),
  "radio-group": (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <RadioGroupItem value="default">Default</RadioGroupItem>
      <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
      <RadioGroupItem value="compact">Compact</RadioGroupItem>
      <RadioGroupItem value="disabled" disabled>Disabled</RadioGroupItem>
    </RadioGroup>
  ),
  toggle: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Variants</p>
        <div className="preview-row">
          <Toggle variant="outline" aria-label="Bold">
            <Bold />
          </Toggle>
          <Toggle variant="outline" defaultPressed aria-label="Italic">
            <Italic />
          </Toggle>
          <Toggle variant="subtle" aria-label="Underline">
            <Underline />
          </Toggle>
          <Toggle variant="subtle" defaultPressed aria-label="Underline (on)">
            <Underline />
          </Toggle>
          <Toggle variant="outline" disabled aria-label="Disabled">
            <Bold />
          </Toggle>
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sizes</p>
        <div className="preview-row" style={{ alignItems: "center" }}>
          <Toggle size="sm" defaultPressed aria-label="Bold small">
            <Bold />
          </Toggle>
          <Toggle size="md" defaultPressed aria-label="Bold medium">
            <Bold />
          </Toggle>
          <Toggle size="lg" defaultPressed aria-label="Bold large">
            <Bold />
          </Toggle>
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>With text</p>
        <div className="preview-row">
          <Toggle defaultPressed>
            <Bold /> Bold
          </Toggle>
        </div>
      </div>
    </div>
  ),
  "toggle-group": (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Single selection</p>
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
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Multiple selection</p>
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
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Vertical</p>
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
      </div>
    </div>
  ),
  tabs: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Line</p>
        <Tabs defaultValue="account" variant="line">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="team" disabled>Team</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent value="account">Manage your account settings here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="team">Invite and manage your team members.</TabsContent>
        </Tabs>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Subtle</p>
        <Tabs defaultValue="overview" variant="subtle">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent value="overview">A quick summary of your workspace.</TabsContent>
          <TabsContent value="analytics">Traffic, conversions and trends.</TabsContent>
          <TabsContent value="reports">Download and schedule reports.</TabsContent>
        </Tabs>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Enclosed, fitted</p>
        <div style={{ width: "22rem" }}>
          <Tabs defaultValue="day" variant="enclosed" fitted>
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
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sizes</p>
        <div className="preview-row" style={{ flexDirection: "column", alignItems: "flex-start" }}>
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
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Vertical, line</p>
        <Tabs defaultValue="general" orientation="vertical" variant="line" style={{ height: "10rem" }}>
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent value="general">General settings for your account.</TabsContent>
          <TabsContent value="security">Two-factor auth and sessions.</TabsContent>
          <TabsContent value="billing">Plan, invoices and payment method.</TabsContent>
        </Tabs>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Vertical, enclosed</p>
        <Tabs defaultValue="general" orientation="vertical" variant="enclosed" style={{ height: "10rem" }}>
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent value="general">General settings for your account.</TabsContent>
          <TabsContent value="security">Two-factor auth and sessions.</TabsContent>
          <TabsContent value="billing">Plan, invoices and payment method.</TabsContent>
        </Tabs>
      </div>
    </div>
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
  card: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Variants</p>
        <div className="preview-row" style={{ alignItems: "flex-start" }}>
          <Card style={{ width: "16rem" }}>
            <CardHeader>
              <CardTitle>Outline</CardTitle>
              <CardDescription>Just a border, no background.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="muted">The default variant.</p>
            </CardContent>
          </Card>
          <Card variant="elevated" style={{ width: "16rem" }}>
            <CardHeader>
              <CardTitle>Elevated</CardTitle>
              <CardDescription>No border, drop shadow instead.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="muted">Stands out from the page.</p>
            </CardContent>
          </Card>
          <Card variant="subtle" style={{ width: "16rem" }}>
            <CardHeader>
              <CardTitle>Subtle</CardTitle>
              <CardDescription>Muted background, no border.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="muted">For less prominent surfaces.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sizes</p>
        <div className="preview-row" style={{ alignItems: "flex-start" }}>
          <Card size="sm" style={{ width: "14rem" }}>
            <CardHeader>
              <CardTitle>Sm</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="muted">Compact spacing.</p>
            </CardContent>
          </Card>
          <Card size="md" style={{ width: "14rem" }}>
            <CardHeader>
              <CardTitle>Md</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="muted">Default spacing.</p>
            </CardContent>
          </Card>
          <Card size="lg" style={{ width: "14rem" }}>
            <CardHeader>
              <CardTitle>Lg</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="muted">Roomy spacing.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Full example</p>
        <Card style={{ width: "22rem" }}>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Choose how you want to be notified.</CardDescription>
            <CardAction>
              <Badge variant="subtle">New</Badge>
            </CardAction>
          </CardHeader>
          <CardContent style={{ gap: "0.75rem" }}>
            <div className="preview-row" style={{ justifyContent: "space-between" }}>
              <Label htmlFor="card-preview-switch">Email notifications</Label>
              <Switch id="card-preview-switch" defaultChecked />
            </div>
            <Separator />
            <div className="preview-row" style={{ justifyContent: "space-between" }}>
              <Label htmlFor="card-preview-checkbox">Weekly newsletter</Label>
              <Checkbox id="card-preview-checkbox" />
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <Button variant="plain" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Product card</p>
        <Card style={{ width: "20rem" }}>
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60"
            alt="Lines of code on a dark screen"
            style={{ width: "100%", height: "10rem", objectFit: "cover" }}
          />
          <CardHeader>
            <CardTitle>New in v0.2</CardTitle>
            <CardDescription>
              Card and Card Link join the library, plus refreshed inputs,
              switches and checkboxes.
            </CardDescription>
          </CardHeader>
          <CardContent />
          <CardFooter>
            <Button variant="outline">Changelog</Button>
            <Button>Install now</Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>
          Horizontal orientation
        </p>
        <Card orientation="horizontal" style={{ width: "38rem" }}>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60"
            alt="Laptop showing lines of code"
            style={{ width: "12rem", height: "auto", objectFit: "cover" }}
          />
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <CardHeader>
              <CardTitle>Built for React + Tailwind</CardTitle>
              <CardDescription>
                Copy-paste components you fully own, styled with Tailwind and
                Ark UI underneath. No hidden abstractions to fight later.
              </CardDescription>
            </CardHeader>
            <CardContent style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
              <Badge variant="subtle">Tailwind</Badge>
              <Badge variant="subtle">Ark UI</Badge>
            </CardContent>
            <CardFooter>
              <Button size="sm">Get started</Button>
            </CardFooter>
          </div>
        </Card>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Sign-up form</p>
        <Card style={{ width: "22rem" }}>
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>
              Create an account to start using deste04-ui.
            </CardDescription>
          </CardHeader>
          <CardContent style={{ gap: "1rem" }}>
            <div className="preview-row" style={{ gap: "0.5rem" }}>
              <Button variant="outline" style={{ flex: 1 }}>
                <KeyRound /> GitLab
              </Button>
              <Button variant="outline" style={{ flex: 1 }}>
                <KeyRound /> GitHub
              </Button>
            </div>
            <div className="preview-row" style={{ alignItems: "center", gap: "0.75rem" }}>
              <Separator style={{ flex: 1 }} />
              <span className="muted" style={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}>
                or sign up with
              </span>
              <Separator style={{ flex: 1 }} />
            </div>
            <Field>
              <FieldLabel htmlFor="card-preview-email">Email</FieldLabel>
              <Input id="card-preview-email" type="email" placeholder="you@example.com" />
            </Field>
            <Field>
              <FieldLabel htmlFor="card-preview-password">Password</FieldLabel>
              <Input id="card-preview-password" type="password" placeholder="••••••••" />
            </Field>
          </CardContent>
          <CardFooter>
            <Button style={{ width: "100%" }}>Create account</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
  toast: (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <Toaster />
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Types</p>
        <div className="preview-row">
          <Button
            variant="outline"
            onClick={() =>
              toast.info({ title: "Heads up", description: "This is an info toast." })
            }
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.success({ title: "Saved", description: "Your changes were saved." })
            }
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
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>With action</p>
        <div className="preview-row">
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
        </div>
      </div>
      <div>
        <p className="muted" style={{ marginBottom: "0.5rem" }}>Promise</p>
        <div className="preview-row">
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: { title: "Loading...", description: "Fetching your data." },
                  success: { title: "Done", description: "Data loaded successfully." },
                  error: { title: "Error", description: "Could not load data." },
                }
              )
            }
          >
            Run async task
          </Button>
        </div>
      </div>
    </div>
  ),
  "card-link": (
    <div className="preview-row">
      <CardLink
        href="/components"
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
    </div>
  ),
};

/**
 * Sorgente reale mostrato nella pagina, importato con `?raw` così è
 * sempre allineato al file effettivamente installato dal CLI.
 */
const sources: Record<string, string> = {
  button: buttonSource,
  swap: swapSource,
  "copy-button": copyButtonSource,
  spinner: spinnerSource,
  link: linkSource,
  input: inputSource,
  label: labelSource,
  separator: separatorSource,
  field: fieldSource,
  fieldset: fieldsetSource,
  textarea: textareaSource,
  "tags-input": tagsInputSource,
  combobox: comboboxSource,
  editable: editableSource,
  switch: switchSource,
  checkbox: checkboxSource,
  "radio-group": radioGroupSource,
  toggle: toggleSource,
  "toggle-group": toggleGroupSource,
  tabs: tabsSource,
  badge: badgeSource,
  card: cardSource,
  toast: toastSource,
  "card-link": cardLinkSource,
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
