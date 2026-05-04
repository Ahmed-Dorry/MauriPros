export interface SidebarMenu {
  label: string;
  href?: string;
  children?: SidebarMenu[];
}

export interface SidebarCTA {
  text: string;
  href: string;
}

export interface SidebarContactItem {
  text: string;
  href: string;
}

export interface SidebarContact {
  email: SidebarContactItem;
  address: string;
}

export interface SidebarSocial {
  label: string;
  href: string;
}

export interface SidebarData {
  logo: string;
  menus: SidebarMenu[];
  closeIcon: string;
  title: string;
  description: string;
  cta: SidebarCTA;
  ctaIcon: string;
  gallery: string[];
  contact: SidebarContact;
  social: SidebarSocial[];
  footerLogo: string;
}

const sidebar: SidebarData = {
  logo: "/assets/imgs/logo/logo-colors-black.svg",
  menus: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Web Design", href: "/services/web-design" },
        {label: "All-in-one Restaurant Platform", href: "/services/restaurant-platform"},
        { label: "Social Media Solutions", href: "/services/social-media" },
        { label: "Review Marketing", href: "/services/review-marketing" },
        { label: "Logo + Graphic Design", href: "/services/graphic-design" },
        { label: "Branding", href: "/services/branding" },
        { label: "Email Marketing", href: "/services/email-marketing" },
        { label: "SEO", href: "/services/seo" },
        { label: "Pay-Per-Click (PPC) Ads", href: "/services/ppc" },
      ],
    },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  closeIcon: "fas fa-times",
  title: "Hello There!",
  description:
    "We offer comprehensive range of services to help your business thrive.",
  cta: {
    text: "Let’s Connect",
    href: "/contact",
  },
  ctaIcon: "fa-solid fa-arrow-right",
  gallery: [
    "/assets/imgs/gallery/footer-image1.webp",
    "/assets/imgs/gallery/footer-image2.webp",
    "/assets/imgs/gallery/footer-image3.webp",
    "/assets/imgs/gallery/footer-image4.webp",
  ],
  contact: {
    email: { text: "hello@mauripros.com", href: "mailto:hello@mauripros.com" },
    address: "Louisville, KY",
  },
  social: [
    { label: "FB", href: "#" },
    { label: "LN", href: "#" },
    { label: "IN", href: "#" },
    { label: "BE", href: "#" },
  ],
  footerLogo: "/assets/imgs/logo/logo-colors-black.svg",
};

export default sidebar;
