import { Variants } from "framer-motion";


/* Custom Animated Components types */
export type AnimatedTAGProps = {
    variants: Variants;
    className?: string;
    children: React.ReactNode;
    infinity?: boolean;
  };

export type FolderGridProps = {
  href: string;
  title: string;
  img: string;
  index?: number;
}

export type FolderListProps = {
  href: string;
  name: string;
  size: number;
  date: string;
  file?: { mimeType: string; hashes: { quickXorHash?: string; sha1Hash?: string; sha256Hash?: string } }
  folder?: { childCount: number; view: { sortBy: string; sortOrder: 'ascending'; viewType: 'thumbnails' } }
}

export type AuthorProps = {
  title: string;
  description: string;
  img: string;
  date: string;
}

export type ImageCardProps = {
  img: string;
  alt: string;
}