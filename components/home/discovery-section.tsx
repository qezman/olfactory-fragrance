import Link from 'next/link';
import { GhostButton } from '@/components/ui/ghost-button';

export function DiscoverySection() {
  return (
    <section className="bg-surface py-section-y border-b border-border">
      <div className="max-w-wide mx-auto px-section-x flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* Content Half */}
        <div className="w-full md:w-1/2 md:pr-8 animate-on-scroll is-visible">
          <span className="type-sub text-ink-tertiary mb-6 block">NOT SURE WHERE TO BEGIN?</span>
          <h2 className="type-headline mb-8">Discover your scent.</h2>
          <p className="type-body text-ink-secondary mb-12 text-[17px] leading-relaxed max-w-md">
            Our discovery set lets you sample five fragrances before committing to a full bottle. Keep the ones you love. Return the rest. Every set includes a code for 20% off your first full-size purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link href="/discovery">
              <GhostButton>SHOP DISCOVERY SETS</GhostButton>
            </Link>
            <span className="type-body text-ink">From £35 / $42</span>
          </div>
        </div>

        {/* Image Half */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-surface-deep relative overflow-hidden animate-on-scroll is-visible" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0">
            <img
              src="/images/cedar-02.jpg"
              alt="Discovery set flat lay"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
