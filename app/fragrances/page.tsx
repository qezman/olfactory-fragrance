import { FragranceCollection } from "@/components/fragrance/fragrance-collection";
import { getFragrances } from "@/lib/api/fragrance-api";

export const metadata = {
  title: "The Collection | Olfactory",
  description: "Twelve fragrances. Each one a study in restraint.",
};

export default async function FragrancesPage() {
  const fragrances = await getFragrances();

  return (
    <>
      <div className="bg-off-white pt-24 pb-16 text-center px-section-x">
        <h1 className="font-display italic text-display mb-4">The Collection</h1>
        <p className="type-body text-ink-secondary max-w-md mx-auto">
          Twelve fragrances. Each one a study in restraint.
        </p>
      </div>

      <FragranceCollection fragrances={fragrances} />
    </>
  );
}
