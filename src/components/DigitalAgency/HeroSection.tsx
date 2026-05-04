"use client";

import React from "react";
import { HeroData } from "@/constant/DigitalAgency/hero";
import VideoSection from "@/components/DigitalAgency/About/VideoSection";
import videoData from "@/constant/DigitalAgency/About/video";

interface HeroProps {
  data: HeroData;
}

const HeroSection: React.FC<HeroProps> = () => {
  return (
    <section className="hero-area">
      <div className="hero-area-inner">
        <div className="section-content-wrapper">
          <div className="section-content section-spacing-bottom">
            {/* عرض الفيديو والكلام المترجم اللي فوقه بس */}
            <VideoSection data={videoData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;