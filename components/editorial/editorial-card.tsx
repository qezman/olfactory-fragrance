import Link from 'next/link';
import { EditorialArticle } from '@/types/editorial';
import { cn } from '@/lib/utils/cn';

interface EditorialCardProps {
  article: EditorialArticle;
  featured?: boolean;
}

export function EditorialCard({ article, featured = false }: EditorialCardProps) {
  return (
    <Link href={`/edit/${article.slug}`} className="group block h-full">
      <article className="flex flex-col h-full">
        {/* Image */}
        <div className={cn(
          "relative bg-surface overflow-hidden mb-6",
          featured
            ? "mx-auto max-w-5xl aspect-[4/3] md:aspect-[16/9] lg:aspect-[5/2]"
            : "aspect-[3/4] md:aspect-[4/5]"
        )}>
          <div className={cn(
            "absolute inset-0 bg-surface-deep transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] flex items-center justify-center",
            featured && "p-4 md:p-6"
          )}>
            <img
              src={article.image}
              alt={article.title}
              className={cn(
                "h-full w-full",
                featured ? "object-contain" : "object-cover"
              )}
            />
          </div>
        </div>

        {/* Content */}
        <div className={cn(
          "flex flex-col flex-1",
          featured && "mx-auto w-full max-w-5xl"
        )}>
          <div className="flex items-center justify-between mb-4">
            <span className="type-small text-gold uppercase tracking-widest">{article.category}</span>
            <span className="type-small text-ink-tertiary">{article.readTime}</span>
          </div>

          <h3 className={cn(
            "font-display italic leading-tight mb-4 group-hover:text-gold transition-colors",
            featured ? "text-[32px] md:text-[48px]" : "text-[24px] md:text-[28px]"
          )}>
            {article.title}
          </h3>

          <p className="type-body text-ink-secondary line-clamp-2 mb-6 flex-1">
            {article.excerpt}
          </p>

          <p className="type-small text-ink-tertiary mt-auto">
            {new Date(article.date).toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </article>
    </Link>
  );
}
