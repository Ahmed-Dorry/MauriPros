import Link from "@/components/CustomLink";
import React from "react";
import { useTranslations, useLocale } from "next-intl"; // 👈 استدعينا useLocale هنا

interface BreadcrumbProps {
  title: string;
  subTitle: string;
  pageName: string;
}

const Breadcrumb:React.FC<BreadcrumbProps> = ({ title, subTitle, pageName }) => {
  // 👈 بنسحب الترجمة من بلوك Breadcrumb اللي في ملفات JSON
  const t = useTranslations("Breadcrumb");
  
  const locale = useLocale(); // 👈 عرفنا اللغة
  const isArabic = locale === "ar";

  const finalTitle = title?.trim() || "TITLE";
  const finalSubTitle = subTitle?.trim() || "Sub Title";
  const finalPageName = pageName?.trim() || "Page Name";

  // 👇 ستايل إجباري للعربي عشان نلغي الميلان ونربط الحروف 👇
  const arabicStyles = isArabic ? {
    fontStyle: "normal",
    textTransform: "none" as const,
    letterSpacing: "normal",
    fontVariantLigatures: "normal"
  } : {};

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
                  {/* 👇 التعديل هنا على العنوان (الخدمات) 👇 */}
                  <h1 
                    className={`section-title ${isArabic ? 'fade-anim' : 'char-anim'}`}
                    style={arabicStyles}
                  >
                    {finalTitle}
                  </h1>
                </div>
                <div className="subtitle-wrapper">
                  {/* 👇 التعديل هنا على العنوان الفرعي (ماذا نقدم) 👇 */}
                  <span
                    className={`section-subtitle ${isArabic ? 'fade-anim' : 'char-anim'}`}
                    data-delay="0.75"
                    style={arabicStyles}
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