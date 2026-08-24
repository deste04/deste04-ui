import { Link } from "react-router-dom";
import { buttonVariants } from "deste04-ui/components/ui/button";
import { cn } from "deste04-ui/lib/utils";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">404</p>
      <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
      <p className="max-w-sm text-muted-foreground">
        The page you are looking for does not exist or was moved.
      </p>
      <Link to="/docs/introduction" className={cn(buttonVariants({ variant: "outline" }))}>
        Back to the docs
      </Link>
    </div>
  );
}
