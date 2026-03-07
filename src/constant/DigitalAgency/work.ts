export interface ICapability {
  id: number;
  number: string;
  title: string;
  description: string;
  includes: string[];
  ctaText: string;
  ctaLink: string;
  image: string; // Reusing existing image paths
}

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  capabilities: ICapability[]; // Changed from projects to capabilities
}

const workData: WorkData = {
  sectionSubtitle: "Our Capabilities",
  sectionTitle: "What We Help Brands Achieve",
  capabilities: [
    {
      id: 1,
      number: "03/",
      title: "Web & UI Experience",
      description:
          "Conversion-focused websites and interfaces designed to look premium and perform across all devices.",
      includes: [
        "Website design",
        "Landing pages",
        "UX/UI design",
        "No-code & custom builds",
      ],
      ctaText: "Explore Web Design",
      ctaLink: "/services/web-design",
      image: "/assets/imgs/project/project-3.png", // Reusing existing image
    },
    {
      id: 2,
      number: "02/",
      title: "Marketing & Growth",
      description:
        "Strategic marketing solutions built to attract, convert, and scale — not just look good.",
      includes: [
        "Digital campaigns",
        "Content strategy",
        "Funnel design",
        "Performance optimization",
      ],
      ctaText: "Explore Marketing",
      ctaLink: "/services/review-marketing", // Example link
      image: "/assets/imgs/project/project-2.png", // Reusing existing image
    },
    {
      id: 3,
      number: "04/",
      title: "Creative Direction & Content",
      description:
        "Strong visuals and clear direction that keep brands consistent across every touchpoint.",
      includes: [
        "Creative direction",
        "Social content systems",
        "Ad creatives",
        "Brand assets",
      ],
      ctaText: "Explore Creative",
      ctaLink: "/services/graphic-design", // Example link
      image: "/assets/imgs/project/project-4.png", // Reusing existing image
    },
    {
      id: 4,
      number: "01/",
      title: "Brand Identity & Strategy",
      description:
          "We build clear, scalable brand systems — from positioning and messaging to visual identity and guidelines.",
      includes: [
        "Brand positioning",
        "Logo & visual systems",
        "Brand guidelines",
        "Tone of voice",
      ],
      ctaText: "Explore Branding",
      ctaLink: "/services/branding", // Example linka
      image: "/assets/imgs/project/project-1.png", // Reusing existing image
    },
  ],
};

export default workData;
