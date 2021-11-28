export type article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type articles = article[];

export interface IArticle {
  article: article;
}

export interface IArticles {
  articles: article[];
}
export interface IArticlesAndCount {
  articles: article[];
  articlesCount: number;
}

export interface IMeta {
  title?: string;
  keywords?: string;
  description?: string;
}
