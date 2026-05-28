'use client';

import { useFilter } from '@/hooks/use-filter';
import { FragranceCard } from '@/components/fragrance/fragrance-card';
import { FilterBar } from '@/components/ui/filter-bar';
import { fragrances } from '@/lib/mock-data/fragrances';
import { useMemo } from 'react';

export default function FragrancesPage() {
  const { family, sort } = useFilter();

  const filteredFragrances = useMemo(() => {
    let result = [...fragrances];

    // Filter
    if (family !== 'all') {
      result = result.filter(f => f.family.includes(family as any));
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => Math.min(...a.sizes.map(s => s.price)) - Math.min(...b.sizes.map(s => s.price)));
        break;
      case 'price-desc':
        result.sort((a, b) => Math.min(...b.sizes.map(s => s.price)) - Math.min(...a.sizes.map(s => s.price)));
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case 'bestsellers':
        result.sort((a, b) => (a.isBestseller === b.isBestseller ? 0 : a.isBestseller ? -1 : 1));
        break;
      case 'featured':
      default:
        // Keep original mock data order
        break;
    }

    return result;
  }, [family, sort]);

  return (
    <>
      <div className="bg-off-white pt-24 pb-16 text-center px-section-x">
        <h1 className="font-display italic text-display mb-4">The Collection</h1>
        <p className="type-body text-ink-secondary max-w-md mx-auto">
          Twelve fragrances. Each one a study in restraint.
        </p>
      </div>

      <FilterBar />

      <section className="py-16 md:py-24 min-h-[50vh]">
        <div className="max-w-wide mx-auto px-section-x">
          
          {filteredFragrances.length === 0 ? (
            <div className="text-center py-20 animate-fade-up">
              <p className="type-body text-ink-secondary">No fragrances found for this filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">
              {filteredFragrances.map((fragrance, index) => (
                <div key={`${fragrance.slug}-${family}-${sort}`} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <FragranceCard fragrance={fragrance} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
