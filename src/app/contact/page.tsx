import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import ChooseUsSection from "@/components/DigitalAgency/common/ChooseUsSection";
import ContactSection from "@/components/DigitalAgency/Contact/ContactSection";
import Header from "@/components/DigitalAgency/common/Header";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

// all data
import contactData from "@/constant/DigitalAgency/Contact/contact";
import chooseUsData from "@/constant/DigitalAgency/common/choose-us";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to start a project or have a question? Contact MauriPros today. Fill out our form, send us an email, or book a call. Let's build something great together.",
  keywords: [
    "contact MauriPros",
    "get a quote",
    "Contact us",
    "digital agency contact",
    "brand strategy inquiry",
    "web design contact",
  ],
};

const ContactPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="CONTACT"
            subTitle="Get in Touch"
            pageName="CONTACT US"
          />
          <ContactSection data={contactData} />
          <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
        </main>
        <FooterSection />
      </SmoothScroll>
    </div>
  );
};
export default ContactPage;
