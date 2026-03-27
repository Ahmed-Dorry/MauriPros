import React from "react";
import Link from "next/link";
import {IService, ServiceData} from "@/constant/DigitalAgency/service";

interface ServiceProps {
  data: ServiceData;
}
const ServiceSection:React.FC<ServiceProps> = ({data:serviceData}) => {
  return (
    <section className="service-area">
      <div className="service-area-inner section-spacing-top">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrapper fade-anim">
              <div className="subtitle-wrapper">
                <span className="section-subtitle">
                  {serviceData?.sectionSubtitle}
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title">{serviceData?.sectionTitle}</h2>
              </div>
            </div>
            <div className="btn-wrapper fade-anim">
              <div className="t-btn-group">
                <Link className="t-btn t-btn-circle" href={serviceData?.viewAllLink || "#"}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link className="t-btn t-btn-primary" href={serviceData?.viewAllLink || "#"}>
                  {serviceData?.viewAllText}
                </Link>
                <Link className="t-btn t-btn-circle" href={serviceData?.viewAllLink || "#"}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="services-wrapper-box">
          <div className="services-wrapper header-stacking-items">
            {serviceData?.services?.map((srv:IService) => (
              <div className="service-box-1 item" key={srv?.id}>
                <div className="container">
                  <div className="header">
                    {/* The number div has been removed from here! */}
                    <h3 className="title">
                      {srv?.title}
                      <span>
                        <img src={srv?.image} alt={srv?.title || "service image"} />
                      </span>
                    </h3>
                  </div>
                  <div className="service-box-inner body">
                    <div className="btn-wrapper">
                      <Link href={srv?.detailsLink || "#"} className="t-btn">
                        <span>Show Details</span>
                        <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.06 115.49" style={{ fill: 'none', stroke: '#39b54a', strokeMiterlimit: 10, strokeWidth: '2px' }}>
                          <g id="Layer_1-2">
                            <path d="M1,1h121.06v107.33h-16.61V27.83L19.21,114.08l-10.86-10.9L95.55,16.65H1V1Z" />
                          </g>
                        </svg>
                      </Link>
                    </div>
                    <div className="content">
                      <p className="text">{srv?.description}</p>
                      <ul className="service-list">
                        {srv?.items?.map((item: string, index: number) => (
                          <li key={index}>
                            <Link href={srv?.itemLink || "#"}>{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="final"></div>
      </div>
    </section>
  );
};

export default ServiceSection;