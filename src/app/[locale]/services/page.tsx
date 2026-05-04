import { ReactElement } from "react";
import { Metadata } from "next";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import ServiceSection from "@/components/DigitalAgency/ServiceSection";
import ChooseUsSection from "@/components/DigitalAgency/common/ChooseUsSection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";
import NoSSR from "@/components/NoSSR";

// all data
import processData from "@/constant/DigitalAgency/process";
import serviceData from "@/constant/DigitalAgency/service";
import chooseUsData from "@/constant/DigitalAgency/common/choose-us";
import { FooterData } from "@/constant/DigitalAgency/footer";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the services offered by MauriPros. We specialize in Brand Strategy & Identity, Web & UI Experience, and Marketing & Growth to help your business succeed.",
};

export default async function ServicesPage(props: {
  params: Promise<{ locale: string }>
}): Promise<ReactElement> {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // سحب الترجمات الأساسية
  const tBread = await getTranslations('Breadcrumb');
  const tFooter = await getTranslations('FooterSection');
  const tChooseUs = await getTranslations('ChooseUsSection');

  // ترجمة قسم لماذا نحن
  const translatedChooseUsData = {
    ...chooseUsData,
    subtitle: tChooseUs('subtitle'),
    title: tChooseUs('title'),
    features: chooseUsData.features.map((feature, idx) => ({
      ...feature,
      title: tChooseUs(`features.${idx}.title`),
      text: tChooseUs(`features.${idx}.text`)
    }))
  };

  // ترجمة الفوتر
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
              title={tBread('servicesTitle', { fallback: "SERVICES" })}
              subTitle={tBread('servicesSubTitle', { fallback: "What We Do" })}
              pageName={tBread('servicesPageName', { fallback: "OUR SERVICES" })}
            />
          </NoSSR>
          
          <NoSSR>
            <ProcessSection className="page-services" data={processData} />
          </NoSSR>
          
          <NoSSR>
            <ServiceSection data={serviceData} />
          </NoSSR>
          
          <NoSSR>
            <ChooseUsSection data={translatedChooseUsData} />
          </NoSSR>
        </main>
        <FooterSection data={translatedFooterData} />
      </SmoothScroll>
    </div>
  );
}