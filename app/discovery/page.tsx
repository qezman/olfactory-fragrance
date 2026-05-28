import { DiscoveryBuilder } from '@/components/discovery/discovery-builder';
import { SetCard } from '@/components/discovery/set-card';
import { discoverySets } from '@/lib/mock-data/sets';

export const metadata = {
  title: 'Discovery Sets | Olfactory',
  description: 'Sample our fragrances before committing to a full bottle. Keep the ones you love.',
};

export default function DiscoveryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-off-white pt-24 pb-20 border-b border-border">
        <div className="max-w-content mx-auto px-section-x text-center">
          <h1 className="font-display italic text-display mb-6">Not sure where to begin?</h1>
          <p className="type-body text-ink-secondary max-w-lg mx-auto">
            Sample five fragrances for £35. Find the ones that feel like you. Every set includes a code for 20% off your first full-size purchase.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-wide mx-auto px-section-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="pt-8 md:pt-0 md:px-8 text-center animate-fade-up">
              <span className="type-sub text-gold mb-4 block">STEP 1</span>
              <h3 className="type-title mb-2">Choose your set</h3>
              <p className="type-small text-ink-secondary">Select a pre-curated set or build your own by choosing any five fragrances.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="type-sub text-gold mb-4 block">STEP 2</span>
              <h3 className="type-title mb-2">Try at home</h3>
              <p className="type-small text-ink-secondary">5 × 2ml samples, presented in a cloth pouch with detailed scent cards.</p>
            </div>
            <div className="pt-8 md:pt-0 md:px-8 text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="type-sub text-gold mb-4 block">STEP 3</span>
              <h3 className="type-title mb-2">Find your fragrance</h3>
              <p className="type-small text-ink-secondary">Use your included 20% discount code toward the full-size bottle you love most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Curated Sets */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-wide mx-auto px-section-x">
          <div className="text-center mb-16">
            <h2 className="type-headline">Curated Sets</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discoverySets.map((set) => (
              <SetCard key={set.slug} set={set} />
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own Builder */}
      <DiscoveryBuilder />
    </>
  );
}
