import Link from "next/link";
import { GhostButton } from "@/components/ui/ghost-button";

export function SignatureFeature() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[80vh] border-b border-border">
      {/* Image Half */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-full bg-surface relative overflow-hidden order-2 lg:order-1">
        <div className="absolute inset-0 bg-surface-deep">
          <img
            src="/images/cedar-01.jpg"
            alt="CEDAR 08 fragrance bottle"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content Half */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-section-x py-section-y order-1 lg:order-2 bg-white">
        <div className="max-w-md mx-auto w-full animate-on-scroll is-visible">
          <span className="type-sub text-gold mb-8 block">
            THIS SEASON'S SIGNATURE
          </span>

          <h2 className="font-display italic text-[48px] mb-2 leading-tight">
            CEDAR 08
          </h2>
          <p className="type-small text-ink-tertiary uppercase tracking-widest mb-10">
            Woody · Amber · Musky
          </p>

          <div className="space-y-4 mb-10 border-l border-gold pl-6 py-2">
            <div>
              <span className="type-small text-ink-tertiary uppercase w-24 inline-block">
                Top notes:
              </span>
              <span className="type-body">Bergamot, Pink pepper, Cardamom</span>
            </div>
            <div>
              <span className="type-small text-ink-tertiary uppercase w-24 inline-block">
                Heart notes:
              </span>
              <span className="type-body">Oud, Rose absolute, Iris</span>
            </div>
            <div>
              <span className="type-small text-ink-tertiary uppercase w-24 inline-block">
                Base notes:
              </span>
              <span className="type-body">Sandalwood, Amber, White musk</span>
            </div>
          </div>

          <p className="type-body text-ink-secondary mb-10 text-[17px] leading-relaxed">
            CEDAR 08 was born in a Norwegian forest at dusk — the smell of wet
            bark, woodsmoke from a cabin two kilometres away, and the particular
            quiet that only snow brings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <span className="type-body w-full sm:w-auto text-center sm:text-left sm:pr-6">
              From £85
            </span>
            <Link href="/fragrances/cedar-08" className="w-full sm:w-auto">
              <GhostButton fullWidth>VIEW FRAGRANCE</GhostButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
