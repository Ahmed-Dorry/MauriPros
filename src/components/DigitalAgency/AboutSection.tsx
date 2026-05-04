"use client";
import React, { useEffect } from "react";
import Link from "@/components/CustomLink";
import counterUp from "counterup2";
import { AboutData } from "@/constant/DigitalAgency/about";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl"; // 👈 استدعينا أداة الترجمة

interface AboutProps {
  className?: string;
  data: AboutData;
}

const AboutSection: React.FC<AboutProps> = ({ className: updateClass, data: aboutData }) => {
  const currentPath = usePathname();
  // 👈 شغلنا أداة الترجمة ووجهناها لقسم AboutSection
  const t = useTranslations("AboutSection");

  useEffect(() => {
    const counters = document.querySelectorAll(".t-counter-value");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 1500,
              delay: 16,
            });
            el.classList.add("is-visible");
          }
        });
      },
      { threshold: 1 }
    );

    counters.forEach((el) => observer.observe(el));
    return () => counters.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className={`about-area ${updateClass}`}>
      <div className="container">
        <div className={`about-area-inner ${updateClass ? 'section-spacing' : 'section-spacing-top'}`}>
          <div className="section-content-wrapper btn-move">
            <div className="section-content">
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

              <div className="text-wrapper fade-anim">
                {/* 👇 سحبنا الوصف من القاموس 👇 */}
                <p className="text">{t("description")}</p>
              </div>

              <div className="btn-wrapper fade-anim">
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle"
                        href={currentPath === "/about" ? "/contact" : aboutData?.ctaLink || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary"
                        href={currentPath === "/about" ? "/contact" : aboutData?.ctaLink || "#"}>
                    {/* 👇 سحبنا نص الزرار من القاموس 👇 */}
                    {t("ctaText")}
                  </Link>
                  <Link className="t-btn t-btn-circle"
                        href={currentPath === "/about" ? "/contact" : aboutData?.ctaLink || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="about-thumb fade-anim">
              <div className="image img_anim_reveal">
                {/* الصورة لسه بتيجي من الداتا الثابتة عادي */}
                <img src={aboutData?.mainImage} alt="about image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;