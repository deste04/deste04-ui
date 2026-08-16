# deste04-ui

Libreria di componenti React in stile "copia-incolla" (come shadcn/ui):
i componenti **non sono una dipendenza runtime**. Si installano uno alla
volta con un CLI che copia il codice sorgente dentro il progetto di chi lo
usa, in `components/ui/`. Da quel momento il codice è suo: lo può
modificare liberamente.

Lo stile è fatto **solo con classi utility Tailwind CSS** — nessun CSS
custom per componente. `styles/global.css` è un unico file condiviso da
tutti i componenti e contiene solo l'import di Tailwind e i design
token (colori, radius) come variabili CSS con supporto automatico a
tema chiaro/scuro; i componenti li usano con la sintassi arbitraria di
Tailwind (es. `bg-[var(--du-primary-bg)]`). **Richiede che il progetto
di chi lo usa abbia già Tailwind CSS (v4) configurato** — vedi
[Setup Tailwind nel progetto che consuma i componenti](#setup-tailwind-nel-progetto-che-consuma-i-componenti).

## Struttura del monorepo

```
deste04-ui/
├── apps/
│   └── site/                 # Sito che mostra tutti i componenti (Vite + React)
└── packages/
    └── cli/                  # Il pacchetto pubblicato su npm come "deste04-ui"
        ├── registry.json     # Indice: quali file/dipendenze ha ogni componente
        ├── templates/        # Sorgente reale (quello che il CLI copia)
        │   ├── components/ui/button.tsx
        │   ├── styles/global.css   # UNICO foglio di stile, non uno per componente
        │   └── lib/utils.ts
        └── src/cli.js        # Il comando `deste04-ui add <componente>`
```

Sono due progetti con scopi diversi ma nello stesso repo (workspaces npm):

- **`packages/cli`** → è tutto ciò che finisce su npm. Quando qualcuno fa
  `npx deste04-ui add button`, il CLI legge `registry.json`, trova la voce
  `button`, e copia i file da `templates/` dentro il progetto dell'utente
  (`components/ui/button.tsx`, `lib/utils.ts`, `styles/global.css`),
  installando poi con npm le eventuali dipendenze npm richieste (es.
  `clsx`).
- **`apps/site`** → è la vetrina: mostra ogni componente con anteprima
  live, comando di installazione e codice sorgente. Il sito **non viene
  pubblicato su npm**, resta solo un sito (da hostare dove vuoi: Vercel,
  Netlify, GitHub Pages...). Non tiene una copia duplicata dei
  componenti: grazie ai workspace npm, `apps/site` dichiara `deste04-ui`
  come dipendenza normale nel suo `package.json` e npm la collega con un
  symlink a `packages/cli` — il sito importa i componenti direttamente
  da lì (`import { Button } from "deste04-ui/components/ui/button"`),
  quindi ogni modifica a `packages/cli/templates/` si vede subito nel
  sito, senza copiare nulla a mano e senza pubblicare su npm.

## Come funziona il CLI (il meccanismo "one component at a time")

1. `npx deste04-ui add button`
2. Il CLI apre `packages/cli/registry.json` e cerca la voce `"button"`.
3. Ogni voce del registry elenca:
   - `files`: quali file copiare e dove (target relativo alla cartella
     da cui lanci il comando, es. `components/ui/button.tsx`);
   - `registryDependencies`: altre voci del registry da cui dipende (es.
     `button` dipende da `utils`, quindi installa anche `lib/utils.ts`);
   - `dependencies`: pacchetti npm richiesti (es. `clsx`), installati in
     automatico con `npm install` (o `pnpm add` / `yarn add` se rileva
     quel lockfile) nel progetto dell'utente.
4. Se un file esiste già, il CLI non lo sovrascrive (per non perdere
   modifiche che l'utente ha già fatto al componente).

Perché funziona "un componente alla volta": ogni voce del registry è
indipendente, quindi installare `button` non tocca né richiede altri
componenti a parte le sue dipendenze dichiarate.

## Setup Tailwind nel progetto che consuma i componenti

`npx deste04-ui add button` installa il pacchetto npm `tailwindcss`
(dichiarato tra le `dependencies` della voce `global` nel registry), ma
**non può collegarlo al bundler del progetto** — quello è manuale, una
tantum, la prima volta che aggiungi un componente in un progetto nuovo.

Con Vite (come fa `apps/site` in questo repo):

```bash
npm install -D @tailwindcss/vite
```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss() /* , ...altri plugin */],
});
```

Poi importa `styles/global.css` una volta sola nel tuo entrypoint (es.
`main.tsx`):

```ts
import "./styles/global.css";
```

Con un bundler diverso da Vite (Next.js, webpack, ecc.) usa
`@tailwindcss/postcss` al posto di `@tailwindcss/vite` — vedi la
[documentazione ufficiale di Tailwind](https://tailwindcss.com/docs/installation)
per il tuo caso specifico.

## Sviluppo in locale

Dalla root del monorepo:

```bash
npm install          # installa le dipendenze di tutti i workspace
npm run dev           # avvia il sito (apps/site) in locale
```

Per testare il CLI senza pubblicarlo su npm, lancialo direttamente con
Node dentro una cartella di prova:

```bash
mkdir /tmp/progetto-di-prova && cd /tmp/progetto-di-prova
node /percorso/assoluto/deste04-ui/packages/cli/src/cli.js add button
```

oppure, dalla root del monorepo:

```bash
npm run cli -- add button    # esegue packages/cli/src/cli.js nella cwd corrente
npm run cli -- list          # elenca i componenti disponibili
```

## Come aggiungere un nuovo componente

1. Crea il sorgente in `packages/cli/templates/components/ui/<nome>.tsx`,
   seguendo lo stile di `button.tsx` (props tipizzate, `cn()` per le
   classi, varianti come mappe di classi). **Stile solo con classi
   utility Tailwind, mai CSS custom**: niente file `.css` per
   componente, niente classi tipo `.du-btn` scritte a mano. Se ti serve
   un colore/token nuovo che ancora non esiste, aggiungi la variabile
   CSS (con la sua variante dark) dentro `:root` in
   `packages/cli/templates/styles/global.css` — quel file resta *solo*
   variabili + `@import "tailwindcss"`, non deve mai contenere regole
   di stile per un componente.
2. Aggiungi una voce in `packages/cli/registry.json` sotto
   `"components"`, con `files` (solo il `.tsx`), `dependencies` e
   `registryDependencies: ["utils", "global"]` (così chi installa il
   componente riceve anche `lib/utils.ts` e `styles/global.css` in
   automatico).
3. In `packages/cli/package.json`, sotto `"exports"`, aggiungi le due
   voci per il nuovo componente (con e senza estensione `.tsx`, la
   seconda serve per l'import `?raw` usato dal sito):
   ```json
   "./components/ui/<nome>": "./templates/components/ui/<nome>.tsx",
   "./components/ui/<nome>.tsx": "./templates/components/ui/<nome>.tsx"
   ```
4. In `apps/site/src/data/components.ts` aggiungi i metadati (slug,
   nome, descrizione, comando di installazione).
5. In `apps/site/src/pages/ComponentPage.tsx` importa il componente da
   `deste04-ui/components/ui/<nome>` (più il sorgente con `?raw` da
   `deste04-ui/components/ui/<nome>.tsx`), poi aggiungi una entry in
   `previews` e in `sources`.

Non serve copiare nessun file dentro `apps/site`: essendo collegato via
workspace npm, il sito legge sempre il sorgente vero in
`packages/cli/templates/`. Fatto: il componente è installabile via CLI e
visibile sul sito.

## Pubblicare il CLI su npm

Solo `packages/cli` viene pubblicato — il sito no.

### 1. Prerequisiti (una tantum)

```bash
npm login
```

Ti chiede username, password/OTP dell'account npm (creane uno gratis su
npmjs.com se non l'hai già).

### 2. Controlla che il nome sia libero

```bash
npm view deste04-ui
```

Se risponde "404 Not Found" il nome è libero. Se è già preso, cambia
`"name"` in `packages/cli/package.json` (es. uno scoped package tipo
`@giarnera/deste04-ui`, sempre disponibile perché legato al tuo account).

### 3. Controlla cosa finirà nel pacchetto

Il campo `"files"` in `packages/cli/package.json` include già solo
`src/`, `templates/` e `registry.json` (nessun file di sviluppo). Verifica
con:

```bash
cd packages/cli
npm pack --dry-run
```

Ti mostra l'elenco esatto dei file che finirebbero nel tarball, senza
pubblicare nulla.

### 4. Pubblica

Sempre da dentro `packages/cli`:

```bash
npm publish
```

Se usi un nome con scope (`@tuoaccount/pacchetto`) ed è la prima
pubblicazione, aggiungi `--access public` (di default gli scoped
package sono privati e privati richiede un piano a pagamento):

```bash
npm publish --access public
```

Da quel momento chiunque può fare:

```bash
npx deste04-ui add button
```

### 5. Aggiornare una versione già pubblicata

Ogni volta che cambi qualcosa in `packages/cli` (nuovo componente, fix),
prima di ripubblicare aggiorna la versione (segue semver: patch per fix,
minor per nuovi componenti/feature retrocompatibili, major per breaking
change):

```bash
cd packages/cli
npm version patch   # oppure: minor / major
npm publish
```

`npm version` aggiorna `package.json` e crea un tag git con quella
versione (se il repo è già un progetto git).

### Note

- Il comando `deste04-ui add` in sé (`src/cli.js`) usa solo moduli
  nativi di Node, quindi `npx deste04-ui add button` resta istantaneo.
  Il pacchetto dichiara comunque `clsx` come `dependencies` e `react`
  come `peerDependencies`: servono perché ora `packages/cli` è anche
  importabile come libreria (via `exports` in `package.json`) — è così
  che `apps/site` consuma i componenti direttamente dal workspace,
  senza copie duplicate.
- Per provare il pacchetto pubblicato prima di fidarti al 100%, puoi
  anche testarlo in locale con `npm link` da `packages/cli`, poi
  `deste04-ui add button` in un altro progetto, prima ancora di fare
  `npm publish`.
