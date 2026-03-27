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

const blogData:BlogData = {
  section: {
    subtitle: "Our Clients",
    title: "Who We Work With",
    buttonText: "Contact Us",
    buttonUrl: "/contact",
  },
  posts: [
    {
      id: 1,
      tag: "BRANDING",
      image: "/assets/imgs/blog/blog1.jpeg",
      date: "Growing Businesses",
      title: "Companies ready to scale their marketing efforts.",
      url: "/contact",
    },
    {
      id: 2,
      tag: "DESIGN",
      image: "/assets/imgs/blog/blog2.jpeg",
      date: "Service-Based Brands",
      title: "Professional services that rely on trust and visibility.",
      url: "/contact",
    },
    {
      id: 3,
      tag: "MARKETING",
      image: "/assets/imgs/blog/blog3-new.jpg",
      date: "Marketing Teams",
      title: "Teams that need a reliable execution partner.",
      url: "/contact",
    },
  ],
};

export default blogData;
