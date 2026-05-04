"use client";
import React from "react";
import Link from "@/components/CustomLink";
import { Tab, Nav, Container } from "react-bootstrap";
import { useTranslations } from "next-intl"; // 👈 استدعاء أداة الترجمة

export interface WhatWeDoItem {
  id: string;
  title: string;
  projectsAvailable?: number;
  projectsDone?: number;
  image: string;
  description: string;
  detailLink: string;
}

export interface WhatWeDoData {
  subtitle: string;
  title: string;
  exploreLink: string;
  tabs: WhatWeDoItem[];
}

interface WhatWeDoSectionProps {
  data: WhatWeDoData;
}

const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ data }) => {
  // 👈 توجيه الترجمة لقسم WhatWeDoSection
  const t = useTranslations("WhatWeDoSection");

  return (
    <div className="service-area-4">
      <div className="service-area-4-inner section-spacing">
        <Container>
          <div className="section-header">
            <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {/* 👇 العنوان الفرعي من القاموس 👇 */}
                  {t("subtitle")}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">
                  {/* 👇 العنوان الرئيسي من القاموس 👇 */}
                  {t("title")}
                </h2>
              </div>
            </div>
          </div>
        </Container>

        <div className="services-wrapper-box fade-anim" suppressHydrationWarning={true}>
          <Container>
            <div className="services-wrapper">
              <Tab.Container defaultActiveKey={data?.tabs?.[0]?.id}>
                <Nav
                  variant="pills"
                  className="flex-column nav nav-pills"
                  role="tablist"
                >
                  {data?.tabs?.map((service) => (
                    <Nav.Item key={service?.id}>
                      <Nav.Link eventKey={service?.id} role="tab">
                        <div className="service-name">
                          {/* 👇 سحب عناوين التابات بناءً على الـ ID 👇 */}
                          <h2 className="title">{t(`tabs.${service.id}.title`)}</h2>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>

                <Tab.Content id="pills-tabContent">
                  {data?.tabs?.map((service) => (
                    <Tab.Pane key={service?.id} eventKey={service?.id}>
                      <div className="service-box-4">
                        <div className="thumb">
                          <img
                            src={service?.image}
                            alt={t(`tabs.${service.id}.title`) || "Service image"}
                          />
                        </div>
                        <div className="content">
                          {/* 👇 سحب عنوان ووصف كل خدمة من القاموس 👇 */}
                          <h3 className="title">{t(`tabs.${service.id}.title`)}</h3>
                          <p className="text">{t(`tabs.${service.id}.description`)}</p>
                          <div className="t-btn-group">
                            <Link
                              className="t-btn t-btn-circle"
                              href={service?.detailLink || "#"}
                            >
                              <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                            <Link
                              className="t-btn t-btn-primary"
                              href={service?.detailLink || "#"}
                            >
                              {/* 👇 زر عرض التفاصيل 👇 */}
                              {t("viewDetails")}
                            </Link>
                            <Link
                              className="t-btn t-btn-circle"
                              href={service?.detailLink || "#"}
                            >
                              <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;