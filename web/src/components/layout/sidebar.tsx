import { NavLink } from "react-router-dom";
import { cn } from "deste04-ui/lib/utils";
import { getNavGroups } from "../../data/nav";

const groups = getNavGroups();

export function Sidebar({ className }: Readonly<{ className?: string }>) {
  return (
    <nav className={cn("thin-scrollbar flex flex-col gap-6 overflow-y-auto", className)}>
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <p className="px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {group.title}
          </p>
          <div className="flex flex-col border-s border-border">
            {group.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "-ms-px block border-s-2 px-3 py-1.5 text-sm no-underline transition-colors",
                    isActive
                      ? "border-primary bg-primary/10 font-medium text-primary dark:bg-primary/15"
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
    </nav>
  );
}
