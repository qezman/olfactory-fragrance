import Link from 'next/link';
import { FragranceCard } from '@/components/fragrance/fragrance-card';
import { getFragrances } from '@/lib/api/fragrance-api';

export async function FeaturedFragrances() {
  const fragrances = await getFragrances();
  const featured = fragrances.slice(0, 6);

  return (
    <section className="py-section-y border-b border-border">
      <div className="max-w-wide mx-auto px-section-x">
        
        <div className="text-center mb-16 md:mb-24 animate-on-scroll is-visible">
          <span className="type-sub text-ink-tertiary mb-4 block">THE COLLECTION</span>
          <h2 className="type-headline">Twelve scents. Twelve stories.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-20">
          {featured.map((fragrance, index) => (
            <FragranceCard 
              key={fragrance.slug} 
              fragrance={fragrance} 
              index={index} 
            />
          ))}
        </div>

        <div className="text-center animate-on-scroll is-visible">
          <Link href="/fragrances" className="type-sub text-ink hover:text-gold transition-colors inline-flex items-center gap-2">
            VIEW ALL TWELVE FRAGRANCES <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
