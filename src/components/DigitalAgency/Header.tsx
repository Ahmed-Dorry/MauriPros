"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "@/components/CustomLink";
import React, { useState, useEffect } from "react"; 
import Sidebar from "@/components/DigitalAgency/SideBar/SideBar";
import useStickyHeader from "@/Hook/useStickyHeader";
import { useTranslations } from "next-intl";

// --- TYPE DEFINITIONS ---
interface MenuItem {
  title: string;
  href?: string;
  description?: string;
  icon?: string;
  isMegaMenu?: boolean;
  children?: MenuItem[];
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

  // 💡 State لمعرفة هل اليوزر من أمريكا ولا لأ (عشان نخفي اللغات)
  const [isUSUser, setIsUSUser] = useState<boolean>(false);
  
  // 🔥 State جديد عشان نراقب النزول بالصفحة ونغير اللوجو بناءً عليه 🔥
  const [isScrolled, setIsScrolled] = useState(false);

  const t = useTranslations("Header");

  // 💡 قراءة الكوكيز أول ما الموقع يحمل لكشف IP أمريكا
  useEffect(() => {
    const checkUS = document.cookie.includes('USER_COUNTRY=US');
    if (checkUS) {
      setIsUSUser(true);
    }
  }, []);

  // 🔥 إضافة مراقب حركة الشاشة (Scroll Listener) عشان تغيير اللوجو 🔥
  useEffect(() => {
    const handleScroll = () => {
      // لو نزلنا أكتر من 50 بيكسل، الهيدر هيقلب أبيض فبنخلي المتغير true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerData = {
    // 🔥 قسمنا اللوجو لنسختين (أبيض وألوان) 🔥
    logo: {
      href: "/",
      srcWhite: "/assets/imgs/logo/logo-colors-white.svg",
      // 👇 حط هنا مسار اللوجو الغامق بتاعك عشان يظهر لما الخلفية تبقى بيضا 👇
      srcDark: "/assets/imgs/logo/logo-icon-green.svg", 
      alt: "MauriPros Logo",
    },
    menuItems: [
      { title: t("home"), href: "/" },
      { title: t("about"), href: "/about" },
      {
        title: t("services"),
        href: "/services",
        isMegaMenu: true,
        children: [
          {
            title: t("menu.webDesign"),
            href: "/services/web-design",
            icon: "/assets/imgs/icon/services-icons/Web Design.svg",
            description: t("menu.webDesignDesc"),
          },
          {
            title: t("menu.restaurant"),
            href: "/services/restaurant-platform",
            icon: "/assets/imgs/icon/services-icons/restaurant-icon.png",
            description: t("menu.restaurantDesc"),
          },
          {
            title: t("menu.social"),
            href: "/services/social-media",
            icon: "/assets/imgs/icon/services-icons/Social Media Solutions.svg",
            description: t("menu.socialDesc"),
          },
          {
            title: t("menu.review"),
            href: "/services/review-marketing",
            icon: "/assets/imgs/icon/services-icons/Review Marketing.svg",
            description: t("menu.reviewDesc"),
          },
          {
            title: t("menu.graphic"),
            href: "/services/graphic-design",
            icon: "/assets/imgs/icon/services-icons/Graphic Design.svg",
            description: t("menu.graphicDesc"),
          },
          {
            title: t("menu.branding"),
            href: "/services/branding",
            icon: "/assets/imgs/icon/services-icons/Branding.svg",
            description: t("menu.brandingDesc"),
          },
          {
            title: t("menu.email"),
            href: "/services/email-marketing",
            icon: "/assets/imgs/icon/services-icons/Email Marketing.svg",
            description: t("menu.emailDesc"),
          },
          {
            title: t("menu.seo"),
            href: "/services/seo",
            icon: "/assets/imgs/icon/services-icons/SEO.svg",
            description: t("menu.seoDesc"),
          },
          {
            title: t("menu.ppc"),
            href: "/services/ppc",
            icon: "/assets/imgs/icon/services-icons/PPC Ads.svg",
            description: t("menu.ppcDesc"),
          },
        ],
      },
      { title: t("contacts"), href: "/contact" },
    ],
    // 🔥 قسمنا أيقونة القائمة (Hamburger Menu) عشان تتغير مع السكرول كمان 🔥
    offcanvasIconSrcWhite: "/assets/imgs/icon/icon-4-white.png",
    // حط هنا صورة القائمة السودة لو عندك، أو هنسيبها أبيض والـ CSS اللي ضفناه هيسودها
    offcanvasIconSrcDark: "/assets/imgs/icon/icon-4-white.png", 
  };

  const renderMenu = (items: MenuItem[]) => {
    return items.map((item, index) => {
      // Mega Menu Logic
      if (item.isMegaMenu && item.children) {
        return (
            <li key={index} className="menu-item-has-children mega-menu-parent">
              <Link href={item.href || "#"}>{item.title}</Link>
              <div className="mega-menu-container">
                <div className="mega-menu-wrapper">
                  {/* Left Side - Menu Items */}
                  <div className="mega-menu-main">
                    <div className="mega-menu-header">{t("servicesOverview")}</div>
                    <ul className="mega-menu-grid">
                      {item.children.map((child, i) => (
                          <li key={i} className="mega-menu-item">
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
                      {/* View All Services Button */}
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

                  {/* Right Side - CTA Card */}
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

      // Standard Dropdown
      return (
          <li
              key={index}
              className={item?.children ? "menu-item-has-children" : ""}
          >
            <Link href={item?.href || "#0"}>{item?.title}</Link>
            {item?.children && (
                <ul className="dp-menu">{renderMenu(item?.children)}</ul>
            )}
          </li>
      );
    });
  };

  return (
    <>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area">
        <div className="header-main header-sticky">
          <div className="large container">
            <div className="header-area-inner">
              {/* Logo Section */}
              <div className="header-logo">
                <Link href={headerData.logo.href}>
                  <img
                    // 🔥 الحركة السحرية هنا: لو نازلين لتحت، اعرض اللوجو الغامق، غير كده اعرض الأبيض 🔥
                    src={isScrolled ? headerData.logo.srcDark : headerData.logo.srcWhite}
                    alt={headerData.logo.alt}
                    className="normal-logo"
                  />
                </Link>
              </div>

              {/* Nav Menu Section (Centered/Right) */}
              <div className="header-nav d-none d-xl-inline-flex">
                <nav className="main-menu">
                  <ul>{renderMenu(headerData.menuItems)}</ul>
                </nav>
              </div>

              {/* 💡 زرار اللغات - الديسكتوب (الشكل الكامل - يختفي لأمريكا) 💡 */}
              {!isUSUser && (
                <div className="d-none d-xl-inline-flex align-items-center">
                  <LanguageSwitcher />
                </div>
              )}

              {/* Contact Button - Desktop Only */}
              <div className="header-contact-btn d-none d-xl-inline-flex">
                <Link href="/contact" className="btn-contact-modern">
                  <span className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15.46l-5.27-.61-2.52 2.52a15.045 15.045 0 01-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="btn-text">{t("contactUs")}</span>
                </Link>
              </div>

              {/* 💡 قسم الموبايل (أيقونة القائمة + أيقونة اللغات الصغيرة) 💡 */}
              <div className="header-offcanvas d-flex align-items-center gap-3">
                
                {/* 💡 أيقونة اللغات للموبايل - نمرر variant="icon" لتغيير الشكل 💡 */}
                {!isUSUser && (
                  <div className="d-xl-none text-white mobile-lang-icon">
                    {/* 👇 السر هنا: بنطلب منه يعرض نسخة الأيقونة بس 👇 */}
                    <LanguageSwitcher variant="icon" />
                  </div>
                )}

                <button
                  className="side-toggle m-0"
                  onClick={handleSidebar}
                  aria-label="Toggle Sidebar"
                >
                  <img 
                    // 🔥 تغيير أيقونة الهامبرجر مع السكرول برضه 🔥
                    src={isScrolled ? headerData.offcanvasIconSrcDark : headerData.offcanvasIconSrcWhite} 
                    alt="Menu Icon" 
                    // لو معندكش صورة أيقونة غامقة، خليك معتمد على كود الـ CSS اللي ادهولك في الرسالة اللي فاتت هيعمل الواجب
                  />
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