# deste04-ui

A React component library in the copy and paste style, the same idea used by
shadcn/ui. Components are not a runtime dependency. A small CLI copies the
actual source code into your project, under `components/ui/`, so you own it
from that moment on.

Styling uses only Tailwind CSS utility classes, no per-component CSS file.
Behavior comes from [Ark UI](https://ark-ui.com), variants from
[class-variance-authority](https://cva.style). Requires a project with
Tailwind CSS v4 already configured.

Full documentation, with a live preview and the source of every component, is
in the `web` app (see [Development](#development) below to run it locally).

## Monorepo structure

```
deste04-ui/
├── web/                     # Documentation site (Vite + React + React Router)
│   └── src/
│       ├── pages/           # Routes: home, guides, components overview, component page
│       ├── registry/        # Demo for every component, mapped to its real source
│       ├── components/      # Site chrome: header, sidebar, search, code blocks
│       └── data/            # Component metadata (name, category, install command)
└── packages/
    └── cli/                 # Published on npm as "deste04-ui"
        ├── registry.json    # Index: which files and dependencies each component needs
        ├── templates/       # Real source, what the CLI actually copies
        │   ├── components/ui/*.tsx
        │   ├── styles/global.css   # The one shared stylesheet, no per-component CSS
        │   └── lib/utils.ts
        └── src/cli.js       # The `deste04-ui add <component>` command
```

Two projects, two purposes, one repo via npm workspaces:

- **`packages/cli`** is everything that ships to npm. `npx deste04-ui add
  button` reads `registry.json`, finds the `button` entry, copies its files
  from `templates/` into the user's project, then installs any npm
  dependency it declares.
- **`web`** is the documentation site. It never ships to npm. It declares
  `deste04-ui` as a normal dependency, so npm workspaces symlink it to
  `packages/cli`: the site imports components straight from there
  (`deste04-ui/components/ui/button`), so any change to
  `packages/cli/templates/` shows up on the site immediately, with no manual
  copying.

## Development

From the repo root:

```bash
npm install       # installs every workspace
npm run dev        # starts the documentation site
npm run build       # builds the documentation site
```

Try the CLI locally without publishing it:

```bash
npm run cli -- list          # list available components
npm run cli -- add button    # install one into the current directory
```

## Adding a new component

1. Add the source in `packages/cli/templates/components/ui/<name>.tsx`.
   Follow `button.tsx`: a headless primitive from Ark UI, `cva()`
   for variants, `cn()` to merge classes. Style with Tailwind utilities only.
   Reuse existing tokens (`bg-primary`, `text-muted-foreground`, ...); add a
   new one to `packages/cli/templates/styles/global.css` (with its dark
   variant) only if none of the existing tokens fit.
2. Add an entry under `"components"` in `packages/cli/registry.json`, with
   `files`, `dependencies` and `registryDependencies: ["utils", "global"]`.
3. Add the matching pair of exports in `packages/cli/package.json`, under
   `"exports"` (with and without the `.tsx` extension, the second is used by
   the site's `?raw` import).
4. Add its metadata (slug, name, category, description, install command) to
   `web/src/data/components.ts`.
5. Add its demo and its `?raw` source import in `web/src/registry/`.

Nothing needs copying into `web`: it reads the real source from
`packages/cli/templates/` through the workspace link, so the new component is
installable via the CLI and visible on the site right away.

## Publishing the CLI to npm

Only `packages/cli` gets published.

```bash
npm login                        # once, if not already logged in
npm view deste04-ui               # check the name is free (404 = free)
cd packages/cli
npm pack --dry-run                # preview what would be published
npm version patch                 # or: minor / major
npm publish                       # add --access public for a scoped name
```

From then on, anyone can run `npx deste04-ui add button`.
