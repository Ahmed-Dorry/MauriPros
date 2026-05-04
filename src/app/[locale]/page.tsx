import { ReactElement } from "react";
import { setRequestLocale, getTranslations } from 'next-intl/server'; 

import AboutSection from "@/components/DigitalAgency/AboutSection";
import BlogSection from "@/components/DigitalAgency/BlogSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import HeroSection from "@/components/DigitalAgency/HeroSection";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import ServiceSection from "@/components/DigitalAgency/ServiceSection";
import TeamsSection from "@/components/DigitalAgency/TeamsSection";
import TextSliderSection from "@/components/DigitalAgency/TextSliderSection";
import WorkSection from "@/components/DigitalAgency/WorkSection";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";
import NoSSR from "@/components/NoSSR"; 

// all data
import aboutData from "@/constant/DigitalAgency/about";
import heroData from "@/constant/DigitalAgency/hero";
import processData from "@/constant/DigitalAgency/process";
import serviceData from "@/constant/DigitalAgency/service";

// Types
import { WorkData } from "@/constant/DigitalAgency/work";
import { TeamData } from "@/constant/DigitalAgency/teams";
import { TextSliderData } from "@/constant/DigitalAgency/textSlider";
import { BlogData } from "@/constant/DigitalAgency/blog"; 
import { FooterData } from "@/constant/DigitalAgency/footer"; // 👈 استيراد نوع الفوتر

export default async function Home(props: { 
  params: Promise<{ locale: string }> 
}): Promise<ReactElement> {
  
  const { locale } = await props.params;

  setRequestLocale(locale);

  // ترجمة Work Section
  const tWork = await getTranslations('WorkSection');
  const translatedWorkData: WorkData = {
    sectionSubtitle: tWork('sectionSubtitle'),
    sectionTitle: tWork('sectionTitle'),
    includesTitle: tWork('includesTitle'), 
    capabilities: tWork.raw('capabilities') 
  };

  // ترجمة Teams Section
  const tTeams = await getTranslations('TeamsSection');
  const translatedTeamsData: TeamData = {
    section: tTeams.raw('section'),
    members: tTeams.raw('members') 
  };

  // ترجمة Text Slider Section
  const tTextSlider = await getTranslations('TextSliderSection');
  const translatedTextSliderData: TextSliderData = {
    slides: tTextSlider.raw('slides')
  };

  // ترجمة Blog Section
  const tBlog = await getTranslations('BlogSection');
  const translatedBlogData: BlogData = {
    section: tBlog.raw('section'),
    posts: tBlog.raw('posts')
  };

  // ترجمة Footer Section 👇
  const tFooter = await getTranslations('FooterSection');
  const translatedFooterData: FooterData = {
    bgImage: tFooter('bgImage'),
    widgets: tFooter.raw('widgets'),
    preCopyrightText: tFooter('preCopyrightText'),
    copyrightText: tFooter('copyrightText'),
    logo: tFooter.raw('logo')
  };

  return (
    <div className="body-wrapper body-digital-agency">
      <SmoothScroll>
        <main>
          
          <NoSSR>
            <HeroSection data={heroData} />
          </NoSSR>
          
          <NoSSR>
            <AboutSection data={aboutData} />
          </NoSSR>
          
          <NoSSR>
            <ProcessSection data={processData} />
          </NoSSR>
          
          <NoSSR>
            <ServiceSection data={serviceData} />
          </NoSSR>

          <NoSSR>
            <WorkSection data={translatedWorkData} />
          </NoSSR>
          
          <NoSSR>
            <TeamsSection data={translatedTeamsData} />
          </NoSSR>
          
          <NoSSR>
            <TextSliderSection data={translatedTextSliderData} />
          </NoSSR>
          
          <NoSSR>
            <BlogSection data={translatedBlogData} />
          </NoSSR>

        </main>

        {/* 👇 مررنا الداتا المترجمة للـ Footer 👇 */}
        <FooterSection data={translatedFooterData} />
        
      </SmoothScroll>
    </div>
  );
}