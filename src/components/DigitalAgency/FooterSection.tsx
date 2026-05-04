"use client";
import React from "react";
import Link from "@/components/CustomLink";
import { FooterData } from "@/constant/DigitalAgency/footer";

interface FooterProps {
  data: FooterData;
}

const FooterSection: React.FC<FooterProps> = ({ data: footerData }) => {
  const { bgImage, widgets, preCopyrightText, copyrightText, logo } = footerData;

  return (
    <footer className="footer-area">
      <div className="area-bg">
        <img src={bgImage} alt="Footer Background" />
      </div>
      <div className="container">
        <div className="footer-widget-wrapper-box">
          <div className="footer-widget-wrapper">
            {widgets?.map((widget, index) => (
              <div className="footer-widget-box" key={index}>
                <h4 className="title">{widget.title}</h4>
                <div className="widget-content">
                  {widget.type === "contact" && (
                    <>
                      <a href={`mailto:${widget.email}`} className="contact-link">
                        {widget.email}
                      </a>
                      {widget.cta && (
                        <Link href={widget.cta.href} className="t-btn-primary">
                          {widget.cta.label}
                        </Link>
                      )}
                    </>
                  )}
                  
                  {/* 👇 التعديل بتاعنا كله هنا 👇 */}
                  {widget.type === "subscription" && (
                    <div className="subscription-box ar-sub-fix">
                      <p className="text">
                        {widget.description}
                      </p>
                      <form className="subscribe-form w-100">
                        <div className="input-field w-100">
                          <input
                            type="email"
                            className="w-100"
                            placeholder={widget.placeholder}
                          />
                          <button type="submit" className="t-btn-primary">
                            {widget.buttonText}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {widget.type === "links" && widget.links && (
                    <ul className="footer-nav-list">
                      {widget.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">
            <div className="copyright-content">
              <div className="footer-logo">
                <Link href={logo?.href || "/"}>
                  <img src={logo?.src} alt={logo?.alt} />
                </Link>
              </div>
            </div>
            <div className="copyright-text">
              <p>{copyrightText}</p>
            </div>
            <div className="pre-copyright-text">
              <p>{preCopyrightText}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;