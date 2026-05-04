import Link from "@/components/CustomLink";
import React from "react";
import { useTranslations } from "next-intl"; // 👈 استدعاء الترجمة

interface BreadcrumbProps {
  title: string;
  subTitle: string;
  pageName: string;
}

const Breadcrumb:React.FC<BreadcrumbProps> = ({ title, subTitle, pageName }) => {
  // 👈 بنسحب الترجمة من بلوك Breadcrumb اللي في ملفات JSON
  const t = useTranslations("Breadcrumb");

  const finalTitle = title?.trim() || "TITLE";
  const finalSubTitle = subTitle?.trim() || "Sub Title";
  const finalPageName = pageName?.trim() || "Page Name";

  return (
    <section className="page-title-area">
      <div className="container">
        <div className="page-title-area-inner section-spacing-top">
          <div className="area-lines">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`line-${i + 1}`}></div>
            ))}
          </div>
          <div className="section-content-wrapper">
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h1 className="section-title char-anim">
                    {finalTitle}
                  </h1>
                </div>
                <div className="subtitle-wrapper">
                  <span
                    className="section-subtitle char-anim"
                    data-delay="0.75"
                  >
                    {finalSubTitle}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="breadcrumb-wrapper fade-anim"
              data-direction="left"
              data-offset="100"
              data-delay="0.90"
            >
              <ul className="breadcrumb d-flex align-items-center">
                {/* 👇 ضفنا marginInlineEnd عشان يعمل مسافة آمنة في العربي والإنجليزي 👇 */}
                <li style={{ marginInlineEnd: '15px' }}>
                  <Link href="/">{t("homeLink", { fallback: "HOME" })}</Link>
                </li>
                <li>{finalPageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;