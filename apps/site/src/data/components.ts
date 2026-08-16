export interface ComponentMeta {
  slug: string;
  name: string;
  description: string;
  install: string;
}

/**
 * Elenco dei componenti mostrati sul sito.
 * Per aggiungerne uno nuovo: aggiungi qui i metadati, poi aggiungi
 * l'anteprima e il sorgente in ComponentPage.tsx (vedi i commenti lì).
 */
export const components: ComponentMeta[] = [
  {
    slug: "button",
    name: "Button",
    description:
      "Bottone con varianti (default, outline, ghost, destructive) e dimensioni (sm, default, lg, icon).",
    install: "npx deste04-ui add button",
  },
  {
    slug: "copy-button",
    name: "Copy Button",
    description:
      "Bottone che copia un valore negli appunti e mostra una conferma temporanea (icona spuntata, ed eventualmente il testo) prima di tornare allo stato normale.",
    install: "npx deste04-ui add copy-button",
  },
  {
    slug: "link",
    name: "Link",
    description:
      "Anchor stilizzato (non un bottone) con varianti underline/no-underline e icona opzionale \"apri esterno\".",
    install: "npx deste04-ui add link",
  },
  {
    slug: "spinner",
    name: "Spinner",
    description:
      "Icona di caricamento animata con varianti di dimensione (xs, sm, default, lg, xl). Usata da Button per lo stato loading.",
    install: "npx deste04-ui add spinner",
  },
];
