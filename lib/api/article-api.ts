import {
  articles as fallbackArticles,
  getArticleBySlug,
} from "@/lib/mock-data/articles";
import { apiRequest } from "@/lib/api/api-client";
import { ArticleCategory, EditorialArticle } from "@/types/editorial";

export async function getArticles(
  category?: ArticleCategory,
): Promise<EditorialArticle[]> {
  const query = category ? `?category=${encodeURIComponent(category)}` : "";

  try {
    return await apiRequest<EditorialArticle[]>(`/articles${query}`);
  } catch {
    return category
      ? fallbackArticles.filter((article) => article.category === category)
      : fallbackArticles;
  }
}

export async function getArticle(
  slug: string,
): Promise<EditorialArticle | undefined> {
  try {
    return await apiRequest<EditorialArticle>(`/articles/${slug}`);
  } catch {
    return getArticleBySlug(slug);
  }
}
