"use client";
import React from "react";

export interface OurStoryVideoData {
    subtitle?: string;
    text: string;
    videoUrl: string;
}

interface OurStoryVideoSectionProps {
    data: OurStoryVideoData;
}

const OurStoryVideoSection: React.FC<OurStoryVideoSectionProps> = ({ data }) => {
    return (
        <section className="story-area fade-anim">
            <div className="area-bg">
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
                        zIndex: 1
                    }}
                ></div>
                <video loop muted autoPlay playsInline style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
                    <source src={data.videoUrl} type="video/mp4" />
                </video>
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="video-area-inner section-spacing">
                    <div className="section-content text-center">
                        {data.subtitle && (
                            <div className="section-title-wrapper justify-content-center mb-4">
                                <div className="subtitle-wrapper fade-anim">
                                    <span className="section-subtitle bg-transparent text-white border-white">
                                        {data.subtitle}
                                    </span>
                                </div>
                            </div>
                        )}

                        <div className="hero-content justify-content-center">
                            <div className="text-wrapper" style={{ maxWidth: '900px', margin: '0 auto' }}>
                                <p
                                    className="text word-anim text-white"
                                    style={{
                                        fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                                        lineHeight: '1.6',
                                        fontWeight: '300',
                                        fontStyle: 'italic'
                                    }}
                                    suppressHydrationWarning={true}
                                >
                                    {data.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStoryVideoSection;
