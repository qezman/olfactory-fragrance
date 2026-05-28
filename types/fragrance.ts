export type ScentFamily = 'woody' | 'floral' | 'citrus' | 'amber' | 'fresh' | 'gourmand';

export interface Ingredient {
  name: string;
  origin: string;
  description: string;
}

export interface FragranceSize {
  ml: number;
  price: number;
}

export interface HowItWears {
  opening: string;
  heart: string;
  drydown: string;
}

export interface Fragrance {
  slug: string;
  name: string;
  tagline: string;
  family: ScentFamily[];
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  story: string;
  howItWears: HowItWears;
  ingredients: Ingredient[];
  sizes: FragranceSize[];
  images: string[];
  isBestseller: boolean;
  isNew: boolean;
}
