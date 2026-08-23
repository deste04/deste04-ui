export interface ComponentMeta {
  slug: string;
  name: string;
  description: string;
  install: string;
}

/**
 * List of components shown on the site.
 * To add a new one: add its metadata here, then add the preview and
 * source in ComponentPage.tsx (see the comments there).
 */
export const components: ComponentMeta[] = [
  {
    slug: "button",
    name: "Button",
    description:
      "Button with variants (default, outline, ghost, destructive) and sizes (sm, default, lg, icon).",
    install: "npx deste04-ui add button",
  },
  {
    slug: "swap",
    name: "Swap",
    description:
      "Animates the transition between two elements stacked in the same cell (built on Ark UI): set `swap` to toggle between the `on` and `off` indicator. Variants (fade, scale, rotate).",
    install: "npx deste04-ui add swap",
  },
  {
    slug: "copy-button",
    name: "Copy Button",
    description:
      "Button that copies a value to the clipboard and shows a temporary confirmation (checkmark icon with a fade swap, and optionally text) before returning to normal.",
    install: "npx deste04-ui add copy-button",
  },
  {
    slug: "input",
    name: "Input",
    description:
      "Input field with variants (outline, surface, subtle, flushed) and sizes (2xs, xs, sm, md, lg, xl, 2xl).",
    install: "npx deste04-ui add input",
  },
  {
    slug: "label",
    name: "Label",
    description: "Label for form fields, with coordinated disabled styling.",
    install: "npx deste04-ui add label",
  },
  {
    slug: "separator",
    name: "Separator",
    description: "Horizontal or vertical dividing line.",
    install: "npx deste04-ui add separator",
  },
  {
    slug: "field",
    name: "Field",
    description:
      "Primitives for building forms (Field, FieldSet, FieldGroup, FieldLabel, FieldDescription, FieldError, ...) with vertical/horizontal/responsive orientation.",
    install: "npx deste04-ui add field",
  },
  {
    slug: "fieldset",
    name: "Fieldset",
    description:
      "Responsive two-column form section (Fieldset, FieldsetControl, FieldsetContent, FieldsetLegend, FieldsetHelperText, FieldsetErrorText): label and helper text on one side, fields on the other, stacked on mobile.",
    install: "npx deste04-ui add fieldset",
  },
  {
    slug: "textarea",
    name: "Textarea",
    description:
      "Multi-line textarea with variants (outline, surface, subtle, flushed) and sizes (xs, sm, md, lg, xl).",
    install: "npx deste04-ui add textarea",
  },
  {
    slug: "editable",
    name: "Editable",
    description:
      "Inline-editable text (built on Ark UI): click the preview to start editing, pencil/check/X to edit/save/cancel. Sizes (2xs, xs, sm, md, lg).",
    install: "npx deste04-ui add editable",
  },
  {
    slug: "combobox",
    name: "Combobox",
    description:
      "Searchable dropdown (Combobox, built on Ark UI's useListCollection) that reuses Input's own variants/sizes for the text field. Arrow keys to navigate, Enter to select, X to clear.",
    install: "npx deste04-ui add combobox",
  },
  {
    slug: "tags-input",
    name: "Tags Input",
    description:
      "Type and press Enter to add a tag, click the X to remove one, double-click a tag to edit it. Variants (outline, surface, subtle) and sizes (xs, sm, md, lg).",
    install: "npx deste04-ui add tags-input",
  },
  {
    slug: "switch",
    name: "Switch",
    description: "On/off toggle with two sizes (sm, default).",
    install: "npx deste04-ui add switch",
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "Single checkbox with checked/unchecked state.",
    install: "npx deste04-ui add checkbox",
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    description: "Group of radio buttons (RadioGroup + RadioGroupItem).",
    install: "npx deste04-ui add radio-group",
  },
  {
    slug: "toggle",
    name: "Toggle",
    description:
      "Two-state pressable button (built on Ark UI). Variants (outline, subtle) and sizes (sm, md, lg).",
    install: "npx deste04-ui add toggle",
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    description:
      "Group of Toggle buttons (ToggleGroup + ToggleGroupItem) reusing Toggle's variants/sizes, built on Ark UI. Single or multiple selection, horizontal or vertical.",
    install: "npx deste04-ui add toggle-group",
  },
  {
    slug: "tabs",
    name: "Tabs",
    description:
      "Tabs (Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator), built on Ark UI. Variants (line, subtle, enclosed), sizes (xs, sm, md, lg), fitted and horizontal/vertical orientation. The indicator animates to the selected tab automatically.",
    install: "npx deste04-ui add tabs",
  },
  {
    slug: "badge",
    name: "Badge",
    description:
      "Badge/label with variants (solid, surface, subtle, outline) and sizes (sm, md, lg, xl, 2xl).",
    install: "npx deste04-ui add badge",
  },
  {
    slug: "card",
    name: "Card",
    description:
      "Container for grouping content (Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter) with variants (outline, elevated, subtle), sizes (sm, md, lg) and an orientation (vertical, horizontal) to place an image alongside the content.",
    install: "npx deste04-ui add card",
  },
  {
    slug: "toast",
    name: "Toast",
    description:
      "Toast notifications (Toaster + toast, built on Ark UI): call toast.success, toast.error, toast.info, toast.warning or toast.loading to create one, mount <Toaster /> once. Icon and color per type, optional action, auto-dismiss or manual close.",
    install: "npx deste04-ui add toast",
  },
  {
    slug: "card-link",
    name: "Card Link",
    description:
      "Clickable card (anchor) with a hover micro-interaction: the icon, title and description fade out and a call-to-action appears centered.",
    install: "npx deste04-ui add card-link",
  },
  {
    slug: "link",
    name: "Link",
    description:
      "Styled anchor (not a button) with underline/no-underline variants and an optional \"open external\" icon.",
    install: "npx deste04-ui add link",
  },
  {
    slug: "spinner",
    name: "Spinner",
    description:
      "Animated loading icon with size variants (xs, sm, default, lg, xl). Used by Button for the loading state.",
    install: "npx deste04-ui add spinner",
  },
];
