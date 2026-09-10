import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, CornerDownLeft } from "lucide-react";
import { Button } from "deste04-ui/components/ui/button";
import { CommandDialog, type CommandItemData } from "deste04-ui/components/ui/command";
import { Kbd } from "deste04-ui/components/ui/kbd";
import { getSearchItems } from "../../data/nav";

export function SearchTrigger({ onOpen }: Readonly<{ onOpen: () => void }>) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onOpen}
      className="w-full max-w-56 justify-start gap-2 bg-muted/60 px-3 font-normal text-muted-foreground hover:border-primary/40 hover:text-foreground"
    >
      <Search className="size-4" />
      <span className="flex-1 text-start">Search components</span>
      <Kbd size="sm">&#8984;K</Kbd>
    </Button>
  );
}

/** Command palette (⌘K): built on the library's own Command/CommandDialog. */
export function SearchPalette({ open, onClose }: Readonly<{ open: boolean; onClose: () => void }>) {
  const navigate = useNavigate();

  const items = useMemo<CommandItemData[]>(
    () =>
      getSearchItems().map((item) => ({
        value: item.path,
        label: item.title,
        group: item.group,
      })),
    []
  );

  return (
    <CommandDialog
      open={open}
      onOpenChange={(details) => !details.open && onClose()}
      label="Search components and guides"
      items={items}
      placeholder="Search components and guides..."
      onSelect={(item) => {
        navigate(item.value);
        onClose();
      }}
      footer={
        <>
          <Kbd size="sm">
            <CornerDownLeft className="size-3" />
          </Kbd>
          to select
          <Kbd size="sm">Esc</Kbd>
          to close
        </>
      }
    />
  );
}
