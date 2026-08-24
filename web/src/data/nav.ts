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
