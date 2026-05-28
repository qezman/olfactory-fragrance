export function PhilosophyStrip() {
  return (
    <section className="bg-ink text-off-white py-24 md:py-32">
      <div className="max-w-wide mx-auto px-section-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-border-strong">
          <div className="pt-8 md:pt-0 text-center md:text-left px-4 animate-on-scroll is-visible">
            <h3 className="type-sub text-gold mb-6">HAND-BLENDED</h3>
            <p className="type-body font-light text-off-white/90">
              Each bottle is mixed by hand at the time of your order. No
              warehousing. No sitting on shelves.
            </p>
          </div>

          <div
            className="pt-16 md:pt-0 text-center md:text-left md:pl-8 lg:pl-16 px-4 animate-on-scroll is-visible"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="type-sub text-gold mb-6">SMALL BATCH</h3>
            <p className="type-body font-light text-off-white/90">
              Limited runs. When a batch ends, it ends. We never compromise on
              raw material quality to meet demand.
            </p>
          </div>

          <div
            className="pt-16 md:pt-0 text-center md:text-left md:pl-8 lg:pl-16 px-4 animate-on-scroll is-visible"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="type-sub text-gold mb-6">SLOW PERFUMERY</h3>
            <p className="type-body font-light text-off-white/90">
              We take no shortcuts. Ingredients are sourced, not manufactured.
              Time is our most important raw material.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
