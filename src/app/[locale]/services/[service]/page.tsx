import { ReactElement } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import ServiceSection from "@/components/DigitalAgency/ServiceDetails/ServiceSection";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import ProblemSection from "@/components/DigitalAgency/ProblemSection";
import IdealClientsSection from "@/components/DigitalAgency/IdealClientsSection";
import WhatsIncludedSection from "@/components/DigitalAgency/WhatsIncludedSection";
import FaqSection from "@/components/DigitalAgency/Faq/FaqSection";
import FinalCTASection from "@/components/DigitalAgency/FinalCTASection";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import Header from "@/components/DigitalAgency/common/Header";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";
import PricingSection from "@/components/DigitalAgency/PricingSection";
import AddonsSection from "@/components/DigitalAgency/AddonsSection";
import NoSSR from "@/components/NoSSR";

import { getServiceBySlug, getAllServiceSlugs } from "@/constant/services/all-services-data";
import { FooterData } from "@/constant/DigitalAgency/footer";

interface ServicePageProps {
  params: Promise<{
    locale: string;
    service: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    service: slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, service } = await params; // 👈 سحبنا اللغة هنا
  const serviceData = getServiceBySlug(service, locale); // 👈 باصينا اللغة للدالة

  if (!serviceData) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${serviceData.name} || MauriPros - Digital Marketing Agency`,
    description: serviceData.heroSection.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps): Promise<ReactElement> {
  const { locale, service } = await params;
  setRequestLocale(locale);

  // 👈 باصينا اللغة هنا كمان عشان المحتوى يقلب عربي أو فرنساوي
  const serviceData = getServiceBySlug(service, locale); 

  if (!serviceData) {
    notFound();
  }

  // سحب الترجمات الأساسية (الفوتر وشريط التنقل)
  const tBread = await getTranslations('Breadcrumb');
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
              title={tBread('servicesTitle', { fallback: "SERVICES" })}
              subTitle={serviceData.name}
              pageName={serviceData.heroSection.subtitle}
            />
          </NoSSR>
          
          <NoSSR>
            <ServiceSection data={serviceData.heroSection} />
          </NoSSR>
          
          <NoSSR>
            <ProblemSection data={serviceData.problemSection} />
          </NoSSR>
          
          <NoSSR>
            <WhatsIncludedSection data={serviceData.whatsIncluded} />
          </NoSSR>
          
          <NoSSR>
            <ProcessSection className="page-services" data={serviceData.processSection} />
          </NoSSR>
          
          <NoSSR>
            {serviceData.pricingSection && <PricingSection data={serviceData.pricingSection} />}
          </NoSSR>
          
          <NoSSR>
            {serviceData.addonsSection && <AddonsSection data={serviceData.addonsSection} />}
          </NoSSR>
          
          <NoSSR>
            <IdealClientsSection data={serviceData.idealClients} />
          </NoSSR>
          
          <NoSSR>
            <FaqSection type={2} data={serviceData.faqsData} />
          </NoSSR>
          
          <NoSSR>
            <FinalCTASection data={serviceData.finalCTA} />
          </NoSSR>
        </main>
        <FooterSection data={translatedFooterData} />
      </SmoothScroll>
    </div>
  );
}