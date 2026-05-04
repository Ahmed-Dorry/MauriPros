export interface HeroData {
  subtitle?: string;
  typewriterStrings?: string[];
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  videoUrl?: string;
  shapeImg?: string;
  lines?: string[];
}

const heroData:HeroData = {
  subtitle: "WE CREATE",
  typewriterStrings: [
    "B2B Marketing",
    "Web Solutions",
    "Brand Identity",
  ],
  description:
      "We partner with businesses To drive measurable growth through strategy-led marketing, high-performance websites, and clear execution.",
  button: {
    text: "Contact Us",
    url: "/contact",
  },
  videoUrl:"/videos/hero-video.webm",
  shapeImg: "/assets/imgs/shape/symbol3.svg",
  lines: ["line-1", "line-2", "line-3", "line-4"],
};

export default heroData;
