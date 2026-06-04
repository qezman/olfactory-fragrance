import {
  fragrances as fallbackFragrances,
  getFragranceBySlug,
} from "@/lib/mock-data/fragrances";
import { apiRequest } from "@/lib/api/api-client";
import { Fragrance, ScentFamily } from "@/types/fragrance";

interface FragranceFilters {
  family?: ScentFamily;
  isBestseller?: boolean;
  isNew?: boolean;
}

function buildFragranceQuery(filters: FragranceFilters): string {
  const params = new URLSearchParams();

  if (filters.family) params.set("family", filters.family);
  if (typeof filters.isBestseller === "boolean") {
    params.set("isBestseller", String(filters.isBestseller));
  }
  if (typeof filters.isNew === "boolean") {
    params.set("isNew", String(filters.isNew));
  }

  return params.size > 0 ? `?${params.toString()}` : "";
}

export async function getFragrances(
  filters: FragranceFilters = {},
): Promise<Fragrance[]> {
  try {
    return await apiRequest<Fragrance[]>(
      `/fragrances${buildFragranceQuery(filters)}`,
    );
  } catch {
    return fallbackFragrances.filter((fragrance) => {
      const matchesFamily = filters.family
        ? fragrance.family.includes(filters.family)
        : true;
      const matchesBestseller = typeof filters.isBestseller === "boolean"
        ? fragrance.isBestseller === filters.isBestseller
        : true;
      const matchesNew = typeof filters.isNew === "boolean"
        ? fragrance.isNew === filters.isNew
        : true;

      return matchesFamily && matchesBestseller && matchesNew;
    });
  }
}

export async function getFragrance(slug: string): Promise<Fragrance | undefined> {
  try {
    return await apiRequest<Fragrance>(`/fragrances/${slug}`);
  } catch {
    return getFragranceBySlug(slug);
  }
}
