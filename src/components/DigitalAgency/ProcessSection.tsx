"use client";
import React from "react";
import Link from "@/components/CustomLink";
import { IProcessStep, ProcessData } from "@/constant/DigitalAgency/process";
import { useTranslations } from "next-intl"; // 👈 استدعينا أداة الترجمة

interface ProcessSectionProps {
  processSix?: boolean;
  className?: string;
  data: ProcessData;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ processSix, className: cls, data: processData }) => {
  // 👈 شغلنا أداة الترجمة ووجهناها لقسم ProcessSection
  const t = useTranslations("ProcessSection");

  return (
    <section className={processSix ? 'process-area-6' : `process-area ${cls}`}>
      <div className={`${processSix ? 'process-area-6-inner' : 'process-area-inner'} section-spacing`}>
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                {/* 👇 سحبنا العنوان الفرعي من القاموس 👇 */}
                <span className="section-subtitle">{t("subtitle")}</span>
              </div>
              <div className="title-wrapper">
                {/* 👇 سحبنا العنوان الرئيسي من القاموس 👇 */}
                <h2 className="section-title">{t("title")}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim">
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href={processData?.ctaLink || "#"}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href={processData?.ctaLink || "#"}>
                  {/* 👇 سحبنا نص الزرار من القاموس 👇 */}
                  {t("ctaText")}
                </Link>
                <Link className="t-btn t-btn-circle" href={processData?.ctaLink || "#"}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="process-wrapper-box fade-anim">
          <div className="container">
            <div className="process-wrapper">
              {processData?.steps?.map((step: IProcessStep, index: number) => {
                // بنعمل مفتاح ديناميكي عشان نسحب الترجمة لكل خطوة (step1, step2, ...)
                const stepKey = `step${index + 1}` as any; 
                
                return (
                  <div className="process-box-1 fade-anim" key={step?.id}>
                    <span className="number">{step?.number}</span>
                    <div className="thumb">
                      {/* الصورة بتيجي من الداتا عادي */}
                      <img src={step?.image} alt={t(`steps.${stepKey}.title`) || "process step"} />
                    </div>
                    <div className="content">
                      {/* 👇 سحبنا عنوان ووصف كل خطوة من القاموس 👇 */}
                      <h3 className="title">{t(`steps.${stepKey}.title`)}</h3>
                      <p className="text">{t(`steps.${stepKey}.description`)}</p>
                    </div>
                  </div>
                );
              })}
              {!processData?.steps?.length && <p>No process steps available.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;