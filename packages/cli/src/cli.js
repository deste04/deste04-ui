#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.join(__dirname, ".."); // packages/cli
const registry = JSON.parse(
  fs.readFileSync(path.join(PKG_ROOT, "registry.json"), "utf8")
);

function findEntry(name) {
  return (
    registry.components.find((c) => c.name === name) ||
    registry.lib.find((c) => c.name === name)
  );
}

function listAll() {
  console.log("\nComponenti disponibili:\n");
  for (const c of registry.components) {
    console.log(`  ${c.name.padEnd(12)} ${c.description}`);
  }
  console.log("");
}

/**
 * Installa in modo ricorsivo un "entry" del registry (componente o lib
 * condivisa) copiando i suoi file dentro il progetto corrente e
 * raccogliendo le dipendenze npm da installare.
 */
function installEntry(name, seen = new Set(), depsAcc = new Set()) {
  if (seen.has(name)) return depsAcc;
  seen.add(name);

  const entry = findEntry(name);
  if (!entry) {
    console.error(`Componente "${name}" non trovato nel registry.`);
    listAll();
    process.exit(1);
  }

  for (const dep of entry.registryDependencies ?? []) {
    installEntry(dep, seen, depsAcc);
  }

  for (const file of entry.files) {
    const src = path.join(PKG_ROOT, "templates", file.path);
    const dest = path.join(process.cwd(), file.target);
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    if (fs.existsSync(dest)) {
      console.log(`${file.target} esiste già, non sovrascrivo.`);
      continue;
    }

    fs.copyFileSync(src, dest);
    console.log(`creato ${file.target}`);
  }

  for (const dep of entry.dependencies ?? []) {
    depsAcc.add(dep);
  }

  return depsAcc;
}

function detectPackageManager() {
  const cwd = process.cwd();
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm add";
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn add";
  return "npm install";
}

function add(name) {
  if (!name) {
    console.error("Uso: npx deste04-ui add <componente>");
    process.exit(1);
  }

  const deps = [...installEntry(name)];

  if (deps.length) {
    const installCmd = `${detectPackageManager()} ${deps.join(" ")}`;
    console.log(`\nInstallo le dipendenze npm: ${deps.join(", ")}`);
    try {
      execSync(installCmd, { stdio: "inherit", cwd: process.cwd() });
    } catch {
      console.log(
        `\nNon sono riuscito a lanciare "${installCmd}" automaticamente.`
      );
      console.log(`  Eseguilo manualmente: ${installCmd}`);
    }
  }

  console.log(`\n"${name}" installato in components/ui/`);

  if (fs.existsSync(path.join(process.cwd(), "styles/global.css"))) {
    console.log(
      `Ricorda di importare "styles/global.css" una volta sola nel tuo entrypoint (es. main.tsx): contiene l'import di Tailwind, i design token e il supporto a tema chiaro/scuro.`
    );
    console.log(
      `I componenti usano solo classi utility Tailwind: assicurati che Tailwind sia collegato al tuo bundler (vedi il README di deste04-ui).`
    );
  }
}

function help() {
  console.log(`
deste04-ui — CLI per installare i componenti nel tuo progetto

Uso:
  npx deste04-ui add <componente>   Installa un componente in components/ui/
  npx deste04-ui list                Elenca i componenti disponibili

Esempio:
  npx deste04-ui add button
`);
}

const [, , cmd, arg] = process.argv;

switch (cmd) {
  case "add":
    add(arg);
    break;
  case "list":
    listAll();
    break;
  default:
    help();
    break;
}
