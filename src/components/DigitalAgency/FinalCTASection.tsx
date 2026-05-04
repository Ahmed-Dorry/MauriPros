import React from "react";
import Link from "@/components/CustomLink";

interface FinalCTASectionProps {
  data: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ data }) => {
  return (
    <section className="final-cta-area">
      <div className="final-cta-area-inner section-spacing">
        <div className="container">
          <div className="final-cta-wrapper">
            <div className="cta-content text-center">
              <div className="section-title-wrapper fade-anim">
                <div className="title-wrapper">
                  <h2 className="section-title">{data.title}</h2>
                </div>
                {data.description && (
                  <div className="text-wrapper mt-30">
                    <p className="text-large">{data.description}</p>
                  </div>
                )}
              </div>

              <div className="btn-wrapper mt-50 fade-anim" data-delay="0.3">
                <div className="t-btn-group justify-content-center">
                  <Link className="t-btn t-btn-circle" href="/contact">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary t-btn-lg" href="/contact">
                    {data.buttonText}
                  </Link>
                  <Link className="t-btn t-btn-circle" href="/contact">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
