export interface News {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  image: string;
  language: string;
  category: string[];
  published: Date;
}

export interface GetNewsResponse {
  status: string;
  news: News[];
}
