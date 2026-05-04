"use client";

import React from "react";
import Link from "@/components/CustomLink"; // 👈 استخدام الرابط الذكي بتاعنا
import sidebarData from "@/constant/DigitalAgency/sidebar/sidebarData";
import NestedAccordion from "@/components/DigitalAgency/common/NestedAccordion";
import { useTranslations } from "next-intl"; // 👈 استدعاء الترجمة

interface SideBarProps {
  isOpen: boolean;
  handleSidebar: () => void;
  menuClass?: string;
}

const Sidebar = ({
  isOpen,
  handleSidebar,
  menuClass = "d-xl-none",
}: SideBarProps) => {
  // 👈 تفعيل الترجمة
  const t = useTranslations("Sidebar");

  return (
    <>
      <aside className="fix">
        <div className={`side-info ${isOpen ? "info-open" : ""}`}>
          <div className="side-info-content">
            
            {/* Header */}
            <div className="offset-widget offset-header">
              <div className="offset-logo">
                <Link href="/">
                  <img src={sidebarData.logo} alt="site logo" />
                </Link>
              </div>
              <button
                id="side-info-close"
                className="side-info-close"
                onClick={handleSidebar}
              >
                <i className={sidebarData.closeIcon || "fa-solid fa-xmark"}></i>
              </button>
            </div>

            {/* Mobile menu container (مهم جداً للموبايل) */}
            <div className={`mobile-menu fix ${menuClass}`}>
              <NestedAccordion items={sidebarData.menus} />
            </div>

            {/* Info Box (تم ربطه بالترجمة) */}
            <div className="offset-info-box">
              <h2 className="title">{t("title")}</h2>
              <p className="text">{t("description")}</p>
              
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={sidebarData?.cta?.href}
                >
                  <i className={sidebarData?.ctaIcon}></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary text-black"
                  href={sidebarData?.cta?.href}
                >
                  {/* استخدمنا الترجمة هنا ولو مش موجودة هيرجع للكلام القديم */}
                  {t("ctaText", { fallback: sidebarData?.cta?.text })}
                </Link>
                <Link
                  className="t-btn t-btn-circle text-black"
                  href={sidebarData?.cta?.href}
                >
                  <i className={sidebarData?.ctaIcon}></i>
                </Link>
              </div>

              {/* Gallery */}
              <div className="post-image">
                {sidebarData?.gallery?.map((img, i) => (
                  <img key={i} src={img} alt={`gallery-${i}`} />
                ))}
              </div>
            </div>

            {/* Contact Info (تم ربطه بالترجمة) */}
            <div className="offset-widget-box">
              <h2 className="title">{t("information")}</h2>
              <div className="contact-meta">
                <div className="contact-item">
                  <span className="text">
                    <a href={sidebarData?.contact?.email?.href}>
                      {sidebarData?.contact?.email?.text}
                    </a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="text">{t("location")}</span>
                </div>
              </div>
            </div>

            {/* Social Links (تم ربطه بالترجمة) */}
            <div className="offset-widget-box">
              <h2 className="title">{t("connectUs", { fallback: "Connect Us On" })}</h2>
              <div className="social-links">
                {sidebarData.social.map((social, i) => (
                  <a key={i} href={social.href}>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Logo */}
            <div className="offset-logo-footer rtl-footer-logo" style={{ width: "100%", overflow: "hidden" }}>
              <img 
                src={sidebarData.footerLogo} 
                alt="footer logo" 
                style={{ maxWidth: "50%", height: "auto", objectFit: "contain" }}
              />
            </div>

          </div>
        </div>
      </aside>

      {/* Overlay */}
      <div
        className={`offcanvas-overlay ${isOpen ? "overlay-open" : ""}`}
        onClick={handleSidebar}
      ></div>
    </>
  );
};

export default Sidebar;