"use client";
import React from "react";

export interface MissionVisionItem {
    title: string;
    description: string;
    icon?: string; // Path to icon image
}

export interface MissionVisionData {
    mission: MissionVisionItem;
    vision: MissionVisionItem;
}

interface MissionVisionSectionProps {
    data: MissionVisionData;
}

const MissionVisionSection: React.FC<MissionVisionSectionProps> = ({ data }) => {
    return (
        <section className="mission-vision-area section-spacing">
            <div className="container">
                <div className="row g-4">
                    {/* Mission Card */}
                    <div className="col-lg-6 fade_up_anim" data-delay="0.2">
                        <div className="mission-vision-card h-100 p-3">
                            <div className="icon-wrapper mb-4">
                                <img src={data.mission.icon || "/assets/imgs/icon/icon-1.png"} alt="Mission Icon" className="card-icon" />
                            </div>
                            <h3 className="section-title mb-3">{data.mission.title}</h3>
                            <p className="text">
                                {data.mission.description}
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="col-lg-6 fade_up_anim" data-delay="0.4">
                        <div className="mission-vision-card h-100 p-3">
                            <div className="icon-wrapper mb-4">
                                <img src={data.vision.icon || "/assets/imgs/icon/icon-2.png"} alt="Vision Icon" className="card-icon" />
                            </div>
                            <h3 className="section-title mb-3">{data.vision.title}</h3>
                            <p className="text">
                                {data.vision.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
