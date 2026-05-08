import Link from "@/components/CustomLink";
import { IServiceData } from "@/constant/DigitalAgency/service-details/service-section-data";
import { useLocale } from "next-intl"; 

interface ServiceSectionProps {
  data: IServiceData;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  data: serviceData,
}) => {
  const locale = useLocale(); 
  const isArabic = locale === "ar";

  const arabicStyles = isArabic ? {
    fontStyle: "normal",
    textTransform: "none" as const,
    letterSpacing: "normal",
    fontVariantLigatures: "normal"
  } : {};

  return (
    <section className="service-area-6">
      <div className="container">
        <div className="service-area-6-inner section-spacing-top">
          <div className="section-content-wrapper">
            <div className="section-content fade-anim" data-direction="left">
              <div className="section-title-wrapper">
                {serviceData?.subtitle && (
                  <div className="subtitle-wrapper">
                    <span 
                      className="section-subtitle" 
                      style={arabicStyles} 
                    >
                      {serviceData?.subtitle}
                    </span>
                  </div>
                )}
                {serviceData?.title && (
                  <div className="title-wrapper">
                    <h2 
                      className="section-title" 
                      style={arabicStyles} 
                    >
                      {serviceData?.title}
                    </h2>
                  </div>
                )}
              </div>
              {serviceData?.buttons?.length > 0 && (
                <div className="btn-wrapper">
                  <div className="t-btn-group">
                    {serviceData?.buttons?.map((btn, index) => (
                      <Link
                        key={index}
                        href={btn?.href}
                        className={`t-btn ${btn?.style}`}
                      >
                        {btn?.icon ? <i className={btn?.icon}></i> : btn?.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="services-wrapper-box fade-anim"
              data-direction="right"
            >
              {serviceData?.description && (
                <div className="text-wrapper">
                  <p className="text">{serviceData?.description}</p>
                </div>
              )}
              
              {/* 👇 التعديل هنا: شيلنا كلاس services-wrapper واستخدمنا Flexbox 👇 */}
              {serviceData?.services?.length > 0 && (
                <div className="mt-4 pt-3">
                  <ul className="d-flex flex-column gap-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {serviceData?.services.map((service, i) => (
                      <li 
                        key={i} 
                        className="d-flex align-items-start"
                        style={{ 
                          fontSize: "17px",
                          color: "#333",
                          fontWeight: 400
                        }}
                      >
                        <svg 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            marginInlineEnd: "12px",
                            marginTop: "4px", // عشان السهم يبقى متوازي مع أول سطر لو الكلام طول
                            flexShrink: 0,
                            color: "#000",
                            transform: isArabic ? "rotate(180deg)" : "none"
                          }}
                        >
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={isArabic ? { fontStyle: "normal" } : {}}>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {serviceData?.gallery?.length > 0 && (
            <div className="gallery-wrapper">
              {serviceData?.gallery.map((img, i) =>
                img?.src ? (
                  <img
                    key={i}
                    className="fade-anim"
                    src={img.src}
                    alt={img.alt || "image"}
                  />
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;