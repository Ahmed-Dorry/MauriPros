
import { AboutData as DigitalAboutData } from "./about";
import { ProcessData } from "./process";
// import { AboutTwoData } from "../AiAgency/about2"; // Removed as we are replacing it
import { WhatWeDoData } from "../../components/DigitalAgency/WhatWeDoSection";
import { OurStoryVideoData } from "../../components/DigitalAgency/OurStoryVideoSection";
import { MissionVisionData } from "../../components/DigitalAgency/MissionVisionSection";

// About Section Data
export const aboutIntroData: DigitalAboutData = {
    subtitle: "About Us",
    title: "We Build Brands That Grow",
    description: "222Medias is a creative and digital marketing agency focused on helping businesses stand out, connect with their audience, and grow with purpose. We combine strategy, design, and performance to deliver work that drives real results.",
    ctaText: "Learn More",
    ctaLink: "/service",
    circleImages: {
        textImg: "/assets/imgs/shape/shape-2.webp",
        iconImg: "/assets/imgs/shape/shape-3.webp",
        link: "#our-story",
    },
    mainImage: "/assets/imgs/gallery/about-home.jpg",
    counters: [
        { value: 98, suffix: "%", label: "Client Satisfaction", delay: "0.30" },
        { value: 50, suffix: "+", label: "Projects Completed", delay: "0.45" },
        { value: 10, suffix: "+", label: "Team Members", delay: "0.60" },
        { value: 5, suffix: "+", label: "Years Experience", delay: "0.75" },
    ],
};

// Our Story Data (Using new OurStoryVideoSection schema)
export const ourStoryData: OurStoryVideoData = {
    subtitle: "Our Story",
    text: "222Medias was founded to help businesses move beyond scattered marketing efforts and unclear brand messaging. We saw the need for a smarter, more focused approach — one that aligns creativity with business goals. Today, we work with brands that want clarity, consistency, and measurable growth.",
    videoUrl: "/assets/video/home2video.mp4", // Using existing video asset
};

// What We Do Data (Using new WhatWeDoSection schema)
export const whatWeDoData: WhatWeDoData = {
    subtitle: "What We Do",
    title: "Marketing Systems for Long-Term Success",
    exploreLink: "/services",
    tabs: [
        {
            id: "branding",
            title: "Branding & Design",
            image: "/assets/imgs/about/branding.webp",
            description: "From logos to visual identity systems, we create brands that leave a lasting impression. Our design philosophy is rooted in purpose and strategy.",
            detailLink: "/services/branding",
        },
        {
            id: "marketing",
            title: "Digital Marketing",
            image: "/assets/imgs/about/digital-marketing.webp",
            description: "We drive growth through targeted campaigns, SEO, and social media strategies that connect you with your ideal audience.",
            detailLink: "/services/social-media",
        },
        {
            id: "development",
            title: "Web Development",
            image: "/assets/imgs/about/web-development.webp",
            description: "We build fast, responsive, and user-friendly websites that convert visitors into customers. Technology that works for you.",
            detailLink: "/services/web-design",
        },
        {
            id: "strategy",
            title: "Strategic Consulting",
            image: "/assets/imgs/about/strategic-consulting.webp",
            description: "We don't just execute; we plan. Our strategic consulting ensures your marketing efforts are aligned with your business goals.",
            detailLink: "/services/review-marketing",
        }
    ]
};

// Mission & Vision Data (Using new MissionVisionSection schema)
export const missionVisionData: MissionVisionData = {
    mission: {
        title: "Our Mission",
        description: "To help businesses grow through clear strategy and effective creative execution. We focus on delivering work that is simple, impactful, and aligned with real business objectives.",
        icon: "/assets/imgs/icon/our-mission-icon.svg"
    },
    vision: {
        title: "Our Vision",
        description: "To become a trusted creative and marketing partner for brands ready to scale. We believe strong brands are built through clarity, consistency, and smart decisions.",
        icon: "/assets/imgs/icon/our-vision-icon.svg"
    }
};

// How We Work (Using ProcessSection schema)
export const processData: ProcessData = {
    sectionSubtitle: "How We Work",
    sectionTitle: "Our Process",
    ctaText: "Get Started",
    ctaLink: "/contact",
    steps: [
        {
            id: 1,
            number: "01",
            title: "Strategy First",
            description: "We start by understanding your goals, audience, and challenges.",
            image: "/assets/imgs/icon/icon1.png",
        },
        {
            id: 2,
            number: "02",
            title: "Purposeful Design",
            description: "Every detail is created to support function and performance.",
            image: "/assets/imgs/icon/icon2.png",
        },
        {
            id: 3,
            number: "03",
            title: "Continuous Improvement",
            description: "We refine, optimize, and grow with your business.",
            image: "/assets/imgs/icon/icon3.png",
        },
        {
            id: 4,
            number: "04",
            title: "Transparent Communication",
            description: "We keep you informed and involved every step of the way.",
            image: "/assets/imgs/icon/icon4.png",
        }
    ],
};

// Why 222Medias (Using IdealClientsSection schema)
export const whyChooseUsData = {
    title: "Why 222Medias",
    description: "Clear strategy, not guesswork.",
    points: [
        "Strong creative direction",
        "Transparent communication",
        "Results-focused mindset",
        "We work as an extension of your team."
    ],
};

// CTA Data (Using FinalCTASection schema)
export const ctaData = {
    title: "Let’s Work Together",
    description: "Ready to build a stronger brand and better results?",
    buttonText: "Get a Consultation",
};
