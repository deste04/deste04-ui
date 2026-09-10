import { NavLink } from "react-router-dom";
import { cn } from "deste04-ui/lib/utils";
import { getNavSections } from "../../data/nav";

const sections = getNavSections();

export function Sidebar({ className }: Readonly<{ className?: string }>) {
  return (
    <nav className={cn("thin-scrollbar flex flex-col gap-7 overflow-y-auto", className)}>
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-4">
          <p className="px-3 text-xs font-bold tracking-wide text-foreground/80 uppercase">
            {section.title}
          </p>
          <div className="flex flex-col gap-4">
            {section.groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-1">
                {group.title !== section.title && (
                  <p className="px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {group.title}
                  </p>
                )}
                <div className="flex flex-col border-s border-border">
                  {group.items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "-ms-px block border-s-2 px-3 py-1.5 text-sm no-underline transition-colors",
                          isActive
                            ? "border-accent bg-accent/10 font-medium text-accent supports-[not(color:color-mix(in_oklab,red,red))]:text-accent-foreground dark:bg-accent/15"
                            : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                        )
                      }
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
