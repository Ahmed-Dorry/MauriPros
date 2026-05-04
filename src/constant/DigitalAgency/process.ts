export interface IProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface ProcessData {
  sectionSubtitle: string;
  sectionTitle: string;
  ctaText: string;
  ctaLink: string;
  steps: IProcessStep[];
}

const processData: ProcessData = {
  sectionSubtitle: "Our Strategy",
  sectionTitle: "Our work process",
  ctaText: "Contact Us",
  ctaLink: "/contact",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discover",
      description: "Understand business, market, and objectives.",
      image: "/assets/imgs/icon/icon1.png",
    },
    {
      id: 2,
      number: "02",
      title: "Plan",
      description: "Define strategy, messaging, and execution roadmap.",
      image: "/assets/imgs/icon/icon2.png",
    },
    {
      id: 3,
      number: "03",
      title: "Build",
      description: "Design, content, and development aligned to goals.",
      image: "/assets/imgs/icon/icon3.png",
    },
    {
      id: 4,
      number: "04",
      title: "Launch & Optimize",
      description: "Deploy with confidence, measure, and refine.",
      image: "/assets/imgs/icon/icon4.png",
    },
  ],
};

export default processData;
