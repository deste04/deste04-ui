import { Link } from "react-router-dom";
import { linkVariants } from "deste04-ui/components/ui/link";
import { cn } from "deste04-ui/lib/utils";
import { PageHeader } from "../components/docs/page-header";
import { CodeBlock } from "../components/docs/code-block";
import { DocsPagination } from "../components/docs/docs-pagination";

export default function Installation() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 pb-24">
      <PageHeader
        title="Installation"
        description="Connect Tailwind CSS to your bundler once, then install components with the CLI whenever you need them."
      />

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-foreground">1. Set up Tailwind CSS</h2>
        <p className="leading-relaxed text-foreground">
          Running <code className="rounded bg-muted px-1.5 py-0.5 text-sm">npx deste04-ui add button</code> installs
          the <code className="rounded bg-muted px-1.5 py-0.5 text-sm">tailwindcss</code> package for you, but it
          cannot wire it into your bundler. That step is manual, and only needed once
          per project.
        </p>
        <p className="leading-relaxed text-foreground">With Vite, install the plugin:</p>
        <CodeBlock code="npm install -D @tailwindcss/vite" />
        <p className="leading-relaxed text-foreground">Then add it to your Vite config:</p>
        <CodeBlock
          code={`// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss() /* , ...other plugins */],
});`}
        />
        <p className="leading-relaxed text-foreground">
          With a different bundler, such as Next.js or webpack, use{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">@tailwindcss/postcss</code> instead. See the{" "}
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkVariants())}
          >
            official Tailwind documentation
          </a>{" "}
          for your specific setup.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-foreground">2. Import the stylesheet</h2>
        <p className="leading-relaxed text-foreground">
          The first component you add also installs{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">styles/global.css</code>, the single
          stylesheet shared by every component. Import it once in your entrypoint:
        </p>
        <CodeBlock
          code={`// main.tsx
import "./styles/global.css";`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-foreground">3. Add a component</h2>
        <p className="leading-relaxed text-foreground">
          Every component installs on its own. Installing one only pulls in the files
          and dependencies it actually needs.
        </p>
        <CodeBlock code="npx deste04-ui add button" />
        <p className="leading-relaxed text-foreground">
          If a file already exists in your project, the CLI leaves it alone, so you
          never lose changes you already made to an installed component.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-foreground">Custom fonts</h2>
        <p className="leading-relaxed text-foreground">
          Every component reads its font from three variables defined in{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">styles/global.css</code>:
        </p>
        <CodeBlock
          code={`--font-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
--font-heading: var(--font-sans);`}
        />
        <p className="leading-relaxed text-foreground">
          Changing those values changes the font everywhere, including inside buttons,
          since the whole page inherits <code className="rounded bg-muted px-1.5 py-0.5 text-sm">font-sans</code>.
          With a Google Font, add the link tags to your HTML head:
        </p>
        <CodeBlock
          code={`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>`}
        />
        <p className="leading-relaxed text-foreground">then update the token:</p>
        <CodeBlock code={`--font-sans: "Poppins", system-ui, sans-serif;`} />
        <p className="leading-relaxed text-foreground">
          For a self hosted font, declare it once above{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">:root</code> in the same file:
        </p>
        <CodeBlock
          code={`@font-face {
  font-family: "MyFont";
  src: url("/fonts/my-font.woff2") format("woff2");
  font-weight: 400 700;
  font-display: swap;
}`}
        />
        <CodeBlock code={`--font-sans: "MyFont", system-ui, sans-serif;`} />
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-foreground">Next steps</h2>
        <p className="leading-relaxed text-foreground">
          Browse the{" "}
          <Link to="/docs/components" className={cn(linkVariants())}>
            full list of components
          </Link>{" "}
          to see what is available, each with a live preview and its source code.
        </p>
      </section>

      <DocsPagination />
    </div>
  );
}
