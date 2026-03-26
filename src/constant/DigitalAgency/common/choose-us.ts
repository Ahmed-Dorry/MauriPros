
export interface IFeature {
    id:number;
    img:string;
    title:string;
    text:string;
}

export interface IChooseUs {
    subtitle:string;
    title:string;
    image:string;
    features: IFeature[];
}

const chooseUsData:IChooseUs = {
  subtitle: "Why Choose Us",
  title: "Why Businesses Work With MauriPros",
  image: "/assets/imgs/gallery/about-home.jpg",
  features: [
    {
      id: 1,
      img: "/assets/imgs/shape/shape-37.webp",
      title: "Outcome Focused",
      text: "Focused on business outcomes, not vanity metrics"
    },
    {
      id: 2,
      img: "/assets/imgs/shape/shape-38.webp",
      title: "Structured Delivery",
      text: "Clear communication and structured delivery"
    },
    {
      id: 3,
      img: "/assets/imgs/shape/shape-39.webp",
      title: "Scalable Solutions",
      text: "Scalable solutions that grow with your business."
    },
    {
      id: 4,
      img: "/assets/imgs/shape/shape-39.webp",
      title: "Long-term Partnership",
      text: "Long-term partnership mindset"
    }
  ]
};

export default chooseUsData;
