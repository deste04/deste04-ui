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
];
