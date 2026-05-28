import { DiscoverySet } from '@/types/editorial';

export const discoverySets: DiscoverySet[] = [
  {
    slug: 'the-woods',
    name: 'The Woods',
    description: 'Five woody and earthy fragrances for those drawn to forests, fireside, and the smell of rain on bark.',
    fragrances: ['cedar-08', 'vetiver-26', 'santal-19', 'oud-17', 'tobacco-44'],
    price: 35,
    image: '/images/cedar-02.jpg'
  },
  {
    slug: 'light-and-citrus',
    name: 'Light & Citrus',
    description: 'Five fresh and citrus fragrances for those who prefer brightness, clean air, and the scent of sun-warmed skin.',
    fragrances: ['bergamote-22', 'neroli-33', 'musk-07', 'iris-09', 'vetiver-26'],
    price: 35,
    image: '/perfume-2.png'
  },
  {
    slug: 'the-collector',
    name: 'The Collector',
    description: 'Our five bestselling fragrances. The ones people come back for. The ones that stay on your collar.',
    fragrances: ['cedar-08', 'rose-14', 'amber-31', 'neroli-33', 'santal-19'],
    price: 35,
    image: '/906982812452077635.jpg'
  }
];

export function getSetBySlug(slug: string): DiscoverySet | undefined {
  return discoverySets.find(s => s.slug === slug);
}
