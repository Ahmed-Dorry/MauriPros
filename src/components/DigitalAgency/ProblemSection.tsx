import React from "react";

interface ProblemSectionProps {
  data: {
    title: string;
    description: string;
    painPoints: string[];
  };
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ data }) => {
  return (
    <section className="problem-area">
      <div className="container">
        <div className="problem-area-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">Pain Points</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{data.title}</h2>
              </div>
            </div>
            {data.description && (
              <div className="text-wrapper fade-anim d-flex align-items-center">
                <p className="text">{data.description}</p>
              </div>
            )}
          </div>

          <div className="problem-wrapper-box">
            <div className="problem-wrapper">
              {data.painPoints.map((point, index) => (
                <div
                  key={index}
                  className="problem-box fade-anim"
                  data-delay={`${0.2 + index * 0.1}`}
                >
                  <div className="icon-wrapper">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="content">
                    <p className="text">{point}</p>
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

export default ProblemSection;
