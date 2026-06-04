"use client";

import { useFilter } from "@/hooks/use-filter";
import { cn } from "@/lib/utils/cn";
import { FragranceFamilyFilter, SortOption } from "@/store/filter-store";

const FAMILIES: { label: string; value: FragranceFamilyFilter }[] = [
  { label: "All", value: "all" },
  { label: "Woody", value: "woody" },
  { label: "Floral", value: "floral" },
  { label: "Citrus", value: "citrus" },
  { label: "Amber", value: "amber" },
  { label: "Fresh", value: "fresh" },
  { label: "Gourmand", value: "gourmand" },
];

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Sort: Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
  { label: "Bestsellers", value: "bestsellers" },
];

export function FilterBar() {
  const { family, sort, setFamily, setSort } = useFilter();

  return (
    <div className="sticky top-[60px] z-30 w-full bg-off-white/90 backdrop-blur-md border-b border-border py-4">
      <div className="max-w-content mx-auto px-section-x flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Horizontal scroll on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide -mx-section-x px-section-x md:mx-0 md:px-0">
          {FAMILIES.map((f) => (
            <button
              key={f.value}
              onClick={() => setFamily(f.value)}
              className={cn(
                "whitespace-nowrap px-4 py-2 rounded-full border transition-all duration-250 type-small uppercase tracking-wider",
                family === f.value
                  ? "border-gold bg-gold text-white"
                  : "border-border text-ink-secondary hover:border-border-strong hover:text-ink",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center self-end md:self-auto">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="bg-transparent type-body text-ink outline-none cursor-pointer border-b border-border-strong pb-1 focus:border-gold"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
