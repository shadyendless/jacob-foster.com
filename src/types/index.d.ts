export type Meta = {
  author: string;
  date: string;
  description: string;
  slug: string;
  title: string;
};

export interface NavigationItemProps {
  children: React.ReactNode;
  href: string;
  target?: string;
}
