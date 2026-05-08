import { IServiceData } from "@/constant/DigitalAgency/service-details/service-section-data";
import { IServiceDetails } from "@/constant/DigitalAgency/service-details/service-details-data";
import { ProcessData } from "@/constant/DigitalAgency/process";
import { IFaq } from "@/constant/DigitalAgency/faq/faq-data";

export interface ServicePageData {
  slug: string;
  name: string;
  heroSection: IServiceData;
  problemSection: {
    title: string;
    description: string;
    painPoints: string[];
  };
  approachSection: IServiceDetails;
  whatsIncluded: {
    title: string;
    categories: {
      title: string;
      items: string[];
    }[];
  };
  processSection: ProcessData;
  whyWorkWithUs: {
    title: string;
    points: string[];
    footer: string;
  };
  idealClients: {
    title: string;
    description: string;
    points: string[];
  };
  faqsData: {
    faqs: IFaq[];
    image: {
      src: string;
      alt: string;
    };
  };
  finalCTA: {
    title: string;
    description: string;
    buttonText: string;
  };
  pricingSection?: {
    title: string;
    plans: {
      name: string;
      price: string;
      period: string;
      subtitle: string;
      features: string[];
    }[];
  };
  addonsSection?: {
    title: string;
    items: {
      title: string;
      price: string;
      period: string;
      description: string;
      icon?: string;
      
    }[];
  };
}

// 1. الداتا الإنجليزي (حط فيها كل خدماتك زي ما هي)
// 1. الداتا الإنجليزي 
const enServices: ServicePageData[] = [
  {
    slug: "web-design",
    name: "Web Design",
    heroSection: {
      subtitle: "Web Design", title: "Design Websites That Convert and Impress",
      description: "Your website is often the first impression customers have of your business. We create modern, responsive websites that not only look great but drive real results.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Contact Us" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: ["Website Strategy & Planning", "Design & Development", "Technical Optimization", "Mobile-First Design", "Content & Branding", "Analytics & Support", "User Experience Design", "Performance Optimization", "SEO-Friendly Structure"],
      gallery: [{ src: "/assets/images/services/web-design/1.webp", alt: "Web Design Example 1" }, { src: "/assets/images/services/web-design/2.webp", alt: "Web Design Example 2" }],
    },
    problemSection: { title: "What's Holding Your Website Back?", description: "Many businesses struggle with their website because:", painPoints: ["Their site looks outdated or unprofessional", "Visitors can't easily find information or take action", "Mobile performance is poor or slow", "Branding isn't consistent across pages"] },
    approachSection: {
      sectionHeader: { subtitle: "Our Approach", title: "Our Approach to Web Design" },
      video: { src: "/assets/images/services/web-design/3.webp", type: "video/mp4" },
      content: { title: "We create websites that are strategically designed for your audience", paragraphs: ["Our web design work focuses on user-centered design that converts visitors, fast and responsive mobile-first performance, and clear branding and messaging across pages.", "Everything we do is built to support long-term growth with scalable designs that grow with your business."] },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        { title: "Website Strategy & Planning", items: ["Audience research & user personas", "Sitemap & navigation planning", "Design inspiration & moodboards"] },
        { title: "Design & Development", items: ["Custom page layouts and templates", "Mobile-first responsive design", "Interactive elements and calls-to-action"] },
        { title: "Technical Optimization", items: ["Fast load times", "SEO-friendly structure", "Cross-browser compatibility"] },
        { title: "Content & Branding", items: ["Messaging and copy alignment", "Visual branding integration", "Image optimization"] },
        { title: "Reporting & Support", items: ["Analytics tracking setup", "Post-launch support", "Clear performance updates"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process", sectionTitle: "How We Build Your Website", ctaText: "Get Started", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit & Discovery", description: "We analyze your current website, competitors, and goals.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Strategy & Planning", description: "We define the site structure, user experience, and design direction.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Design & Build", description: "We create responsive, optimized, and visually engaging pages.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Launch & Growth", description: "We monitor performance, gather feedback, and refine the experience.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "Why Work With Us?", points: ["Strategy-first web design (no guesswork)", "Clear communication and realistic timelines", "Design and marketing working together", "Built for real businesses, not just pretty websites"], footer: "We focus on measurable results that support your business goals." },
    idealClients: { title: "Is This Right for You?", description: "This service is ideal if you:", points: ["Want a modern, professional website", "Serve a local, regional, or online market", "Have a website but it's underperforming", "Are looking for sustainable growth through design"] },
    faqsData: {
      faqs: [{ question: "How long does a website take to launch?", answer: "Most sites take 6–12 weeks depending on complexity." }, { question: "Do you offer redesigns only?", answer: "We do both new websites and redesigns for existing sites." }, { question: "Is web design better than SEO or ads?", answer: "Design creates the foundation for all marketing. A great website + SEO + ads works best." }],
      image: { src: "/assets/images/services/web-design/3.webp", alt: "Web Design Process" },
    },
    finalCTA: { title: "Let's Build Your Website", description: "Turn your website into a powerful tool that impresses visitors and drives results.", buttonText: "Get a free consultation" },
  },
  {
    slug: "seo",
    name: "Search Engine Optimization",
    heroSection: {
      subtitle: "Search Engine Optimization (SEO)", title: "Be Found by the Right Customers at the Right Time",
      description: "SEO helps your business show up when people are actively searching for your services. We focus on building long-term visibility that drives qualified traffic, not just rankings.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Contact Us" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["SEO Strategy & Research", "On-Page Optimization", "Technical SEO", "Local SEO", "Keyword Research", "Content Optimization", "Link Building", "Performance Tracking", "Competitor Analysis"],
      gallery: [{ src: "/assets/images/services/seo/1.webp", alt: "SEO Strategy" }, { src: "/assets/images/services/seo/2.webp", alt: "SEO Results" }],
    },
    problemSection: { title: "What's Holding Your Website Back?", description: "Many businesses struggle with SEO because:", painPoints: ["Their website isn't optimized for search engines", "Competitors dominate Google results", "Traffic is inconsistent or irrelevant", "Local customers can't find them online"] },
    approachSection: {
      sectionHeader: { subtitle: "Our Approach", title: "Our Approach to SEO" }, video: { src: "/assets/images/services/seo/3.webp", type: "video/mp4" },
      content: { title: "Data-driven SEO that attracts customers ready to take action", paragraphs: ["We use a strategic, data-driven approach to improve your visibility and attract customers who are ready to take action.", "Everything we do is built for sustainable growth with clear tracking and continuous optimization."] },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        { title: "SEO Strategy & Research", items: ["Keyword research based on search intent", "Competitor analysis", "SEO opportunity mapping"] },
        { title: "On-Page Optimization", items: ["Page titles & meta descriptions", "Header and content optimization", "Internal linking improvements"] },
        { title: "Technical SEO", items: ["Website speed optimization", "Mobile performance fixes", "Indexing and crawlability improvements"] },
        { title: "Local SEO", items: ["Google Business Profile optimization", "Local keyword targeting", "Improved map visibility"] },
        { title: "Reporting & Tracking", items: ["Keyword ranking tracking", "Traffic insights", "Clear performance updates"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process", sectionTitle: "How We Improve Your SEO", ctaText: "Get Started", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit", description: "We analyze your website, competitors, and current performance.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Strategy", description: "We create a clear SEO plan aligned with your business goals.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Optimization", description: "We implement on-page, technical, and local SEO improvements.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Growth", description: "We monitor results and continuously optimize for better performance.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "Why Work With Us?", points: ["Strategy-first SEO (no guesswork)", "Clear communication and realistic expectations", "Design and marketing working together", "Built for real businesses, not vanity metrics"], footer: "We focus on measurable growth that supports your long-term goals." },
    idealClients: { title: "Is This Right for You?", description: "This service is ideal if you:", points: ["Want consistent organic leads", "Serve a local or regional market", "Have a website but low visibility", "Are looking for sustainable growth"] },
    faqsData: {
      faqs: [{ question: "How long does SEO take?", answer: "SEO is a long-term investment. Most clients see progress within a few months, with steady growth over time." }, { question: "Do you offer local SEO only?", answer: "We provide both local and broader SEO strategies depending on your needs." }, { question: "Is SEO better than paid ads?", answer: "SEO builds long-term visibility, while ads provide immediate traffic. Many businesses benefit from both." }],
      image: { src: "/assets/images/services/seo/3.webp", alt: "SEO Strategy" },
    },
    finalCTA: { title: "Let's Improve Your Search Visibility", description: "Turn your website into a reliable source of qualified leads.", buttonText: "Get a free consultation" },
  },
  {
    slug: "social-media",
    name: "Social Media Management",
    heroSection: {
      subtitle: "Social Media Management", title: "Build a Strong Brand and Turn Followers Into Customers",
      description: "Your audience is already on social media. We help you show up consistently, communicate clearly, and turn attention into real business results across the right platforms.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Get a free consultation" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Strategy & Planning", "Content Creation", "Publishing & Management", "Community Engagement", "Performance & Reporting", "Branded Post Designs", "Content Calendar", "Platform Optimization", "Analytics & Insights"],
      gallery: [{ src: "/assets/images/services/social-media/1.webp", alt: "Social Media Content" }, { src: "/assets/images/services/social-media/2.webp", alt: "Social Media Strategy" }],
    },
    problemSection: { title: "What's Holding Your Social Media Back?", description: "Many businesses struggle with social media because:", painPoints: ["Posting is inconsistent or random", "Content looks generic or off-brand", "Engagement is low despite posting regularly", "There's no clear strategy or goal behind the content", "Social media isn't driving traffic, leads, or sales"] },
    approachSection: {
      sectionHeader: { subtitle: "Our Approach", title: "Our Approach to Social Media" }, video: { src: "/assets/images/services/social-media/3.webp", type: "video/mp4" },
      content: { title: "We treat social media as a business tool, not just content posting", paragraphs: ["Everything we do is built around your brand, audience, and growth goals.", "No trends for the sake of trends — only what works for your brand and supports long-term visibility."] },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        { title: "Strategy & Planning", items: ["Social media audit & competitor analysis", "Platform selection", "Content pillars & posting strategy", "Monthly content calendar"] },
        { title: "Content Creation", items: ["Branded post designs", "Captions & messaging aligned with your voice", "Hashtag research & optimization", "Reels / short-form content direction"] },
        { title: "Publishing & Management", items: ["Scheduled posting", "Community monitoring & engagement support", "Brand consistency across all platforms"] },
        { title: "Performance & Reporting", items: ["Monthly performance reports", "Insights & content optimization", "Ongoing strategy adjustments"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process", sectionTitle: "How We Grow Your Social Media", ctaText: "Get Started", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit & Discovery", description: "We review your current presence, competitors, and goals.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Strategy & Planning", description: "We define content pillars, platforms, and posting structure.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Content Creation & Publishing", description: "We design, write, and schedule content that reflects your brand.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Optimize & Grow", description: "We track performance, analyze results, and refine the strategy.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "Why Work With Us?", points: ["Strategy-first social media (not random posting)", "Strong visual branding backed by marketing thinking", "Clear communication and consistent delivery", "Content designed for real engagement and growth", "Focused on results, not vanity metrics"], footer: "We help brands build authority, not just followers." },
    idealClients: { title: "Is This Right for You?", description: "This service is ideal if you:", points: ["Want a consistent and professional social media presence", "Need content that reflects your brand properly", "Struggle with engagement or direction", "Want social media to support real business growth"] },
    faqsData: {
      faqs: [{ question: "How often do you post?", answer: "Posting frequency depends on your goals and platforms, typically 3–5 times per week." }, { question: "Do you create both designs and captions?", answer: "Yes. We handle visuals, copy, and strategy together for consistency." }, { question: "Can social media really drive sales?", answer: "Yes — when done strategically. Social media supports awareness, trust, and conversions when aligned with your funnel." }],
      image: { src: "/assets/images/services/social-media/3.webp", alt: "Social Media Management" },
    },
    finalCTA: { title: "Let's Grow Your Social Media Presence", description: "Turn your social media into a powerful brand and growth channel — not just another task on your list.", buttonText: "Get a free consultation" },
  },
  {
    slug: "ppc",
    name: "Pay-Per-Click Advertising",
    heroSection: {
      subtitle: "Pay-Per-Click (PPC) Advertising", title: "Get in Front of the Right Customers — Exactly When They're Ready to Buy",
      description: "PPC advertising puts your business at the top of search results and feeds instantly. We create and manage data-driven ad campaigns that attract qualified traffic and turn clicks into real revenue.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Get a free consultation" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Strategy & Setup", "Ad Creation", "Campaign Management", "Reporting & Optimization", "Keyword Research", "Audience Targeting", "A/B Testing", "Conversion Tracking", "ROI Analysis"],
      gallery: [{ src: "/assets/images/services/ppc/1.webp", alt: "PPC Campaigns" }, { src: "/assets/images/services/ppc/2.webp", alt: "Ad Performance" }],
    },
    problemSection: { title: "What's Holding Your Ads Back?", description: "Many businesses struggle with paid ads because:", painPoints: ["Ad spend is high but results are low", "Traffic isn't converting into leads or sales", "Targeting is too broad or poorly defined", "Ads lack clear messaging or strong creatives", "There's no clear tracking or performance insight"] },
    approachSection: {
      sectionHeader: { subtitle: "Our Approach", title: "Our Approach to PPC Advertising" }, video: { src: "/assets/images/services/ppc/3.webp", type: "video/mp4" },
      content: { title: "We don't guess, and we don't 'boost and hope'", paragraphs: ["Every PPC campaign we run is built around data, intent, and conversion.", "The goal isn't clicks — it's results with clear tracking, reporting, and ROI visibility."] },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        { title: "Strategy & Setup", items: ["Account audit or new account setup", "Audience & keyword research", "Platform selection", "Conversion tracking setup"] },
        { title: "Ad Creation", items: ["Search, display, and social ad copy", "Creative direction for visuals and videos", "Multiple ad variations for testing", "Strong calls-to-action"] },
        { title: "Campaign Management", items: ["Bid and budget optimization", "A/B testing for ads and audiences", "Ongoing performance monitoring", "Quality score improvements"] },
        { title: "Reporting & Optimization", items: ["Clear performance reports", "Cost per lead / conversion analysis", "Ongoing refinements and scaling strategies"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process", sectionTitle: "How We Turn Clicks Into Customers", ctaText: "Get Started", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit & Discovery", description: "We analyze your business, audience, and competitors.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Strategy & Setup", description: "We structure campaigns, targeting, and tracking.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Launch & Optimize", description: "We launch ads, test variations, and optimize performance.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Scale & Improve", description: "We double down on what works and eliminate wasted spend.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "Why Work With Us?", points: ["Performance-driven PPC strategies", "Clear reporting and full transparency", "Creative + strategy under one roof", "Focus on ROI, not vanity metrics", "Built for sustainable, scalable growth"], footer: "Your ad budget deserves more than guesswork." },
    idealClients: { title: "Is This Right for You?", description: "This service is ideal if you:", points: ["Want immediate visibility and traffic", "Need predictable leads or sales", "Have tried ads before with poor results", "Want clear data and measurable outcomes"] },
    faqsData: {
      faqs: [{ question: "How fast can I see results from PPC?", answer: "You can start seeing traffic immediately, with meaningful results typically within the first 2–4 weeks." }, { question: "Do you manage ad spend as well?", answer: "Yes. We manage budgets, bids, and optimization, while you pay ad spend directly to the platforms." }, { question: "Is PPC better than SEO?", answer: "PPC delivers immediate results. SEO builds long-term growth. Together, they work best." }],
      image: { src: "/assets/images/services/ppc/3.webp", alt: "PPC Advertising" },
    },
    finalCTA: { title: "Let's Turn Clicks Into Customers", description: "Stop wasting ad spend and start running campaigns built to convert.", buttonText: "Get a free consultation" },
  },
  {
    slug: "review-marketing",
    name: "Review Marketing",
    heroSection: {
      subtitle: "Review Marketing", title: "Build Trust, Boost Visibility, and Win More Customers",
      description: "Online reviews directly influence buying decisions. We help you collect, manage, and leverage customer reviews to strengthen your reputation, improve local visibility, and drive more conversions.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Get a free consultation" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Review Strategy & Setup", "Review Management", "Review Amplification", "Reporting & Insights", "Reputation Monitoring", "Response Strategies", "Social Proof Marketing", "Platform Optimization", "Sentiment Analysis"],
      gallery: [{ src: "/assets/images/services/review-marketing/1.webp", alt: "Customer Reviews" }, { src: "/assets/images/services/review-marketing/2.webp", alt: "Review Management" }],
    },
    problemSection: { title: "What's Holding Your Reputation Back?", description: "Many businesses struggle with review marketing because:", painPoints: ["They don't consistently ask customers for reviews", "Reviews are scattered across multiple platforms", "Negative reviews go unmanaged or unanswered", "Positive reviews aren't being used in marketing", "Low review volume hurts trust and local rankings"] },
    approachSection: {
      sectionHeader: { subtitle: "Our Approach", title: "Our Approach to Review Marketing" }, video: { src: "/videos/Business_People.mp4", type: "video/mp4" },
      content: { title: "We turn reviews into a strategic growth asset", paragraphs: ["Our process focuses on increasing review volume, improving ratings, and using social proof where it matters most.", "Trust isn't optional — it's everything. We help you earn trust and use it wisely."] },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        { title: "Review Strategy & Setup", items: ["Reputation audit across platforms", "Platform prioritization", "Review request strategy & timing", "Automation setup (email / SMS)"] },
        { title: "Review Management", items: ["Monitoring and alerts", "Review response guidelines", "Negative review handling strategy", "Brand-safe communication"] },
        { title: "Review Amplification", items: ["Using reviews in website and landing pages", "Social proof for ads and social media", "Testimonial highlights and snippets"] },
        { title: "Reporting & Insights", items: ["Review growth tracking", "Rating and sentiment analysis", "Actionable insights for improvement"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process", sectionTitle: "How We Build Your Reputation", ctaText: "Get Started", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit & Discovery", description: "We review your current ratings, platforms, and customer journey.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Strategy & Setup", description: "We build a compliant system to generate and manage reviews.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Launch & Monitor", description: "We start collecting reviews and managing responses.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Optimize & Leverage", description: "We refine the process and use reviews to drive growth.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "Why Work With Us?", points: ["Ethical, policy-compliant review strategies", "Focus on quality and authenticity", "Clear systems, not manual chasing", "Reviews integrated into your marketing funnel", "Built to improve trust and conversions"], footer: "We help you earn trust — and use it wisely." },
    idealClients: { title: "Is This Right for You?", description: "This service is ideal if you:", points: ["Rely on trust and reputation to win customers", "Want more reviews without awkward follow-ups", "Serve a local or service-based market", "Want better visibility in local search results"] },
    faqsData: {
      faqs: [{ question: "Is review marketing allowed by Google?", answer: "Yes — when done ethically. We follow all platform policies and best practices." }, { question: "Can you remove negative reviews?", answer: "We can't remove legitimate reviews, but we help manage responses and improve overall sentiment." }, { question: "Do reviews help SEO?", answer: "Absolutely. Reviews strongly influence local rankings and click-through rates." }],
      image: { src: "/assets/images/services/review-marketing/3.webp", alt: "Review Marketing" },
    },
    finalCTA: { title: "Turn Reviews Into a Competitive Advantage", description: "Build trust, improve visibility, and convert more customers with a strong online reputation.", buttonText: "Get a free consultation" },
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    heroSection: {
      subtitle: "Graphic Design", title: "Design That Communicates, Connects, and Converts",
      description: "Strong design makes your brand recognizable, credible, and memorable. We create visuals that communicate clearly, support your message, and help your business stand out everywhere it appears.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Get a free consultation" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Brand & Visual Strategy", "Marketing & Digital Design", "Print & Offline Design", "Social Media Graphics", "Ad Creatives", "Infographics", "Presentation Design", "Packaging Design", "Brand Guidelines"],
      gallery: [{ src: "/assets/images/services/graphic-design/1.webp", alt: "Graphic Design Work" }, { src: "/assets/images/services/graphic-design/2.webp", alt: "Design Examples" }],
    },
    problemSection: { title: "What's Holding Your Visuals Back?", description: "Many businesses struggle with graphic design because:", painPoints: ["Designs feel inconsistent or off-brand", "Visuals look generic or outdated", "Marketing materials don't communicate clearly", "Different platforms use mismatched styles", "Design doesn't support marketing or sales goals"] },
    approachSection: {
      sectionHeader: { subtitle: "Our Approach", title: "Our Approach to Graphic Design" }, video: { src: "/images/services/graphic-design/3.webp", type: "video/mp4" },
      content: { title: "We design with purpose — not decoration", paragraphs: ["Every visual we create supports your brand identity, messaging, and business objectives.", "Design should work as hard as your business does with creative thinking backed by marketing strategy."] },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        { title: "Brand & Visual Strategy", items: ["Brand style alignment or refinement", "Color, typography, and layout direction", "Visual consistency guidelines"] },
        { title: "Marketing & Digital Design", items: ["Social media designs", "Ads and campaign creatives", "Website and landing page visuals", "Email and digital assets"] },
        { title: "Print & Offline Design", items: ["Business cards and stationery", "Flyers, brochures, and catalogs", "Packaging and labels", "Large-format and promotional materials"] },
        { title: "Delivery & Support", items: ["Print-ready and digital-ready files", "Organized asset delivery", "Ongoing design support when needed"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process", sectionTitle: "How We Create Your Designs", ctaText: "Get Started", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Discovery & Briefing", description: "We understand your brand, goals, and use cases.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Concept & Direction", description: "We develop visual concepts and creative direction.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Design & Refinement", description: "We design, revise, and finalize assets.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Delivery & Use", description: "We deliver ready-to-use files for all platforms.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "Why Work With Us?", points: ["Strategy-led design, not just visuals", "Strong branding and marketing understanding", "Consistency across all platforms", "Design that supports growth and recognition", "Reliable timelines and communication"], footer: "We design brands people remember." },
    idealClients: { title: "Is This Right for You?", description: "This service is ideal if you:", points: ["Need consistent, professional design assets", "Want visuals that reflect your brand properly", "Use both digital and print marketing", "Want design that supports business goals"] },
    faqsData: {
      faqs: [{ question: "Do you work with existing brand guidelines?", answer: "Yes. We can follow, refine, or help build them if needed." }, { question: "Do you offer ongoing design support?", answer: "Yes. We offer both project-based and ongoing design services." }, { question: "Is graphic design important if I already have a logo?", answer: "Absolutely. Design consistency across all touchpoints builds trust and recognition." }],
      image: { src: "/assets/images/services/graphic-design/3.webp", alt: "Graphic Design" },
    },
    finalCTA: { title: "Let's Design Your Brand the Right Way", description: "Turn your visuals into a powerful brand asset — not an afterthought.", buttonText: "Get a free consultation" },
  },
  {
    slug: "branding",
    name: "Branding",
    heroSection: {
      subtitle: "Branding", title: "Build a Brand People Recognize, Trust, and Remember",
      description: "Your brand is more than a logo. It's how your business looks, sounds, and feels at every touchpoint. We help you build a clear, consistent brand that connects with the right audience and supports long-term growth.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Get a free consultation" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Brand Strategy", "Visual Identity", "Brand Assets", "Brand Guidelines", "Logo Design", "Brand Positioning", "Messaging Framework", "Color & Typography", "Brand Documentation"],
      gallery: [{ src: "/assets/images/services/branding/1.webp", alt: "Branding Work" }, { src: "/assets/images/services/branding/2.webp", alt: "Brand Identity" }],
    },
    problemSection: { title: "What's Holding Your Brand Back?", description: "Many businesses struggle with branding because:", painPoints: ["Their brand lacks clarity or direction", "Visuals and messaging feel inconsistent", "The brand doesn't stand out from competitors", "Customers don't clearly understand the value", "Marketing feels disconnected across channels"] },
    approachSection: {
      sectionHeader: { subtitle: "Our Approach", title: "Our Approach to Branding" }, video: { src: "/assets/images/services/branding/3.webp", type: "video/mp4" },
      content: { title: "We build brands with purpose, not trends", paragraphs: ["Every branding decision is rooted in strategy, positioning, and real business goals.", "A strong brand makes every marketing effort more effective with consistency across digital and print."] },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        { title: "Brand Strategy", items: ["Brand discovery & research", "Audience and competitor analysis", "Brand positioning and value proposition", "Brand messaging framework"] },
        { title: "Visual Identity", items: ["Logo design or refinement", "Color palette & typography", "Visual system and design elements", "Brand usage guidelines"] },
        { title: "Brand Assets", items: ["Business cards and stationery", "Social media branding templates", "Website and digital brand elements", "Marketing and print materials"] },
        { title: "Brand Guidelines", items: ["Logo usage rules", "Typography & color standards", "Visual and tone-of-voice consistency", "Brand documentation for future growth"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process", sectionTitle: "How We Build Your Brand", ctaText: "Get Started", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Discovery & Research", description: "We understand your business, audience, and market.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Strategy & Positioning", description: "We define your brand's direction and messaging.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Identity Design", description: "We design the visual and verbal brand system.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Launch & Alignment", description: "We apply the brand and ensure consistency across channels.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "Why Work With Us?", points: ["Strategy-led branding, not logo-only work", "Clear positioning that differentiates your business", "Deep understanding of design and marketing", "Brand systems built to scale", "Practical branding for real businesses"], footer: "We don't just design brands — we build foundations." },
    idealClients: { title: "Is This Right for You?", description: "This service is ideal if you:", points: ["Are launching a new business or rebranding", "Feel your brand no longer represents your business", "Want to stand out in a crowded market", "Need consistency across all touchpoints"] },
    faqsData: {
      faqs: [{ question: "Do you only design logos?", answer: "No. Logos are just one part of a complete brand system." }, { question: "Can you rebrand an existing business?", answer: "Yes. We handle both full rebrands and brand refreshes." }, { question: "How long does branding take?", answer: "Most branding projects take 4–8 weeks depending on scope." }],
      image: { src: "/assets/images/services/branding/3.webp", alt: "Branding Services" },
    },
    finalCTA: { title: "Let's Build a Brand That Lasts", description: "Create a brand that reflects who you are and where your business is going.", buttonText: "Get a free consultation" },
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    heroSection: {
      subtitle: "Email Marketing", title: "Turn Subscribers Into Loyal Customers",
      description: "Email marketing keeps your brand top-of-mind and drives consistent results. We create strategic email campaigns that nurture leads, increase conversions, and build long-term customer relationships.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Get a free consultation" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Strategy & Planning", "Campaign Creation", "Automation & Flows", "Performance & Optimization", "Email Copywriting", "Visual Design", "List Segmentation", "A/B Testing", "Analytics"],
      gallery: [{ src: "/assets/images/services/email-marketing/1.webp", alt: "Email Campaigns" }, { src: "/assets/images/services/email-marketing/2.webp", alt: "Email Marketing" }],
    },
    problemSection: { title: "What's Holding Your Email Marketing Back?", description: "Many businesses struggle with email marketing because:", painPoints: ["Emails are sent irregularly or without a strategy", "Open and click rates are low", "Messaging feels generic or off-brand", "No clear segmentation or automation", "Emails aren't driving meaningful actions"] },
    approachSection: {
      sectionHeader: { subtitle: "Our Approach", title: "Our Approach to Email Marketing" }, video: { src: "/assets/images/services/email-marketing/3.webp", type: "video/mp4" },
      content: { title: "We treat email as a relationship-building channel", paragraphs: ["Every campaign is designed to deliver the right message at the right time. Our email marketing approach focuses on audience segmentation and personalization, clear conversion-focused messaging, and automation that supports the customer journey.", "Email works best when it feels human and intentional with consistent branding and tone of voice."] },
    },
    whatsIncluded: {
      title: "What's Included",
      categories: [
        { title: "Strategy & Planning", items: ["Email marketing audit", "List segmentation and structure", "Campaign and automation planning", "Content calendar (newsletters, promos, flows)"] },
        { title: "Campaign Creation", items: ["Email copywriting", "Visual design and layout", "Strong calls-to-action", "Mobile-optimized emails"] },
        { title: "Automation & Flows", items: ["Welcome sequences", "Lead nurturing campaigns", "Abandoned cart or follow-up emails", "Re-engagement flows"] },
        { title: "Performance & Optimization", items: ["Open and click rate tracking", "Conversion analysis", "A/B testing (subject lines, content)", "Ongoing improvements"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Our Process", sectionTitle: "How We Make Email Work", ctaText: "Get Started", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit & Discovery", description: "We review your list, content, and goals.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Strategy & Setup", description: "We define segmentation, flows, and messaging.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Create & Launch", description: "We design, write, and send campaigns.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Optimize & Scale", description: "We analyze performance and refine for better results.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "Why Work With Us?", points: ["Strategy-driven email marketing", "Strong copy and design working together", "Automation that saves time and increases ROI", "Clear reporting and insights", "Built to support long-term growth"], footer: "We focus on results, not inbox noise." },
    idealClients: { title: "Is This Right for You?", description: "This service is ideal if you:", points: ["Want better engagement from your email list", "Need automated follow-ups and nurturing", "Sell products or services online or offline", "Want predictable, measurable results"] },
    faqsData: {
      faqs: [{ question: "How often should emails be sent?", answer: "It depends on your audience and goals, but consistency matters more than volume." }, { question: "Do you work with platforms like Mailchimp or Klaviyo?", answer: "Yes. We work with major email marketing platforms and tools." }, { question: "Is email marketing still effective?", answer: "Absolutely. Email consistently delivers one of the highest ROI across digital channels." }],
      image: { src: "/assets/images/services/email-marketing/3.webp", alt: "Email Marketing" },
    },
    finalCTA: { title: "Let's Make Email Work for Your Business", description: "Turn your email list into a powerful revenue and relationship channel.", buttonText: "Get a free consultation" },
  },
 {
  slug: "restaurant-platform",
  name: "Restaurant Platform",
  heroSection: {
    subtitle: "All-in-one restaurant platform", 
    title: "All-in-One Restaurant Platform: Zero Commissions",
    description: "A complete system to run your restaurant, grow your brand, and keep your profits. From online ordering to delivery management—no commissions, just results.",
    buttons: [ 
      { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, 
      { href: "/contact", style: "t-btn t-btn-primary", label: "Start Free Trial" }, 
      { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } 
    ],
    // 👇 جمعنا كل الفيتشرز هنا عشان تظهر في أول الصفحة بشياكة 👇
    services: [
      "Unlimited orders",
      "Online Ordering & Payments",
      "Restaurant Website & Mobile App",
      "Free Setup Service",
      "Save up to 90% on commissions",
      "Tableside Ordering & Reservations",
      "QR Code Menu & Multiple Menus",
      "Delivery Management & Route Optimization",
      "Order Aggregation",
      "Marketing Automation (Email & SMS)",
      "Loyalty Program & Gift Cards",
      "Multi Location Support"
    ],
    gallery: [
      { src: "/assets/images/services/restaurant-platform/1.webp", alt: "Restaurant Platform Dashboard" }, 
      { src: "/assets/images/services/restaurant-platform/2.webp", alt: "Mobile Ordering App" }
    ],
  },
  problemSection: { 
    title: "Stop Losing Money to Third-Party Apps", 
    description: "Restaurants today face high costs and loss of control:", 
    painPoints: ["High commissions (up to 30%) on every order", "No ownership of customer data", "Reliance on third-party delivery drivers", "Difficulty managing multiple tablets and systems"] 
  },
  approachSection: {
    sectionHeader: { subtitle: "About Us", title: "Supporting Restaurants to Grow" }, 
    video: { src: "/assets/images/services/restaurant-platform/3.webp", type: "video/mp4" },
    content: { 
      title: "We empower restaurateurs with the tools they need to succeed", 
      paragraphs: [
        "From onboarding to ongoing assistance, we provide flexible tools and strategies tailored to meet the unique goals of each restaurant.", 
        "Our platform has consistently increased order values and customer retention for our clients by putting the power back in your hands."
      ] 
    },
  },
  whatsIncluded: {
    title: "Everything You Need in One Platform",
    categories: [
      { 
        title: "All-in-One Features", 
        items: [
          "Unlimited orders",
          "Restaurant website & Free setup service",
          "Save up to 90% on commissions",
          "Tableside Ordering & Table Reservations",
          "Multi Location Support",
          "Online Payments Integration",
          "Email & SMS marketing",
          "Marketing Automation & Gift Cards",
          "Delivery management & Route optimization",
          "QR Code Menu & Multiple Menus"
        ] 
      }
    ],
  },
  processSection: {
    sectionSubtitle: "Get Started", sectionTitle: "3 Steps to Freedom", ctaText: "Get Started", ctaLink: "/contact",
    steps: [
      { id: 1, number: "01", title: "Setup", description: "We help you set up your menu, website, and branded app.", image: "/assets/images/Pricing/5.png" },
      { id: 2, number: "02", title: "Launch", description: "Go live with your own ordering system and start marketing.", image: "/assets/images/Pricing/0.png" },
      { id: 3, number: "03", title: "Grow", description: "Retain customers with loyalty programs and keep your profits.", image: "/assets/images/Pricing/1.png" },
    ],
  },
  whyWorkWithUs: { 
    title: "Why Choose Our Platform?", 
    points: ["0% Commissions on orders", "Full control over your customer data", "All-in-one solution", "Dedicated support"], 
    footer: "Take back control of your restaurant's future." 
  },
  idealClients: { 
    title: "Perfect For", 
    description: "Our platform is built for:", 
    points: ["Independent Restaurants", "Multi-location Chains", "Ghost Kitchens", "Cafes & Bars"] 
  },
  faqsData: {
    faqs: [
      { question: "Is there really no commission?", answer: "Yes, we charge a flat monthly fee. You keep 100% of your sales revenue." }, 
      { question: "Can I use my own drivers?", answer: "Absolutely. Our delivery management system lets you track your own drivers or connect with third-party couriers." }
      // 👈 تم حذف سؤال المبرمج بنجاح
    ],
    image: { src: "/assets/images/services/restaurant-platform/3.webp", alt: "Restaurant Platform" },
  },
  finalCTA: { 
    title: "Ready to Scale Your Restaurant?", 
    description: "Join thousands of restaurants saving money and growing faster.", 
    buttonText: "Start Free Trial" 
  },
  // 👇 تم إضافة الأيقونات لكل الإضافات 👇
  addonsSection: {
    title: "Addons",
    items: [
      { title: "Mobile App", price: "$55", period: "/month", description: "Your own branded mobile app for restaurant ordering.", icon: "/assets/imgs/icon/mobile-app.svg" },
      { title: "Loyalty Program", price: "$25", period: "/month", description: "Turn your one-time restaurant clients into regular customers.", icon: "/assets/imgs/icon/loyalty.svg" },
      { title: "Delivery Dispatcher", price: "$40", period: "/month", description: "Start offering deliveries with third-party services.", icon: "/assets/imgs/icon/delivery.svg" },
      { title: "Driver app", price: "$14", period: "/month", description: "Manage your deliveries & drivers with courier app.", icon: "/assets/imgs/icon/driver.svg" },
      { title: "Order Aggregation", price: "$40", period: "/month", description: "Manage all orders from every channel in one place.", icon: "/assets/imgs/icon/aggregation.svg" },
      { title: "POS Integrations", price: "$0", period: "/month", description: "Integrate and sync all of your online orders with your POS system.", icon: "/assets/imgs/icon/pos.svg" },
    ],
  },
}
];

  // 👈 ضيف باقي الخدمات الإنجليزي بتاعتك هنا (SEO, Social Media, etc...)

// 2. الداتا العربي (مترجمة بالكامل لخدمة تصميم المواقع كمثال)
const arServices: ServicePageData[] = [
  {
    slug: "web-design", // 👈 الـ slug لازم يفضل إنجليزي في كل اللغات عشان الرابط يشتغل
    name: "تصميم المواقع",
    heroSection: {
      subtitle: "تصميم المواقع",
      title: "تصميم مواقع تبهر الزوار وتحقق مبيعات",
      description: "موقعك الإلكتروني هو الانطباع الأول لعملائك. نحن ننشئ مواقع عصرية ومتجاوبة لا تبدو رائعة فحسب، بل تحقق نتائج حقيقية وملموسة.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "تواصل معنا" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "استراتيجية وتخطيط الموقع", "التصميم والتطوير", "التحسين التقني",
        "تصميم متوافق مع الجوال", "المحتوى والهوية البصرية", "التحليلات والدعم",
        "تصميم تجربة المستخدم (UX)", "تحسين الأداء والسرعة", "هيكلة متوافقة مع السيو",
      ],
      gallery: [
        { src: "/assets/images/services/web-design/1.webp", alt: "مثال تصميم مواقع 1" },
        { src: "/assets/images/services/web-design/2.webp", alt: "مثال تصميم مواقع 2" },
      ],
    },
    problemSection: {
      title: "ما الذي يعيق نجاح موقعك؟",
      description: "العديد من الشركات تعاني مع مواقعها بسبب:",
      painPoints: [
        "الموقع يبدو قديماً أو غير احترافي",
        "الزوار لا يجدون المعلومات بسهولة",
        "أداء ضعيف أو بطيء على الهواتف المحمولة",
        "الهوية البصرية غير متناسقة عبر الصفحات",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "نهجنا", title: "طريقتنا في تصميم المواقع" },
      video: { src: "/assets/images/services/web-design/3.webp", type: "video/mp4" },
      content: {
        title: "نصمم مواقع مبنية استراتيجياً لتناسب جمهورك",
        paragraphs: [
          "يركز عملنا في تصميم المواقع على تجربة المستخدم لزيادة التحويلات، وأداء سريع ومتجاوب مع الهواتف المحمولة، وعلامة تجارية واضحة.",
          "كل ما نقوم به مبني لدعم النمو طويل الأمد من خلال تصميمات قابلة للتطوير تنمو مع عملك.",
        ],
      },
    },
    whatsIncluded: {
      title: "ماذا يتضمن العرض",
      categories: [
        { title: "استراتيجية وتخطيط الموقع", items: ["بحث الجمهور وشخصيات المستخدمين", "تخطيط خريطة الموقع والتنقل", "لوحات الإلهام والتصميم"] },
        { title: "التصميم والتطوير", items: ["تخطيطات وصفحات مخصصة", "تصميم متجاوب مع الهواتف أولاً", "عناصر تفاعلية وأزرار دعوة لاتخاذ إجراء"] },
        { title: "التحسين التقني", items: ["سرعة تحميل عالية", "هيكلة صديقة لمحركات البحث (SEO)", "توافق مع جميع المتصفحات"] },
        { title: "المحتوى والهوية", items: ["مواءمة الرسائل والنصوص", "دمج الهوية البصرية", "تحسين الصور"] },
        { title: "التقارير والدعم", items: ["إعداد تتبع التحليلات", "دعم ما بعد الإطلاق", "تحديثات أداء واضحة"] },
      ],
    },
    processSection: {
      sectionSubtitle: "خطواتنا",
      sectionTitle: "كيف نبني موقعك",
      ctaText: "ابدأ الآن",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "الفحص والاكتشاف", description: "نحلل موقعك الحالي ومنافسيك وأهدافك.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "الاستراتيجية والتخطيط", description: "نحدد هيكل الموقع، وتجربة المستخدم، واتجاه التصميم.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "التصميم والبناء", description: "ننشئ صفحات متجاوبة، محسّنة، وجذابة بصرياً.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "الإطلاق والنمو", description: "نراقب الأداء، نجمع الملاحظات، ونحسن التجربة.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "لماذا تعمل معنا؟",
      points: [
        "تصميم مبني على استراتيجية (لا مجال للتخمين)",
        "تواصل واضح وجداول زمنية واقعية",
        "التصميم والتسويق يعملان معاً",
        "مبني للشركات الحقيقية، وليس مجرد مواقع جميلة",
      ],
      footer: "نحن نركز على النتائج الملموسة التي تدعم أهداف عملك.",
    },
    idealClients: {
      title: "هل هذا مناسب لك؟",
      description: "هذه الخدمة مثالية إذا كنت:",
      points: [
        "تريد موقعاً إلكترونياً عصرياً واحترافياً",
        "تخدم سوقاً محلياً، إقليمياً، أو عبر الإنترنت",
        "تمتلك موقعاً لكنه لا يحقق النتائج المرجوة",
        "تبحث عن نمو مستدام من خلال التصميم",
      ],
    },
    faqsData: {
      faqs: [
        { question: "كم من الوقت يستغرق إطلاق الموقع؟", answer: "تستغرق معظم المواقع من 6 إلى 12 أسبوعاً حسب التعقيد." },
        { question: "هل تقدمون خدمات إعادة التصميم فقط؟", answer: "نحن نقوم ببناء مواقع جديدة بالإضافة إلى إعادة تصميم المواقع الحالية." },
        { question: "هل تصميم الموقع أفضل من السيو أو الإعلانات؟", answer: "التصميم هو الأساس لجميع عمليات التسويق. أفضل نتيجة تأتي من موقع ممتاز + سيو + إعلانات." },
      ],
      image: { src: "/assets/images/services/web-design/3.webp", alt: "عملية تصميم المواقع" },
    },
    finalCTA: {
      title: "دعنا نبني موقعك الإلكتروني",
      description: "حول موقعك إلى أداة قوية تبهر الزوار وتحقق أفضل النتائج.",
      buttonText: "تواصل معنا مجانية",
    },
  },
  {
    slug: "seo",
    name: "تحسين محركات البحث (SEO)",
    heroSection: {
      subtitle: "تحسين محركات البحث",
      title: "كن مرئياً للعملاء المناسبين في الوقت المناسب",
      description: "السيو يساعد عملك على الظهور عندما يبحث الناس بنشاط عن خدماتك. نحن نركز على بناء ظهور طويل الأمد يجلب زيارات مؤهلة، وليس مجرد تصنيفات.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "تواصل معنا" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "استراتيجية وبحث السيو", "تحسين صفحات الموقع (On-Page)", "السيو التقني",
        "السيو المحلي", "بحث الكلمات المفتاحية", "تحسين المحتوى",
        "بناء الروابط (Link Building)", "تتبع الأداء", "تحليل المنافسين",
      ],
      gallery: [
        { src: "/assets/images/services/seo/1.webp", alt: "استراتيجية السيو" },
        { src: "/assets/images/services/seo/2.webp", alt: "نتائج السيو" },
      ],
    },
    problemSection: {
      title: "ما الذي يمنع موقعك من الظهور؟",
      description: "العديد من الشركات تعاني مع السيو بسبب:",
      painPoints: [
        "موقعهم غير محسن لمحركات البحث",
        "المنافسون يسيطرون على نتائج جوجل",
        "الزيارات غير منتظمة أو غير مهتمة بخدماتهم",
        "العملاء المحليون لا يستطيعون العثور عليهم",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "نهجنا", title: "طريقتنا في السيو" },
      video: { src: "/assets/images/services/seo/3.webp", type: "video/mp4" },
      content: {
        title: "سيو مبني على البيانات لجذب عملاء مستعدين للشراء",
        paragraphs: [
          "نحن نستخدم نهجاً استراتيجياً مبنياً على البيانات لتحسين ظهورك وجذب العملاء. يركز عملنا على استهداف الكلمات المفتاحية ذات النية العالية، الأداء التقني، وتحسين المحتوى.",
          "كل ما نقوم به مبني لتحقيق نمو مستدام مع تتبع واضح وتحسين مستمر.",
        ],
      },
    },
    whatsIncluded: {
      title: "ماذا يتضمن العرض",
      categories: [
        { title: "استراتيجية وبحث السيو", items: ["بحث الكلمات المفتاحية بناءً على نية البحث", "تحليل المنافسين", "تحديد فرص السيو المتاحة"] },
        { title: "تحسين صفحات الموقع", items: ["عناوين الصفحات والأوصاف", "تحسين العناوين والمحتوى", "تحسين الربط الداخلي"] },
        { title: "السيو التقني", items: ["تحسين سرعة الموقع", "إصلاحات أداء الجوال", "تحسين الفهرسة وسهولة الزحف"] },
        { title: "السيو المحلي", items: ["تحسين ملف أعمال جوجل", "استهداف الكلمات المحلية", "تحسين الظهور على الخرائط"] },
        { title: "التقارير والتتبع", items: ["تتبع ترتيب الكلمات المفتاحية", "رؤى وتحليلات الزيارات", "تحديثات أداء واضحة"] },
      ],
    },
    processSection: {
      sectionSubtitle: "خطواتنا",
      sectionTitle: "كيف نحسن السيو الخاص بك",
      ctaText: "ابدأ الآن",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "الفحص", description: "نحلل موقعك، منافسيك، والأداء الحالي.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "الاستراتيجية", description: "ننشئ خطة سيو واضحة تتماشى مع أهدافك.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "التحسين", description: "ننفذ التحسينات التقنية والمحلية وعلى مستوى الصفحات.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "النمو", description: "نراقب النتائج ونحسن الأداء باستمرار.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "لماذا تعمل معنا؟",
      points: [
        "سيو مبني على الاستراتيجية (لا تخمين)",
        "تواصل واضح وتوقعات واقعية",
        "التصميم والتسويق يعملان معاً",
        "مبني للشركات الحقيقية، وليس للأرقام الوهمية",
      ],
      footer: "نحن نركز على النمو الملموس الذي يدعم أهدافك طويلة المدى.",
    },
    idealClients: {
      title: "هل هذا مناسب لك؟",
      description: "هذه الخدمة مثالية إذا كنت:",
      points: [
        "تريد عملاء محتملين مستمرين من البحث العضوي",
        "تخدم سوقاً محلياً أو إقليمياً",
        "تمتلك موقعاً لكن ظهوره ضعيف",
        "تبحث عن نمو مستدام",
      ],
    },
    faqsData: {
      faqs: [
        { question: "كم من الوقت يستغرق السيو لظهور نتائجه؟", answer: "السيو هو استثمار طويل المدى. يرى معظم العملاء تقدماً خلال بضعة أشهر، مع نمو مطرد بمرور الوقت." },
        { question: "هل تقدمون السيو المحلي فقط؟", answer: "نحن نقدم استراتيجيات السيو المحلي والشامل حسب احتياجاتك." },
        { question: "هل السيو أفضل من الإعلانات المدفوعة؟", answer: "السيو يبني ظهوراً طويل الأمد، بينما توفر الإعلانات زيارات فورية. الجمع بينهما هو الأفضل." },
      ],
      image: { src: "/assets/images/services/seo/3.webp", alt: "استراتيجية السيو" },
    },
    finalCTA: {
      title: "دعنا نحسن ظهورك في محركات البحث",
      description: "حول موقعك إلى مصدر موثوق للعملاء المحتملين.",
      buttonText: "تواصل معنا مجانية",
    },
  },
  {
    slug: "social-media",
    name: "إدارة السوشيال ميديا",
    heroSection: {
      subtitle: "إدارة السوشيال ميديا",
      title: "ابنِ علامة تجارية قوية وحول المتابعين إلى عملاء",
      description: "جمهورك موجود بالفعل على السوشيال ميديا. نحن نساعدك على الظهور باستمرار، والتواصل بوضوح، وتحويل الانتباه إلى نتائج أعمال حقيقية عبر المنصات المناسبة.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "تواصل معنا مجانية" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "الاستراتيجية والتخطيط", "إنشاء المحتوى", "النشر والإدارة",
        "التفاعل مع المجتمع", "الأداء والتقارير", "تصميمات منشورات بهويتك",
        "جدول المحتوى", "تحسين المنصات", "التحليلات والرؤى",
      ],
      gallery: [
        { src: "/assets/images/services/social-media/1.webp", alt: "محتوى السوشيال ميديا" },
        { src: "/assets/images/services/social-media/2.webp", alt: "استراتيجية السوشيال ميديا" },
      ],
    },
    problemSection: {
      title: "ما الذي يعيق نجاحك على السوشيال ميديا؟",
      description: "العديد من الشركات تعاني مع السوشيال ميديا بسبب:",
      painPoints: [
        "النشر غير منتظم أو عشوائي",
        "المحتوى يبدو تقليدياً أو لا يعكس هوية العلامة التجارية",
        "التفاعل ضعيف رغم النشر المستمر",
        "لا توجد استراتيجية أو هدف واضح خلف المحتوى",
        "السوشيال ميديا لا تجلب زيارات أو مبيعات",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "نهجنا", title: "طريقتنا في إدارة السوشيال ميديا" },
      video: { src: "/assets/images/services/social-media/3.webp", type: "video/mp4" },
      content: {
        title: "نحن نتعامل مع السوشيال ميديا كأداة أعمال، وليس مجرد نشر محتوى",
        paragraphs: [
          "كل ما نقوم به مبني حول علامتك التجارية وجمهورك وأهداف نموك. يركز نهجنا على المحتوى المدفوع بالاستراتيجية، والرسائل المتسقة، والمحتوى المخصص لكل منصة.",
          "لا نتبع التريندات لمجرد التريند — بل نركز على ما ينجح لعلامتك التجارية ويدعم ظهورها طويل الأمد.",
        ],
      },
    },
    whatsIncluded: {
      title: "ماذا يتضمن العرض",
      categories: [
        { title: "الاستراتيجية والتخطيط", items: ["مراجعة الحسابات وتحليل المنافسين", "اختيار المنصات (إنستجرام، فيسبوك، لينكد إن، إلخ)", "ركائز المحتوى واستراتيجية النشر", "جدول محتوى شهري"] },
        { title: "إنشاء المحتوى", items: ["تصميمات بمنصات الهوية البصرية", "كتابة نصوص تتوافق مع صوت علامتك", "بحث وتحسين الهاشتاجات", "توجيه محتوى الريلز / الفيديو القصير"] },
        { title: "النشر والإدارة", items: ["جدولة المنشورات", "مراقبة المجتمع ودعم التفاعل", "تناسق العلامة التجارية عبر كل المنصات"] },
        { title: "الأداء والتقارير", items: ["تقارير أداء شهرية", "رؤى وتحسين المحتوى", "تعديلات استراتيجية مستمرة"] },
      ],
    },
    processSection: {
      sectionSubtitle: "خطواتنا",
      sectionTitle: "كيف ننمي حساباتك",
      ctaText: "ابدأ الآن",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "الفحص والاكتشاف", description: "نراجع وجودك الحالي ومنافسيك وأهدافك.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "الاستراتيجية والتخطيط", description: "نحدد ركائز المحتوى والمنصات وهيكل النشر.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "إنشاء المحتوى والنشر", description: "نصمم ونكتب ونجدول المحتوى الذي يعكس هويتك.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "التحسين والنمو", description: "نتتبع الأداء ونحلل النتائج لتحسين الاستراتيجية.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "لماذا تعمل معنا؟",
      points: [
        "سوشيال ميديا مبنية على استراتيجية (ليس نشراً عشوائياً)",
        "هوية بصرية قوية مدعومة بتفكير تسويقي",
        "تواصل واضح وتسليم متسق",
        "محتوى مصمم للتفاعل والنمو الحقيقي",
        "التركيز على النتائج، وليس الأرقام الوهمية",
      ],
      footer: "نحن نساعد العلامات التجارية على بناء السلطة والثقة، وليس فقط زيادة المتابعين.",
    },
    idealClients: {
      title: "هل هذا مناسب لك؟",
      description: "هذه الخدمة مثالية إذا كنت:",
      points: [
        "تريد تواجداً احترافياً ومستمراً على السوشيال ميديا",
        "تحتاج إلى محتوى يعكس علامتك التجارية بشكل صحيح",
        "تعاني مع التفاعل أو الاتجاه الصحيح",
        "تريد أن تدعم السوشيال ميديا نمو عملك الحقيقي",
      ],
    },
    faqsData: {
      faqs: [
        { question: "كم مرة تقومون بالنشر؟", answer: "يعتمد تكرار النشر على أهدافك ومنصاتك، وعادة ما يكون 3-5 مرات في الأسبوع." },
        { question: "هل تقومون بإنشاء التصميمات والنصوص معاً؟", answer: "نعم. نحن ندير المرئيات والنصوص والاستراتيجية معاً لضمان الاتساق." },
        { question: "هل يمكن للسوشيال ميديا أن تزيد المبيعات حقاً؟", answer: "نعم — عندما تتم بشكل استراتيجي. السوشيال ميديا تدعم الوعي والثقة والتحويلات عندما تتماشى مع مسار مبيعاتك." },
      ],
      image: { src: "/assets/images/services/social-media/3.webp", alt: "إدارة السوشيال ميديا" },
    },
    finalCTA: {
      title: "دعنا ننمي وجودك على السوشيال ميديا",
      description: "حول حساباتك إلى قناة قوية للنمو — وليس مجرد مهمة أخرى في قائمتك.",
      buttonText: "تواصل معنا مجانية",
    },
  },
  {
    slug: "ppc",
    name: "الإعلانات المدفوعة",
    heroSection: {
      subtitle: "الإعلانات المدفوعة (PPC)",
      title: "اظهر أمام العملاء المناسبين — في اللحظة التي يكونون فيها مستعدين للشراء",
      description: "الإعلانات المدفوعة تضع عملك في صدارة نتائج البحث بشكل فوري. نحن ننشئ وندير حملات إعلانية مبنية على البيانات تجذب زيارات مؤهلة وتحول النقرات إلى إيرادات حقيقية.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "تواصل معنا مجانية" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "الاستراتيجية والإعداد", "إنشاء الإعلانات", "إدارة الحملات",
        "التقارير والتحسين", "بحث الكلمات المفتاحية", "استهداف الجمهور",
        "اختبار A/B", "تتبع التحويلات", "تحليل العائد على الاستثمار",
      ],
      gallery: [
        { src: "/assets/images/services/ppc/1.webp", alt: "حملات PPC" },
        { src: "/assets/images/services/ppc/2.webp", alt: "أداء الإعلانات" },
      ],
    },
    problemSection: {
      title: "ما الذي يضيع ميزانية إعلاناتك؟",
      description: "العديد من الشركات تعاني مع الإعلانات المدفوعة بسبب:",
      painPoints: [
        "الإنفاق الإعلاني مرتفع لكن النتائج ضعيفة",
        "الزيارات لا تتحول إلى عملاء محتملين أو مبيعات",
        "الاستهداف واسع جداً أو غير محدد بدقة",
        "الإعلانات تفتقر إلى رسائل واضحة أو تصميمات قوية",
        "لا يوجد تتبع واضح أو فهم حقيقي للأداء",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "نهجنا", title: "طريقتنا في الإعلانات المدفوعة" },
      video: { src: "/assets/images/services/ppc/3.webp", type: "video/mp4" },
      content: {
        title: "نحن لا نخمن، ولا نعتمد على 'الترويج العشوائي'",
        paragraphs: [
          "كل حملة إعلانية نديرها مبنية حول البيانات ونية الشراء. يركز نهجنا على الاستهداف عالي النية، ونصوص الإعلانات والتصميمات التي تركز على التحويل.",
          "الهدف ليس النقرات — بل النتائج مع تتبع واضح وتقارير تظهر العائد الفعلي على الاستثمار.",
        ],
      },
    },
    whatsIncluded: {
      title: "ماذا يتضمن العرض",
      categories: [
        { title: "الاستراتيجية والإعداد", items: ["تدقيق الحساب أو إعداد حساب جديد", "بحث الجمهور والكلمات المفتاحية", "اختيار المنصة (جوجل، ميتا، لينكد إن، إلخ)", "إعداد تتبع التحويلات"] },
        { title: "إنشاء الإعلانات", items: ["نصوص إعلانات البحث والشبكات والسوشيال ميديا", "التوجيه الإبداعي للصور والفيديوهات", "أشكال إعلانية متعددة للاختبار", "دعوات قوية لاتخاذ إجراء"] },
        { title: "إدارة الحملات", items: ["تحسين عروض الأسعار والميزانية", "اختبار A/B للإعلانات والجماهير", "مراقبة الأداء المستمرة", "تحسين نقاط الجودة"] },
        { title: "التقارير والتحسين", items: ["تقارير أداء واضحة", "تحليل تكلفة العميل المحتمل / التحويل", "تحسينات مستمرة واستراتيجيات التوسع"] },
      ],
    },
    processSection: {
      sectionSubtitle: "خطواتنا",
      sectionTitle: "كيف نحول النقرات إلى عملاء",
      ctaText: "ابدأ الآن",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "الفحص والاكتشاف", description: "نحلل عملك وجمهورك ومنافسيك.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "الاستراتيجية والإعداد", description: "نهيكل الحملات والاستهداف والتتبع.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "الإطلاق والتحسين", description: "نطلق الإعلانات ونختبر المتغيرات ونحسن الأداء.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "التوسع", description: "نضاعف الميزانية على ما ينجح ونلغي الهدر.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "لماذا تعمل معنا؟",
      points: [
        "استراتيجيات إعلانية مدفوعة بالنتائج",
        "تقارير واضحة وشفافية كاملة",
        "الإبداع والاستراتيجية تحت سقف واحد",
        "التركيز على العائد الاستثماري، وليس الأرقام الوهمية",
        "مصممة للنمو المستدام والقابل للتوسع",
      ],
      footer: "ميزانيتك الإعلانية تستحق أكثر من مجرد التخمين.",
    },
    idealClients: {
      title: "هل هذا مناسب لك؟",
      description: "هذه الخدمة مثالية إذا كنت:",
      points: [
        "تريد ظهوراً وزيارات فورية",
        "تحتاج إلى عملاء محتملين أو مبيعات متوقعة",
        "جربت الإعلانات من قبل بنتائج ضعيفة",
        "تريد بيانات واضحة ونتائج قابلة للقياس",
      ],
    },
    faqsData: {
      faqs: [
        { question: "ما مدى سرعة ظهور نتائج الإعلانات المدفوعة؟", answer: "يمكنك البدء في رؤية الزيارات فوراً، مع ظهور نتائج ذات مغزى عادة خلال 2-4 أسابيع الأولى." },
        { question: "هل تديرون الإنفاق الإعلاني أيضاً؟", answer: "نعم. نحن ندير الميزانيات وعروض الأسعار، بينما تدفع أنت الإنفاق الإعلاني مباشرة للمنصات." },
        { question: "هل الإعلانات المدفوعة أفضل من السيو؟", answer: "الإعلانات تقدم نتائج فورية، بينما السيو يبني نمواً طويل الأمد. استخدامهما معاً هو الأفضل." },
      ],
      image: { src: "/assets/images/services/ppc/3.webp", alt: "الإعلانات المدفوعة" },
    },
    finalCTA: {
      title: "دعنا نحول النقرات إلى عملاء",
      description: "توقف عن إهدار ميزانيتك الإعلانية وابدأ حملات مصممة للتحويل.",
      buttonText: "تواصل معنا مجانية",
    },
  },
  {
    slug: "review-marketing",
    name: "تسويق التقييمات",
    heroSection: {
      subtitle: "تسويق التقييمات",
      title: "ابنِ الثقة، عزز ظهورك، واكسب المزيد من العملاء",
      description: "تؤثر التقييمات عبر الإنترنت بشكل مباشر على قرارات الشراء. نحن نساعدك على جمع وإدارة واستغلال تقييمات العملاء لتعزيز سمعتك وزيادة التحويلات.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "تواصل معنا مجانية" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "استراتيجية التقييمات وإعدادها", "إدارة التقييمات", "تضخيم التقييمات",
        "التقارير والرؤى", "مراقبة السمعة الرقمية", "استراتيجيات الرد",
        "التسويق بالدليل الاجتماعي", "تحسين المنصات", "تحليل المشاعر",
      ],
      gallery: [
        { src: "/assets/images/services/review-marketing/1.webp", alt: "تقييمات العملاء" },
        { src: "/assets/images/services/review-marketing/2.webp", alt: "إدارة التقييمات" },
      ],
    },
    problemSection: {
      title: "ما الذي يضر بسمعتك الرقمية؟",
      description: "العديد من الشركات تعاني في تسويق التقييمات بسبب:",
      painPoints: [
        "لا يطلبون تقييمات من العملاء باستمرار",
        "التقييمات مبعثرة عبر منصات متعددة",
        "التقييمات السلبية تُترك دون إدارة أو رد",
        "التقييمات الإيجابية لا تُستخدم في التسويق",
        "انخفاض عدد التقييمات يضر بالثقة والترتيب المحلي",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "نهجنا", title: "طريقتنا في تسويق التقييمات" },
      video: { src: "/videos/Business_People.mp4", type: "video/mp4" },
      content: {
        title: "نحن نحول التقييمات إلى أصل استراتيجي للنمو",
        paragraphs: [
          "تركز عمليتنا على زيادة حجم التقييمات، تحسين التقييم، واستخدام الدليل الاجتماعي في المكان الأهم. نركز على توليد تقييمات بطريقة أخلاقية وآلية.",
          "الثقة ليست خياراً — إنها كل شيء. نحن نساعدك على كسب الثقة واستخدامها بحكمة.",
        ],
      },
    },
    whatsIncluded: {
      title: "ماذا يتضمن العرض",
      categories: [
        { title: "استراتيجية التقييمات وإعدادها", items: ["تدقيق السمعة عبر المنصات", "تحديد أولويات المنصات (جوجل، فيسبوك، يلب، إلخ)", "استراتيجية وتوقيت طلب التقييم", "إعداد الأتمتة (بريد إلكتروني / رسائل قصيرة)"] },
        { title: "إدارة التقييمات", items: ["المراقبة والتنبيهات", "إرشادات الرد على التقييمات", "استراتيجية التعامل مع التقييمات السلبية", "تواصل آمن للعلامة التجارية"] },
        { title: "تضخيم التقييمات", items: ["استخدام التقييمات في الموقع وصفحات الهبوط", "الدليل الاجتماعي للإعلانات والسوشيال ميديا", "إبراز الشهادات والمقتطفات"] },
        { title: "التقارير والرؤى", items: ["تتبع نمو التقييمات", "تحليل التقييم والمشاعر", "رؤى قابلة للتنفيذ للتحسين"] },
      ],
    },
    processSection: {
      sectionSubtitle: "خطواتنا",
      sectionTitle: "كيف نبني سمعتك",
      ctaText: "ابدأ الآن",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "الفحص والاكتشاف", description: "نراجع تقييماتك الحالية ومنصاتك ورحلة العميل.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "الاستراتيجية والإعداد", description: "نبني نظاماً متوافقاً لتوليد وإدارة التقييمات.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "الإطلاق والمراقبة", description: "نبدأ في جمع التقييمات وإدارة الردود.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "التحسين والاستغلال", description: "نحسن العملية ونستخدم التقييمات لدفع النمو.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "لماذا تعمل معنا؟",
      points: [
        "استراتيجيات تقييم أخلاقية ومتوافقة مع السياسات",
        "التركيز على الجودة والموثوقية",
        "أنظمة واضحة، لا مطاردة يدوية",
        "دمج التقييمات في مسار التسويق الخاص بك",
        "مبنية لتعزيز الثقة والتحويلات",
      ],
      footer: "نحن نساعدك على كسب الثقة — واستخدامها بذكاء.",
    },
    idealClients: {
      title: "هل هذا مناسب لك؟",
      description: "هذه الخدمة مثالية إذا كنت:",
      points: [
        "تعتمد على الثقة والسمعة لكسب العملاء",
        "تريد المزيد من التقييمات دون متابعة مزعجة",
        "تخدم سوقاً محلياً أو قائماً على الخدمات",
        "تريد ظهوراً أفضل في نتائج البحث المحلية",
      ],
    },
    faqsData: {
      faqs: [
        { question: "هل تسويق التقييمات مسموح به من جوجل؟", answer: "نعم — عندما يتم بطريقة أخلاقية. نحن نتبع جميع سياسات المنصات وأفضل الممارسات." },
        { question: "هل يمكنك حذف التقييمات السلبية؟", answer: "لا يمكننا إزالة التقييمات الحقيقية، لكننا نساعد في إدارة الردود وتحسين المشاعر العامة." },
        { question: "هل التقييمات تساعد في السيو؟", answer: "بالتأكيد. التقييمات تؤثر بقوة على التصنيفات المحلية ونسب النقر." },
      ],
      image: { src: "/assets/images/services/review-marketing/3.webp", alt: "تسويق التقييمات" },
    },
    finalCTA: {
      title: "حوّل تقييماتك إلى ميزة تنافسية",
      description: "ابنِ الثقة، حسن الظهور، وحول المزيد من العملاء بسمعة قوية على الإنترنت.",
      buttonText: "تواصل معنا مجانية",
    },
  },
  {
    slug: "graphic-design",
    name: "التصميم الجرافيكي",
    heroSection: {
      subtitle: "التصميم الجرافيكي",
      title: "تصميم يتواصل، يربط، ويحول الزوار لعملاء",
      description: "التصميم القوي يجعل علامتك التجارية مميزة وموثوقة ولا تُنسى. نحن نبتكر صوراً وتصميمات تتواصل بوضوح وتدعم رسالتك لتبرز في كل مكان.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "تواصل معنا مجانية" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "استراتيجية الهوية البصرية", "تصميم التسويق الديجيتال", "المطبوعات والتصميم غير المتصل",
        "تصميمات السوشيال ميديا", "تصميم الإعلانات", "الإنفوجرافيك",
        "تصميم العروض التقديمية", "تصميم التغليف", "إرشادات العلامة التجارية",
      ],
      gallery: [
        { src: "/assets/images/services/graphic-design/1.webp", alt: "أعمال التصميم الجرافيكي" },
        { src: "/assets/images/services/graphic-design/2.webp", alt: "أمثلة التصميم" },
      ],
    },
    problemSection: {
      title: "ما الذي يضعف مظهر علامتك التجارية؟",
      description: "العديد من الشركات تعاني مع التصميم الجرافيكي بسبب:",
      painPoints: [
        "التصميمات تبدو غير متناسقة أو لا تعكس هوية الشركة",
        "المرئيات تبدو تقليدية أو قديمة",
        "المواد التسويقية لا توصل الرسالة بوضوح",
        "تختلف الأنماط والتصميمات من منصة لأخرى",
        "التصميم لا يدعم أهداف التسويق أو المبيعات",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "نهجنا", title: "طريقتنا في التصميم الجرافيكي" },
      video: { src: "/images/services/graphic-design/3.webp", type: "video/mp4" },
      content: {
        title: "نحن نصمم بهدف — وليس للزينة فقط",
        paragraphs: [
          "كل تصميم نبتكره يدعم هويتك ورسالتك وأهدافك. يركز نهجنا على التسلسل البصري الواضح، الهوية المتسقة، والتصميم المصمم خصيصاً للرقمي والمطبوع.",
          "التصميم يجب أن يعمل بجد مثل عملك تماماً، مع تفكير إبداعي مدعوم باستراتيجية تسويقية.",
        ],
      },
    },
    whatsIncluded: {
      title: "ماذا يتضمن العرض",
      categories: [
        { title: "استراتيجية الهوية البصرية", items: ["مواءمة أو تحسين أسلوب العلامة التجارية", "توجيه الألوان، الخطوط، والتخطيط", "إرشادات الاتساق البصري"] },
        { title: "التصميم الرقمي والتسويقي", items: ["تصميمات السوشيال ميديا", "الإعلانات والمواد الإبداعية للحملات", "مرئيات المواقع وصفحات الهبوط"] },
        { title: "المطبوعات والتصميم غير المتصل", items: ["بطاقات العمل والمراسلات", "المنشورات، الكتيبات، والكتالوجات", "تصميم التغليف والملصقات"] },
        { title: "التسليم والدعم", items: ["ملفات جاهزة للطباعة والرقمية", "تسليم منظم للأصول", "دعم تصميم مستمر عند الحاجة"] },
      ],
    },
    processSection: {
      sectionSubtitle: "خطواتنا",
      sectionTitle: "كيف نبتكر تصميماتك",
      ctaText: "ابدأ الآن",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "الاستكشاف والملخص", description: "نفهم علامتك التجارية وأهدافك وحالات الاستخدام.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "المفهوم والاتجاه", description: "نطور المفاهيم البصرية والاتجاه الإبداعي.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "التصميم والتحسين", description: "نصمم، نراجع، ونضع اللمسات النهائية.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "التسليم والاستخدام", description: "نسلمك ملفات جاهزة للاستخدام على كل المنصات.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "لماذا تعمل معنا؟",
      points: [
        "تصميم تقوده الاستراتيجية، وليس مجرد صور جميلة",
        "فهم عميق للعلامات التجارية والتسويق",
        "اتساق تام عبر جميع المنصات",
        "تصميم يدعم النمو والتعرف على العلامة",
        "جداول زمنية موثوقة وتواصل واضح",
      ],
      footer: "نحن نصمم علامات تجارية يتذكرها الناس.",
    },
    idealClients: {
      title: "هل هذا مناسب لك؟",
      description: "هذه الخدمة مثالية إذا كنت:",
      points: [
        "تحتاج إلى تصميمات متسقة واحترافية",
        "تريد مرئيات تعكس هويتك بشكل صحيح",
        "تستخدم التسويق الرقمي والمطبوع",
        "تريد تصميماً يدعم أهداف عملك",
      ],
    },
    faqsData: {
      faqs: [
        { question: "هل تعملون مع إرشادات الهوية الحالية؟", answer: "نعم. يمكننا اتباعها أو تحسينها أو المساعدة في بنائها إذا لزم الأمر." },
        { question: "هل تقدمون دعماً مستمراً للتصميم؟", answer: "نعم. نقدم خدمات التصميم القائمة على المشاريع وكذلك الدعم المستمر." },
        { question: "هل التصميم مهم إذا كان لدي شعار بالفعل؟", answer: "بالتأكيد. الاتساق البصري في كل نقطة اتصال يبني الثقة والاعتراف بالعلامة التجارية." },
      ],
      image: { src: "/assets/images/services/graphic-design/3.webp", alt: "التصميم الجرافيكي" },
    },
    finalCTA: {
      title: "دعنا نصمم هويتك بالطريقة الصحيحة",
      description: "حول مرئياتك إلى أصل قوي لعلامتك التجارية.",
      buttonText: "تواصل معنا مجانية",
    },
  },
  {
    slug: "branding",
    name: "الهوية البصرية",
    heroSection: {
      subtitle: "الهوية البصرية (Branding)",
      title: "ابنِ علامة تجارية يثق بها الناس ويتذكرونها",
      description: "علامتك التجارية هي أكثر من مجرد شعار. إنها كيف تبدو شركتك وتتحدث وتشعر بها في كل نقطة اتصال. نحن نساعدك على بناء علامة تجارية واضحة ومتسقة تدعم النمو طويل الأمد.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "تواصل معنا مجانية" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "استراتيجية العلامة التجارية", "الهوية البصرية", "أصول العلامة التجارية",
        "إرشادات الهوية البصرية", "تصميم الشعار (Logo)", "تحديد مكانة العلامة",
        "إطار الرسائل", "الألوان والخطوط", "توثيق العلامة التجارية",
      ],
      gallery: [
        { src: "/assets/images/services/branding/1.webp", alt: "أعمال الهوية البصرية" },
        { src: "/assets/images/services/branding/2.webp", alt: "هوية العلامة التجارية" },
      ],
    },
    problemSection: {
      title: "ما الذي يعيق علامتك التجارية؟",
      description: "العديد من الشركات تعاني مع الهوية البصرية بسبب:",
      painPoints: [
        "علامتهم التجارية تفتقر إلى الوضوح أو التوجيه",
        "المرئيات والرسائل تبدو غير متناسقة",
        "لا تتميز العلامة التجارية عن المنافسين",
        "العملاء لا يفهمون القيمة المقدمة بوضوح",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "نهجنا", title: "طريقتنا في بناء الهوية البصرية" },
      video: { src: "/assets/images/services/branding/3.webp", type: "video/mp4" },
      content: {
        title: "نحن نبني علامات تجارية لها هدف، وليس مجرد اتباع للتريند",
        paragraphs: [
          "كل قرار في الهوية البصرية متجذر في الاستراتيجية وأهداف العمل الحقيقية. يركز نهجنا على التميز، رسائل واضحة، وأنظمة بصرية قوية.",
          "العلامة التجارية القوية تجعل كل جهد تسويقي أكثر فعالية.",
        ],
      },
    },
    whatsIncluded: {
      title: "ماذا يتضمن العرض",
      categories: [
        { title: "استراتيجية العلامة التجارية", items: ["بحث العلامة التجارية والجمهور", "تحليل المنافسين", "تحديد المكانة والقيمة", "إطار الرسائل الأساسية"] },
        { title: "الهوية البصرية", items: ["تصميم الشعار أو تحسينه", "لوحة الألوان والخطوط", "النظام البصري", "قواعد استخدام العلامة"] },
        { title: "أصول العلامة التجارية", items: ["بطاقات العمل والمراسلات", "قوالب السوشيال ميديا", "العناصر الرقمية للموقع"] },
        { title: "إرشادات الهوية", items: ["قواعد استخدام الشعار", "معايير الألوان والخطوط", "توثيق العلامة للنمو المستقبلي"] },
      ],
    },
    processSection: {
      sectionSubtitle: "خطواتنا",
      sectionTitle: "كيف نبني علامتك التجارية",
      ctaText: "ابدأ الآن",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "الاكتشاف والبحث", description: "نفهم عملك وجمهورك والسوق.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "الاستراتيجية والمكانة", description: "نحدد اتجاه ورسائل علامتك التجارية.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "تصميم الهوية", description: "نصمم النظام البصري واللفظي.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "الإطلاق والتوافق", description: "نطبق الهوية ونضمن تناسقها في كل مكان.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "لماذا تعمل معنا؟",
      points: [
        "بناء هوية تقوده الاستراتيجية، وليس مجرد شعار",
        "تحديد مكانة واضحة تميز عملك",
        "فهم عميق للتصميم والتسويق",
        "أنظمة علامة تجارية مصممة للتوسع",
      ],
      footer: "نحن لا نصمم فقط، بل نبني أساسات قوية.",
    },
    idealClients: {
      title: "هل هذا مناسب لك؟",
      description: "هذه الخدمة مثالية إذا كنت:",
      points: [
        "تطلق شركة جديدة أو تقوم بتحديث هويتك",
        "تشعر أن هويتك الحالية لم تعد تمثل عملك",
        "تريد التميز في سوق مزدحم",
        "تحتاج إلى اتساق عبر جميع نقاط الاتصال",
      ],
    },
    faqsData: {
      faqs: [
        { question: "هل تصممون الشعارات فقط؟", answer: "لا. الشعارات هي مجرد جزء واحد من نظام هوية بصرية متكامل." },
        { question: "هل يمكنكم تجديد هوية شركة قائمة؟", answer: "نعم. نتعامل مع كل من التجديد الكامل والتحسينات البسيطة." },
        { question: "كم من الوقت يستغرق بناء الهوية؟", answer: "تستغرق معظم المشاريع من 4 إلى 8 أسابيع حسب نطاق العمل." },
      ],
      image: { src: "/assets/images/services/branding/3.webp", alt: "خدمات الهوية البصرية" },
    },
    finalCTA: {
      title: "دعنا نبني علامة تجارية تدوم",
      description: "أنشئ علامة تجارية تعكس من أنت وإلى أين يتجه عملك.",
      buttonText: "تواصل معنا مجانية",
    },
  },
  {
    slug: "email-marketing",
    name: "التسويق عبر الإيميل",
    heroSection: {
      subtitle: "التسويق عبر البريد الإلكتروني",
      title: "حوّل المشتركين إلى عملاء مخلصين",
      description: "التسويق عبر الإيميل يبقي علامتك التجارية في الأذهان ويحقق نتائج مستمرة. نحن ننشئ حملات استراتيجية ترعى العملاء المحتملين وتزيد المبيعات.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "تواصل معنا مجانية" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "الاستراتيجية والتخطيط", "إنشاء الحملات", "الأتمتة والتدفقات",
        "الأداء والتحسين", "كتابة نصوص الإيميل", "التصميم البصري",
        "تقسيم القوائم", "اختبار A/B", "التحليلات",
      ],
      gallery: [
        { src: "/assets/images/services/email-marketing/1.webp", alt: "حملات البريد الإلكتروني" },
        { src: "/assets/images/services/email-marketing/2.webp", alt: "التسويق عبر الإيميل" },
      ],
    },
    problemSection: {
      title: "ما الذي يعيق تسويقك عبر الإيميل؟",
      description: "العديد من الشركات تعاني مع الإيميل بسبب:",
      painPoints: [
        "تُرسل رسائل البريد بشكل غير منتظم أو بدون استراتيجية",
        "معدلات الفتح والنقر منخفضة",
        "الرسائل تبدو تقليدية أو غير معبرة عن الهوية",
        "لا يوجد تقسيم واضح أو أتمتة للقوائم",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "نهجنا", title: "طريقتنا في التسويق عبر الإيميل" },
      video: { src: "/assets/images/services/email-marketing/3.webp", type: "video/mp4" },
      content: {
        title: "نتعامل مع الإيميل كقناة لبناء العلاقات",
        paragraphs: [
          "كل حملة مصممة لتقديم الرسالة الصحيحة في الوقت المناسب. يركز نهجنا على تقسيم الجمهور والتخصيص، ورسائل واضحة تركز على التحويل، والأتمتة التي تدعم رحلة العميل.",
          "يعمل البريد الإلكتروني بشكل أفضل عندما يبدو إنسانياً ومتعمداً مع علامة تجارية ونبرة صوت متسقة.",
        ],
      },
    },
    whatsIncluded: {
      title: "ماذا يتضمن العرض",
      categories: [
        { title: "الاستراتيجية والتخطيط", items: ["تدقيق التسويق عبر الإيميل", "تقسيم القوائم وهيكلتها", "تخطيط الحملات والأتمتة", "جدول المحتوى"] },
        { title: "إنشاء الحملات", items: ["كتابة نصوص البريد", "التصميم والتنسيق المرئي", "دعوات قوية لاتخاذ إجراء", "رسائل محسّنة للجوال"] },
        { title: "الأتمتة والتدفقات", items: ["سلسلة رسائل الترحيب", "حملات رعاية العملاء المحتملين", "رسائل السلات المتروكة", "تدفقات إعادة التفاعل"] },
        { title: "الأداء والتحسين", items: ["تتبع معدل الفتح والنقر", "تحليل التحويلات", "اختبار A/B المستمر"] },
      ],
    },
    processSection: {
      sectionSubtitle: "خطواتنا",
      sectionTitle: "كيف نُنجح التسويق عبر الإيميل",
      ctaText: "ابدأ الآن",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "الفحص والاكتشاف", description: "نراجع قائمتك ومحتواك وأهدافك.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "الاستراتيجية والإعداد", description: "نحدد التقسيمات والتدفقات والرسائل.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "الإنشاء والإطلاق", description: "نصمم، نكتب، ونرسل الحملات.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "التحسين والتوسع", description: "نحلل الأداء ونحسنه لتحقيق نتائج أفضل.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "لماذا تعمل معنا؟",
      points: [
        "تسويق عبر الإيميل تقوده الاستراتيجية",
        "نصوص وتصميمات قوية تعمل معاً",
        "أتمتة توفر الوقت وتزيد العائد",
        "تقارير واضحة ورؤى دقيقة",
      ],
      footer: "نحن نركز على النتائج، وليس مجرد إرسال رسائل عشوائية.",
    },
    idealClients: {
      title: "هل هذا مناسب لك؟",
      description: "هذه الخدمة مثالية إذا كنت:",
      points: [
        "تريد تفاعلاً أفضل من قائمة البريد الخاصة بك",
        "تحتاج إلى متابعة آلية للعملاء",
        "تبيع منتجات أو خدمات (أونلاين أو أوفلاين)",
        "تريد نتائج متوقعة وقابلة للقياس",
      ],
    },
    faqsData: {
      faqs: [
        { question: "كم مرة يجب إرسال رسائل البريد؟", answer: "يعتمد ذلك على جمهورك، لكن الاستمرارية أهم من الكمية." },
        { question: "هل تعملون مع منصات مثل Mailchimp أو Klaviyo؟", answer: "نعم. نحن نعمل مع جميع المنصات الكبرى." },
        { question: "هل التسويق عبر الإيميل لا يزال فعالاً؟", answer: "بالتأكيد. الإيميل يقدم باستمرار أحد أعلى عوائد الاستثمار في القنوات الرقمية." },
      ],
      image: { src: "/assets/images/services/email-marketing/3.webp", alt: "التسويق عبر الإيميل" },
    },
    finalCTA: {
      title: "اجعل الإيميل يعمل لصالح عملك",
      description: "حول قائمتك البريدية إلى قناة إيرادات وعلاقات قوية.",
      buttonText: "تواصل معنا مجانية",
    },
  },
  {
    slug: "restaurant-platform",
    name: "منصة المطاعم",
    heroSection: {
      subtitle: "منصة متكاملة للمطاعم",
      title: "منصة متكاملة للمطاعم: صفر عمولات",
      description: "نظام متكامل لإدارة مطعمك، وتنمية علامتك التجارية، والاحتفاظ بأرباحك. من الطلبات عبر الإنترنت إلى إدارة التوصيل — بدون عمولات، فقط نتائج.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "ابدأ تجربتك المجانية" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "الطلب عبر الإنترنت", "منشئ المواقع", "تطبيق الموبايل",
        "أدوات التسويق", "برنامج الولاء", "منيو QR",
        "إدارة التوصيل", "تجميع الطلبات",
      ],
      gallery: [
        { src: "/assets/images/services/restaurant-platform/1.webp", alt: "لوحة تحكم منصة المطاعم" },
        { src: "/assets/images/services/restaurant-platform/2.webp", alt: "تطبيق الطلب عبر الهاتف" },
      ],
    },
    problemSection: {
      title: "توقف عن خسارة أموالك لتطبيقات التوصيل",
      description: "تواجه المطاعم اليوم تكاليف باهظة وفقداناً للتحكم:",
      painPoints: [
        "عمولات عالية (تصل إلى 30%) على كل طلب",
        "عدم امتلاك بيانات العملاء",
        "الاعتماد الكامل على سائقي تطبيقات الطرف الثالث",
        "صعوبة إدارة أجهزة لوحية وأنظمة متعددة",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "من نحن", title: "ندعم المطاعم للنمو" },
      video: { src: "/assets/images/services/restaurant-platform/3.webp", type: "video/mp4" },
      content: {
        title: "نحن نمكن أصحاب المطاعم بالأدوات التي يحتاجونها للنجاح",
        paragraphs: [
          "من التدريب إلى الدعم المستمر، نقدم أدوات مرنة واستراتيجيات مصممة لتلبية الأهداف الفريدة لكل مطعم.",
          "لقد زادت منصتنا باستمرار من قيم الطلبات والاحتفاظ بالعملاء من خلال إعادة القوة إلى يديك.",
        ],
      },
    },
    whatsIncluded: {
      title: "عرضنا",
      categories: [
        { title: "نظام الطلب عبر الإنترنت", items: ["وفر حتى 90% من العمولات", "بِع مباشرة بدون وسيط", "إدارة سلسة للقائمة والطلبات", "التكامل مع نظام نقاط البيع (POS)"] },
        { title: "موقع وتطبيق المطعم", items: ["منشئ مواقع احترافي (بدون برمجة)", "تطبيق جوال بهويتك (iOS و Android)", "يدعم المطاعم متعددة الفروع"] },
        { title: "التسويق والولاء", items: ["إنشاء عروض ترويجية", "برامج ولاء آلية", "حملات SMS وإيميل وإشعارات"] },
        { title: "العمليات والتوصيل", items: ["منيو QR والطلب من الطاولة", "إدارة التوصيل (تتبع السائقين)", "تحسين الطرق لتوفير الوقود والوقت"] },
      ],
    },
    processSection: {
      sectionSubtitle: "ابدأ الآن",
      sectionTitle: "3 خطوات للحرية",
      ctaText: "ابدأ الآن",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "الإعداد", description: "نساعدك في إعداد القائمة والموقع والتطبيق.", image: "/assets/images/Pricing/5.png" },
        { id: 2, number: "02", title: "الإطلاق", description: "ابدأ بتلقي الطلبات المباشرة وبدء التسويق.", image: "/assets/images/Pricing/0.png" },
        { id: 3, number: "03", title: "النمو", description: "احتفظ بالعملاء وحافظ على أرباحك كاملة.", image: "/assets/images/Pricing/1.png" },
      ],
    },
    whyWorkWithUs: {
      title: "لماذا تختار منصتنا؟",
      points: [
        "0% عمولات على الطلبات",
        "تحكم كامل ببيانات عملائك",
        "حل متكامل (طلب، تسويق، توصيل)",
        "دعم مخصص لمساعدتك على النمو",
      ],
      footer: "استعد السيطرة على مستقبل مطعمك.",
    },
    idealClients: {
      title: "مثالية لـ",
      description: "منصتنا مصممة من أجل:",
      points: [
        "المطاعم المستقلة",
        "سلاسل المطاعم متعددة الفروع",
        "المطابخ السحابية (Ghost Kitchens)",
        "المقاهي والبارات",
      ],
    },
    faqsData: {
      faqs: [
        { question: "هل حقاً لا توجد عمولة؟", answer: "نعم، نحن نفرض رسوماً شهرية ثابتة. أنت تحتفظ بـ 100% من إيرادات مبيعاتك." },
        { question: "هل يمكنني استخدام السائقين الخاصين بي؟", answer: "بالتأكيد. يتيح لك نظامنا تتبع سائقيك أو الربط مع شركات التوصيل." },
        { question: "هل أحتاج إلى مبرمج؟", answer: "لا. منصة بناء المواقع وعملية الإعداد لا تتطلب أي كتابة أكواد." },
      ],
      image: { src: "/assets/images/services/restaurant-platform/3.webp", alt: "منصة المطاعم" },
    },
    finalCTA: {
      title: "جاهز لتوسيع مطعمك؟",
      description: "انضم إلى آلاف المطاعم التي توفر المال وتنمو بشكل أسرع.",
      buttonText: "ابدأ تجربتك المجانية",
    },
    pricingSection: {
      title: "الأسعار",
      plans: [
        { name: "الأساسي", price: "$139", period: "/شهرياً", subtitle: "لكل فرع", features: ["210 طلب", "موقع للمطعم", "خدمة إعداد مجانية", "الطلب من الطاولة", "حجز الطاولات", "فروع متعددة", "دفع إلكتروني", "تسويق (SMS وإيميل)", "كوبونات وأكواد خصم"] },
        { name: "الاحترافي", price: "$189", period: "/شهرياً", subtitle: "لكل فرع", features: ["كل مميزات الأساسي بالإضافة لـ:", "طلبات غير محدودة", "أتمتة التسويق", "بطاقات الهدايا", "اقتراحات الأصناف", "قوائم طعام متعددة"] },
      ],
    },
addonsSection: {
      title: "الإضافات",
      items: [
        { title: "تطبيق موبايل", price: "$55", period: "/شهرياً", description: "تطبيق خاص بمطعمك بهويتك البصرية.", icon: "/assets/imgs/icon/mobile-app.svg" },
        { title: "برنامج الولاء", price: "$25", period: "/شهرياً", description: "حول الزوار العابرين إلى عملاء دائمين.", icon: "/assets/imgs/icon/loyalty.svg" },
        { title: "موزع التوصيل", price: "$40", period: "/شهرياً", description: "قدم خدمة التوصيل عبر أطراف ثالثة دون الحاجة لأسطولك الخاص.", icon: "/assets/imgs/icon/delivery.svg" },
        { title: "تطبيق السائقين", price: "$14", period: "/شهرياً", description: "إدارة سائقيك وتتبعهم عبر تطبيق مخصص.", icon: "/assets/imgs/icon/driver.svg" },
        { title: "تجميع الطلبات", price: "$40", period: "/شهرياً", description: "إدارة كل الطلبات من مكان واحد — وداعاً للأجهزة اللوحية المتعددة.", icon: "/assets/imgs/icon/aggregation.svg" },
        { title: "الربط مع POS", price: "$0", period: "/شهرياً", description: "مزامنة طلبات الأونلاين مع نظام نقاط البيع لديك.", icon: "/assets/imgs/icon/pos.svg" },
      ],
    },
  },
  // 👈 هتحط هنا باقي الخدمات بالعربي
];

// 3. الداتا الفرنساوي
const frServices: ServicePageData[] = [
  {
    slug: "web-design",
    name: "Conception Web",
    heroSection: {
      subtitle: "Conception Web",
      title: "Créez des sites web qui convertissent et impressionnent",
      description: "Votre site web est souvent la première impression qu'ont les clients de votre entreprise. Nous créons des sites web modernes et réactifs qui génèrent de vrais résultats.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Obtenir une consultation" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "Stratégie & Planification", "Conception & Développement", "Optimisation Technique",
        "Design Orienté Mobile", "Contenu & Image de marque", "Analytique & Support",
        "Design Expérience Utilisateur", "Optimisation des performances", "Structure SEO",
      ],
      gallery: [
        { src: "/assets/images/services/web-design/1.webp", alt: "Exemple de conception web 1" },
        { src: "/assets/images/services/web-design/2.webp", alt: "Exemple de conception web 2" },
      ],
    },
    problemSection: {
      title: "Qu'est-ce qui freine votre site web ?",
      description: "De nombreuses entreprises rencontrent des difficultés avec leur site web car :",
      painPoints: [
        "Leur site semble obsolète ou peu professionnel",
        "Les visiteurs ne trouvent pas facilement les informations",
        "Les performances mobiles sont médiocres",
        "L'image de marque n'est pas cohérente",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "Notre Approche", title: "Notre Approche de la Conception Web" },
      video: { src: "/assets/images/services/web-design/3.webp", type: "video/mp4" },
      content: {
        title: "Nous créons des sites web stratégiquement conçus pour votre public",
        paragraphs: [
          "Notre travail se concentre sur un design centré sur l'utilisateur qui convertit, des performances mobiles rapides, et une image de marque claire.",
          "Tout ce que nous faisons est conçu pour soutenir une croissance à long terme avec des designs évolutifs.",
        ],
      },
    },
    whatsIncluded: {
      title: "Ce qui est inclus",
      categories: [
        { title: "Stratégie & Planification", items: ["Recherche d'audience", "Planification du plan de site", "Planches d'inspiration"] },
        { title: "Conception & Développement", items: ["Mises en page personnalisées", "Design réactif mobile-first", "Éléments interactifs"] },
        { title: "Optimisation Technique", items: ["Temps de chargement rapides", "Structure optimisée pour le SEO", "Compatibilité multi-navigateurs"] },
        { title: "Contenu & Image de marque", items: ["Alignement des messages", "Intégration de l'image de marque", "Optimisation des images"] },
        { title: "Analytique & Support", items: ["Configuration du suivi analytique", "Support post-lancement", "Mises à jour des performances"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Notre Processus",
      sectionTitle: "Comment nous construisons votre site",
      ctaText: "Commencer",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit & Découverte", description: "Nous analysons votre site actuel et vos concurrents.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Stratégie & Planification", description: "Nous définissons la structure et la direction du design.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Conception & Création", description: "Nous créons des pages réactives et visuellement engageantes.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Lancement & Croissance", description: "Nous surveillons les performances et affinons l'expérience.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "Pourquoi Travailler Avec Nous ?",
      points: [
        "Conception web axée sur la stratégie",
        "Communication claire et délais réalistes",
        "Le design et le marketing travaillent ensemble",
        "Conçu pour de vraies entreprises, pas seulement de jolis sites",
      ],
      footer: "Nous nous concentrons sur des résultats mesurables.",
    },
    idealClients: {
      title: "Est-ce fait pour vous ?",
      description: "Ce service est idéal si vous :",
      points: [
        "Voulez un site web moderne et professionnel",
        "Servez un marché local ou en ligne",
        "Avez un site web mais il est peu performant",
        "Recherchez une croissance durable",
      ],
    },
    faqsData: {
      faqs: [
        { question: "Combien de temps faut-il pour lancer un site ?", answer: "La plupart des sites prennent de 6 à 12 semaines selon la complexité." },
        { question: "Faites-vous uniquement des refontes ?", answer: "Nous créons de nouveaux sites et repensons ceux existants." },
        { question: "La conception web est-elle meilleure que le SEO ?", answer: "Le design est la base. Un bon site + SEO + publicités fonctionnent le mieux." },
      ],
      image: { src: "/assets/images/services/web-design/3.webp", alt: "Processus de conception web" },
    },
    finalCTA: {
      title: "Construisons Votre Site Web",
      description: "Transformez votre site web en un outil puissant qui impressionne et génère des résultats.",
      buttonText: "Obtenir une consultation gratuite",
    },
  },
  {
    slug: "seo",
    name: "Optimisation SEO",
    heroSection: {
      subtitle: "Optimisation pour les moteurs de recherche (SEO)",
      title: "Soyez trouvé par les bons clients au bon moment",
      description: "Le SEO aide votre entreprise à apparaître lorsque les internautes recherchent activement vos services. Nous nous concentrons sur une visibilité à long terme qui génère un trafic qualifié.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Obtenir une consultation" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "Stratégie & Recherche SEO", "Optimisation On-Page", "SEO Technique",
        "SEO Local", "Recherche de mots-clés", "Optimisation du contenu",
        "Création de liens (Link Building)", "Suivi des performances", "Analyse des concurrents",
      ],
      gallery: [
        { src: "/assets/images/services/seo/1.webp", alt: "Stratégie SEO" },
        { src: "/assets/images/services/seo/2.webp", alt: "Résultats SEO" },
      ],
    },
    problemSection: {
      title: "Qu'est-ce qui freine votre site web ?",
      description: "De nombreuses entreprises luttent avec le SEO car :",
      painPoints: [
        "Leur site web n'est pas optimisé pour les moteurs de recherche",
        "Les concurrents dominent les résultats Google",
        "Le trafic est incohérent ou non pertinent",
        "Les clients locaux ne peuvent pas les trouver en ligne",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "Notre Approche", title: "Notre Approche du SEO" },
      video: { src: "/assets/images/services/seo/3.webp", type: "video/mp4" },
      content: {
        title: "Un SEO axé sur les données pour attirer des clients prêts à agir",
        paragraphs: [
          "Nous utilisons une approche stratégique pour améliorer votre visibilité. Notre travail se concentre sur le ciblage de mots-clés à forte intention, les performances techniques et l'optimisation du contenu.",
          "Tout ce que nous faisons est conçu pour une croissance durable avec un suivi clair.",
        ],
      },
    },
    whatsIncluded: {
      title: "Ce qui est inclus",
      categories: [
        { title: "Stratégie & Recherche SEO", items: ["Recherche de mots-clés basée sur l'intention", "Analyse des concurrents", "Cartographie des opportunités SEO"] },
        { title: "Optimisation On-Page", items: ["Titres de pages et méta-descriptions", "Optimisation des en-têtes et du contenu", "Améliorations du maillage interne"] },
        { title: "SEO Technique", items: ["Optimisation de la vitesse du site", "Correctifs des performances mobiles", "Amélioration de l'indexation"] },
        { title: "SEO Local", items: ["Optimisation du profil Google Business", "Ciblage de mots-clés locaux", "Visibilité améliorée sur les cartes"] },
        { title: "Rapports & Suivi", items: ["Suivi du classement des mots-clés", "Analyse du trafic", "Mises à jour claires des performances"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Notre Processus",
      sectionTitle: "Comment nous améliorons votre SEO",
      ctaText: "Commencer",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit", description: "Nous analysons votre site, vos concurrents et vos performances.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Stratégie", description: "Nous créons un plan SEO aligné sur vos objectifs.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Optimisation", description: "Nous mettons en œuvre les améliorations techniques et locales.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Croissance", description: "Nous surveillons les résultats et optimisons continuellement.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "Pourquoi Travailler Avec Nous ?",
      points: [
        "Un SEO axé sur la stratégie (pas de devinettes)",
        "Communication claire et attentes réalistes",
        "Design et marketing travaillant ensemble",
        "Conçu pour de vraies entreprises, pas pour des mesures vaniteuses",
      ],
      footer: "Nous nous concentrons sur une croissance mesurable.",
    },
    idealClients: {
      title: "Est-ce fait pour vous ?",
      description: "Ce service est idéal si vous :",
      points: [
        "Souhaitez des prospects organiques constants",
        "Servez un marché local ou régional",
        "Avez un site web mais une faible visibilité",
        "Recherchez une croissance durable",
      ],
    },
    faqsData: {
      faqs: [
        { question: "Combien de temps prend le SEO ?", answer: "Le SEO est un investissement à long terme. La plupart voient des progrès en quelques mois." },
        { question: "Proposez-vous uniquement du SEO local ?", answer: "Nous fournissons des stratégies SEO locales et globales selon vos besoins." },
        { question: "Le SEO est-il meilleur que les publicités payantes ?", answer: "Le SEO construit une visibilité à long terme, tandis que les annonces offrent un trafic immédiat." },
      ],
      image: { src: "/assets/images/services/seo/3.webp", alt: "Stratégie SEO" },
    },
    finalCTA: {
      title: "Améliorons Votre Visibilité de Recherche",
      description: "Transformez votre site web en une source fiable de prospects qualifiés.",
      buttonText: "Obtenir une consultation gratuite",
    },
  },
  {
    slug: "social-media",
    name: "Gestion des Réseaux Sociaux",
    heroSection: {
      subtitle: "Gestion des Réseaux Sociaux",
      title: "Construisez une marque forte et transformez vos abonnés en clients",
      description: "Votre public est déjà sur les réseaux sociaux. Nous vous aidons à apparaître régulièrement, à communiquer clairement et à obtenir de vrais résultats.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Obtenir une consultation gratuite" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "Stratégie & Planification", "Création de contenu", "Publication & Gestion",
        "Engagement communautaire", "Performances & Rapports", "Conceptions de publications",
        "Calendrier de contenu", "Optimisation des plateformes", "Analyses & Insights",
      ],
      gallery: [
        { src: "/assets/images/services/social-media/1.webp", alt: "Contenu Réseaux Sociaux" },
        { src: "/assets/images/services/social-media/2.webp", alt: "Stratégie Réseaux Sociaux" },
      ],
    },
    problemSection: {
      title: "Qu'est-ce qui freine vos réseaux sociaux ?",
      description: "De nombreuses entreprises rencontrent des difficultés car :",
      painPoints: [
        "La publication est incohérente ou aléatoire",
        "Le contenu semble générique",
        "L'engagement est faible malgré des publications régulières",
        "Il n'y a pas de stratégie claire",
        "Les réseaux sociaux ne génèrent pas de ventes",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "Notre Approche", title: "Notre Approche des Réseaux Sociaux" },
      video: { src: "/assets/images/services/social-media/3.webp", type: "video/mp4" },
      content: {
        title: "Nous traitons les réseaux sociaux comme un outil commercial",
        paragraphs: [
          "Tout ce que nous faisons est construit autour de votre marque et de vos objectifs. Notre approche se concentre sur un contenu axé sur la stratégie.",
          "Pas de tendances pour le simple plaisir des tendances — uniquement ce qui fonctionne pour votre marque.",
        ],
      },
    },
    whatsIncluded: {
      title: "Ce qui est inclus",
      categories: [
        { title: "Stratégie & Planification", items: ["Audit social & analyse de la concurrence", "Sélection des plateformes", "Piliers de contenu", "Calendrier mensuel"] },
        { title: "Création de contenu", items: ["Création de designs de marque", "Légendes alignées avec votre voix", "Recherche de hashtags", "Direction Reels/Vidéos courtes"] },
        { title: "Publication & Gestion", items: ["Programmation des publications", "Suivi et engagement", "Cohérence de la marque"] },
        { title: "Performances & Rapports", items: ["Rapports mensuels", "Optimisation du contenu", "Ajustements stratégiques continus"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Notre Processus",
      sectionTitle: "Comment nous développons vos réseaux",
      ctaText: "Commencer",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit & Découverte", description: "Nous examinons votre présence actuelle et vos concurrents.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Stratégie & Planification", description: "Nous définissons les piliers de contenu et les plateformes.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Création & Publication", description: "Nous concevons et programmons le contenu.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Optimisation & Croissance", description: "Nous suivons les performances et affinons la stratégie.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "Pourquoi Travailler Avec Nous ?",
      points: [
        "Réseaux sociaux axés sur la stratégie",
        "Image de marque forte soutenue par le marketing",
        "Communication claire",
        "Contenu conçu pour un engagement réel",
        "Axé sur les résultats, pas sur les mesures vaniteuses",
      ],
      footer: "Nous aidons les marques à renforcer leur autorité.",
    },
    idealClients: {
      title: "Est-ce fait pour vous ?",
      description: "Ce service est idéal si vous :",
      points: [
        "Voulez une présence cohérente et professionnelle",
        "Avez besoin d'un contenu qui reflète votre marque",
        "Luttez contre un faible engagement",
        "Voulez que les réseaux sociaux soutiennent la croissance",
      ],
    },
    faqsData: {
      faqs: [
        { question: "À quelle fréquence publiez-vous ?", answer: "La fréquence dépend de vos objectifs, généralement 3 à 5 fois par semaine." },
        { question: "Créez-vous les designs et les textes ?", answer: "Oui. Nous gérons les visuels, les textes et la stratégie." },
        { question: "Les réseaux sociaux peuvent-ils générer des ventes ?", answer: "Oui — lorsqu'ils sont gérés de manière stratégique." },
      ],
      image: { src: "/assets/images/services/social-media/3.webp", alt: "Gestion des réseaux sociaux" },
    },
    finalCTA: {
      title: "Développons Votre Présence Sociale",
      description: "Transformez vos réseaux sociaux en un puissant canal de croissance.",
      buttonText: "Obtenir une consultation gratuite",
    },
  },
  {
    slug: "ppc",
    name: "Publicité PPC",
    heroSection: {
      subtitle: "Publicité au Paiement par Clic (PPC)",
      title: "Soyez devant les bons clients — exactement quand ils sont prêts à acheter",
      description: "La publicité PPC place votre entreprise en tête des résultats de recherche. Nous gérons des campagnes basées sur les données qui attirent un trafic qualifié.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Obtenir une consultation gratuite" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "Stratégie & Configuration", "Création d'annonces", "Gestion de campagnes",
        "Rapports & Optimisation", "Recherche de mots-clés", "Ciblage d'audience",
        "Tests A/B", "Suivi des conversions", "Analyse du ROI",
      ],
      gallery: [
        { src: "/assets/images/services/ppc/1.webp", alt: "Campagnes PPC" },
        { src: "/assets/images/services/ppc/2.webp", alt: "Performances publicitaires" },
      ],
    },
    problemSection: {
      title: "Qu'est-ce qui freine vos annonces ?",
      description: "De nombreuses entreprises luttent avec les annonces payantes car :",
      painPoints: [
        "Les dépenses publicitaires sont élevées mais les résultats faibles",
        "Le trafic ne se convertit pas en prospects ou ventes",
        "Le ciblage est trop large",
        "Les annonces manquent de messages clairs",
        "Aucun suivi clair des performances",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "Notre Approche", title: "Notre Approche du PPC" },
      video: { src: "/assets/images/services/ppc/3.webp", type: "video/mp4" },
      content: {
        title: "Nous ne devinons pas, et nous ne faisons pas de 'boost au hasard'",
        paragraphs: [
          "Chaque campagne PPC que nous menons est construite autour des données et de la conversion. Notre approche se concentre sur un ciblage à forte intention.",
          "Le but n'est pas les clics — ce sont les résultats avec un suivi clair du ROI.",
        ],
      },
    },
    whatsIncluded: {
      title: "Ce qui est inclus",
      categories: [
        { title: "Stratégie & Configuration", items: ["Audit de compte", "Recherche de mots-clés", "Sélection de plateformes (Google, Meta, etc.)", "Configuration du suivi des conversions"] },
        { title: "Création d'annonces", items: ["Texte publicitaire de recherche et social", "Direction créative", "Variations d'annonces pour les tests", "Appels à l'action forts"] },
        { title: "Gestion de campagnes", items: ["Optimisation des enchères et du budget", "Tests A/B", "Suivi continu", "Amélioration du Quality Score"] },
        { title: "Rapports & Optimisation", items: ["Rapports clairs", "Analyse du coût par lead", "Affinements continus"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Notre Processus",
      sectionTitle: "Comment nous convertissons les clics",
      ctaText: "Commencer",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit & Découverte", description: "Nous analysons votre entreprise et vos concurrents.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Stratégie & Configuration", description: "Nous structurons les campagnes et le suivi.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Lancement & Optimisation", description: "Nous lançons les annonces et optimisons les performances.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Mise à l'échelle", description: "Nous doublons ce qui fonctionne et éliminons le gaspillage.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "Pourquoi Travailler Avec Nous ?",
      points: [
        "Stratégies PPC axées sur les performances",
        "Rapports clairs et transparence totale",
        "Créativité et stratégie réunies",
        "Axé sur le ROI",
        "Conçu pour une croissance durable",
      ],
      footer: "Votre budget publicitaire mérite mieux que des devinettes.",
    },
    idealClients: {
      title: "Est-ce fait pour vous ?",
      description: "Ce service est idéal si vous :",
      points: [
        "Souhaitez une visibilité immédiate",
        "Avez besoin de prospects prévisibles",
        "Avez déjà essayé les annonces avec de mauvais résultats",
        "Voulez des données claires",
      ],
    },
    faqsData: {
      faqs: [
        { question: "À quelle vitesse puis-je voir des résultats ?", answer: "Vous pouvez voir du trafic immédiatement, avec des résultats significatifs en 2 à 4 semaines." },
        { question: "Gérez-vous également les dépenses publicitaires ?", answer: "Oui. Nous gérons les budgets, tandis que vous payez directement les plateformes." },
        { question: "Le PPC est-il meilleur que le SEO ?", answer: "Le PPC donne des résultats immédiats. Le SEO construit la croissance. Les deux fonctionnent mieux ensemble." },
      ],
      image: { src: "/assets/images/services/ppc/3.webp", alt: "Publicité PPC" },
    },
    finalCTA: {
      title: "Transformons les Clics en Clients",
      description: "Arrêtez de gaspiller vos dépenses publicitaires et commencez des campagnes conçues pour convertir.",
      buttonText: "Obtenir une consultation gratuite",
    },
  },
  {
    slug: "review-marketing",
    name: "Marketing des Avis",
    heroSection: {
      subtitle: "Marketing des Avis",
      title: "Développez la confiance, boostez la visibilité et gagnez plus de clients",
      description: "Les avis en ligne influencent directement les décisions d'achat. Nous vous aidons à collecter et gérer les avis pour renforcer votre réputation.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Obtenir une consultation gratuite" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "Stratégie & Configuration", "Gestion des avis", "Amplification des avis",
        "Rapports & Insights", "Suivi de la réputation", "Stratégies de réponse",
        "Preuve Sociale", "Optimisation de plateforme", "Analyse de sentiment",
      ],
      gallery: [
        { src: "/assets/images/services/review-marketing/1.webp", alt: "Avis Clients" },
        { src: "/assets/images/services/review-marketing/2.webp", alt: "Gestion des avis" },
      ],
    },
    problemSection: {
      title: "Qu'est-ce qui freine votre réputation ?",
      description: "De nombreuses entreprises rencontrent des difficultés car :",
      painPoints: [
        "Elles ne demandent pas systématiquement d'avis",
        "Les avis sont dispersés sur plusieurs plateformes",
        "Les avis négatifs ne sont pas gérés",
        "Les avis positifs ne sont pas utilisés dans le marketing",
        "Le faible volume d'avis nuit à la confiance",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "Notre Approche", title: "Notre Approche du Marketing des Avis" },
      video: { src: "/videos/Business_People.mp4", type: "video/mp4" },
      content: {
        title: "Nous transformons les avis en un atout stratégique",
        paragraphs: [
          "Notre processus vise à augmenter le volume d'avis, améliorer les notes et utiliser la preuve sociale là où elle compte le plus.",
          "La confiance n'est pas facultative. Nous vous aidons à la gagner et à l'utiliser à bon escient.",
        ],
      },
    },
    whatsIncluded: {
      title: "Ce qui est inclus",
      categories: [
        { title: "Stratégie & Configuration", items: ["Audit de réputation", "Priorisation des plateformes (Google, Facebook, etc.)", "Stratégie de demande d'avis", "Automatisation (Email/SMS)"] },
        { title: "Gestion des avis", items: ["Suivi et alertes", "Directives de réponse", "Stratégie de traitement des avis négatifs", "Communication sécurisée"] },
        { title: "Amplification des avis", items: ["Utilisation sur le site web", "Preuve sociale pour les annonces", "Extraits de témoignages"] },
        { title: "Rapports & Insights", items: ["Suivi de la croissance", "Analyse des sentiments", "Insights exploitables"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Notre Processus",
      sectionTitle: "Comment nous bâtissons votre réputation",
      ctaText: "Commencer",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit", description: "Nous examinons vos notes actuelles.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Stratégie", description: "Nous construisons un système pour générer des avis.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Lancement", description: "Nous commençons à collecter et gérer les avis.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Optimisation", description: "Nous utilisons les avis pour stimuler la croissance.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "Pourquoi Travailler Avec Nous ?",
      points: [
        "Stratégies d'avis éthiques et conformes",
        "Focus sur la qualité et l'authenticité",
        "Systèmes clairs, pas de suivi manuel",
        "Avis intégrés à votre marketing",
        "Conçu pour améliorer la confiance",
      ],
      footer: "Nous vous aidons à gagner la confiance — et à l'utiliser à bon escient.",
    },
    idealClients: {
      title: "Est-ce fait pour vous ?",
      description: "Ce service est idéal si vous :",
      points: [
        "Comptez sur la réputation pour gagner des clients",
        "Voulez plus d'avis sans suivis maladroits",
        "Servez un marché local",
        "Voulez une meilleure visibilité dans les recherches",
      ],
    },
    faqsData: {
      faqs: [
        { question: "Le marketing des avis est-il autorisé par Google ?", answer: "Oui — lorsque c'est fait de manière éthique." },
        { question: "Pouvez-vous supprimer les avis négatifs ?", answer: "Non, mais nous aidons à gérer les réponses et à améliorer le sentiment général." },
        { question: "Les avis aident-ils le SEO ?", answer: "Absolument. Les avis influencent fortement les classements locaux." },
      ],
      image: { src: "/assets/images/services/review-marketing/3.webp", alt: "Marketing des Avis" },
    },
    finalCTA: {
      title: "Faites de vos avis un avantage concurrentiel",
      description: "Bâtissez la confiance et convertissez plus de clients avec une solide réputation en ligne.",
      buttonText: "Obtenir une consultation gratuite",
    },
  },
  {
    slug: "graphic-design",
    name: "Design Graphique",
    heroSection: {
      subtitle: "Design Graphique",
      title: "Un design qui communique, connecte et convertit",
      description: "Un bon design rend votre marque reconnaissable et mémorable. Nous créons des visuels qui communiquent clairement et aident votre entreprise à se démarquer.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Obtenir une consultation gratuite" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "Stratégie de marque", "Design marketing et digital", "Design imprimé",
        "Graphiques pour réseaux sociaux", "Créations publicitaires", "Infographies",
        "Conception de présentations", "Design de packaging", "Charte graphique",
      ],
      gallery: [
        { src: "/assets/images/services/graphic-design/1.webp", alt: "Travail de design graphique" },
        { src: "/assets/images/services/graphic-design/2.webp", alt: "Exemples de design" },
      ],
    },
    problemSection: {
      title: "Qu'est-ce qui freine vos visuels ?",
      description: "De nombreuses entreprises ont des problèmes de design car :",
      painPoints: [
        "Les designs semblent incohérents",
        "Les visuels ont l'air génériques ou obsolètes",
        "Les supports marketing ne communiquent pas clairement",
        "Le design ne soutient pas les objectifs de vente",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "Notre Approche", title: "Notre Approche du Design Graphique" },
      video: { src: "/images/services/graphic-design/3.webp", type: "video/mp4" },
      content: {
        title: "Nous concevons avec un but — pas seulement pour décorer",
        paragraphs: [
          "Chaque visuel que nous créons soutient l'identité de votre marque. Notre approche se concentre sur une hiérarchie claire et une identité cohérente.",
          "Le design doit travailler aussi dur que votre entreprise.",
        ],
      },
    },
    whatsIncluded: {
      title: "Ce qui est inclus",
      categories: [
        { title: "Stratégie Visuelle", items: ["Alignement du style de marque", "Direction des couleurs et de la typographie"] },
        { title: "Design Digital", items: ["Designs pour réseaux sociaux", "Annonces et campagnes", "Visuels pour sites web"] },
        { title: "Design Imprimé", items: ["Cartes de visite", "Brochures et catalogues", "Packaging"] },
        { title: "Livraison", items: ["Fichiers prêts à imprimer", "Livraison organisée"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Notre Processus",
      sectionTitle: "Comment nous créons vos designs",
      ctaText: "Commencer",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Découverte", description: "Nous comprenons votre marque et vos objectifs.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Concept", description: "Nous développons des concepts visuels.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Design", description: "Nous concevons et finalisons les actifs.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Livraison", description: "Nous livrons des fichiers prêts à l'emploi.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "Pourquoi Travailler Avec Nous ?",
      points: [
        "Un design guidé par la stratégie",
        "Forte compréhension du marketing",
        "Cohérence sur toutes les plateformes",
        "Des délais fiables",
      ],
      footer: "Nous concevons des marques dont les gens se souviennent.",
    },
    idealClients: {
      title: "Est-ce fait pour vous ?",
      description: "Ce service est idéal si vous :",
      points: [
        "Avez besoin d'actifs de conception cohérents",
        "Voulez des visuels qui reflètent votre marque",
        "Utilisez le marketing digital et imprimé",
      ],
    },
    faqsData: {
      faqs: [
        { question: "Travaillez-vous avec des chartes graphiques existantes ?", answer: "Oui, nous pouvons les suivre ou les affiner." },
        { question: "Proposez-vous un support de design continu ?", answer: "Oui, nous proposons des services ponctuels et continus." },
        { question: "Le design est-il important si j'ai déjà un logo ?", answer: "Absolument. La cohérence bâtit la confiance." },
      ],
      image: { src: "/assets/images/services/graphic-design/3.webp", alt: "Design Graphique" },
    },
    finalCTA: {
      title: "Concevons Votre Marque Correctement",
      description: "Transformez vos visuels en un puissant atout de marque.",
      buttonText: "Obtenir une consultation gratuite",
    },
  },
  {
    slug: "branding",
    name: "Identité de Marque",
    heroSection: {
      subtitle: "Branding",
      title: "Construisez une marque que les gens reconnaissent et en qui ils ont confiance",
      description: "Votre marque est bien plus qu'un logo. C'est la façon dont votre entreprise est perçue à chaque point de contact.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Obtenir une consultation gratuite" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "Stratégie de marque", "Identité Visuelle", "Actifs de marque",
        "Charte graphique", "Création de logo", "Positionnement",
        "Message de marque", "Couleurs & Typographie",
      ],
      gallery: [
        { src: "/assets/images/services/branding/1.webp", alt: "Travail de Branding" },
        { src: "/assets/images/services/branding/2.webp", alt: "Identité de Marque" },
      ],
    },
    problemSection: {
      title: "Qu'est-ce qui freine votre marque ?",
      description: "De nombreuses entreprises rencontrent des difficultés car :",
      painPoints: [
        "Leur marque manque de clarté",
        "Les visuels et les messages sont incohérents",
        "La marque ne se démarque pas des concurrents",
        "Les clients ne comprennent pas la valeur",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "Notre Approche", title: "Notre Approche du Branding" },
      video: { src: "/assets/images/services/branding/3.webp", type: "video/mp4" },
      content: {
        title: "Nous construisons des marques avec un but",
        paragraphs: [
          "Chaque décision de branding est enracinée dans la stratégie. Notre approche se concentre sur la différenciation et des systèmes visuels forts.",
          "Une marque forte rend chaque effort marketing plus efficace.",
        ],
      },
    },
    whatsIncluded: {
      title: "Ce qui est inclus",
      categories: [
        { title: "Stratégie de marque", items: ["Recherche", "Analyse de la concurrence", "Positionnement", "Message"] },
        { title: "Identité Visuelle", items: ["Création de logo", "Palette de couleurs", "Système visuel"] },
        { title: "Actifs de marque", items: ["Cartes de visite", "Modèles sociaux", "Éléments de site web"] },
        { title: "Charte graphique", items: ["Règles d'utilisation", "Documentation de la marque"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Notre Processus",
      sectionTitle: "Comment nous construisons votre marque",
      ctaText: "Commencer",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Découverte", description: "Nous comprenons votre entreprise.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Stratégie", description: "Nous définissons votre direction.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Design", description: "Nous concevons le système visuel.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Lancement", description: "Nous appliquons la marque de manière cohérente.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "Pourquoi Travailler Avec Nous ?",
      points: [
        "Branding axé sur la stratégie",
        "Positionnement clair",
        "Systèmes construits pour évoluer",
      ],
      footer: "Nous construisons des fondations solides.",
    },
    idealClients: {
      title: "Est-ce fait pour vous ?",
      description: "Ce service est idéal si vous :",
      points: [
        "Lancez une nouvelle entreprise ou faites un rebranding",
        "Voulez vous démarquer",
        "Avez besoin de cohérence",
      ],
    },
    faqsData: {
      faqs: [
        { question: "Concevez-vous uniquement des logos ?", answer: "Non. Le logo n'est qu'une partie du système." },
        { question: "Combien de temps prend le branding ?", answer: "La plupart des projets prennent de 4 à 8 semaines." },
      ],
      image: { src: "/assets/images/services/branding/3.webp", alt: "Services de Branding" },
    },
    finalCTA: {
      title: "Construisons Une Marque Qui Dure",
      description: "Créez une marque qui reflète qui vous êtes.",
      buttonText: "Obtenir une consultation gratuite",
    },
  },
  {
    slug: "email-marketing",
    name: "Marketing par E-mail",
    heroSection: {
      subtitle: "Marketing par E-mail",
      title: "Transformez vos abonnés en clients fidèles",
      description: "Le marketing par e-mail garde votre marque à l'esprit. Nous créons des campagnes stratégiques qui augmentent les conversions.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Obtenir une consultation" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "Stratégie & Planification", "Création de campagnes", "Automatisation",
        "Performances & Optimisation", "Rédaction", "Design Visuel",
        "Segmentation", "Tests A/B", "Analytique",
      ],
      gallery: [
        { src: "/assets/images/services/email-marketing/1.webp", alt: "Campagnes E-mail" },
        { src: "/assets/images/services/email-marketing/2.webp", alt: "Marketing par E-mail" },
      ],
    },
    problemSection: {
      title: "Qu'est-ce qui freine vos e-mails ?",
      description: "De nombreuses entreprises luttent car :",
      painPoints: [
        "Les e-mails sont envoyés sans stratégie",
        "Les taux d'ouverture sont faibles",
        "Aucune automatisation claire",
        "Les e-mails ne génèrent pas d'actions",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "Notre Approche", title: "Notre Approche de l'E-mailing" },
      video: { src: "/assets/images/services/email-marketing/3.webp", type: "video/mp4" },
      content: {
        title: "L'e-mail est un canal de création de relations",
        paragraphs: [
          "Chaque campagne délivre le bon message au bon moment. Notre approche se concentre sur la segmentation et la personnalisation.",
          "L'e-mail fonctionne mieux lorsqu'il semble humain.",
        ],
      },
    },
    whatsIncluded: {
      title: "Ce qui est inclus",
      categories: [
        { title: "Stratégie", items: ["Audit e-mail", "Segmentation", "Calendrier de contenu"] },
        { title: "Création", items: ["Rédaction", "Design visuel", "Appels à l'action"] },
        { title: "Automatisation", items: ["Séquences de bienvenue", "Paniers abandonnés", "Flux de réengagement"] },
        { title: "Optimisation", items: ["Suivi des taux", "Tests A/B", "Améliorations continues"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Notre Processus",
      sectionTitle: "Comment nous faisons fonctionner l'e-mail",
      ctaText: "Commencer",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Audit", description: "Nous examinons votre liste.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Stratégie", description: "Nous définissons la segmentation.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Création", description: "Nous concevons et envoyons.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Optimisation", description: "Nous analysons et affinons.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: {
      title: "Pourquoi Travailler Avec Nous ?",
      points: [
        "Stratégie avant tout",
        "Des textes et des designs forts",
        "Automatisation qui fait gagner du temps",
        "Rapports clairs",
      ],
      footer: "Nous nous concentrons sur les résultats.",
    },
    idealClients: {
      title: "Est-ce fait pour vous ?",
      description: "Idéal si vous :",
      points: [
        "Voulez un meilleur engagement",
        "Avez besoin de suivis automatisés",
        "Vendez des produits ou services",
      ],
    },
    faqsData: {
      faqs: [
        { question: "À quelle fréquence envoyer des e-mails ?", answer: "La cohérence compte plus que le volume." },
        { question: "L'e-mail marketing est-il encore efficace ?", answer: "Absolument. C'est l'un des meilleurs ROI digital." },
      ],
      image: { src: "/assets/images/services/email-marketing/3.webp", alt: "Marketing par E-mail" },
    },
    finalCTA: {
      title: "Faites Travailler L'e-mail Pour Vous",
      description: "Transformez votre liste en un puissant canal de revenus.",
      buttonText: "Obtenir une consultation",
    },
  },
  {
    slug: "restaurant-platform",
    name: "Plateforme Restaurant",
    heroSection: {
      subtitle: "Plateforme tout-en-un",
      title: "Plateforme Restaurant Tout-en-Un : Zéro Commission",
      description: "Un système complet pour gérer votre restaurant et garder vos bénéfices. Aucune commission, que des résultats.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Essai Gratuit" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: [
        "Commande en ligne", "Créateur de site", "Application mobile",
        "Outils marketing", "Programme de fidélité", "Menu QR Code",
        "Gestion de livraison", "Agrégation de commandes",
      ],
      gallery: [
        { src: "/assets/images/services/restaurant-platform/1.webp", alt: "Tableau de bord" },
        { src: "/assets/images/services/restaurant-platform/2.webp", alt: "Application mobile" },
      ],
    },
    problemSection: {
      title: "Arrêtez de perdre de l'argent",
      description: "Les restaurants font face à des coûts élevés :",
      painPoints: [
        "Commissions élevées (jusqu'à 30 %)",
        "Aucun contrôle sur les données clients",
        "Dépendance aux livreurs tiers",
        "Gestion de plusieurs tablettes",
      ],
    },
    approachSection: {
      sectionHeader: { subtitle: "À propos de nous", title: "Soutenir la croissance des restaurants" },
      video: { src: "/assets/images/services/restaurant-platform/3.webp", type: "video/mp4" },
      content: {
        title: "Nous donnons aux restaurateurs les outils pour réussir",
        paragraphs: [
          "De l'intégration à l'assistance, nous fournissons des outils flexibles.",
          "Notre plateforme augmente constamment la valeur des commandes.",
        ],
      },
    },
    whatsIncluded: {
      title: "Notre Offre",
      categories: [
        { title: "Commande en ligne", items: ["Économisez sur les commissions", "Vendez directement", "Intégration POS"] },
        { title: "Site & App", items: ["Créateur de site pro", "App mobile", "Multi-sites"] },
        { title: "Marketing & Fidélité", items: ["Promotions", "Fidélité automatisée", "Campagnes SMS/Email"] },
        { title: "Opérations", items: ["Menu QR", "Gestion des livraisons", "Optimisation des itinéraires"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Commencer",
      sectionTitle: "3 Étapes vers la Liberté",
      ctaText: "Commencer",
      ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Configuration", description: "Nous configurons votre menu et site.", image: "/assets/images/Pricing/5.png" },
        { id: 2, number: "02", title: "Lancement", description: "Recevez vos propres commandes.", image: "/assets/images/Pricing/0.png" },
        { id: 3, number: "03", title: "Croissance", description: "Gardez vos bénéfices complets.", image: "/assets/images/Pricing/1.png" },
      ],
    },
    whyWorkWithUs: {
      title: "Pourquoi Nous Choisir ?",
      points: [
        "0% de commissions",
        "Contrôle total des données",
        "Solution tout-en-un",
        "Support dédié",
      ],
      footer: "Reprenez le contrôle de l'avenir de votre restaurant.",
    },
    idealClients: {
      title: "Parfait Pour",
      description: "Notre plateforme est conçue pour :",
      points: ["Restaurants indépendants", "Chaînes", "Ghost Kitchens", "Cafés & Bars"],
    },
    faqsData: {
      faqs: [
        { question: "N'y a-t-il vraiment aucune commission ?", answer: "Oui, un frais fixe mensuel." },
        { question: "Puis-je utiliser mes livreurs ?", answer: "Absolument." },
      ],
      image: { src: "/assets/images/services/restaurant-platform/3.webp", alt: "Plateforme Restaurant" },
    },
    finalCTA: {
      title: "Prêt à faire évoluer votre restaurant ?",
      description: "Rejoignez des milliers de restaurants qui économisent de l'argent.",
      buttonText: "Essai Gratuit",
    },
    pricingSection: {
      title: "Tarifs",
      plans: [
        { name: "Standard", price: "139 $", period: "/mois", subtitle: "par 1 emplacement", features: ["210 commandes", "Site web", "Réservations de tables", "Paiements en ligne"] },
        { name: "Premium", price: "189 $", period: "/mois", subtitle: "par 1 emplacement", features: ["Commandes illimitées", "Cartes cadeaux", "Menus multiples"] },
      ],
    },
    addonsSection: {
      title: "Modules Complémentaires",
      items: [
        { title: "Application Mobile", price: "55 $", period: "/mois", description: "Votre propre application mobile.", icon: "/assets/imgs/icon/mobile-app.svg" },
        { title: "Programme de fidélité", price: "25 $", period: "/mois", description: "Transformez vos clients.", icon: "/assets/imgs/icon/loyalty.svg" },
        { title: "Dispatch de livraison", price: "40 $", period: "/mois", description: "Proposez des livraisons tierces.", icon: "/assets/imgs/icon/delivery.svg" },
      ],
    },
  },
  // 👈 هتحط هنا باقي الخدمات بالفرنساوي
];
// 4. الداتا الإسباني (مترجمة بالكامل لجميع الخدمات)
const esServices: ServicePageData[] = [
  {
    slug: "web-design",
    name: "Diseño Web",
    heroSection: {
      subtitle: "Diseño Web", title: "Diseña Sitios Web que Conviertan e Impresionen",
      description: "Tu sitio web suele ser la primera impresión que los clientes tienen de tu empresa. Creamos sitios web modernos y responsivos que no solo se ven geniales, sino que generan resultados reales.",
      buttons: [
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
        { href: "/contact", style: "t-btn t-btn-primary", label: "Contáctanos" },
        { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" },
      ],
      services: ["Estrategia y Planificación Web", "Diseño y Desarrollo", "Optimización Técnica", "Diseño Mobile-First", "Contenido y Branding", "Analítica y Soporte", "Diseño de Experiencia de Usuario", "Optimización de Rendimiento", "Estructura SEO"],
      gallery: [{ src: "/assets/images/services/web-design/1.webp", alt: "Ejemplo de Diseño Web 1" }, { src: "/assets/images/services/web-design/2.webp", alt: "Ejemplo de Diseño Web 2" }],
    },
    problemSection: { title: "¿Qué está frenando tu sitio web?", description: "Muchas empresas luchan con su sitio web porque:", painPoints: ["Su sitio se ve obsoleto o poco profesional", "Los visitantes no pueden encontrar información fácilmente", "El rendimiento móvil es pobre o lento", "La identidad de marca no es consistente en las páginas"] },
    approachSection: {
      sectionHeader: { subtitle: "Nuestro Enfoque", title: "Nuestro Enfoque para el Diseño Web" },
      video: { src: "/assets/images/services/web-design/3.webp", type: "video/mp4" },
      content: { title: "Creamos sitios web diseñados estratégicamente para tu audiencia", paragraphs: ["Nuestro trabajo de diseño web se centra en el diseño centrado en el usuario que convierte visitantes, rendimiento rápido y optimizado para móviles, y mensajes claros en todas las páginas.", "Todo lo que hacemos está construido para apoyar el crecimiento a largo plazo con diseños escalables que crecen con tu negocio."] },
    },
    whatsIncluded: {
      title: "Qué Incluye",
      categories: [
        { title: "Estrategia y Planificación Web", items: ["Investigación de audiencia", "Planificación de mapa del sitio", "Tableros de inspiración de diseño"] },
        { title: "Diseño y Desarrollo", items: ["Diseños de página personalizados", "Diseño responsivo mobile-first", "Elementos interactivos y llamadas a la acción"] },
        { title: "Optimización Técnica", items: ["Tiempos de carga rápidos", "Estructura amigable para SEO", "Compatibilidad entre navegadores"] },
        { title: "Contenido y Branding", items: ["Alineación de mensajes y textos", "Integración de marca visual", "Optimización de imágenes"] },
        { title: "Reportes y Soporte", items: ["Configuración de seguimiento analítico", "Soporte posterior al lanzamiento", "Actualizaciones de rendimiento claras"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Nuestro Proceso", sectionTitle: "Cómo Construimos tu Sitio Web", ctaText: "Empezar", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Auditoría y Descubrimiento", description: "Analizamos tu sitio web actual, competidores y objetivos.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Estrategia y Planificación", description: "Definimos la estructura del sitio y la dirección del diseño.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Diseño y Construcción", description: "Creamos páginas responsivas, optimizadas y atractivas.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Lanzamiento y Crecimiento", description: "Monitoreamos el rendimiento, recopilamos comentarios y refinamos.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "¿Por Qué Trabajar Con Nosotros?", points: ["Diseño web basado en estrategia (sin adivinanzas)", "Comunicación clara y plazos realistas", "Diseño y marketing trabajando juntos", "Construido para empresas reales, no solo sitios bonitos"], footer: "Nos enfocamos en resultados medibles que respaldan tus objetivos comerciales." },
    idealClients: { title: "¿Es Esto Adecuado Para Ti?", description: "Este servicio es ideal si:", points: ["Quieres un sitio web moderno y profesional", "Sirves a un mercado local, regional o en línea", "Tienes un sitio web pero tiene un bajo rendimiento", "Buscas un crecimiento sostenible a través del diseño"] },
    faqsData: {
      faqs: [{ question: "¿Cuánto tiempo tarda en lanzarse un sitio web?", answer: "La mayoría de los sitios tardan de 6 a 12 semanas dependiendo de la complejidad." }, { question: "¿Solo ofrecen rediseños?", answer: "Hacemos tanto sitios web nuevos como rediseños de sitios existentes." }, { question: "¿El diseño web es mejor que el SEO o los anuncios?", answer: "El diseño crea la base para todo el marketing. Un gran sitio web + SEO + anuncios funciona mejor." }],
      image: { src: "/assets/images/services/web-design/3.webp", alt: "Proceso de Diseño Web" },
    },
    finalCTA: { title: "Construyamos tu Sitio Web", description: "Convierte tu sitio web en una herramienta poderosa que impresione a los visitantes y genere resultados.", buttonText: "Obtén una consulta gratuita" },
  },
  {
    slug: "seo",
    name: "Optimización SEO",
    heroSection: {
      subtitle: "Optimización en Motores de Búsqueda (SEO)", title: "Sé Encontrado por los Clientes Adecuados en el Momento Adecuado",
      description: "El SEO ayuda a tu empresa a aparecer cuando las personas buscan activamente tus servicios. Nos enfocamos en construir una visibilidad a largo plazo que impulse tráfico calificado, no solo clasificaciones.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Contáctanos" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Estrategia e Investigación SEO", "Optimización On-Page", "SEO Técnico", "SEO Local", "Investigación de Palabras Clave", "Optimización de Contenido", "Link Building", "Seguimiento de Rendimiento", "Análisis de la Competencia"],
      gallery: [{ src: "/assets/images/services/seo/1.webp", alt: "Estrategia SEO" }, { src: "/assets/images/services/seo/2.webp", alt: "Resultados SEO" }],
    },
    problemSection: { title: "¿Qué está frenando tu sitio web?", description: "Muchas empresas luchan con el SEO porque:", painPoints: ["Su sitio web no está optimizado para los motores de búsqueda", "Los competidores dominan los resultados de Google", "El tráfico es inconsistente o irrelevante", "Los clientes locales no pueden encontrarlos en línea"] },
    approachSection: {
      sectionHeader: { subtitle: "Nuestro Enfoque", title: "Nuestro Enfoque para el SEO" }, video: { src: "/assets/images/services/seo/3.webp", type: "video/mp4" },
      content: { title: "SEO basado en datos que atrae a clientes listos para actuar", paragraphs: ["Utilizamos un enfoque estratégico y basado en datos para mejorar tu visibilidad y atraer clientes.", "Todo lo que hacemos está construido para un crecimiento sostenible con un seguimiento claro y optimización continua."] },
    },
    whatsIncluded: {
      title: "Qué Incluye",
      categories: [
        { title: "Estrategia e Investigación SEO", items: ["Investigación de palabras clave basada en la intención", "Análisis de la competencia", "Mapeo de oportunidades SEO"] },
        { title: "Optimización On-Page", items: ["Títulos de página y meta descripciones", "Optimización de encabezados y contenido", "Mejoras de enlaces internos"] },
        { title: "SEO Técnico", items: ["Optimización de la velocidad del sitio", "Correcciones de rendimiento móvil", "Mejoras de indexación"] },
        { title: "SEO Local", items: ["Optimización del Perfil de Empresa de Google", "Segmentación de palabras clave locales", "Visibilidad mejorada en mapas"] },
        { title: "Reportes y Seguimiento", items: ["Seguimiento de clasificación de palabras clave", "Análisis de tráfico", "Actualizaciones claras de rendimiento"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Nuestro Proceso", sectionTitle: "Cómo Mejoramos tu SEO", ctaText: "Empezar", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Auditoría", description: "Analizamos tu sitio web, competidores y rendimiento actual.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Estrategia", description: "Creamos un plan SEO claro alineado con tus objetivos.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Optimización", description: "Implementamos mejoras de SEO on-page, técnicas y locales.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Crecimiento", description: "Monitoreamos los resultados y optimizamos continuamente.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "¿Por Qué Trabajar Con Nosotros?", points: ["SEO basado en estrategia", "Comunicación clara y expectativas realistas", "Diseño y marketing trabajando juntos", "Construido para empresas reales, no para métricas de vanidad"], footer: "Nos enfocamos en un crecimiento medible que respalda tus objetivos a largo plazo." },
    idealClients: { title: "¿Es Esto Adecuado Para Ti?", description: "Este servicio es ideal si:", points: ["Quieres clientes potenciales orgánicos consistentes", "Sirves a un mercado local o regional", "Tienes un sitio web pero baja visibilidad", "Buscas un crecimiento sostenible"] },
    faqsData: {
      faqs: [{ question: "¿Cuánto tiempo toma el SEO?", answer: "El SEO es una inversión a largo plazo. La mayoría ve progreso en unos pocos meses." }, { question: "¿Ofrecen solo SEO local?", answer: "Ofrecemos estrategias de SEO tanto locales como más amplias según tus necesidades." }, { question: "¿Es mejor el SEO que los anuncios pagados?", answer: "El SEO construye visibilidad a largo plazo, mientras que los anuncios proporcionan tráfico inmediato. Juntos funcionan mejor." }],
      image: { src: "/assets/images/services/seo/3.webp", alt: "Estrategia SEO" },
    },
    finalCTA: { title: "Mejoremos tu Visibilidad de Búsqueda", description: "Convierte tu sitio web en una fuente confiable de clientes potenciales calificados.", buttonText: "Obtén una consulta gratuita" },
  },
  {
    slug: "social-media",
    name: "Gestión de Redes Sociales",
    heroSection: {
      subtitle: "Gestión de Redes Sociales", title: "Construye una Marca Sólida y Convierte Seguidores en Clientes",
      description: "Tu audiencia ya está en las redes sociales. Te ayudamos a aparecer de manera consistente, comunicarte claramente y convertir la atención en resultados comerciales reales.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Obtén una consulta gratuita" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Estrategia y Planificación", "Creación de Contenido", "Publicación y Gestión", "Interacción con la Comunidad", "Rendimiento y Reportes", "Diseños de Publicaciones de Marca", "Calendario de Contenido", "Optimización de Plataformas", "Analítica"],
      gallery: [{ src: "/assets/images/services/social-media/1.webp", alt: "Contenido de Redes Sociales" }, { src: "/assets/images/services/social-media/2.webp", alt: "Estrategia de Redes Sociales" }],
    },
    problemSection: { title: "¿Qué está frenando tus redes sociales?", description: "Muchas empresas luchan con las redes sociales porque:", painPoints: ["La publicación es inconsistente o aleatoria", "El contenido parece genérico", "El compromiso es bajo a pesar de publicar regularmente", "No hay una estrategia clara detrás del contenido", "Las redes sociales no generan tráfico ni ventas"] },
    approachSection: {
      sectionHeader: { subtitle: "Nuestro Enfoque", title: "Nuestro Enfoque para Redes Sociales" }, video: { src: "/assets/images/services/social-media/3.webp", type: "video/mp4" },
      content: { title: "Tratamos las redes sociales como una herramienta comercial", paragraphs: ["Todo lo que hacemos está construido alrededor de tu marca, audiencia y objetivos.", "Sin tendencias por el simple hecho de ser tendencias, solo lo que funciona para tu marca."] },
    },
    whatsIncluded: {
      title: "Qué Incluye",
      categories: [
        { title: "Estrategia y Planificación", items: ["Auditoría y análisis de la competencia", "Selección de plataformas", "Pilares de contenido", "Calendario mensual"] },
        { title: "Creación de Contenido", items: ["Diseños de publicaciones de marca", "Textos alineados con tu voz", "Investigación de hashtags", "Dirección de Reels / videos cortos"] },
        { title: "Publicación y Gestión", items: ["Publicación programada", "Monitoreo y soporte de participación", "Consistencia de marca en todas las plataformas"] },
        { title: "Rendimiento y Reportes", items: ["Reportes de rendimiento mensuales", "Optimización de contenido", "Ajustes de estrategia continuos"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Nuestro Proceso", sectionTitle: "Cómo Hacemos Crecer tus Redes", ctaText: "Empezar", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Auditoría y Descubrimiento", description: "Revisamos tu presencia actual y competidores.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Estrategia y Planificación", description: "Definimos los pilares de contenido y las plataformas.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Creación de Contenido", description: "Diseñamos, escribimos y programamos el contenido.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Optimizar y Crecer", description: "Rastreamos el rendimiento y refinamos la estrategia.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "¿Por Qué Trabajar Con Nosotros?", points: ["Redes sociales basadas en estrategia", "Fuerte marca visual respaldada por pensamiento de marketing", "Comunicación clara", "Contenido diseñado para el compromiso real", "Enfocados en resultados, no en métricas de vanidad"], footer: "Ayudamos a las marcas a construir autoridad, no solo seguidores." },
    idealClients: { title: "¿Es Esto Adecuado Para Ti?", description: "Este servicio es ideal si:", points: ["Quieres una presencia consistente y profesional", "Necesitas contenido que refleje adecuadamente tu marca", "Luchas con el compromiso o la dirección", "Quieres que las redes apoyen el crecimiento real"] },
    faqsData: {
      faqs: [{ question: "¿Con qué frecuencia publican?", answer: "La frecuencia de publicación depende de tus objetivos, típicamente de 3 a 5 veces por semana." }, { question: "¿Crean tanto los diseños como los textos?", answer: "Sí. Manejamos visuales, textos y estrategia juntos." }, { question: "¿Pueden las redes sociales realmente generar ventas?", answer: "Sí, cuando se hacen estratégicamente apoyan el conocimiento, la confianza y las conversiones." }],
      image: { src: "/assets/images/services/social-media/3.webp", alt: "Gestión de Redes Sociales" },
    },
    finalCTA: { title: "Hagamos Crecer tu Presencia Social", description: "Convierte tus redes sociales en un canal poderoso de marca y crecimiento.", buttonText: "Obtén una consulta gratuita" },
  },
  {
    slug: "ppc",
    name: "Publicidad PPC",
    heroSection: {
      subtitle: "Publicidad de Pago Por Clic (PPC)", title: "Llega a los Clientes Adecuados — Exactamente Cuando Están Listos para Comprar",
      description: "La publicidad PPC pone tu empresa en la cima de los resultados de búsqueda al instante. Creamos y gestionamos campañas basadas en datos que atraen tráfico calificado y convierten clics en ingresos reales.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Obtén una consulta gratuita" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Estrategia y Configuración", "Creación de Anuncios", "Gestión de Campañas", "Reportes y Optimización", "Investigación de Palabras Clave", "Segmentación de Audiencia", "Pruebas A/B", "Seguimiento de Conversiones", "Análisis de ROI"],
      gallery: [{ src: "/assets/images/services/ppc/1.webp", alt: "Campañas PPC" }, { src: "/assets/images/services/ppc/2.webp", alt: "Rendimiento de Anuncios" }],
    },
    problemSection: { title: "¿Qué está frenando tus anuncios?", description: "Muchas empresas luchan con los anuncios pagados porque:", painPoints: ["El gasto publicitario es alto pero los resultados son bajos", "El tráfico no se convierte en ventas", "La segmentación es demasiado amplia", "Los anuncios carecen de mensajes claros", "No hay un seguimiento claro del rendimiento"] },
    approachSection: {
      sectionHeader: { subtitle: "Nuestro Enfoque", title: "Nuestro Enfoque para la Publicidad PPC" }, video: { src: "/assets/images/services/ppc/3.webp", type: "video/mp4" },
      content: { title: "No adivinamos, y no 'promocionamos por promocionar'", paragraphs: ["Cada campaña que ejecutamos se construye en torno a datos, intención y conversión.", "El objetivo no son los clics, son resultados con seguimiento claro y visibilidad del ROI."] },
    },
    whatsIncluded: {
      title: "Qué Incluye",
      categories: [
        { title: "Estrategia y Configuración", items: ["Auditoría de cuenta o configuración nueva", "Investigación de audiencia y palabras clave", "Selección de plataformas", "Configuración de seguimiento de conversiones"] },
        { title: "Creación de Anuncios", items: ["Textos de anuncios de búsqueda y sociales", "Dirección creativa para visuales", "Múltiples variaciones para pruebas", "Llamadas a la acción fuertes"] },
        { title: "Gestión de Campañas", items: ["Optimización de ofertas y presupuesto", "Pruebas A/B", "Monitoreo continuo del rendimiento", "Mejoras en el nivel de calidad"] },
        { title: "Reportes y Optimización", items: ["Reportes de rendimiento claros", "Análisis de costo por conversión", "Estrategias de escalado"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Nuestro Proceso", sectionTitle: "Cómo Convertimos Clics en Clientes", ctaText: "Empezar", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Auditoría y Descubrimiento", description: "Analizamos tu empresa, audiencia y competidores.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Estrategia y Configuración", description: "Estructuramos las campañas y la segmentación.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Lanzamiento y Optimización", description: "Lanzamos los anuncios, probamos y optimizamos.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Escalar y Mejorar", description: "Duplicamos lo que funciona y eliminamos el desperdicio.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "¿Por Qué Trabajar Con Nosotros?", points: ["Estrategias PPC impulsadas por el rendimiento", "Informes claros y total transparencia", "Creatividad + estrategia bajo un mismo techo", "Enfoque en el ROI, no en métricas de vanidad", "Construido para un crecimiento escalable"], footer: "Tu presupuesto publicitario merece más que conjeturas." },
    idealClients: { title: "¿Es Esto Adecuado Para Ti?", description: "Este servicio es ideal si:", points: ["Quieres visibilidad y tráfico inmediatos", "Necesitas prospectos o ventas predecibles", "Has probado anuncios antes con malos resultados", "Quieres datos claros y resultados medibles"] },
    faqsData: {
      faqs: [{ question: "¿Qué tan rápido puedo ver resultados del PPC?", answer: "Puedes comenzar a ver tráfico de inmediato, con resultados significativos típicamente dentro de las primeras 2 a 4 semanas." }, { question: "¿También gestionan la inversión publicitaria?", answer: "Sí. Gestionamos presupuestos y optimización, mientras tú pagas el gasto publicitario directamente a las plataformas." }, { question: "¿Es mejor el PPC que el SEO?", answer: "El PPC ofrece resultados inmediatos. El SEO construye un crecimiento a largo plazo. Juntos, funcionan mejor." }],
      image: { src: "/assets/images/services/ppc/3.webp", alt: "Publicidad PPC" },
    },
    finalCTA: { title: "Convirtamos Clics en Clientes", description: "Deja de desperdiciar tu inversión publicitaria y comienza a ejecutar campañas diseñadas para convertir.", buttonText: "Obtén una consulta gratuita" },
  },
  {
    slug: "review-marketing",
    name: "Marketing de Reseñas",
    heroSection: {
      subtitle: "Marketing de Reseñas", title: "Construye Confianza, Aumenta la Visibilidad y Gana Más Clientes",
      description: "Las reseñas en línea influyen directamente en las decisiones de compra. Te ayudamos a recopilar, gestionar y aprovechar las reseñas de los clientes para fortalecer tu reputación, mejorar la visibilidad local e impulsar más conversiones.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Obtén una consulta gratuita" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Estrategia y Configuración", "Gestión de Reseñas", "Amplificación de Reseñas", "Reportes e Insights", "Monitoreo de Reputación", "Estrategias de Respuesta", "Marketing de Prueba Social", "Optimización de Plataformas", "Análisis de Sentimiento"],
      gallery: [{ src: "/assets/images/services/review-marketing/1.webp", alt: "Reseñas de Clientes" }, { src: "/assets/images/services/review-marketing/2.webp", alt: "Gestión de Reseñas" }],
    },
    problemSection: { title: "¿Qué está frenando tu reputación?", description: "Muchas empresas luchan con el marketing de reseñas porque:", painPoints: ["No piden reseñas a los clientes de forma constante", "Las reseñas están dispersas en múltiples plataformas", "Las reseñas negativas no se gestionan o no se responden", "Las reseñas positivas no se utilizan en el marketing", "El bajo volumen de reseñas perjudica la confianza"] },
    approachSection: {
      sectionHeader: { subtitle: "Nuestro Enfoque", title: "Nuestro Enfoque para el Marketing de Reseñas" }, video: { src: "/videos/Business_People.mp4", type: "video/mp4" },
      content: { title: "Convertimos las reseñas en un activo de crecimiento estratégico", paragraphs: ["Nuestro proceso se centra en aumentar el volumen de reseñas, mejorar las calificaciones y utilizar la prueba social donde más importa.", "La confianza no es opcional, lo es todo. Te ayudamos a ganártela y usarla sabiamente."] },
    },
    whatsIncluded: {
      title: "Qué Incluye",
      categories: [
        { title: "Estrategia y Configuración", items: ["Auditoría de reputación en plataformas", "Priorización de plataformas", "Estrategia de solicitud de reseñas", "Configuración de automatización (correo/SMS)"] },
        { title: "Gestión de Reseñas", items: ["Monitoreo y alertas", "Pautas de respuesta a reseñas", "Estrategia de manejo de reseñas negativas", "Comunicación segura para la marca"] },
        { title: "Amplificación de Reseñas", items: ["Uso de reseñas en el sitio web", "Prueba social para anuncios y redes", "Destacados de testimonios"] },
        { title: "Reportes e Insights", items: ["Seguimiento de crecimiento de reseñas", "Análisis de calificación", "Información procesable para mejoras"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Nuestro Proceso", sectionTitle: "Cómo Construimos tu Reputación", ctaText: "Empezar", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Auditoría y Descubrimiento", description: "Revisamos tus calificaciones actuales y el viaje del cliente.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Estrategia y Configuración", description: "Construimos un sistema para generar y gestionar reseñas.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Lanzamiento y Monitoreo", description: "Comenzamos a recopilar reseñas y gestionar respuestas.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Optimizar y Aprovechar", description: "Refinamos el proceso y usamos las reseñas para impulsar el crecimiento.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "¿Por Qué Trabajar Con Nosotros?", points: ["Estrategias de reseñas éticas y conformes a las políticas", "Enfoque en calidad y autenticidad", "Sistemas claros, sin seguimientos manuales incómodos", "Reseñas integradas en tu embudo de marketing", "Construido para mejorar la confianza y las conversiones"], footer: "Te ayudamos a ganar confianza — y usarla sabiamente." },
    idealClients: { title: "¿Es Esto Adecuado Para Ti?", description: "Este servicio es ideal si:", points: ["Dependes de la confianza y la reputación para ganar clientes", "Quieres más reseñas sin seguimientos incómodos", "Sirves a un mercado local o de servicios", "Quieres una mejor visibilidad en la búsqueda local"] },
    faqsData: {
      faqs: [{ question: "¿El marketing de reseñas está permitido por Google?", answer: "Sí, cuando se hace éticamente. Seguimos todas las políticas de la plataforma." }, { question: "¿Pueden eliminar reseñas negativas?", answer: "No podemos eliminar reseñas legítimas, pero ayudamos a gestionar las respuestas y mejorar el sentimiento general." }, { question: "¿Las reseñas ayudan al SEO?", answer: "Absolutamente. Las reseñas influyen fuertemente en las clasificaciones locales y las tasas de clics." }],
      image: { src: "/assets/images/services/review-marketing/3.webp", alt: "Marketing de Reseñas" },
    },
    finalCTA: { title: "Convierte las Reseñas en una Ventaja Competitiva", description: "Construye confianza, mejora la visibilidad y convierte más clientes con una sólida reputación en línea.", buttonText: "Obtén una consulta gratuita" },
  },
  {
    slug: "graphic-design",
    name: "Diseño Gráfico",
    heroSection: {
      subtitle: "Diseño Gráfico", title: "Diseño que Comunica, Conecta y Convierte",
      description: "Un diseño sólido hace que tu marca sea reconocible, creíble y memorable. Creamos elementos visuales que se comunican claramente, respaldan tu mensaje y ayudan a que tu negocio se destaque en todas partes.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Obtén una consulta gratuita" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Estrategia Visual", "Diseño de Marketing y Digital", "Diseño de Impresión", "Gráficos para Redes Sociales", "Creatividades Publicitarias", "Infografías", "Diseño de Presentaciones", "Diseño de Empaques", "Directrices de Marca"],
      gallery: [{ src: "/assets/images/services/graphic-design/1.webp", alt: "Trabajo de Diseño Gráfico" }, { src: "/assets/images/services/graphic-design/2.webp", alt: "Ejemplos de Diseño" }],
    },
    problemSection: { title: "¿Qué está frenando tus visuales?", description: "Muchas empresas luchan con el diseño gráfico porque:", painPoints: ["Los diseños se sienten inconsistentes o fuera de marca", "Los visuales se ven genéricos o desactualizados", "Los materiales de marketing no comunican claramente", "El diseño no respalda los objetivos de marketing"] },
    approachSection: {
      sectionHeader: { subtitle: "Nuestro Enfoque", title: "Nuestro Enfoque para el Diseño Gráfico" }, video: { src: "/images/services/graphic-design/3.webp", type: "video/mp4" },
      content: { title: "Diseñamos con un propósito — no solo decoración", paragraphs: ["Cada visual que creamos respalda tu identidad de marca, mensajes y objetivos comerciales.", "El diseño debe trabajar tan duro como tu empresa con pensamiento creativo respaldado por estrategia de marketing."] },
    },
    whatsIncluded: {
      title: "Qué Incluye",
      categories: [
        { title: "Estrategia Visual", items: ["Alineación de estilo de marca", "Dirección de color y tipografía", "Directrices de consistencia visual"] },
        { title: "Diseño de Marketing y Digital", items: ["Diseños para redes sociales", "Creatividades de anuncios", "Visuales para sitios web y páginas de aterrizaje"] },
        { title: "Diseño de Impresión", items: ["Tarjetas de presentación y papelería", "Folletos y catálogos", "Empaques y etiquetas"] },
        { title: "Entrega y Soporte", items: ["Archivos listos para imprimir y digitales", "Entrega organizada de activos", "Soporte de diseño continuo cuando sea necesario"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Nuestro Proceso", sectionTitle: "Cómo Creamos tus Diseños", ctaText: "Empezar", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Descubrimiento", description: "Entendemos tu marca, objetivos y casos de uso.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Concepto y Dirección", description: "Desarrollamos conceptos visuales y dirección creativa.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Diseño y Refinamiento", description: "Diseñamos, revisamos y finalizamos los activos.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Entrega y Uso", description: "Entregamos archivos listos para usar en todas las plataformas.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "¿Por Qué Trabajar Con Nosotros?", points: ["Diseño liderado por estrategia, no solo visuales", "Fuerte comprensión de marca y marketing", "Consistencia en todas las plataformas", "Diseño que apoya el crecimiento y el reconocimiento", "Plazos confiables y comunicación clara"], footer: "Diseñamos marcas que la gente recuerda." },
    idealClients: { title: "¿Es Esto Adecuado Para Ti?", description: "Este servicio es ideal si:", points: ["Necesitas activos de diseño consistentes y profesionales", "Quieres visuales que reflejen adecuadamente tu marca", "Usas marketing tanto digital como impreso", "Quieres que el diseño apoye los objetivos comerciales"] },
    faqsData: {
      faqs: [{ question: "¿Trabajan con directrices de marca existentes?", answer: "Sí. Podemos seguirlas, refinarlas o ayudar a construirlas si es necesario." }, { question: "¿Ofrecen soporte de diseño continuo?", answer: "Sí. Ofrecemos servicios de diseño basados en proyectos y continuos." }, { question: "¿Es importante el diseño gráfico si ya tengo un logotipo?", answer: "Absolutamente. La consistencia del diseño en todos los puntos de contacto genera confianza y reconocimiento." }],
      image: { src: "/assets/images/services/graphic-design/3.webp", alt: "Diseño Gráfico" },
    },
    finalCTA: { title: "Diseñemos tu Marca de la Manera Correcta", description: "Convierte tus visuales en un activo poderoso de la marca.", buttonText: "Obtén una consulta gratuita" },
  },
  {
    slug: "branding",
    name: "Identidad de Marca (Branding)",
    heroSection: {
      subtitle: "Branding", title: "Construye una Marca que la Gente Reconozca, Confíe y Recuerde",
      description: "Tu marca es más que un logotipo. Es cómo tu empresa se ve, suena y se siente en cada punto de contacto. Te ayudamos a construir una marca clara y consistente que conecta con la audiencia adecuada y respalda el crecimiento a largo plazo.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Obtén una consulta gratuita" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Estrategia de Marca", "Identidad Visual", "Activos de Marca", "Directrices de Marca", "Diseño de Logotipo", "Posicionamiento de Marca", "Marco de Mensajes", "Color y Tipografía", "Documentación de Marca"],
      gallery: [{ src: "/assets/images/services/branding/1.webp", alt: "Trabajo de Branding" }, { src: "/assets/images/services/branding/2.webp", alt: "Identidad de Marca" }],
    },
    problemSection: { title: "¿Qué está frenando tu marca?", description: "Muchas empresas luchan con el branding porque:", painPoints: ["Su marca carece de claridad o dirección", "Los visuales y los mensajes se sienten inconsistentes", "La marca no se destaca de los competidores", "Los clientes no entienden claramente el valor", "El marketing se siente desconectado en todos los canales"] },
    approachSection: {
      sectionHeader: { subtitle: "Nuestro Enfoque", title: "Nuestro Enfoque para el Branding" }, video: { src: "/assets/images/services/branding/3.webp", type: "video/mp4" },
      content: { title: "Construimos marcas con un propósito, no tendencias", paragraphs: ["Cada decisión de branding está arraigada en la estrategia, el posicionamiento y los objetivos comerciales reales.", "Una marca fuerte hace que cada esfuerzo de marketing sea más efectivo con consistencia a través de medios digitales e impresos."] },
    },
    whatsIncluded: {
      title: "Qué Incluye",
      categories: [
        { title: "Estrategia de Marca", items: ["Descubrimiento de marca e investigación", "Análisis de audiencia y competencia", "Posicionamiento de marca y propuesta de valor", "Marco de mensajes de la marca"] },
        { title: "Identidad Visual", items: ["Diseño o refinamiento de logotipo", "Paleta de colores y tipografía", "Sistema visual y elementos de diseño", "Directrices de uso de la marca"] },
        { title: "Activos de Marca", items: ["Tarjetas de presentación y papelería", "Plantillas de branding para redes sociales", "Elementos de marca digital y sitio web", "Materiales impresos y de marketing"] },
        { title: "Directrices de Marca", items: ["Reglas de uso del logotipo", "Estándares de tipografía y color", "Consistencia visual y tono de voz", "Documentación de la marca para el crecimiento futuro"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Nuestro Proceso", sectionTitle: "Cómo Construimos tu Marca", ctaText: "Empezar", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Descubrimiento e Investigación", description: "Entendemos tu negocio, audiencia y mercado.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Estrategia y Posicionamiento", description: "Definimos la dirección y los mensajes de tu marca.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Diseño de Identidad", description: "Diseñamos el sistema de marca visual y verbal.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Lanzamiento y Alineación", description: "Aplicamos la marca y aseguramos la consistencia en todos los canales.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "¿Por Qué Trabajar Con Nosotros?", points: ["Branding liderado por estrategia, no solo diseño de logotipos", "Posicionamiento claro que diferencia tu negocio", "Profunda comprensión del diseño y el marketing", "Sistemas de marca construidos para escalar", "Branding práctico para negocios reales"], footer: "No solo diseñamos marcas, construimos bases." },
    idealClients: { title: "¿Es Esto Adecuado Para Ti?", description: "Este servicio es ideal si:", points: ["Estás lanzando un nuevo negocio o haciendo un rebranding", "Sientes que tu marca ya no representa a tu empresa", "Quieres destacar en un mercado abarrotado", "Necesitas consistencia en todos los puntos de contacto"] },
    faqsData: {
      faqs: [{ question: "¿Solo diseñan logotipos?", answer: "No. Los logotipos son solo una parte de un sistema de marca completo." }, { question: "¿Pueden cambiar la marca de un negocio existente?", answer: "Sí. Manejamos tanto rebrandings completos como actualizaciones de marca." }, { question: "¿Cuánto tiempo toma el branding?", answer: "La mayoría de los proyectos de branding toman de 4 a 8 semanas dependiendo del alcance." }],
      image: { src: "/assets/images/services/branding/3.webp", alt: "Servicios de Branding" },
    },
    finalCTA: { title: "Construyamos una Marca Que Perdure", description: "Crea una marca que refleje quién eres y hacia dónde se dirige tu negocio.", buttonText: "Obtén una consulta gratuita" },
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    heroSection: {
      subtitle: "Email Marketing", title: "Convierte a los Suscriptores en Clientes Leales",
      description: "El marketing por correo electrónico mantiene a tu marca en la mente de los clientes y genera resultados consistentes. Creamos campañas estratégicas de correo que nutren a los prospectos, aumentan las conversiones y construyen relaciones a largo plazo.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Obtén una consulta gratuita" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Estrategia y Planificación", "Creación de Campañas", "Automatización y Flujos", "Rendimiento y Optimización", "Redacción de Correos", "Diseño Visual", "Segmentación de Listas", "Pruebas A/B", "Analítica"],
      gallery: [{ src: "/assets/images/services/email-marketing/1.webp", alt: "Campañas de Correo" }, { src: "/assets/images/services/email-marketing/2.webp", alt: "Email Marketing" }],
    },
    problemSection: { title: "¿Qué está frenando tu marketing por correo?", description: "Muchas empresas luchan con el email marketing porque:", painPoints: ["Los correos se envían irregularmente o sin estrategia", "Las tasas de apertura y clics son bajas", "Los mensajes parecen genéricos o fuera de marca", "No hay segmentación clara o automatización", "Los correos no generan acciones significativas"] },
    approachSection: {
      sectionHeader: { subtitle: "Nuestro Enfoque", title: "Nuestro Enfoque para el Email Marketing" }, video: { src: "/assets/images/services/email-marketing/3.webp", type: "video/mp4" },
      content: { title: "Tratamos el correo como un canal de construcción de relaciones", paragraphs: ["Cada campaña está diseñada para entregar el mensaje correcto en el momento adecuado. Nuestro enfoque se centra en la segmentación y personalización de la audiencia.", "El correo electrónico funciona mejor cuando se siente humano e intencional con una marca y un tono de voz consistentes."] },
    },
    whatsIncluded: {
      title: "Qué Incluye",
      categories: [
        { title: "Estrategia y Planificación", items: ["Auditoría de marketing por correo", "Segmentación de listas", "Planificación de automatización", "Calendario de contenido"] },
        { title: "Creación de Campañas", items: ["Redacción de correos", "Diseño visual y formato", "Fuertes llamadas a la acción", "Correos optimizados para móviles"] },
        { title: "Automatización y Flujos", items: ["Secuencias de bienvenida", "Campañas de nutrición de prospectos", "Correos de carritos abandonados", "Flujos de reactivación"] },
        { title: "Rendimiento y Optimización", items: ["Seguimiento de apertura y clics", "Análisis de conversiones", "Pruebas A/B", "Mejoras continuas"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Nuestro Proceso", sectionTitle: "Cómo Hacemos que el Correo Funcione", ctaText: "Empezar", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Auditoría y Descubrimiento", description: "Revisamos tu lista, contenido y objetivos.", image: "/assets/imgs/icon/icon1.png" },
        { id: 2, number: "02", title: "Estrategia y Configuración", description: "Definimos la segmentación y los mensajes.", image: "/assets/imgs/icon/icon2.png" },
        { id: 3, number: "03", title: "Crear y Lanzar", description: "Diseñamos, escribimos y enviamos campañas.", image: "/assets/imgs/icon/icon3.png" },
        { id: 4, number: "04", title: "Optimizar y Escalar", description: "Analizamos el rendimiento y refinamos para obtener mejores resultados.", image: "/assets/imgs/icon/icon4.png" },
      ],
    },
    whyWorkWithUs: { title: "¿Por Qué Trabajar Con Nosotros?", points: ["Email marketing impulsado por estrategia", "Fuerte redacción y diseño trabajando juntos", "Automatización que ahorra tiempo y aumenta el ROI", "Reportes claros", "Construido para el crecimiento a largo plazo"], footer: "Nos enfocamos en resultados, no en ruido en la bandeja de entrada." },
    idealClients: { title: "¿Es Esto Adecuado Para Ti?", description: "Este servicio es ideal si:", points: ["Quieres un mejor compromiso de tu lista de correo", "Necesitas seguimientos automatizados", "Vendes productos o servicios en línea o fuera de línea", "Quieres resultados predecibles"] },
    faqsData: {
      faqs: [{ question: "¿Con qué frecuencia se deben enviar correos?", answer: "Depende de tu audiencia y objetivos, pero la consistencia importa más que el volumen." }, { question: "¿Trabajan con plataformas como Mailchimp o Klaviyo?", answer: "Sí. Trabajamos con las principales plataformas y herramientas de marketing por correo electrónico." }, { question: "¿Sigue siendo efectivo el email marketing?", answer: "Absolutamente. El correo electrónico ofrece constantemente uno de los retornos de inversión más altos." }],
      image: { src: "/assets/images/services/email-marketing/3.webp", alt: "Email Marketing" },
    },
    finalCTA: { title: "Hagamos que el Correo Funcione para tu Empresa", description: "Convierte tu lista de correos en un poderoso canal de ingresos y relaciones.", buttonText: "Obtén una consulta gratuita" },
  },
  {
    slug: "restaurant-platform",
    name: "Plataforma para Restaurantes",
    heroSection: {
      subtitle: "Plataforma todo en uno", title: "Plataforma Todo en Uno para Restaurantes: Cero Comisiones",
      description: "Un sistema completo para administrar tu restaurante, hacer crecer tu marca y mantener tus ganancias. Desde pedidos en línea hasta la gestión de entregas—sin comisiones, solo resultados.",
      buttons: [ { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" }, { href: "/contact", style: "t-btn t-btn-primary", label: "Prueba Gratuita" }, { href: "/contact", style: "t-btn t-btn-circle", icon: "fa-solid fa-arrow-right" } ],
      services: ["Pedidos en Línea", "Creador de Sitios Web", "App Móvil", "Herramientas de Marketing", "Programa de Lealtad", "Menú con Código QR", "Gestión de Entregas", "Agrupación de Pedidos"],
      gallery: [{ src: "/assets/images/services/restaurant-platform/1.webp", alt: "Panel de Plataforma de Restaurante" }, { src: "/assets/images/services/restaurant-platform/2.webp", alt: "App de Pedidos Móviles" }],
    },
    problemSection: { title: "Deja de Perder Dinero con Aplicaciones de Terceros", description: "Los restaurantes hoy enfrentan altos costos y pérdida de control:", painPoints: ["Altas comisiones (hasta 30%) en cada pedido", "Ninguna propiedad de los datos del cliente", "Dependencia de repartidores externos", "Dificultad para manejar múltiples tabletas y sistemas"] },
    approachSection: {
      sectionHeader: { subtitle: "Sobre Nosotros", title: "Apoyando a los Restaurantes a Crecer" }, video: { src: "/assets/images/services/restaurant-platform/3.webp", type: "video/mp4" },
      content: { title: "Empoderamos a los restauradores con las herramientas que necesitan para tener éxito", paragraphs: ["Desde la incorporación hasta la asistencia continua, brindamos herramientas flexibles y estrategias adaptadas para alcanzar los objetivos únicos de cada restaurante.", "Nuestra plataforma ha aumentado consistentemente los valores de los pedidos y la retención de clientes devolviéndote el poder."] },
    },
    whatsIncluded: {
      title: "Nuestra Oferta",
      categories: [
        { title: "Sistema de Pedidos en Línea", items: ["Ahorra hasta un 90% en comisiones de terceros", "Vende directamente sin intermediarios", "Gestiona menú, pedidos y entrega sin problemas", "Intégrate con tu POS y servicios de entrega"] },
        { title: "Sitio Web y App para Restaurantes", items: ["Creador de sitios web profesional (sin necesidad de código)", "App móvil con tu marca (iOS y Android)", "Pedidos y reservas integrados", "Soporte para múltiples sucursales"] },
        { title: "Marketing y Lealtad", items: ["Crea promociones y descuentos", "Programas de lealtad automatizados", "Campañas por SMS, Correo Electrónico y Push", "Informes detallados para decisiones informadas"] },
        { title: "Operaciones y Entrega", items: ["Menú con Código QR", "Gestión de entregas (rastrea conductores en tiempo real)", "Rutas optimizadas", "Despacho de entrega sin tener flota propia"] },
      ],
    },
    processSection: {
      sectionSubtitle: "Comenzar", sectionTitle: "3 Pasos hacia la Libertad", ctaText: "Empezar", ctaLink: "/contact",
      steps: [
        { id: 1, number: "01", title: "Configuración", description: "Te ayudamos a configurar tu menú, sitio web y aplicación de marca.", image: "/assets/images/Pricing/5.png" },
        { id: 2, number: "02", title: "Lanzamiento", description: "Inicia con tu propio sistema de pedidos y comienza a hacer marketing.", image: "/assets/images/Pricing/0.png" },
        { id: 3, number: "03", title: "Crecer", description: "Retén a los clientes con programas de lealtad y mantén tus ganancias.", image: "/assets/images/Pricing/1.png" },
      ],
    },
    whyWorkWithUs: { title: "¿Por Qué Elegir Nuestra Plataforma?", points: ["0% de Comisiones en los pedidos", "Control total sobre los datos de tus clientes", "Solución todo en uno (Pedidos, Marketing, Entrega)", "Soporte dedicado para ayudarte a crecer"], footer: "Recupera el control del futuro de tu restaurante." },
    idealClients: { title: "Perfecto Para", description: "Nuestra plataforma está diseñada para:", points: ["Restaurantes Independientes", "Cadenas con múltiples ubicaciones", "Cocinas Fantasma (Ghost Kitchens)", "Cafeterías y Bares"] },
    faqsData: {
      faqs: [{ question: "¿Realmente no hay comisión?", answer: "Sí, cobramos una tarifa mensual plana. Te quedas con el 100% de tus ingresos por ventas." }, { question: "¿Puedo usar mis propios repartidores?", answer: "Absolutamente. Nuestro sistema de gestión te permite rastrear a tus propios conductores o conectarte con mensajeros externos." }, { question: "¿Necesito un desarrollador?", answer: "No. Nuestro creador de sitios web y proceso de configuración no requieren código en absoluto." }],
      image: { src: "/assets/images/services/restaurant-platform/3.webp", alt: "Plataforma para Restaurantes" },
    },
    finalCTA: { title: "¿Listo para Escalar tu Restaurante?", description: "Únete a miles de restaurantes que ahorran dinero y crecen más rápido.", buttonText: "Comienza tu Prueba Gratuita" },
    pricingSection: {
      title: "Precios",
      plans: [
        { name: "Estándar", price: "$139", period: "/mes", subtitle: "por 1 ubicación", features: ["210 pedidos", "Sitio web del restaurante", "Servicio de configuración gratuito", "Pedidos desde la mesa", "Reserva de mesas", "Múltiples ubicaciones", "Pagos en línea", "Marketing por correo y SMS", "Cupones y códigos promocionales"] },
        { name: "Premium", price: "$189", period: "/mes", subtitle: "por 1 ubicación", features: ["Todo en Estándar más:", "Pedidos ilimitados", "Automatización de marketing", "Tarjetas de regalo", "Recomendaciones de artículos", "Múltiples menús"] },
      ],
    },
addonsSection: {
      title: "Complementos (Addons)",
      items: [
        { title: "Aplicación Móvil", price: "$55", period: "/mes", description: "Tu propia aplicación móvil de marca para pedidos.", icon: "/assets/imgs/icon/mobile-app.svg" },
        { title: "Programa de Lealtad", price: "$25", period: "/mes", description: "Convierte a los clientes ocasionales en clientes habituales.", icon: "/assets/imgs/icon/loyalty.svg" },
        { title: "Despachador de Entregas", price: "$40", period: "/mes", description: "Comienza a ofrecer entregas con servicios de terceros—sin necesidad de flota propia.", icon: "/assets/imgs/icon/delivery.svg" },
        { title: "App para Conductores", price: "$14", period: "/mes", description: "Gestiona tus entregas y conductores con una aplicación de mensajería.", icon: "/assets/imgs/icon/driver.svg" },
        { title: "Agrupación de Pedidos", price: "$40", period: "/mes", description: "Gestiona todos los pedidos de cada canal en un solo lugar — no más múltiples tabletas.", icon: "/assets/imgs/icon/aggregation.svg" },
        { title: "Integraciones POS", price: "$0", period: "/mes", description: "Integra y sincroniza todos tus pedidos en línea con tu sistema POS.", icon: "/assets/imgs/icon/pos.svg" },
      ],
    },
  },
];
// 5. الدالة السحرية اللي بتختار الداتا بناءً على اللغة
const localizedServices: Record<string, ServicePageData[]> = {
  en: enServices,
  ar: arServices,
  fr: frServices,
  es: esServices, // 👈 التعديل أهو
};
// 👇 تعديل دالة الاستدعاء عشان تقبل اللغة (locale) 👇
export const getServiceBySlug = (slug: string, locale: string = "en"): ServicePageData | undefined => {
  const targetServices = localizedServices[locale] || localizedServices["en"];
  return targetServices.find((service) => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return enServices.map((service) => service.slug);
};