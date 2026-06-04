import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialCard } from "@/components/editorial/editorial-card";
import { FragranceCard } from "@/components/fragrance/fragrance-card";
import { getArticle, getArticles } from "@/lib/api/article-api";
import { getFragrances } from "@/lib/api/fragrance-api";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const [article, articles, fragrances] = await Promise.all([
    getArticle(params.slug),
    getArticles(),
    getFragrances(),
  ]);

  if (!article) {
    notFound();
  }

  const relatedFragrances = fragrances.filter((fragrance) =>
    article.relatedFragrances.includes(fragrance.slug),
  );
  const readNext = articles
    .filter((candidate) => candidate.slug !== article.slug)
    .slice(0, 2);

  return (
    <article className="bg-off-white min-h-screen pb-32">
      <div className="w-full h-[50vh] md:h-[70vh] bg-surface relative overflow-hidden mb-16 md:mb-24">
        <div className="absolute inset-0 bg-surface-deep">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-narrow mx-auto px-section-x">
        <header className="text-center mb-16 animate-fade-up">
          <span className="type-sub text-gold mb-6 block uppercase">
            {article.category}
          </span>
          <h1 className="font-display italic text-[clamp(40px,6vw,64px)] leading-tight mb-8">
            {article.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 type-small text-ink-tertiary">
            <span>By {article.author}</span>
            <span>â€¢</span>
            <span>
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>â€¢</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg mx-auto type-body text-[17px] leading-[1.9] text-ink-secondary mb-24">
          <p className="first-letter:text-7xl first-letter:font-display first-letter:text-ink first-letter:mr-3 first-letter:float-left first-letter:italic">
            {article.body[0]}
          </p>

          {article.body.slice(1, 2).map((paragraph) => (
            <p key={paragraph} className="mb-8">
              {paragraph}
            </p>
          ))}

          <blockquote className="my-16 pl-8 border-l border-gold font-display italic text-[28px] text-ink leading-tight">
            "{article.excerpt}"
          </blockquote>

          {article.body.slice(2).map((paragraph) => (
            <p key={paragraph} className="mb-8">
              {paragraph}
            </p>
          ))}
        </div>

        {relatedFragrances.length > 0 && (
          <div className="my-24 pt-16 border-t border-border">
            <h3 className="type-sub text-ink-tertiary mb-8 text-center">
              FRAGRANCES MENTIONED
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedFragrances.map((fragrance) => (
                <FragranceCard key={fragrance.slug} fragrance={fragrance} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-wide mx-auto px-section-x mt-32 pt-24 border-t border-border">
        <h3 className="font-display italic text-[32px] mb-12 text-center">
          Read Next
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {readNext.map((candidate) => (
            <EditorialCard key={candidate.slug} article={candidate} />
          ))}
        </div>
      </div>
    </article>
  );
}
