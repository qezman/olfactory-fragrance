import { HowItWears as HowItWearsType } from "@/types/fragrance";

interface HowItWearsProps {
  data: HowItWearsType;
}

export function HowItWears({ data }: HowItWearsProps) {
  return (
    <div className="w-full max-w-wide mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Stage 1 */}
        <div className="relative">
          <div className="hidden md:block absolute top-[11px] left-1/2 right-[-50%] h-px bg-border -z-10" />
          <div className="w-6 h-6 rounded-full border-4 border-off-white bg-gold mx-auto md:mx-0 mb-6" />
          <div className="text-center md:text-left">
            <span className="type-small text-ink-tertiary uppercase tracking-widest block mb-2">
              0–30 min
            </span>
            <h4 className="font-display italic text-[24px] mb-4">
              The Opening
            </h4>
            <p className="type-body text-ink-secondary">{data.opening}</p>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="relative">
          <div className="hidden md:block absolute top-[11px] left-[-50%] right-[-50%] h-px bg-border -z-10" />
          <div className="w-6 h-6 rounded-full border-4 border-off-white bg-border-strong mx-auto md:mx-0 mb-6" />
          <div className="text-center md:text-left">
            <span className="type-small text-ink-tertiary uppercase tracking-widest block mb-2">
              30 min–3 hrs
            </span>
            <h4 className="font-display italic text-[24px] mb-4">The Heart</h4>
            <p className="type-body text-ink-secondary">{data.heart}</p>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="relative">
          <div className="hidden md:block absolute top-[11px] left-[-50%] right-1/2 h-px bg-border -z-10" />
          <div className="w-6 h-6 rounded-full border-4 border-off-white bg-border-strong mx-auto md:mx-0 mb-6" />
          <div className="text-center md:text-left">
            <span className="type-small text-ink-tertiary uppercase tracking-widest block mb-2">
              3+ hrs
            </span>
            <h4 className="font-display italic text-[24px] mb-4">
              The Dry-down
            </h4>
            <p className="type-body text-ink-secondary">{data.drydown}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
