"use client";
import React from "react";

interface AddonItem {
    title: string;
    price: string;
    period: string;
    description: string;
    icon?: string; // 👈 1. ضفنا المتغير بتاع الأيقونة هنا
}

interface AddonsSectionProps {
    data: {
        title: string;
        items: AddonItem[];
    };
}

const AddonsSection: React.FC<AddonsSectionProps> = ({ data }) => {
    if (!data) return null;

    return (
        <section className="addons-area section-spacing bg-light">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">{data.title}</h2>
                </div>
                <div className="row g-4">
                    {data.items.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6 fade_up_anim" data-delay={`${0.1 * (index + 1)}`}>
                            {/* 👇 ضفنا text-center عشان الأيقونة والكلام يبقوا متناسقين 👇 */}
                            <div className="addon-card h-100 p-4 bg-white rounded-3 shadow-sm text-center">
                                
                                {/* 👇 2. كود عرض الأيقونة لو موجودة في الداتا 👇 */}
                                {item.icon && (
                                    <div className="icon-wrapper mb-4 d-flex justify-content-center">
                                        <img 
                                            src={item.icon} 
                                            alt={item.title} 
                                            style={{ width: "64px", height: "64px", objectFit: "contain" }} 
                                        />
                                    </div>
                                )}

                                <h3 className="h5 fw-bold mb-3">{item.title}</h3>
                                <p className="text-muted mb-0 small">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AddonsSection;