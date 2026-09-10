import * as React from "react";
import { createHighlighterCore, type HighlighterCore, type LanguageInput } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

import { cn } from "../../lib/utils";
import { CopyButton } from "./copy-button";

const LIGHT_THEME = "github-light";
const DARK_THEME = "github-dark";

const languageLabels: Record<string, string> = {
  bash: "Bash",
  sh: "Shell",
  shell: "Shell",
  css: "CSS",
  html: "HTML",
  js: "JavaScript",
  jsx: "JSX",
  json: "JSON",
  md: "Markdown",
  markdown: "Markdown",
  text: "Text",
  ts: "TypeScript",
  tsx: "TSX",
};

function labelFor(lang: string) {
  return languageLabels[lang.toLowerCase()] ?? lang.toUpperCase();
}

/**
 * One dynamic import per supported language, so a bundler ships only the
 * grammars actually used instead of Shiki's whole language registry. Add
 * an entry here (and to `languageLabels` above) to support another one.
 */
const langLoaders = new Map<string, () => LanguageInput>([
  ["bash", () => import("@shikijs/langs/bash")],
  ["sh", () => import("@shikijs/langs/bash")],
  ["shell", () => import("@shikijs/langs/bash")],
  ["css", () => import("@shikijs/langs/css")],
  ["html", () => import("@shikijs/langs/html")],
  ["js", () => import("@shikijs/langs/javascript")],
  ["jsx", () => import("@shikijs/langs/jsx")],
  ["json", () => import("@shikijs/langs/json")],
  ["md", () => import("@shikijs/langs/markdown")],
  ["markdown", () => import("@shikijs/langs/markdown")],
  ["ts", () => import("@shikijs/langs/typescript")],
  ["tsx", () => import("@shikijs/langs/tsx")],
]);

let highlighterPromise: Promise<HighlighterCore> | null = null;

/** One highlighter, built once, its two themes loaded upfront (cheap: a few KB each). */
function getHighlighter() {
  highlighterPromise ??= createHighlighterCore({
    themes: [import("@shikijs/themes/github-light"), import("@shikijs/themes/github-dark")],
    langs: [],
    engine: createJavaScriptRegexEngine(),
  });
  return highlighterPromise;
}

async function highlight(code: string, lang: string) {
  const highlighter = await getHighlighter();
  const id = lang.toLowerCase();
  const load = langLoaders.get(id);

  if (load && !highlighter.getLoadedLanguages().includes(id)) {
    await highlighter.loadLanguage(load());
  }

  const resolvedLang = load ? id : "text";
  return {
    light: highlighter.codeToHtml(code, { lang: resolvedLang, theme: LIGHT_THEME }),
    dark: highlighter.codeToHtml(code, { lang: resolvedLang, theme: DARK_THEME }),
  };
}

export interface CodeBlockProps {
  code: string;
  /** Language id, e.g. "tsx", "bash", "css". Shown in the header; falls back to plain text if unsupported. */
  lang?: string;
  className?: string;
  /** Caps the code area's height and makes it scroll, e.g. "32rem". */
  maxHeight?: string;
}

/**
 * Syntax highlighted code block (Shiki) with a header showing the language
 * and a copy action. Highlights once for light and once for dark, then
 * swaps between the two with `dark:` utilities, so no theme CSS is needed
 * beyond this file.
 */
function CodeBlock({ code, lang = "text", className, maxHeight }: Readonly<CodeBlockProps>) {
  const [html, setHtml] = React.useState<{ light: string; dark: string } | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    setHtml(null);
    highlight(code, lang)
      .then((result) => {
        if (!cancelled) setHtml(result);
      })
      .catch(() => {
        if (!cancelled) setHtml(null);
      });
    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  return (
    <div
      data-slot="code-block"
      className={cn("overflow-hidden rounded-lg border border-border", className)}
    >
      <div className="flex items-center justify-between gap-2 border-b border-border bg-muted px-4 py-2">
        <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
          {labelFor(lang)}
        </span>
        <CopyButton value={code} variant="plain" size="icon-xs" />
      </div>
      <div
        className="overflow-auto bg-muted/40 p-4 text-sm [&_pre]:bg-transparent! [&_pre]:font-mono [&_pre]:whitespace-pre"
        style={maxHeight ? { maxHeight } : undefined}
      >
        {html ? (
          <>
            <div className="dark:hidden" dangerouslySetInnerHTML={{ __html: html.light }} />
            <div className="hidden dark:block" dangerouslySetInnerHTML={{ __html: html.dark }} />
          </>
        ) : (
          <pre className="font-mono text-foreground">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

export { CodeBlock };
