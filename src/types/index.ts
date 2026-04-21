export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  imageClass?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  meta?: string;
}

export interface SectionData {
  title: string;
  viewAllHref: string;
  items: Resource[];
}
