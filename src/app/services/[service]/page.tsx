import { ReactElement } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import ServiceSection from "@/components/DigitalAgency/ServiceDetails/ServiceSection";
import ProcessSection from "@/components/DigitalAgency/ProcessSection";
import ServiceDetailsSection from "@/components/DigitalAgency/ServiceDetails/ServiceDetailsSection";
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

// Import global services data
import { getServiceBySlug, getAllServiceSlugs } from "@/constant/services/all-services-data";

interface ServicePageProps {
    params: Promise<{
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
    const { service } = await params;
    const serviceData = getServiceBySlug(service);

    if (!serviceData) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${serviceData.name} || 222Medias - Digital Marketing Agency`,
        description: serviceData.heroSection.description,
        keywords: [
            serviceData.name,
            "digital marketing",
            "222Medias",
            serviceData.heroSection.subtitle,
            ...serviceData.heroSection.services,
        ],
        creator: "222Medias",
        other: {
            developer: "222Medias",
            section: `${serviceData.name} Service Page`,
        },
    };
}

const ServicePage = async ({ params }: ServicePageProps): Promise<ReactElement> => {
    const { service } = await params;
    const serviceData = getServiceBySlug(service);

    if (!serviceData) {
        notFound();
    }

    return (
        <div className="body-wrapper body-inner-page">
            <Header />
            <SmoothScroll>
                <main>
                    <Breadcrumb
                        title="SERVICES"
                        subTitle={serviceData.name}
                        pageName={serviceData.heroSection.subtitle}
                    />
                    <ServiceSection data={serviceData.heroSection} />
                    <ProblemSection data={serviceData.problemSection} />
                    {/*<ServiceDetailsSection data={serviceData.approachSection} />*/}
                    <WhatsIncludedSection data={serviceData.whatsIncluded} />
                    <ProcessSection className="page-services" data={serviceData.processSection} />
                    {/*<WhyWorkWithUsSection data={serviceData.whyWorkWithUs} />*/}
                    {serviceData.pricingSection && <PricingSection data={serviceData.pricingSection} />}
                    {serviceData.addonsSection && <AddonsSection data={serviceData.addonsSection} />}
                    <IdealClientsSection data={serviceData.idealClients} />
                    <FaqSection type={2} data={serviceData.faqsData} />
                    <FinalCTASection data={serviceData.finalCTA} />
                </main>
                <FooterSection />
            </SmoothScroll>
        </div>
    );
};

export default ServicePage;
