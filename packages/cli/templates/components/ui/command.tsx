import * as React from "react";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Search } from "lucide-react";

import { cn } from "../../lib/utils";
import { Dialog, DialogContent } from "./dialog";
import { Kbd } from "./kbd";

export interface CommandItemData {
  /** Unique id, passed back to `onSelect` and used as the React key. */
  value: string;
  label: string;
  description?: string;
  /** Heading items with the same group are collected under, in order of first appearance. */
  group?: string;
  icon?: React.ReactNode;
  /** Rendered as a small kbd at the end of the row, e.g. "⌘K". */
  shortcut?: string;
  /** Extra terms matched by the default filter but not shown. */
  keywords?: string[];
  disabled?: boolean;
}

/** Case-insensitive substring match against label, group and keywords. */
function commandFilter(item: CommandItemData, search: string) {
  const query = search.trim().toLowerCase();
  if (!query) return true;
  return [item.label, item.group, ...(item.keywords ?? [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .includes(query);
}

export interface CommandProps extends Omit<React.ComponentProps<"div">, "onSelect"> {
  items: CommandItemData[];
  onSelect: (item: CommandItemData) => void;
  /** Search text, for controlling it from outside (e.g. to reset it on close). */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  emptyText?: React.ReactNode;
  filter?: (item: CommandItemData, search: string) => boolean;
  autoFocus?: boolean;
}

/**
 * Filterable list with keyboard navigation (Up/Down/Enter), grouping and a
 * search box, built for command palettes and quick-open menus. Just a list
 * on its own: pair it with Dialog for a ⌘K palette, see CommandDialog.
 */
function Command({
  items,
  onSelect,
  value,
  defaultValue = "",
  onValueChange,
  placeholder = "Search...",
  emptyText = "No results found",
  filter = commandFilter,
  autoFocus = true,
  className,
  ...props
}: Readonly<CommandProps>) {
  const listId = React.useId();
  const [uncontrolledSearch, setUncontrolledSearch] = React.useState(defaultValue);
  const search = value ?? uncontrolledSearch;
  const [activeValue, setActiveValue] = React.useState<string>();

  const visible = React.useMemo(
    () => items.filter((item) => filter(item, search)),
    [items, search, filter]
  );
  const navigable = React.useMemo(() => visible.filter((item) => !item.disabled), [visible]);
  const groups = React.useMemo(() => {
    const order: (string | undefined)[] = [];
    const byGroup = new Map<string | undefined, CommandItemData[]>();
    for (const item of visible) {
      if (!byGroup.has(item.group)) {
        order.push(item.group);
        byGroup.set(item.group, []);
      }
      byGroup.get(item.group)!.push(item);
    }
    return order.map((group) => [group, byGroup.get(group)!] as const);
  }, [visible]);

  const activeItem = navigable.find((item) => item.value === activeValue) ?? navigable[0];

  // A stale highlight from the previous filter should never linger: drop
  // back to the first result every time the query changes.
  React.useEffect(() => {
    setActiveValue(undefined);
  }, [search]);

  function handleSearchChange(next: string) {
    setUncontrolledSearch(next);
    onValueChange?.(next);
  }

  function moveActive(delta: 1 | -1) {
    if (navigable.length === 0) return;
    const index = activeItem ? navigable.indexOf(activeItem) : -1;
    const next = (index + delta + navigable.length) % navigable.length;
    setActiveValue(navigable[next].value);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveActive(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      moveActive(-1);
    } else if (event.key === "Enter" && activeItem) {
      event.preventDefault();
      onSelect(activeItem);
    }
  }

  return (
    <div data-slot="command" className={cn("flex flex-col", className)} {...props}>
      <div data-slot="command-input-wrapper" className="flex items-center gap-2 border-b border-border px-4">
        <Search className="size-4 shrink-0 text-muted-foreground" />
        <input
          data-slot="command-input"
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-activedescendant={activeItem ? `${listId}-${activeItem.value}` : undefined}
          value={search}
          onChange={(event) => handleSearchChange(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="h-11 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>

      <div data-slot="command-list" id={listId} role="listbox" className="max-h-80 overflow-y-auto p-2">
        {visible.length === 0 ? (
          <p data-slot="command-empty" className="px-3 py-6 text-center text-sm text-muted-foreground">
            {emptyText}
          </p>
        ) : (
          groups.map(([group, groupItems]) => (
            <div key={group ?? "__ungrouped"} data-slot="command-group" role="group" aria-label={group}>
              {group && (
                <p data-slot="command-group-heading" className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  {group}
                </p>
              )}
              {groupItems.map((item) => (
                <button
                  key={item.value}
                  id={`${listId}-${item.value}`}
                  type="button"
                  role="option"
                  aria-selected={item.value === activeItem?.value}
                  disabled={item.disabled}
                  onClick={() => onSelect(item)}
                  onMouseMove={() => !item.disabled && setActiveValue(item.value)}
                  data-slot="command-item"
                  data-selected={item.value === activeItem?.value ? "" : undefined}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start text-sm text-foreground/90 outline-none transition-colors data-selected:bg-accent/10 data-selected:text-accent data-selected:supports-[not(color:color-mix(in_oklab,red,red))]:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                >
                  {item.icon && <span className="shrink-0 text-muted-foreground [&_svg]:size-4">{item.icon}</span>}
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.description && (
                    <span className="hidden truncate text-xs text-muted-foreground sm:inline">
                      {item.description}
                    </span>
                  )}
                  {item.shortcut && <Kbd size="sm">{item.shortcut}</Kbd>}
                </button>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export interface CommandDialogProps
  extends Omit<CommandProps, "value" | "defaultValue" | "onValueChange">,
    Pick<ArkDialog.RootProps, "open" | "onOpenChange"> {
  /** Accessible label for the dialog, since it has no visible title. */
  label?: string;
  /** Optional hint bar rendered under the list, e.g. "↵ to select, Esc to close". */
  footer?: React.ReactNode;
}

/** Command wrapped in the library's own Dialog: the ⌘K palette pattern. */
function CommandDialog({
  open,
  onOpenChange,
  label = "Command menu",
  footer,
  className,
  ...props
}: Readonly<CommandDialogProps>) {
  const [search, setSearch] = React.useState("");

  // Reset the query on every open, so re-opening never shows a stale search.
  React.useEffect(() => {
    if (open) setSearch("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent size="lg" hideCloseTrigger aria-label={label} className="gap-0 overflow-hidden p-0">
        <Command value={search} onValueChange={setSearch} className={className} {...props} />
        {footer && (
          <div className="flex items-center gap-1.5 border-t border-border px-4 py-2 text-xs text-muted-foreground">
            {footer}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export { Command, CommandDialog, commandFilter };
