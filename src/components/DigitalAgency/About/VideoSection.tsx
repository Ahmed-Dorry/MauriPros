"use client";

import React, { useRef, useEffect } from "react";
import { IVideoData } from "@/constant/DigitalAgency/About/video";
import Typewriter from "typewriter-effect";
import heroData from "@/constant/DigitalAgency/hero";
import Header from "@/components/DigitalAgency/Header";
import Link from "@/components/CustomLink";
import { useTranslations } from "next-intl";

import heroBg from "@/assets/images/hero/hero-bg1.jpg";

interface VideoProps {
  data: IVideoData;
}

const VideoSection = ({ data: videoData }: VideoProps) => {
  const { videoUrl } = videoData;
  const t = useTranslations("VideoSection");
  const typewriterStrings = t.raw("typewriterStrings");

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.log("متصفح الموبايل منع التشغيل التلقائي:", error);
      });
    }
  }, []);

  return (
    <section className="video-area fade-anim">
      <Header />

      <div className="area-bg">
        {/* 👇 شيلنا كلمة defaultMuted من هنا عشان رياكت ميزعلش 👇 */}
        <video 
          ref={videoRef}
          loop 
          muted 
          autoPlay 
          playsInline 
          preload="auto"
          poster={heroBg.src} 
        >
          <source src={videoUrl} type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
      </div>
      
      <div className="container">
        <div className="video-area-inner section-spacing">
          <div className="section-content">
            <div className="section-header">
              <div className="section-title-wrapper">
                
                <div className="subtitle-wrapper">
                  <span
                    className="section-subtitle fade-anim"
                    data-direction="left"
                    data-delay="0.45"
                    data-offset="100"
                    suppressHydrationWarning={true}
                  >
                    {t("subtitle")}
                  </span>
                </div>

                <div className="title-wrapper type-out-wrapper">
                  <h1
                    className="section-title typed-out fade-anim"
                    data-direction="left"
                    data-delay="0.30"
                    data-offset="100"
                    suppressHydrationWarning={true}
                  >
                    <Typewriter
                      options={{
                        strings: typewriterStrings,
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 50,
                        cursorClassName: "opacity-0 w-1 d-inline-block",
                      }}
                    />
                  </h1>
                </div>
              </div>
            </div>

            <div className="hero-content">
              <div className="text-wrapper">
                <p className="text fade-anim" data-delay="0.5" suppressHydrationWarning={true}>
                  {t("description")}
                </p>
              </div>

              <div className="btn-wrapper fade-anim">
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle" href={heroData?.button?.url || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary" href={heroData?.button?.url || "#"}>
                    {t("buttonText")}
                  </Link>
                  <Link className="t-btn t-btn-circle" href={heroData?.button?.url || "#"}>
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

export default VideoSection;