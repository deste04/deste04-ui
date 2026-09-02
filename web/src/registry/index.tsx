import buttonSource from "deste04-ui/components/ui/button.tsx?raw";
import copyButtonSource from "deste04-ui/components/ui/copy-button.tsx?raw";
import linkSource from "deste04-ui/components/ui/link.tsx?raw";
import cardLinkSource from "deste04-ui/components/ui/card-link.tsx?raw";
import toggleSource from "deste04-ui/components/ui/toggle.tsx?raw";
import toggleGroupSource from "deste04-ui/components/ui/toggle-group.tsx?raw";
import inputSource from "deste04-ui/components/ui/input.tsx?raw";
import textareaSource from "deste04-ui/components/ui/textarea.tsx?raw";
import labelSource from "deste04-ui/components/ui/label.tsx?raw";
import fieldSource from "deste04-ui/components/ui/field.tsx?raw";
import fieldsetSource from "deste04-ui/components/ui/fieldset.tsx?raw";
import comboboxSource from "deste04-ui/components/ui/combobox.tsx?raw";
import tagsInputSource from "deste04-ui/components/ui/tags-input.tsx?raw";
import editableSource from "deste04-ui/components/ui/editable.tsx?raw";
import switchSource from "deste04-ui/components/ui/switch.tsx?raw";
import checkboxSource from "deste04-ui/components/ui/checkbox.tsx?raw";
import radioGroupSource from "deste04-ui/components/ui/radio-group.tsx?raw";
import separatorSource from "deste04-ui/components/ui/separator.tsx?raw";
import tabsSource from "deste04-ui/components/ui/tabs.tsx?raw";
import badgeSource from "deste04-ui/components/ui/badge.tsx?raw";
import cardSource from "deste04-ui/components/ui/card.tsx?raw";
import toastSource from "deste04-ui/components/ui/toast.tsx?raw";
import spinnerSource from "deste04-ui/components/ui/spinner.tsx?raw";
import fileUploadSource from "deste04-ui/components/ui/file-upload.tsx?raw";
import dialogSource from "deste04-ui/components/ui/dialog.tsx?raw";
import drawerSource from "deste04-ui/components/ui/drawer.tsx?raw";
import swapSource from "deste04-ui/components/ui/swap.tsx?raw";
import themeProviderSource from "deste04-ui/components/theme/theme-provider.tsx?raw";
import themeToggleSource from "deste04-ui/components/theme/theme-toggle.tsx?raw";

import { demos } from "./demos";

/**
 * Real source shown on each component page, imported with `?raw` so it
 * always matches the file the CLI actually installs.
 */
const sources: Record<string, string> = {
  button: buttonSource,
  "copy-button": copyButtonSource,
  link: linkSource,
  "card-link": cardLinkSource,
  toggle: toggleSource,
  "toggle-group": toggleGroupSource,
  input: inputSource,
  textarea: textareaSource,
  label: labelSource,
  field: fieldSource,
  fieldset: fieldsetSource,
  combobox: comboboxSource,
  "tags-input": tagsInputSource,
  editable: editableSource,
  switch: switchSource,
  checkbox: checkboxSource,
  "radio-group": radioGroupSource,
  separator: separatorSource,
  tabs: tabsSource,
  badge: badgeSource,
  card: cardSource,
  toast: toastSource,
  spinner: spinnerSource,
  "file-upload": fileUploadSource,
  dialog: dialogSource,
  drawer: drawerSource,
  swap: swapSource,
  "theme-provider": themeProviderSource,
  "theme-toggle": themeToggleSource,
};

export function getRegistryEntry(slug: string) {
  const examples = demos[slug];
  const source = sources[slug];
  if (!examples || !source) return null;
  return { examples, source };
}
