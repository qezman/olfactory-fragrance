import Link from 'next/link';
import { EditorialCard } from '@/components/editorial/editorial-card';
import { articles } from '@/lib/mock-data/articles';

export function EditPreview() {
  const previewArticles = articles.slice(0, 3);

  return (
    <section className="py-section-y bg-off-white border-b border-border">
      <div className="max-w-wide mx-auto px-section-x">
        
        <div className="text-center mb-16 md:mb-24 animate-on-scroll is-visible">
          <span className="type-sub text-gold mb-4 block">THE EDIT</span>
          <h2 className="type-headline">On fragrance, memory,<br className="hidden md:block"/> and the spaces between.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mb-20">
          {previewArticles.map((article, index) => (
            <div key={article.slug} className="animate-on-scroll is-visible" style={{ animationDelay: `${index * 0.1}s` }}>
              <EditorialCard article={article} />
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll is-visible">
          <Link href="/edit" className="type-sub text-ink hover:text-gold transition-colors inline-flex items-center gap-2">
            READ ALL STORIES <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
