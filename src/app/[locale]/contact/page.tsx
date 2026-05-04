import { ReactElement } from "react";
import { Metadata } from "next";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import ChooseUsSection from "@/components/DigitalAgency/common/ChooseUsSection";
import ContactSection from "@/components/DigitalAgency/Contact/ContactSection";
import Header from "@/components/DigitalAgency/common/Header";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";
import NoSSR from "@/components/NoSSR";

// all data
import contactData from "@/constant/DigitalAgency/Contact/contact";
import chooseUsData from "@/constant/DigitalAgency/common/choose-us";
import { FooterData } from "@/constant/DigitalAgency/footer";

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

export default async function ContactPage(props: {
  params: Promise<{ locale: string }>
}): Promise<ReactElement> {
  
  const { locale } = await props.params;
  setRequestLocale(locale);

  // سحب الترجمات
  const tBread = await getTranslations('Breadcrumb');
  const tFooter = await getTranslations('FooterSection');
  const tContact = await getTranslations('ContactSection');
  const tChooseUs = await getTranslations('ChooseUsSection');

  // 1. ترجمة بيانات الفورم والكونتاكت
  const translatedContactData = {
    ...contactData,
    subtitle: tContact('subtitle'),
    title: tContact('title'),
    description: tContact('description'),
    buttonText: tContact('buttonText'),
    formFields: contactData.formFields.map(field => ({
      ...field,
      label: tContact(`formFields.${field.name}.label`),
      placeholder: tContact(`formFields.${field.name}.placeholder`)
    }))
  };

  // 2. ترجمة بيانات قسم لماذا نحن
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

  // 3. ترجمة الفوتر
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
              title={tBread('contactTitle', { fallback: "CONTACT" })}
              subTitle={tBread('contactSubTitle', { fallback: "Get in Touch" })}
              pageName={tBread('contactPageName', { fallback: "CONTACT US" })}
            />
          </NoSSR>
          
          <NoSSR>
            <ContactSection data={translatedContactData} />
          </NoSSR>
          
          <NoSSR>
            <ChooseUsSection chooseUSTwo={true} data={translatedChooseUsData} />
          </NoSSR>
        </main>
        <FooterSection data={translatedFooterData} />
      </SmoothScroll>
    </div>
  );
}