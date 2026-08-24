import { componentsByCategory } from "./components";

export interface GuideLink {
  slug: string;
  title: string;
  path: string;
}

export const guides: GuideLink[] = [
  { slug: "introduction", title: "Introduction", path: "/docs/introduction" },
  { slug: "installation", title: "Installation", path: "/docs/installation" },
];

export interface NavGroup {
  title: string;
  items: { title: string; path: string }[];
}

/** Full sidebar structure: guides first, then components grouped by category. */
export function getNavGroups(): NavGroup[] {
  const groups: NavGroup[] = [
    {
      title: "Get Started",
      items: guides.map((g) => ({ title: g.title, path: g.path })),
    },
  ];

  for (const { category, items } of componentsByCategory()) {
    groups.push({
      title: category,
      items: items.map((c) => ({
        title: c.name,
        path: `/docs/components/${c.slug}`,
      })),
    });
  }

  return groups;
}

/** Flat list used by the search palette. */
export function getSearchItems(): { title: string; group: string; path: string }[] {
  return getNavGroups().flatMap((group) =>
    group.items.map((item) => ({ title: item.title, group: group.title, path: item.path }))
  );
}

/** Every guide and component page, in the order they appear in the sidebar. */
export function getFlatNavItems(): { title: string; path: string }[] {
  return getNavGroups().flatMap((group) => group.items);
}

/** The pages right before and after `path` in the sidebar order, for prev/next links. */
export function getAdjacentPages(path: string): {
  prev?: { title: string; path: string };
  next?: { title: string; path: string };
} {
  const items = getFlatNavItems();
  const index = items.findIndex((item) => item.path === path);
  if (index === -1) return {};
  return { prev: items[index - 1], next: items[index + 1] };
}
