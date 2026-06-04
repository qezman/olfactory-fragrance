import { notFound } from "next/navigation";
import { FragranceDetail } from "@/components/fragrance/fragrance-detail";
import { getFragrance, getFragrances } from "@/lib/api/fragrance-api";

interface FragranceDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function FragranceDetailPage({
  params,
}: FragranceDetailPageProps) {
  const [fragrance, fragrances] = await Promise.all([
    getFragrance(params.slug),
    getFragrances(),
  ]);

  if (!fragrance) {
    notFound();
  }

  const related = fragrances
    .filter((candidate) => candidate.slug !== fragrance.slug)
    .slice(0, 4);

  return <FragranceDetail fragrance={fragrance} related={related} />;
}
