export const metadata = {
  title: 'About | Olfactory',
  description: 'Born in Grasse. Made by hand. Finished on your skin.',
};

export default function AboutPage() {
  return (
    <div className="bg-off-white min-h-screen">
      
      {/* Hero */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-wide mx-auto px-section-x py-20 md:py-28 grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-16 items-center">
          <div className="text-center md:text-left animate-fade-up">
            <span className="type-sub text-gold mb-6 block">ABOUT OLFACTORY</span>
            <h1 className="font-display italic text-[clamp(48px,8vw,84px)] leading-[0.95] mb-6">Slow perfumery.</h1>
            <p className="type-body text-ink-secondary text-[18px] max-w-md mx-auto md:mx-0">Born in Grasse. Made by hand. Finished on your skin.</p>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] aspect-[4/5] overflow-hidden bg-surface-deep animate-fade-up">
            <img
              src="/images/cedar-04.jpg"
              alt="Olfactory atelier"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,24,20,0.18))]" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-narrow mx-auto px-section-x text-center md:text-left">
          <span className="type-sub text-gold mb-8 block text-center">OUR STORY</span>
          
          <div className="prose prose-lg type-body text-ink-secondary text-[17px] leading-[1.9] mx-auto">
            <p className="mb-8">
              Olfactory began with a simple belief: the industrialisation of fragrance has stripped it of its soul. When you produce perfume by the ton, you must standardise. You must use synthetics to ensure batch consistency. You must design for the shelf, not the skin.
            </p>
            <p className="mb-8">
              We wanted to return to how fragrance was made a century ago. Small batches. Hand-blended. Using raw materials so complex that they vary slightly from year to year, just like wine.
            </p>
            <p>
              We do not test on animals. We do not use dyes, UV filters, or parabens. We do not discount. We believe that when you buy a bottle of Olfactory, you are buying time — the time it took the plant to grow, the time it took to extract its oil, and the time our perfumers spent ensuring every drop means something.
            </p>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-surface border-y border-border overflow-hidden">
        <div className="max-w-wide mx-auto px-section-x">
          <h2 className="text-center type-sub text-ink-tertiary mb-16">THE PROCESS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-[11px] left-[12.5%] right-[12.5%] h-px bg-border-strong -z-10" />
            
            <div className="text-center animate-fade-up">
              <div className="w-6 h-6 rounded-full border-4 border-surface bg-gold mx-auto mb-6" />
              <h3 className="type-title mb-4">01 Sourcing</h3>
              <p className="type-body text-ink-secondary text-[15px]">We work directly with farmers in 18 countries to secure the highest grade raw materials.</p>
              <div className="mt-8 mx-auto max-w-[220px] aspect-[4/5] bg-off-white relative overflow-hidden border border-border">
                <img
                  src="/images/cedar-01.jpg"
                  alt="Sourced fragrance materials"
                  className="absolute inset-0 h-full w-full object-contain p-3"
                />
              </div>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-6 h-6 rounded-full border-4 border-surface bg-gold mx-auto mb-6" />
              <h3 className="type-title mb-4">02 Blending</h3>
              <p className="type-body text-ink-secondary text-[15px]">Our oils rest for six weeks before being diluted in organic sugarcane alcohol.</p>
              <div className="mt-8 mx-auto max-w-[220px] aspect-[4/5] bg-off-white relative overflow-hidden border border-border">
                <img
                  src="/perfume-2.png"
                  alt="Blended perfume bottle"
                  className="absolute inset-0 h-full w-full object-contain p-3"
                />
              </div>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-6 h-6 rounded-full border-4 border-surface bg-gold mx-auto mb-6" />
              <h3 className="type-title mb-4">03 Batching</h3>
              <p className="type-body text-ink-secondary text-[15px]">We compound in batches of 500 bottles or fewer to maintain absolute quality control.</p>
              <div className="mt-8 mx-auto max-w-[220px] aspect-[4/5] bg-off-white relative overflow-hidden border border-border">
                <img
                  src="/perfume-3.jpg"
                  alt="Small batch perfume"
                  className="absolute inset-0 h-full w-full object-contain p-3"
                />
              </div>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-6 h-6 rounded-full border-4 border-surface bg-gold mx-auto mb-6" />
              <h3 className="type-title mb-4">04 Labelling</h3>
              <p className="type-body text-ink-secondary text-[15px]">Each bottle is filled, capped, and labelled by hand in our London atelier.</p>
              <div className="mt-8 mx-auto max-w-[220px] aspect-[4/5] bg-off-white relative overflow-hidden border border-border">
                <img
                  src="/perfume-1.jpg"
                  alt="Hand-labelled perfume bottle"
                  className="absolute inset-0 h-full w-full object-contain p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section id="ingredients" className="py-24 md:py-32 bg-white">
        <div className="max-w-wide mx-auto px-section-x">
          <div className="text-center mb-16">
            <h2 className="type-headline mb-4">Our Ingredients</h2>
            <p className="type-body text-ink-secondary max-w-lg mx-auto">Sourced from the soil, not the laboratory.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12">
            {[
              { name: 'Oud', origin: 'Laos' },
              { name: 'Rose Absolute', origin: 'Bulgaria' },
              { name: 'Bergamot', origin: 'Calabria' },
              { name: 'Vetiver', origin: 'Haiti' },
              { name: 'Sandalwood', origin: 'Australia' },
              { name: 'Iris', origin: 'Florence' }
            ].map((ing, i) => (
              <div key={ing.name} className="flex flex-col items-center text-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-tertiary">
                    <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
                    <path d="M12 22V12" />
                  </svg>
                </div>
                <h4 className="font-display italic text-[20px] mb-1">{ing.name}</h4>
                <p className="type-small text-ink-tertiary uppercase tracking-widest">{ing.origin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-24 bg-surface-deep border-t border-border">
        <div className="max-w-wide mx-auto px-section-x">
          <h2 className="text-center type-headline mb-16">Sustainability</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-border animate-fade-up">
              <h3 className="type-title mb-4">Packaging</h3>
              <p className="type-body text-ink-secondary">Our bottles are made from 100% recycled glass. Our boxes are uncoated, recycled kraft paper. We offer a refill programme for empty bottles.</p>
            </div>
            
            <div className="bg-white p-8 border border-border animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="type-title mb-4">Testing</h3>
              <p className="type-body text-ink-secondary">We do not test on animals. We do not sell in countries that require animal testing by law. All our fragrances are 100% vegan.</p>
            </div>

            <div className="bg-white p-8 border border-border animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="type-title mb-4">Carbon</h3>
              <p className="type-body text-ink-secondary">We offset 100% of the carbon emissions from shipping. We prioritise ocean freight over air freight for our raw materials wherever possible.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
