import React from "react";

interface WhatsIncludedSectionProps {
  data: {
    title: string;
    categories: {
      title: string;
      items: string[];
    }[];
  };
}

const WhatsIncludedSection: React.FC<WhatsIncludedSectionProps> = ({ data }) => {
  return (
    <section className="whats-included-area">
      <div className="container">
        <div className="whats-included-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Complete Package</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{data.title}</h2>
              </div>
            </div>
          </div>

          <div className="features-wrapper-box">
            <div className="features-wrapper">
              {data?.categories?.map((category, index) => (
                <div
                  key={index}
                  className="feature-box-1 fade-anim"
                  data-delay={`${0.2 + index * 0.1}`}
                >
                  <div className="feature-header">
                    <span className="number">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="title">
                      {category.title}
                      <span className="icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="3"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M8 12L11 15L16 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </h3>
                  </div>
                  <div className="feature-content">
                    <ul className="feature-list">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <span className="bullet">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
