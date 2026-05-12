"use client";

import React from "react";
import Link from "@/components/CustomLink";
import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import NestedAccordion from "@/components/common/NestedAccordion";
import useBaseURL from "@/Hook/useBaseURL";
import { useTranslations } from "next-intl";

interface SidebarProps {
  isOpen: boolean;
  handleSidebar: () => void;
  menuClass?: string;
  sidebarData?: any;
}

const Sidebar = ({
  isOpen,
  handleSidebar,
  menuClass = "d-xl-none",
  sidebarData,
}: SidebarProps) => {
  const placement = "end";
  const baseURL = useBaseURL();
  
  const t = useTranslations("Sidebar");
  const tHeader = useTranslations("Header"); // هنسحب ترجمات الهيدر من هنا

  const facebookUrl = "https://www.facebook.com/profile.php?id=61589240573834";
  const instagramUrl = "https://www.instagram.com/mauripros/";

  const getTranslatedTitle = (title: string) => {
    if (!title) return "";
    if (title.toLowerCase().includes("information")) return t("information");
    if (title.toLowerCase().includes("location")) return t("location");
    return title;
  };

  // 👇 الضربة القاضية: بنينا منيو جديدة مترجمة مباشرة من ملف اللغات 👇
  const translatedMenus = [
    { title: tHeader("home"), href: "/" },
    {
      title: tHeader("services"),
      href: "#",
      // حطينا items و children عشان نرضي الكومبوننت أياً كان بيقرأ إيه فيهم
      items: [
        { title: tHeader("menu.webDesign"), href: "/services/web-design" },
        { title: tHeader("menu.restaurant"), href: "/services/restaurant-platform" },
        { title: tHeader("menu.social"), href: "/services/social-media" },
        { title: tHeader("menu.review"), href: "/services/review-marketing" },
        { title: tHeader("menu.graphic"), href: "/services/graphic-design" },
        { title: tHeader("menu.branding"), href: "/services/branding" },
        { title: tHeader("menu.email"), href: "/services/email-marketing" },
        { title: tHeader("menu.seo"), href: "/services/seo" },
        { title: tHeader("menu.ppc"), href: "/services/ppc" }
      ],
      children: [
        { title: tHeader("menu.webDesign"), href: "/services/web-design" },
        { title: tHeader("menu.restaurant"), href: "/services/restaurant-platform" },
        { title: tHeader("menu.social"), href: "/services/social-media" },
        { title: tHeader("menu.review"), href: "/services/review-marketing" },
        { title: tHeader("menu.graphic"), href: "/services/graphic-design" },
        { title: tHeader("menu.branding"), href: "/services/branding" },
        { title: tHeader("menu.email"), href: "/services/email-marketing" },
        { title: tHeader("menu.seo"), href: "/services/seo" },
        { title: tHeader("menu.ppc"), href: "/services/ppc" }
      ]
    },
    { title: tHeader("about"), href: "/about" },
    { title: tHeader("contacts"), href: "/contact" }
  ];

  const logoSrc = sidebarData?.logo?.image || "/assets/imgs/logo/logo-colors-black.svg";
  const closeIcon = sidebarData?.closeIcon || "fa-solid fa-xmark";

  return (
    <Offcanvas
      show={isOpen}
      onHide={handleSidebar}
      placement={placement}
      className="side-panel"
    >
      <Offcanvas.Header className="sidebar-header">
        <div className="offset-logo">
          <Link href={baseURL}>
            <Image src={logoSrc} alt="Logo" width={150} height={40} priority />
          </Link>
        </div>
        <button
          type="button"
          className="side-panel__closer"
          onClick={handleSidebar}
          aria-label="Close"
        >
          <i className={closeIcon} style={{ fontSize: "24px" }}></i>
        </button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={`mobile-menu-new fix ${menuClass}`}>
          {/* 👇 مررنا المنيو الجديدة بتاعتنا غصب عن الكومبوننت 👇 */}
          <NestedAccordion
            items={translatedMenus}
            directNavItems={sidebarData?.directNavItems || []}
          />
        </div>

        <div className="side-panel__content mt-4">
          <p>{t("description") || sidebarData?.sidePanel?.description}</p>

          <ul className="custom-ul side-panel__contact">
            {sidebarData?.sidePanel?.contacts?.map((contact: any, index: number) => {
              const IconComponent = contact.icon;
              return (
                <li key={index}>
                  <div className="contact-thumb">
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className="contact-content">
                    <p>{getTranslatedTitle(contact.title)}</p>
                    {contact.href ? (
                      <a href={contact.href}>{contact.value}</a>
                    ) : (
                      <span>{contact.value}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="social-links mt-4 mb-4">
            <p className="mb-2" style={{ fontSize: "14px", color: "#888" }}>
              {t("connectUs", { fallback: "Connect Us On" })}
            </p>
            <div className="d-flex gap-3">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.25rem", color: "#333" }}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.25rem", color: "#333" }}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;