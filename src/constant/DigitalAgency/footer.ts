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