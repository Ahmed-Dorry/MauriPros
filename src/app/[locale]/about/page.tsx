import { ReactElement } from "react";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from 'next-intl/server';
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
import NoSSR from "@/components/NoSSR";

// استيراد البيانات الأصلية (عشان الصور والروابط)
import {
    aboutIntroData,
    ourStoryData,
    whatWeDoData,
    missionVisionData,
    processData,
    whyChooseUsData,
    ctaData
} from "@/constant/DigitalAgency/newAboutData";

import { FooterData } from "@/constant/DigitalAgency/footer";

export const metadata: Metadata = {
    title: "About MauriPros",
    description: "Learn about MauriPros, a creative digital agency.",
};

export default async function AboutPage(props: { 
  params: Promise<{ locale: string }> 
}): Promise<ReactElement> {
    
    const { locale } = await props.params;
    setRequestLocale(locale);

    // 1. ترجمة Breadcrumb
    const tBread = await getTranslations('Breadcrumb');

    // 2. ترجمة OurStoryVideoSection
    const tStory = await getTranslations('OurStoryVideoSection');
    const translatedOurStoryData = {
        ...ourStoryData,
        subtitle: tStory('subtitle'),
        text: tStory('text')
    };

    // 3. ترجمة MissionVisionSection
    const tMission = await getTranslations('MissionVisionSection');
    const translatedMissionVisionData = {
        ...missionVisionData,
        mission: { ...missionVisionData.mission, title: tMission('missionTitle'), description: tMission('missionDesc') },
        vision: { ...missionVisionData.vision, title: tMission('visionTitle'), description: tMission('visionDesc') }
    };

    // 4. ترجمة IdealClientsSection (WhyChooseUs)
    const tIdeal = await getTranslations('IdealClientsSection');
    const translatedWhyChooseUsData = {
        ...whyChooseUsData,
        title: tIdeal('title'),
        description: tIdeal('description'),
        points: Object.values(tIdeal.raw('points')) as string[]
    };

    // 5. ترجمة FinalCTASection
    const tCta = await getTranslations('FinalCTASection');
    const translatedCtaData = {
        ...ctaData,
        title: tCta('title'),
        description: tCta('description'),
        buttonText: tCta('buttonText')
    };

    // 6. ترجمة Footer
    const tFooter = await getTranslations('FooterSection');
    const translatedFooterData: FooterData = {
      bgImage: tFooter('bgImage'),
      widgets: tFooter.raw('widgets'),
      preCopyrightText: tFooter('preCopyrightText'),
      copyrightText: tFooter('copyrightText'),
      logo: tFooter.raw('logo')
    };

    return (
        <div className="body-wrapper body-inner-page">
            <Header />
            <SmoothScroll>
                <main>
                    <NoSSR>
                        <Breadcrumb 
                            title={tBread('aboutTitle')} 
                            subTitle={tBread('aboutSubTitle')} 
                            pageName={tBread('aboutPageName')} 
                        />
                    </NoSSR>
                    
                    <NoSSR>
                        {/* ملاحظة: AboutSection و ProcessSection بيستخدموا IDs قديمة ترجمناها في الرئيسية فغالباً هيشتغلوا تلقائي */}
                        <AboutSection className="page-about" data={aboutIntroData} />
                    </NoSSR>

                    <NoSSR>
                        <OurStoryVideoSection data={translatedOurStoryData} />
                    </NoSSR>

                    <NoSSR>
                        <WhatWeDoSection data={whatWeDoData} />
                    </NoSSR>

                    <NoSSR>
                        <MissionVisionSection data={translatedMissionVisionData} />
                    </NoSSR>

                    <NoSSR>
                        <ProcessSection className="page-services" data={processData} />
                    </NoSSR>

                    <NoSSR>
                        <IdealClientsSection data={translatedWhyChooseUsData} />
                    </NoSSR>

                    <NoSSR>
                        <FinalCTASection data={translatedCtaData} />
                    </NoSSR>
                </main>
                <FooterSection data={translatedFooterData} />
            </SmoothScroll>
        </div>
    );
}