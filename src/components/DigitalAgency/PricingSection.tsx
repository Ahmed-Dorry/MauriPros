"use client";
import React from "react";

interface PricingPlan {
    name: string;
    price: string;
    period: string;
    subtitle: string;
    features: string[];
}

interface PricingSectionProps {
    data: {
        title: string;
        plans: PricingPlan[];
    };
}

const PricingSection: React.FC<PricingSectionProps> = ({ data }) => {
    if (!data) return null;

    return (
        <section className="pricing-area section-spacing">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title">{data.title}</h2>
                </div>
                <div className="row justify-content-center g-4">
                    {data.plans.map((plan, index) => (
                        <div key={index} className="col-lg-5 col-md-6 fade_up_anim" data-delay={`${0.2 * (index + 1)}`}>
                            <div className="pricing-card h-100 p-5 bg-white rounded-4 shadow-sm">
                                <div className="pricing-header mb-4">
                                    {/*<div className="d-flex align-items-baseline mb-2">*/}
                                    {/*    <span className="h1 fw-bold text-success mb-0">{plan.price}</span>*/}
                                    {/*    <span className="text-muted ms-2">{plan.period}</span>*/}
                                    {/*</div>*/}
                                    {/*<p className="text-muted mb-3">{plan.subtitle}</p>*/}
                                    <h3 className="h4 fw-bold mb-0">{plan.name}</h3>
                                </div>
                                <div className="pricing-features">
                                    <ul className="list-unstyled mb-0">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="d-flex align-items-start mb-3">
                                                <i className="fa-solid fa-circle-check text-success mt-1 me-3"></i>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
