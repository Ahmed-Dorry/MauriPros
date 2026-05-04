export interface IBlog {
  id: number;
  tag: string;
  image: string;
  date: string;
  title: string;
  url: string;
}

export interface BlogData {
  section: {
    subtitle: string;
    title: string;
    buttonText: string;
    buttonUrl: string;
  };
  posts: IBlog[];
}