export interface NavItem {
  label: string;
  href: string;
  icon: string;
  description: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Protocol",
    href: "/",
    icon: "menu_book",
    description: "Overview and philosophy",
  },
  {
    label: "Specification",
    href: "/specification",
    icon: "article",
    description: "Data structures and encoding",
  },
  {
    label: "Implementation",
    href: "/implementation",
    icon: "terminal",
    description: "Core protocol guides and code examples",
  },
  {
    label: "Backends",
    href: "/backends",
    icon: "dns",
    description: "Storage backend integrations",
    children: [
      {
        label: "Sia",
        href: "/backends/sia",
        icon: "storage",
        description: "Sia storage backend implementation",
      },
    ],
  },
  {
    label: "Reference",
    href: "/reference",
    icon: "source",
    description: "Constants, schemas, and activation formulas",
  },
];
