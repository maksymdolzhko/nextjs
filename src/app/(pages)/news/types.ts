export interface INewsData {
  data: INews[];
}
export interface INews {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: INewsCategory;
  author: INewsAuthor;
};

export interface INewsCategory {
  title: string;
  href: string;
};

export interface INewsAuthor {
  name: string;
  role: string;
  href: string;
  imageUrl: string;
};
