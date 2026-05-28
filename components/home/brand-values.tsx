export function BrandValues() {
  return (
    <section className="py-24 md:py-32 border-b border-border bg-white">
      <div className="max-w-content mx-auto px-section-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          
          <div className="animate-on-scroll is-visible">
            <span className="type-sub text-gold mb-6 block">01</span>
            <h3 className="type-title mb-4">ORIGIN</h3>
            <p className="type-body text-ink-secondary">
              Grasse, France. The historical capital of perfumery, where our essential oils are extracted.
            </p>
          </div>

          <div className="animate-on-scroll is-visible" style={{ animationDelay: '0.1s' }}>
            <span className="type-sub text-gold mb-6 block">02</span>
            <h3 className="type-title mb-4">CRAFT</h3>
            <p className="type-body text-ink-secondary">
              Hand-blended per order. Your bottle is mixed the day before it ships.
            </p>
          </div>

          <div className="animate-on-scroll is-visible" style={{ animationDelay: '0.2s' }}>
            <span className="type-sub text-gold mb-6 block">03</span>
            <h3 className="type-title mb-4">QUANTITY</h3>
            <p className="type-body text-ink-secondary">
              Each run under 500 units. When an ingredient harvest is exhausted, we wait for the next.
            </p>
          </div>

          <div className="animate-on-scroll is-visible" style={{ animationDelay: '0.3s' }}>
            <span className="type-sub text-gold mb-6 block">04</span>
            <h3 className="type-title mb-4">ETHICS</h3>
            <p className="type-body text-ink-secondary">
              No animal testing. Ever. 100% recycled glass bottles and sustainable packaging.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
