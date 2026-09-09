export type BlockCategory = "Authentication";

export interface BlockMeta {
  slug: string;
  name: string;
  category: BlockCategory;
  description: string;
  install: string;
}

/**
 * Blocks are bigger, ready-to-use compositions of the library's own
 * components (a whole login card, not just a Button). Installed the same
 * way as a component, but they land in components/blocks/ since you are
 * meant to open the file and adapt it, not just drop it in as-is.
 */
export const blocks: BlockMeta[] = [
  {
    slug: "login-form",
    name: "Login Form",
    category: "Authentication",
    description:
      "A complete sign-in card: OAuth button, email and password fields, forgot password and sign up links.",
    install: "npx deste04-ui add login-form",
  },
];

export function getBlock(slug: string): BlockMeta | undefined {
  return blocks.find((b) => b.slug === slug);
}

export const blockCategoryOrder: BlockCategory[] = ["Authentication"];

export function blocksByCategory(): Array<{ category: BlockCategory; items: BlockMeta[] }> {
  return blockCategoryOrder.map((category) => ({
    category,
    items: blocks.filter((b) => b.category === category).sort((a, b) => a.name.localeCompare(b.name)),
  }));
}
