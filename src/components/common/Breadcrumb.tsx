import React from "react";
import {BreadcrumbContent, BreadcrumbProps} from "@/types/common/breadcrumb";

export const breadcrumbContent: BreadcrumbContent = {
  // backgroundImage: breadcrumbServicesImage,
  title: 'Breadcrumb Title'
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title = breadcrumbContent.title,
  // backgroundImage = breadcrumbContent.backgroundImage,
  classNameCustom,
}) => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${backgroundImage.src})`,
      // }}
      className={`breadcrumb-area faq position-relative mt-5 mt-md-0 overflow-hidden ${
        classNameCustom ? classNameCustom : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1
              className="h1 breadcrumb-area__title fade_up_anim"
              data-delay=".2"
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
