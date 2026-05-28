import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, articles } from '@/lib/mock-data/articles';
import { getFragranceBySlug } from '@/lib/mock-data/fragrances';
import { FragranceCard } from '@/components/fragrance/fragrance-card';
import { EditorialCard } from '@/components/editorial/editorial-card';
import { Fragrance } from '@/types/fragrance';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  const relatedFrags = article.relatedFragrances
    .map(getFragranceBySlug)
    .filter((fragrance): fragrance is Fragrance => Boolean(fragrance));

  const readNext = articles
    .filter(a => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <article className="bg-off-white min-h-screen pb-32">
      
      {/* Hero Image */}
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
        {/* Header */}
        <header className="text-center mb-16 animate-fade-up">
          <span className="type-sub text-gold mb-6 block uppercase">{article.category}</span>
          <h1 className="font-display italic text-[clamp(40px,6vw,64px)] leading-tight mb-8">
            {article.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 type-small text-ink-tertiary">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-lg mx-auto type-body text-[17px] leading-[1.9] text-ink-secondary mb-24">
          <p className="first-letter:text-7xl first-letter:font-display first-letter:text-ink first-letter:mr-3 first-letter:float-left first-letter:italic">
            {article.body[0]}
          </p>
          
          {article.body.slice(1, 2).map((paragraph, i) => (
            <p key={i} className="mb-8">{paragraph}</p>
          ))}

          {/* Pull Quote */}
          <blockquote className="my-16 pl-8 border-l border-gold font-display italic text-[28px] text-ink leading-tight">
            "{article.excerpt}"
          </blockquote>

          {article.body.slice(2).map((paragraph, i) => (
            <p key={i} className="mb-8">{paragraph}</p>
          ))}
        </div>

        {/* Inline Products */}
        {relatedFrags.length > 0 && (
          <div className="my-24 pt-16 border-t border-border">
            <h3 className="type-sub text-ink-tertiary mb-8 text-center">FRAGRANCES MENTIONED</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedFrags.map((frag) => (
                <FragranceCard key={frag.slug} fragrance={frag} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Read Next */}
      <div className="max-w-wide mx-auto px-section-x mt-32 pt-24 border-t border-border">
        <h3 className="font-display italic text-[32px] mb-12 text-center">Read Next</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {readNext.map((a) => (
            <EditorialCard key={a.slug} article={a} />
          ))}
        </div>
      </div>

    </article>
  );
}
