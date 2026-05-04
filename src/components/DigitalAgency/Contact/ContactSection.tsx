"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { IContact } from "@/constant/DigitalAgency/Contact/contact";
import Link from "@/components/CustomLink";
import { useTranslations } from "next-intl"; // 👈 استدعاء الترجمة

interface ContactProps {
  data: IContact;
}

const ContactSection: React.FC<ContactProps> = ({ data: contactData }) => {
  const {
    subtitle,
    title,
    description,
    contactInfo,
    socialLinks,
    formFields,
    buttonText,
  } = contactData;
  const [state, handleSubmit] = useForm("xjvqqbyy");
  
  // 👈 تفعيل الترجمة للكلمات الثابتة
  const t = useTranslations("ContactSection");

  return (
    <>
      <section className="contact-area">
        <div className="container">
          <div className="contact-area-inner section-spacing">
            <div className="section-content-wrapper">
              <div className="section-content fade-anim" data-direction="right">
                <div className="section-title-wrapper">
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">{subtitle}</span>
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title">{title}</h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text">{description}</p>
                </div>
                <div className="contact-list">
                  <ul>
                    {contactInfo.map((item, index) => (
                      <li key={index}>
                        <img src={item?.icon} alt="icon image" />
                        <Link href={item?.link}>{item?.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="social-links-wrapper">
                  {/* 👇 ترجمة Follow us 👇 */}
                  <p className="title">{t("followUs")}</p>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <Link key={index} href={social?.link}>
                        <i className={`fa-brands ${social?.icon}`}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contact-wrap fade-anim" data-direction="left">
                {state.succeeded ? (
                  <div className="section-title-wrapper text-center">
                    {/* 👇 ترجمة رسائل النجاح 👇 */}
                    <h2 className="section-title">{t("successTitle")}</h2>
                    <p>{t("successDesc")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="contact-formwrap">
                      {formFields.map((field) => (
                        <div
                          key={field.name}
                          className={`contact-formfield ${
                            field.type === "textarea" ? "messages" : ""
                          }`}
                        >
                          <img
                            className="input-icon"
                            src={field.icon}
                            alt="icon"
                          />
                          <h3 className="title">{field.label}</h3>
                          {field.type === "textarea" ? (
                            <textarea
                              name={field.name}
                              id={field.name}
                              placeholder={field.placeholder}
                            ></textarea>
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              id={field.name}
                              placeholder={field.placeholder}
                            />
                          )}
                          <ValidationError
                            prefix={field.label}
                            field={field.name}
                            errors={state.errors}
                            className="error-message"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="submit-btn">
                      <button
                        type="submit"
                        className="t-btn t-btn-group"
                        disabled={state.submitting}
                      >
                        <span className="t-btn t-btn-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <span className="t-btn t-btn-primary">
                          {buttonText}
                        </span>
                        <span className="t-btn t-btn-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;