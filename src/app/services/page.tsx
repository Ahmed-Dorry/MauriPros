import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import ServiceSection from "@/components/DigitalAgency/ServiceSection";
import ChooseUsSection from "@/components/DigitalAgency/common/ChooseUsSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

// all data
import processData from "@/constant/DigitalAgency/process";
import serviceData from "@/constant/DigitalAgency/service";
import infoData from "@/constant/DigitalAgency/info";
import chooseUsData from "@/constant/DigitalAgency/common/choose-us";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the services offered by MauriPros. We specialize in Brand Strategy & Identity, Web & UI Experience, and Marketing & Growth to help your business succeed.",
  keywords: [
    "brand strategy services",
    "web design and development",
    "marketing and growth strategy",
    "UI/UX design services",
    "creative content systems",
    "digital agency services",
  ],
};

const ServicesPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="SERVICES"
            subTitle="What We Do"
            pageName="OUR SERVICES"
          />
          <ProcessSection className="page-services" data={processData} />
          <ServiceSection data={serviceData} />
          <ChooseUsSection data={chooseUsData} />
        </main>
        <FooterSection />
      </SmoothScroll>
    </div>
  );
};
export default ServicesPage;
