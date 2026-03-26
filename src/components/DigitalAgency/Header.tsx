"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "@/components/DigitalAgency/SideBar/SideBar";
import useStickyHeader from "@/Hook/useStickyHeader";

// --- TYPE DEFINITIONS ---
interface MenuItem {
  title: string;
  href?: string;
  description?: string;
  icon?: string; // Changed to string for image path
  isMegaMenu?: boolean;
  children?: MenuItem[];
}

interface HeaderData {
  logo: { href: string; src: string; alt: string };
  menuItems: MenuItem[];
  offcanvasIconSrc: string;
}

// --- DATA ---
const headerData: HeaderData = {
  logo: {
    href: "/",
    src: "/assets/imgs/logo/logo-colors-white.svg",
    alt: "MauriPros Logo",
  },
  menuItems: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
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
    { title: "Contacts", href: "/contact" },
  ],
  offcanvasIconSrc: "/assets/imgs/icon/icon-4-white.png",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  useStickyHeader();

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
                    <div className="mega-menu-header">Services Overview</div>
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
                    src={headerData.logo.src}
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

              {/* Contact Button - Desktop Only */}
              <div className="header-contact-btn d-none d-xl-inline-flex">
                <Link href="/contact" className="btn-contact-modern">
                  <span className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15.46l-5.27-.61-2.52 2.52a15.045 15.045 0 01-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="btn-text">Contact Us</span>
                </Link>
              </div>

              {/* Mobile Toggle Section */}
              <div className="header-offcanvas">
                <button
                  className="side-toggle"
                  onClick={handleSidebar}
                  aria-label="Toggle Sidebar"
                >
                  <img src={headerData?.offcanvasIconSrc} alt="Menu Icon" />
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
