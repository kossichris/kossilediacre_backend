import { ArticleEntity } from '../article.entity';
import { ArticleType } from './article.type';

export interface ArticlesAndCountResponsesInterface {
  articles: ArticleType[];
  articlesCount?: number;
}

export interface ArticleResponseInterface {
  article: ArticleEntity;
}
