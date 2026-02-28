"use client";
import Link from "next/link";
import Sidebar from "@/components/DigitalAgency/SideBar/SideBar";
import React, { ReactNode, useState } from "react";
import useStickyHeader from "@/Hook/useStickyHeader";

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

const headerData: HeaderData = {
  logo: {
    src: "/assets/imgs/logo/logo-colors-black.svg",
    alt: "Site Logo",
    href: "/",
  },
  menuItems: [
    {
      title: "Home",
      href: "/",
    },
    { title: "About Us", href: "/about" },
    {
      title: "Services",
      href: "/services",
      isMegaMenu: true,
      children: [
        {
          title: "Website Design",
          href: "/services/web-design",
          icon: "/assets/imgs/icon/services-icons/Web Design.svg",
          description: "Keep your online presence looking fresh and professional!",
        },
        {
          title: "All-in-one Restaurant Platform",
          href: "/services/restaurant-platform",
          icon: "/assets/imgs/icon/services-icons/restaurant-icon.png",
          description: "Streamline your restaurant's online presence with our all-in-one platform.",
        },
        {
          title: "Social Media Solutions",
          href: "/services/social-media",
          icon: "/assets/imgs/icon/services-icons/Social Media Solutions.svg",
          description: "Facebook, Instagram, and Google Business Profile.",
        },
        {
          title: "Review Marketing",
          href: "/services/review-marketing",
          icon: "/assets/imgs/icon/services-icons/Review Marketing.svg",
          description: "Maintain your presence online with review marketing.",
        },
        {
          title: "Logo + Graphic Design",
          href: "/services/graphic-design",
          icon: "/assets/imgs/icon/services-icons/Graphic Design.svg",
          description: "Stay top of mind with a memorable logo.",
        },
        {
          title: "Branding",
          href: "/services/branding",
          icon: "/assets/imgs/icon/services-icons/Branding.svg",
          description: "Stay consistent with your style and messaging.",
        },
        {
          title: "Email Marketing",
          href: "/services/email-marketing",
          icon: "/assets/imgs/icon/services-icons/Email Marketing.svg",
          description: "Connect with your customers through email.",
        },
        {
          title: "Search Engine Optimization (SEO)",
          href: "/services/seo",
          icon: "/assets/imgs/icon/services-icons/SEO.svg",
          description: "Want to rank your business on Google? We can help!",
        },
        {
          title: "Pay-Per-Click (PPC) Ads",
          href: "/services/ppc",
          icon: "/assets/imgs/icon/services-icons/PPC Ads.svg",
          description: "Make the most of your advertising budget.",
        },
      ],
    },
    { title: "Contact", href: "/contact" },
  ],
  cta: {
    href: "/contact",
    label: "Let’s Connect",
  },
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

  const renderMenu = (items: MenuItem[]): ReactNode[] =>
    items?.map((item, i) => {
      // Mega Menu Logic
      if (item.isMegaMenu && item.children) {
        return (
          <li key={i} className="menu-item-has-children mega-menu-parent">
            <Link href={item.href || "#"}>{item.title}</Link>
            <div className="mega-menu-container">
              <div className="mega-menu-wrapper">
                {/* Left Side - Menu Items */}
                <div className="mega-menu-main">
                  <div className="mega-menu-header">Services Overview</div>
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
                    {/* View All Services Button */}
                    <div className="mega-menu-footer">
                      <Link href="/services" className="view-all-btn">
                        View All Services
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </ul>

                </div>

                {/* Right Side - CTA Card */}
                <div className="mega-menu-cta">
                  <h3>Schedule a Consultation</h3>
                  <Link href="/contact" className="cta-button">
                    Schedule now
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
              <div className="header-button">
                <div className="t-btn-group">
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-primary"
                  >
                    {headerData?.cta?.label}
                  </Link>
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
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
