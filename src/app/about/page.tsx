import { ReactElement } from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import AboutSection from "@/components/DigitalAgency/AboutSection";
import OurStoryVideoSection from "@/components/DigitalAgency/OurStoryVideoSection";
import WhatWeDoSection from "@/components/DigitalAgency/WhatWeDoSection";
import MissionVisionSection from "@/components/DigitalAgency/MissionVisionSection";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import IdealClientsSection from "@/components/DigitalAgency/IdealClientsSection";
import FinalCTASection from "@/components/DigitalAgency/FinalCTASection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

// component data
import {
    aboutIntroData,
    ourStoryData,
    whatWeDoData,
    missionVisionData,
    processData,
    whyChooseUsData,
    ctaData
} from "@/constant/DigitalAgency/newAboutData";

export const metadata: Metadata = {
    title: "About MauriPros",
    description:
        "Learn about MauriPros, a creative digital agency dedicated to helping brands grow. Discover our mission, our approach, and the team that makes it all happen.",
    keywords: [
        "about MauriPros",
        "digital agency mission",
        "creative agency team",
        "brand strategy experts",
        "marketing and design firm",
    ],
};

const AboutPage = (): ReactElement => {
    return (
        <div className="body-wrapper body-inner-page">
            <Header />
            <SmoothScroll>
                <main>
                    <Breadcrumb title="ABOUT" subTitle="MauriPros" pageName="ABOUT MauriPros" />
                    <AboutSection className="page-about" data={aboutIntroData} />
                    <OurStoryVideoSection data={ourStoryData} />
                    <WhatWeDoSection data={whatWeDoData} />
                    <MissionVisionSection data={missionVisionData} />
                    <ProcessSection className="page-services" data={processData} />
                    <IdealClientsSection data={whyChooseUsData} />
                    <FinalCTASection data={ctaData} />
                </main>
                <FooterSection />
            </SmoothScroll>
        </div>
    );
};
export default AboutPage;
