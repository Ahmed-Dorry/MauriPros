"use client";
import React from "react";
import Link from "@/components/CustomLink";
import { ICapability, WorkData } from "@/constant/DigitalAgency/work";
import WorkSlider from "@/components/DigitalAgency/Portfolio/WorkSlider";

interface WorkProps {
  pageInner?: boolean;
  pageInnerSlider?: boolean;
  type?: boolean | number;
  data: WorkData;
}

const WorkSection: React.FC<WorkProps> = ({
  pageInner,
  pageInnerSlider,
  type = false,
  data: workData,
}) => {
  
  // العنوان الديناميكي لكلمة Includes (يأتي من الترجمة أو يضع قيمة افتراضية)
  const includesText = workData?.includesTitle || "Includes:";

  const WorkAreaInner = () => {
    return (
      <section className={`work-area-${type}`}>
        <div className="container">
          <div className={`work-area-${type}-inner section-spacing`}>
            <div
              className="works-wrapper-box fade-anim"
              suppressHydrationWarning={true}
            >
              <div className="works-wrapper">
                {workData?.capabilities?.map((item: ICapability) => (
                  <div
                    className={`work-box-${type} fade-anim`}
                    key={item.id}
                    suppressHydrationWarning={true}
                  >
                    <div className="thumb">
                      <div className="img_anim_reveal">
                        <Link href={item.ctaLink || "#"}>
                          <img
                            src={item.image}
                            alt={item.title || "Capability image"}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="title">
                        <Link href={item.ctaLink || "#"}>{item.title}</Link>
                      </h3>
                      <p className="description">{item.description}</p>
                      <div className="includes-list">
                        {/* استخدام الكلمة المترجمة هنا */}
                        <strong>{includesText}</strong>
                        <ul>
                          {item.includes.map((include, idx) => (
                            <li key={idx}>{include}</li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className={`t-btn-group ${type === 7 ? "d-none" : ""}`}
                      >
                        <Link
                          className="t-btn t-btn-primary"
                          href={item.ctaLink || "#"}
                        >
                          {item.ctaText}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                {!workData?.capabilities?.length && (
                  <p>No capabilities available at this time.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const WorkAreaSlider = () => {
    return (
      <section className="work-area-8">
        <div className="container">
          <div className="work-area-8-inner section-spacing">
            <div className="work-area-2 page-portfolio-3">
              <div
                className="works-wrapper-box fade-anim"
                suppressHydrationWarning={true}
              >
                <div className="works-wrapper">
                  <WorkSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const WorkAreaMain = () => {
    return (
      <section className="work-area">
        <div className="work-area-inner section-spacing">
          <div className="container">
            <div className="section-header">
              <div
                className="section-title-wrapper fade-anim"
                suppressHydrationWarning={true}
              >
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">
                    {workData?.sectionSubtitle}
                  </span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{workData?.sectionTitle}</h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className="works-wrapper-box fade-anim"
            suppressHydrationWarning={true}
          >
            <div className="container">
              <div className="works-wrapper">
                {workData?.capabilities?.map((item: ICapability) => (
                  <div
                    className="work-box-1 fade-anim"
                    key={item.id}
                    suppressHydrationWarning={true}
                  >
                    <div className="thumb">
                      <div className="img_anim_reveal">
                        <Link href={item.ctaLink || "#"}>
                          <img
                            src={item.image}
                            alt={item.title || "Capability image"}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h3 className="title">
                        <Link href={item.ctaLink || "#"}>{item.title}</Link>
                      </h3>
                      <p className="description">{item.description}</p>
                      <div className="includes-list">
                        {/* استخدام الكلمة المترجمة هنا أيضاً */}
                        <strong>{includesText}</strong>
                        <ul>
                          {item.includes.map((include, idx) => (
                            <li key={idx}>{include}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="btn-wrapper fade-anim">
                        <div className="t-btn-group">
                          <Link className="t-btn t-btn-circle" href={item?.ctaLink || "#"}>
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                          <Link className="t-btn t-btn-primary" href={item?.ctaLink || "#"}>
                            {item?.ctaText}
                          </Link>
                          <Link className="t-btn t-btn-circle" href={item?.ctaLink || "#"}>
                            <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}

                {!workData?.capabilities?.length && (
                  <p>No capabilities available at this time.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  if (pageInnerSlider) {
    return <WorkAreaSlider />;
  }

  return pageInner ? <WorkAreaInner /> : <WorkAreaMain />;
};

export default WorkSection;