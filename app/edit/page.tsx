import { EditorialCard } from "@/components/editorial/editorial-card";
import { getArticles } from "@/lib/api/article-api";

export const metadata = {
  title: "The Edit | Olfactory",
  description: "On fragrance, memory, and the art of slowness.",
};

export default async function EditIndexPage() {
  const articles = await getArticles();
  const [featuredArticle, ...remainingArticles] = articles;

  return (
    <div className="bg-off-white min-h-screen">
      <div className="pt-24 pb-16 text-center px-section-x">
        <span className="type-sub text-gold mb-4 block">THE EDIT</span>
        <h1 className="font-display italic text-display mb-4">
          On fragrance, memory,
          <br className="hidden md:block" /> and the art of slowness.
        </h1>
      </div>

      <div className="max-w-wide mx-auto px-section-x pb-32">
        {featuredArticle && (
          <div className="mb-16 md:mb-24 animate-fade-up">
            <EditorialCard article={featuredArticle} featured={true} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {remainingArticles.map((article, index) => (
            <div
              key={article.slug}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <EditorialCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
