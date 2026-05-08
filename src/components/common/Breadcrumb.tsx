import React from "react";
import { BreadcrumbContent, BreadcrumbProps } from "@/types/common/breadcrumb";
import { useLocale } from "next-intl"; // 👈 1. استدعينا مكتبة اللغات

export const breadcrumbContent: BreadcrumbContent = {
  // backgroundImage: breadcrumbServicesImage,
  title: 'Breadcrumb Title'
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title = breadcrumbContent.title,
  // backgroundImage = breadcrumbContent.backgroundImage,
  classNameCustom,
}) => {
  const locale = useLocale(); // 👈 2. جبنا اللغة الحالية
  const isArabic = locale === 'ar'; // 👈 3. عملنا شرط للعربي

  return (
    <div
      // style={{
      //   backgroundImage: `url(${backgroundImage.src})`,
      // }}
      className={`breadcrumb-area faq position-relative mt-5 mt-md-0 overflow-hidden ${
        classNameCustom ? classNameCustom : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* 👇 4. التعديل السحري هنا: تبديل الكلاسات وإلغاء الميلان 👇 */}
            <h1
              className={`h1 breadcrumb-area__title ${isArabic ? 'fade-anim' : 'fade_up_anim'}`}
              data-delay=".2"
              style={
                isArabic 
                  ? { fontStyle: "normal", textTransform: "none" } 
                  : {}
              }
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;