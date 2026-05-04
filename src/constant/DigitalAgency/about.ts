export interface ICounter {
  value: number;
  suffix: string;
  label: string;
  delay: string;
}
export interface ICircleImage {
  textImg: string;
  iconImg: string;
  link: string;
}

export interface AboutData {
  subtitle: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  circleImages: ICircleImage;
  mainImage: string;
  counters: ICounter[];
}

export const aboutData: AboutData = {
  subtitle: "Who We Are",
  title: "We Help Businesses Grow",
  description:
    "MauriPros is a B2B marketing and web solutions agency helping businesses grow through strategy, creativity, and performance-driven execution.",
  ctaText: "Learn More",
  ctaLink: "/about",
  circleImages: {
    textImg: "/assets/imgs/shape/shape-2.webp",
    iconImg: "/assets/imgs/shape/shape-3.webp",
    link: "#awards",
  },
  mainImage: "/assets/imgs/gallery/about-home.jpg",
  counters: [
    { value: 3.5, suffix: "k", label: "Completed Projects", delay: "0.30" },
    { value: 25, suffix: "+", label: "Years Of Experience", delay: "0.45" },
    { value: 1.6, suffix: "k", label: "World Wide Clients", delay: "0.60" },
    { value: 22, suffix: "+", label: "Trusted Companies", delay: "0.75" },
  ],
};

export default aboutData;
