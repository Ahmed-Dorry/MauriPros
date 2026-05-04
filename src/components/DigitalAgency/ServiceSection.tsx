"use client";
import React from "react";
import Link from "@/components/CustomLink";
import { IService, ServiceData } from "@/constant/DigitalAgency/service";
import { useTranslations } from "next-intl"; // 👈 استدعينا الترجمة

interface ServiceProps {
  data: ServiceData;
}

const ServiceSection: React.FC<ServiceProps> = ({ data: serviceData }) => {
  // 👈 شغلنا أداة الترجمة على قسم الخدمات
  const t = useTranslations("ServiceSection");

  return (
    <section className="service-area">
      <div className="service-area-inner section-spacing-top">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                {/* 👇 ترجمة العنوان الفرعي 👇 */}
                <span className="section-subtitle">
                  {t("subtitle")}
                </span>
              </div>
              <div className="title-wrapper">
                {/* 👇 ترجمة العنوان الرئيسي 👇 */}
                <h2 className="section-title">{t("title")}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim">
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href={serviceData?.viewAllLink || "#"}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href={serviceData?.viewAllLink || "#"}>
                  {/* 👇 ترجمة زر عرض الكل 👇 */}
                  {t("viewAllText")}
                </Link>
                <Link className="t-btn t-btn-circle" href={serviceData?.viewAllLink || "#"}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="services-wrapper-box">
          <div className="services-wrapper header-stacking-items">
            {serviceData?.services?.map((srv: IService) => (
              <div className="service-box-1 item" key={srv?.id}>
                <div className="container">
                  <div className="header">
                    <div className="number"></div>
                    <h3 className="title">
                      {/* 👇 ترجمة عنوان الخدمة بناءً على الـ ID 👇 */}
                      {t(`services.${srv.id}.title`)}
                      <span>
                        <img src={srv?.image} alt={srv?.title || "service image"} />
                      </span>
                    </h3>
                  </div>
                  <div className="service-box-inner body">
                    <div className="btn-wrapper">
                      <Link href={srv?.detailsLink || "#"} className="t-btn">
                        {/* 👇 ترجمة زر عرض التفاصيل 👇 */}
                        <span>{t("showDetails")}</span>
                        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.06 115.49" style={{ fill: 'none', stroke: '#39b54a', strokeMiterlimit: 10, strokeWidth: '2px' }}>
                          <g id="Layer_1-2">
                            <path d="M1,1h121.06v107.33h-16.61V27.83L19.21,114.08l-10.86-10.9L95.55,16.65H1V1Z" />
                          </g>
                        </svg>
                      </Link>
                    </div>
                    <div className="content">
                      {/* 👇 ترجمة وصف الخدمة 👇 */}
                      <p className="text">{t(`services.${srv.id}.description`)}</p>
                      <ul className="service-list">
                        {srv?.items?.map((item: string, index: number) => (
                          <li key={index}>
                            <Link href={srv?.itemLink || "#"}>
                              {/* 👇 ترجمة النقط الفرعية (1، 2، 3) لكل خدمة 👇 */}
                              {t(`services.${srv.id}.items.${index}`)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="final"></div>
      </div>
    </section>
  );
};

export default ServiceSection;