"use client";

import React, { useRef, useEffect, useState } from "react";
import { IVideoData } from "@/constant/DigitalAgency/About/video";
import Typewriter from "typewriter-effect";
import heroData from "@/constant/DigitalAgency/hero";
import Header from "@/components/DigitalAgency/Header";
import Link from "@/components/CustomLink";
import { useTranslations, useLocale } from "next-intl"; // 👈 ضفنا useLocale هنا

import heroBg from "@/assets/images/hero/hero-bg2.jpg";

interface VideoProps {
  data: IVideoData;
}

const VideoSection = ({ data: videoData }: VideoProps) => {
  const { videoUrl } = videoData;
  const t = useTranslations("VideoSection");
  const typewriterStrings = t.raw("typewriterStrings") as string[];
  const locale = useLocale(); // 👈 عشان نعرف إحنا في أي لغة
  const isArabic = locale === "ar";

  const videoRef = useRef<HTMLVideoElement>(null);

  // 👇 نظام تبديل الكلمات الأنيق للغة العربية للهروب من بج سفاري 👇
  const [arWordIndex, setArWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!isArabic) return; // لو مش عربي متعملش حاجة
    const interval = setInterval(() => {
      setFade(false); // خفي الكلمة
      setTimeout(() => {
        setArWordIndex((prev) => (prev + 1) % typewriterStrings.length); // هات الكلمة اللي بعدها
        setFade(true); // اظهرها تاني
      }, 500); // سرعة الاختفاء (نص ثانية)
    }, 2500); // مدة بقاء الكلمة على الشاشة (ثانيتين ونص)

    return () => clearInterval(interval);
  }, [isArabic, typewriterStrings.length]);

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

                <div className="title-wrapper">
                  <h1
                    className="safe-hero-title"
                    suppressHydrationWarning={true}
                    style={{ direction: "inherit", minHeight: "100px" }} // ثبتنا الارتفاع عشان ميرعش
                  >
                    {/* 👇 لو عربي، شغل التبديل السلس، لو لغة تانية شغل الكتابة العادية 👇 */}
                    {isArabic ? (
                      <span 
                        style={{
                          opacity: fade ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                          display: "inline-block"
                        }}
                      >
                        {typewriterStrings[arWordIndex]}
                      </span>
                    ) : (
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
                    )}
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