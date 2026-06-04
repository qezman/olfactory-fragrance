import {
  discoverySets as fallbackDiscoverySets,
  getSetBySlug,
} from "@/lib/mock-data/sets";
import { apiRequest } from "@/lib/api/api-client";
import { DiscoverySet } from "@/types/editorial";

export async function getDiscoverySets(): Promise<DiscoverySet[]> {
  try {
    return await apiRequest<DiscoverySet[]>("/discovery-sets");
  } catch {
    return fallbackDiscoverySets;
  }
}

export async function getDiscoverySet(
  slug: string,
): Promise<DiscoverySet | undefined> {
  try {
    return await apiRequest<DiscoverySet>(`/discovery-sets/${slug}`);
  } catch {
    return getSetBySlug(slug);
  }
}
