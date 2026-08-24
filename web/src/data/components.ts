export type ComponentCategory =
  | "Actions"
  | "Forms"
  | "Display"
  | "Feedback"
  | "Media"
  | "Utilities";

export interface ComponentMeta {
  slug: string;
  name: string;
  category: ComponentCategory;
  description: string;
  install: string;
}

/**
 * List of components shown on the site. To add a new one, add its
 * metadata here, then add its demo and source in src/registry.
 */
export const components: ComponentMeta[] = [
  {
    slug: "button",
    name: "Button",
    category: "Actions",
    description:
      "Button with variants (solid, surface, subtle, outline, plain, destructive) and sizes from 2xs to 2xl, including icon only sizes.",
    install: "npx deste04-ui add button",
  },
  {
    slug: "copy-button",
    name: "Copy Button",
    category: "Actions",
    description:
      "Button that copies a value to the clipboard and shows a temporary confirmation (checkmark icon with a fade swap, and optionally text) before returning to normal.",
    install: "npx deste04-ui add copy-button",
  },
  {
    slug: "link",
    name: "Link",
    category: "Actions",
    description:
      "Styled anchor, not a button, with underline and no underline variants and an optional open external icon.",
    install: "npx deste04-ui add link",
  },
  {
    slug: "card-link",
    name: "Card Link",
    category: "Actions",
    description:
      "Clickable card (anchor) with a hover micro interaction. The icon, title and description fade out and a call to action appears centered.",
    install: "npx deste04-ui add card-link",
  },
  {
    slug: "toggle",
    name: "Toggle",
    category: "Actions",
    description:
      "Two state pressable button built on Ark UI, with outline and subtle variants and sizes sm, md and lg.",
    install: "npx deste04-ui add toggle",
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    category: "Actions",
    description:
      "Group of Toggle buttons (ToggleGroup and ToggleGroupItem) reusing Toggle's variants and sizes, built on Ark UI. Single or multiple selection, horizontal or vertical.",
    install: "npx deste04-ui add toggle-group",
  },
  {
    slug: "input",
    name: "Input",
    category: "Forms",
    description:
      "Input field with variants (outline, surface, subtle, flushed) and sizes from 2xs to 2xl.",
    install: "npx deste04-ui add input",
  },
  {
    slug: "textarea",
    name: "Textarea",
    category: "Forms",
    description:
      "Multi line textarea with variants (outline, surface, subtle, flushed) and sizes from xs to xl.",
    install: "npx deste04-ui add textarea",
  },
  {
    slug: "label",
    name: "Label",
    category: "Forms",
    description: "Label for form fields, with coordinated disabled styling.",
    install: "npx deste04-ui add label",
  },
  {
    slug: "field",
    name: "Field",
    category: "Forms",
    description:
      "Primitives for building forms (Field, FieldSet, FieldGroup, FieldLabel, FieldDescription, FieldError) with vertical, horizontal and responsive orientation.",
    install: "npx deste04-ui add field",
  },
  {
    slug: "fieldset",
    name: "Fieldset",
    category: "Forms",
    description:
      "Responsive two column form section (Fieldset, FieldsetControl, FieldsetContent, FieldsetLegend, FieldsetHelperText, FieldsetErrorText). Label and helper text on one side, fields on the other, stacked on mobile.",
    install: "npx deste04-ui add fieldset",
  },
  {
    slug: "combobox",
    name: "Combobox",
    category: "Forms",
    description:
      "Searchable dropdown built on Ark UI's useListCollection that reuses Input's own variants and sizes for the text field. Arrow keys to navigate, Enter to select, X to clear.",
    install: "npx deste04-ui add combobox",
  },
  {
    slug: "tags-input",
    name: "Tags Input",
    category: "Forms",
    description:
      "Type and press Enter to add a tag, click the X to remove one, double click a tag to edit it. Variants (outline, surface, subtle) and sizes from xs to lg.",
    install: "npx deste04-ui add tags-input",
  },
  {
    slug: "editable",
    name: "Editable",
    category: "Forms",
    description:
      "Inline editable text built on Ark UI. Click the preview to start editing, pencil, check and X icons to edit, save and cancel. Sizes from 2xs to lg.",
    install: "npx deste04-ui add editable",
  },
  {
    slug: "switch",
    name: "Switch",
    category: "Forms",
    description: "On and off toggle with two sizes, sm and default.",
    install: "npx deste04-ui add switch",
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    category: "Forms",
    description: "Single checkbox with checked, unchecked and indeterminate state.",
    install: "npx deste04-ui add checkbox",
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    category: "Forms",
    description: "Group of radio buttons, RadioGroup and RadioGroupItem.",
    install: "npx deste04-ui add radio-group",
  },
  {
    slug: "separator",
    name: "Separator",
    category: "Display",
    description: "Horizontal or vertical dividing line.",
    install: "npx deste04-ui add separator",
  },
  {
    slug: "tabs",
    name: "Tabs",
    category: "Display",
    description:
      "Tabs (Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator) built on Ark UI. Variants (line, subtle, enclosed), sizes from xs to lg, fitted and horizontal or vertical orientation. The indicator animates to the selected tab automatically.",
    install: "npx deste04-ui add tabs",
  },
  {
    slug: "badge",
    name: "Badge",
    category: "Display",
    description:
      "Badge or label with variants (solid, surface, subtle, outline) and sizes from sm to 2xl.",
    install: "npx deste04-ui add badge",
  },
  {
    slug: "card",
    name: "Card",
    category: "Display",
    description:
      "Container for grouping content (Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter) with variants (outline, elevated, subtle), sizes (sm, md, lg) and an orientation to place an image alongside the content.",
    install: "npx deste04-ui add card",
  },
  {
    slug: "toast",
    name: "Toast",
    category: "Feedback",
    description:
      "Toast notifications built on Ark UI. Call toast.success, toast.error, toast.info, toast.warning or toast.loading to create one, mount Toaster once. Icon and color per type, optional action, auto dismiss or manual close.",
    install: "npx deste04-ui add toast",
  },
  {
    slug: "spinner",
    name: "Spinner",
    category: "Feedback",
    description:
      "Animated loading icon with size variants from xs to xl. Used by Button for the loading state.",
    install: "npx deste04-ui add spinner",
  },
  {
    slug: "file-upload",
    name: "File Upload",
    category: "Media",
    description:
      "File upload with a drag and drop dropzone, a list of uploaded files with preview, name and size, single or clear all delete, built on Ark UI. Sizes sm, md and lg.",
    install: "npx deste04-ui add file-upload",
  },
  {
    slug: "swap",
    name: "Swap",
    category: "Utilities",
    description:
      "Animates the transition between two elements stacked in the same cell, built on Ark UI. Set swap to toggle between the on and off indicator. Variants fade, scale and rotate.",
    install: "npx deste04-ui add swap",
  },
  {
    slug: "theme-provider",
    name: "Theme Provider",
    category: "Utilities",
    description:
      "Thin wrapper around next-themes' ThemeProvider that handles light, dark and system theme via the .dark class on the html element. Mount it once at the app entrypoint, wrapping the whole app.",
    install: "npx deste04-ui add theme-provider",
  },
  {
    slug: "theme-toggle",
    name: "Theme Toggle",
    category: "Utilities",
    description:
      "Icon button that cycles through light, dark and system, with a sun, moon and monitor icon animated by Swap, built on next-themes. Requires ThemeProvider mounted higher up the tree.",
    install: "npx deste04-ui add theme-toggle",
  },
];

export function getComponent(slug: string): ComponentMeta | undefined {
  return components.find((c) => c.slug === slug);
}

export const categoryOrder: ComponentCategory[] = [
  "Actions",
  "Forms",
  "Display",
  "Feedback",
  "Media",
  "Utilities",
];

export function componentsByCategory(): Array<{
  category: ComponentCategory;
  items: ComponentMeta[];
}> {
  return categoryOrder.map((category) => ({
    category,
    items: components
      .filter((c) => c.category === category)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));
}
