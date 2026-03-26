export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterWidget {
  type: "contact" | "subscription" | "links";
  title: string;
  // For contact
  email?: string;
  location?: string;
  cta?: FooterLink;
  // For subscription
  description?: string;
  placeholder?: string;
  buttonText?: string;
  // For links
  links?: FooterLink[];
}

export interface FooterData {
  widgets: FooterWidget[];
  preCopyrightText: string;
  copyrightText: string;
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  bgImage: string;
}

const footerData: FooterData = {
  bgImage: "/assets/imgs/gallery/footer.webp",
  widgets: [
    {
      type: "contact",
      title: "Get in Touch",
      email: "hello@MauriPros.com",
      location: "Serving clients worldwide",
      cta: { label: "Contact Us", href: "/contact" },
    },
    {
      type: "subscription",
      title: "Stay in the Loop",
      description:
        "Insights on branding, design, and marketing — straight to your inbox. No spam. Unsubscribe anytime.",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
    },
    {
      type: "links",
      title: "Company",
      links: [
        { label: "About MauriPros", href: "/about" },
        { label: "Our Approach", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
    {
      type: "links",
      title: "Solutions",
      links: [
        { label: "Brand Strategy & Identity", href: "/services" },
        { label: "Digital Experience Design", href: "/services" },
        { label: "Marketing & Growth Strategy", href: "/services" },
        { label: "Creative & Content Systems", href: "/services" },
      ],
    },
  ],
  preCopyrightText:
    "We help brands look better, communicate clearer, and grow faster.",
  copyrightText: "© 2026 MauriPros. All rights reserved.",
  logo: {
    src: "/assets/imgs/logo/logo-colors-white.svg",
    alt: "MauriPros Logo",
    href: "/",
  },
};

export default footerData;
