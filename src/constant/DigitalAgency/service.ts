export interface IService {
  id: number;
  title: string;
  number: string;
  image: string;
  description: string;
  detailsLink: string;
  items: string[];
  itemLink: string;
}

export interface ServiceData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  services: IService[];
}
const serviceData = {
  sectionSubtitle: "Our Services",
  sectionTitle: "What we offer to you",
  viewAllText: "Explore All Services",
  viewAllLink: "/services",
  services: [
    {
      id: 1,
      title: "Web Design",
      number: "(01)",
      image: "/assets/imgs/shape/symbol6.svg",
      description: "Modern, responsive websites that convert visitors into customers.",
      detailsLink: "/services/web-design",
      items: [
        "1. UX/UI & Website Design",
        "2. Mobile-First Development",
        "3. Performance Optimization",
      ],
      itemLink: "/services/web-design",
    },
    {
      id: 2,
      title: "Social Media Solutions",
      number: "(02)",
      image: "/assets/imgs/shape/symbol2.svg",
      description: "Build a strong brand and turn followers into customers across platforms.",
      detailsLink: "/services/social-media",
      items: [
        "1. Content Strategy & Planning",
        "2. Branded Post Designs",
        "3. Community Management",
      ],
      itemLink: "/services/social-media",
    },
    {
      id: 3,
      title: "Branding",
      number: "(03)",
      image: "/assets/imgs/shape/symbol4.svg",
      description: "Build a brand people recognize, trust, and remember.",
      detailsLink: "/services/branding",
      items: [
        "1. Brand Strategy & Positioning",
        "2. Logo & Visual Identity",
        "3. Brand Guidelines",
      ],
      itemLink: "/services/branding",
    },
    {
      id: 4,
      title: "SEO Optimization",
      number: "(04)",
      image: "/assets/imgs/shape/symbol1.svg",
      description: "Be found by the right customers at the right time with strategic SEO.",
      detailsLink: "/services/seo",
      items: [
        "1. Keyword Research & Strategy",
        "2. On-Page & Technical SEO",
        "3. Local SEO & Google Business",
      ],
      itemLink: "/services/seo",
    },
  ],
};

export default serviceData;
