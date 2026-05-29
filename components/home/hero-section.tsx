import Link from "next/link";
import { GhostButton } from "@/components/ui/ghost-button";
import { GoldButton } from "@/components/ui/gold-button";
import PerfumeHeroImage from "./perfume-heroimage";

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex flex-col md:flex-row border-b border-border md:py-16 md:my-4 lg:py-20">
      {/* Text Content */}
      <div className="w-full md:w-[60%] flex flex-col justify-center px-section-x py-16 md:py-0 bg-off-white z-10 animate-fade-up">
        <div className="max-w-xl mx-auto md:ml-auto md:mr-16 lg:mr-32 w-full">
          <span className="type-sub text-gold mb-6 block">
            NEW SEASON COLLECTION
          </span>

          <h1 className="font-display italic text-[clamp(56px,8vw,100px)] leading-[0.9] tracking-[-0.02em] mb-8">
            The art of
            <br />
            memory,
            <br />
            distilled.
          </h1>

          <p className="type-body text-ink-secondary max-w-[420px] mb-12 text-[17px] leading-relaxed">
            Twelve fragrances. Each one a moment frozen in scent. Hand-blended
            in small batches. Delivered to your door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/fragrances">
              <GoldButton fullWidth>EXPLORE COLLECTION</GoldButton>
            </Link>
            <Link href="/discovery">
              <GhostButton fullWidth>DISCOVER YOUR SCENT</GhostButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: Image beneath text */}
      <div className="md:hidden w-full h-[58vh] overflow-hidden">
        <PerfumeHeroImage />
      </div>

      {/* Desktop: Image on right */}
      <div className="hidden md:block w-[40%] min-h-[72vh] overflow-hidden">
        <PerfumeHeroImage />
      </div>
    </section>
  );
}
