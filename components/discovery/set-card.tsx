import { DiscoverySet } from "@/types/editorial";
import { formatPrice } from "@/lib/utils/format-price";
import { GhostButton } from "@/components/ui/ghost-button";

interface SetCardProps {
  set: DiscoverySet;
}

export function SetCard({ set }: SetCardProps) {
  return (
    <div className="group block border border-border bg-white flex flex-col h-full animate-on-scroll is-visible">
      <div className="aspect-square bg-surface overflow-hidden relative">
        <div className="absolute inset-0 bg-surface-deep transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] flex items-center justify-center">
          <img
            src={set.image}
            alt={set.name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-display italic text-[28px] mb-2">{set.name}</h3>
        <p className="type-body text-ink-secondary mb-8 flex-1">
          {set.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="type-body font-medium">
            {formatPrice(set.price)}
          </span>
          <GhostButton className="px-6 py-2.5">ADD TO BAG</GhostButton>
        </div>
      </div>
    </div>
  );
}
