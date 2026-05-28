import { HeroSection } from '@/components/home/hero-section';
import { PhilosophyStrip } from '@/components/home/philosophy-strip';
import { FeaturedFragrances } from '@/components/home/featured-fragrances';
import { SignatureFeature } from '@/components/home/signature-feature';
import { DiscoverySection } from '@/components/home/discovery-section';
import { EditPreview } from '@/components/home/edit-preview';
import { BrandValues } from '@/components/home/brand-values';

export const metadata = {
  title: 'Olfactory | Slow Perfumery',
  description: 'Twelve fragrances. Each one a moment frozen in scent. Hand-blended in small batches.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophyStrip />
      <FeaturedFragrances />
      <SignatureFeature />
      <DiscoverySection />
      <EditPreview />
      <BrandValues />
    </>
  );
}
