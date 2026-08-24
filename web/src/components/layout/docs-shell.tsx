import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "deste04-ui/components/ui/button";
import { Separator } from "deste04-ui/components/ui/separator";
import { SiteHeader } from "./site-header";
import { Sidebar } from "./sidebar";

export function DocsShell({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader onMenuClick={() => setMobileNavOpen(true)} />

      <div className="mx-auto flex w-full max-w-[100rem] flex-1 items-start gap-6 px-4 py-8 sm:px-6">
        <Sidebar className="sticky top-20 hidden h-[calc(100vh-6rem)] w-64 shrink-0 md:flex" />

        <Separator
          orientation="vertical"
          className="sticky top-20 hidden data-[orientation=vertical]:h-[calc(100vh-6rem)] md:block"
        />

        {mobileNavOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <button
              type="button"
              aria-label="Close navigation"
              className="fixed inset-0 bg-background/70 backdrop-blur-sm"
              onClick={() => setMobileNavOpen(false)}
            />
            <div className="relative flex h-full w-72 flex-col gap-4 border-e border-border bg-background p-4">
              <Button
                variant="plain"
                size="icon-sm"
                className="ms-auto"
                aria-label="Close navigation"
                onClick={() => setMobileNavOpen(false)}
              >
                <X />
              </Button>
              <Sidebar className="flex-1" />
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
