"use client";

import { useMemo } from "react";
import { FragranceCard } from "@/components/fragrance/fragrance-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { useFilter } from "@/hooks/use-filter";
import { Fragrance } from "@/types/fragrance";

interface FragranceCollectionProps {
  fragrances: Fragrance[];
}

export function FragranceCollection({ fragrances }: FragranceCollectionProps) {
  const { family, sort } = useFilter();

  const filteredFragrances = useMemo(() => {
    let result = [...fragrances];

    if (family !== "all") {
      result = result.filter((fragrance) =>
        fragrance.family.includes(family),
      );
    }

    switch (sort) {
      case "price-asc":
        result.sort(
          (a, b) =>
            Math.min(...a.sizes.map((size) => size.price)) -
            Math.min(...b.sizes.map((size) => size.price)),
        );
        break;
      case "price-desc":
        result.sort(
          (a, b) =>
            Math.min(...b.sizes.map((size) => size.price)) -
            Math.min(...a.sizes.map((size) => size.price)),
        );
        break;
      case "newest":
        result.sort((a, b) =>
          a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1,
        );
        break;
      case "bestsellers":
        result.sort((a, b) =>
          a.isBestseller === b.isBestseller ? 0 : a.isBestseller ? -1 : 1,
        );
        break;
      case "featured":
      default:
        break;
    }

    return result;
  }, [family, fragrances, sort]);

  return (
    <>
      <FilterBar />

      <section className="py-16 md:py-24 min-h-[50vh]">
        <div className="max-w-wide mx-auto px-section-x">
          {filteredFragrances.length === 0 ? (
            <div className="text-center py-20 animate-fade-up">
              <p className="type-body text-ink-secondary">
                No fragrances found for this filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">
              {filteredFragrances.map((fragrance, index) => (
                <div
                  key={`${fragrance.slug}-${family}-${sort}`}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <FragranceCard fragrance={fragrance} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
