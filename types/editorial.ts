export type ArticleCategory = 'essay' | 'interview' | 'ingredient' | 'behind-the-scent';

export interface EditorialArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
  relatedFragrances: string[];
}

export interface DiscoverySet {
  slug: string;
  name: string;
  description: string;
  fragrances: string[];
  price: number;
  image: string;
}
