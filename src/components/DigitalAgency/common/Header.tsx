"use client";
import React, { ReactNode, useState, useEffect } from "react"; 
import Link from "@/components/CustomLink"; 
import Sidebar from "@/components/DigitalAgency/SideBar/SideBar";
import useStickyHeader from "@/Hook/useStickyHeader";
import { useTranslations } from "next-intl"; 
import LanguageSwitcher from "@/components/LanguageSwitcher"; 

interface MenuItem {
  title: string;
  href?: string;
  description?: string;
  icon?: string;
  isMegaMenu?: boolean;
  children?: MenuItem[];
}

interface HeaderData {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  menuItems: MenuItem[];
  cta: {
    href: string;
    label: string;
  };
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  // 💡 State لمعرفة هل اليوزر من أمريكا ولا لأ (عشان نخفي زرار اللغات)
  const [isUSUser, setIsUSUser] = useState<boolean>(false);

  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

  const t = useTranslations("Header");

  // 💡 قراءة الكوكيز أول ما الموقع يحمل (محسنة لضمان التقاط الكوكي)
  useEffect(() => {
    // استخدمنا includes لأنها أضمن في البحث جوه سلسلة الكوكيز
    const checkUS = document.cookie.includes('USER_COUNTRY=US');
    console.log("🕵️‍♂️ Is User from US? :", checkUS); // عشان تتأكد من الكونسول (F12)
    
    if (checkUS) {
      setIsUSUser(true);
    }
  }, []);

  const headerData: HeaderData = {
    logo: {
      src: "/assets/imgs/logo/logo-colors-black.svg",
      alt: "Site Logo",
      href: "/",
    },
    menuItems: [
      { title: t("home"), href: "/" },
      { title: t("about"), href: "/about" },
      {
        title: t("services"),
        href: "/services",
        isMegaMenu: true,
        children: [
          { title: t("menu.webDesign"), href: "/services/web-design", icon: "/assets/imgs/icon/services-icons/Web Design.svg", description: t("menu.webDesignDesc") },
          { title: t("menu.restaurant"), href: "/services/restaurant-platform", icon: "/assets/imgs/icon/services-icons/restaurant-icon.png", description: t("menu.restaurantDesc") },
          { title: t("menu.social"), href: "/services/social-media", icon: "/assets/imgs/icon/services-icons/Social Media Solutions.svg", description: t("menu.socialDesc") },
          { title: t("menu.review"), href: "/services/review-marketing", icon: "/assets/imgs/icon/services-icons/Review Marketing.svg", description: t("menu.reviewDesc") },
          { title: t("menu.graphic"), href: "/services/graphic-design", icon: "/assets/imgs/icon/services-icons/Graphic Design.svg", description: t("menu.graphicDesc") },
          { title: t("menu.branding"), href: "/services/branding", icon: "/assets/imgs/icon/services-icons/Branding.svg", description: t("menu.brandingDesc") },
          { title: t("menu.email"), href: "/services/email-marketing", icon: "/assets/imgs/icon/services-icons/Email Marketing.svg", description: t("menu.emailDesc") },
          { title: t("menu.seo"), href: "/services/seo", icon: "/assets/imgs/icon/services-icons/SEO.svg", description: t("menu.seoDesc") },
          { title: t("menu.ppc"), href: "/services/ppc", icon: "/assets/imgs/icon/services-icons/PPC Ads.svg", description: t("menu.ppcDesc") },
        ],
      },
      { title: t("contacts"), href: "/contact" },
    ],
    cta: {
      href: "/contact",
      label: t("contactUs"),
    },
  };

  const renderMenu = (items: MenuItem[]): ReactNode[] =>
    items?.map((item, i) => {
      // Mega Menu Logic
      if (item.isMegaMenu && item.children) {
        return (
          <li key={i} className="menu-item-has-children mega-menu-parent">
            <Link href={item.href || "#"}>{item.title}</Link>
            <div className="mega-menu-container">
              <div className="mega-menu-wrapper">
                <div className="mega-menu-main">
                  <div className="mega-menu-header">{t("servicesOverview")}</div>
                  <ul className="mega-menu-grid">
                    {item.children.map((child, idx) => (
                      <li key={idx} className="mega-menu-item">
                        <Link href={child.href || "#"}>
                          <span className="icon-box">
                            {child.icon && (
                              <img src={child.icon} alt={`${child.title} icon`} />
                            )}
                          </span>
                          <div className="content-box">
                            <span className="title">{child.title}</span>
                            <p className="description">{child.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                    <div className="mega-menu-footer">
                      <Link href="/services" className="view-all-btn">
                        {t("viewAllServices")}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </ul>
                </div>

                <div className="mega-menu-cta">
                  <h3>{t("scheduleConsultation")}</h3>
                  <Link href="/contact" className="cta-button">
                    {t("scheduleNow")}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        );
      }

      // Standard Menu Item or Dropdown
      return (
        <li key={i} className={item?.children ? "menu-item-has-children" : ""}>
          {item?.href ? (
            <Link href={item?.href}>{item?.title}</Link>
          ) : (
            <Link href="#0">{item?.title}</Link>
          )}
          {item?.children && (
            <ul className="dp-menu">{renderMenu(item?.children)}</ul>
          )}
        </li>
      );
    });

  return (
    <>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area-2">
        <div className="header-main header-sticky">
          <div className="container large">
            <div className="header-area-2-inner">
              <div className="header-logo">
                <Link href={headerData?.logo?.href}>
                  <img
                    src={headerData?.logo?.src}
                    alt={headerData?.logo?.alt}
                    className="normal-logo"
                  />
                </Link>
              </div>
              <div className="header-nav pos-center">
                <nav className="main-menu d-none d-xl-block">
                  <ul>{renderMenu(headerData?.menuItems)}</ul>
                </nav>
              </div>
              
              <div className="header-button d-flex align-items-center gap-4">
                
                {/* 💡 الشرط السحري: لو اليوزر مش من أمريكا، ظهر زرار اللغات 💡 */}
                {!isUSUser && (
                  <div className="d-none d-xl-inline-flex" style={{ color: '#000' }}>
                    <LanguageSwitcher />
                  </div>
                )}

                <div className="d-none d-xl-flex">
                  <Link href={headerData?.cta?.href} className="btn-contact-modern" style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px 24px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                    <span className="btn-text">{headerData?.cta?.label}</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              
              <div className="header-offcanvas d-xl-none">
                <button className="side-toggle" onClick={handleSidebar}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;