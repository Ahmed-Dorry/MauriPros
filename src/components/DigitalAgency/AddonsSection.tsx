"use client";
import React from "react";

interface AddonItem {
    title: string;
    price: string;
    period: string;
    description: string;
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
                            <div className="addon-card h-100 p-4 bg-white rounded-3 shadow-sm">
                                <h3 className="h5 fw-bold mb-2">{item.title}</h3>
                                {/*<div className="d-flex align-items-baseline mb-3">*/}
                                {/*    <span className="h4 fw-bold text-success mb-0">{item.price}</span>*/}
                                {/*    <span className="text-muted ms-2 small">{item.period}</span>*/}
                                {/*</div>*/}
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
