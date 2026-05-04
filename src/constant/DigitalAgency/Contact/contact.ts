

export interface IContact {
  subtitle: string;
  title: string;
  description: string;
  contactInfo: {
    icon: string;
    label: string;
    link: string;
  }[];
  socialLinks: {
    icon: string;
    link: string;
  }[];
  formFields: {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    icon: string;
  }[];
  buttonText: string;
}

const contactData: IContact = {
  subtitle: "Contact us",
  title: "Let's create something great together!",
  description:
    "Tell us about your business and goals. Our team will review your request and get book to you shortly.",
  contactInfo: [
    {
      icon: "/assets/imgs/icon/icon-17.webp",
      label: "hello@mauripros.com",
      link: "mailto:hello@mauripros.com",
    },
    // {
    //   icon: "/assets/imgs/icon/icon-18.webp",
    //   label: "+1 (555) 123-4567",
    //   link: "tel:+15551234567",
    // },
    {
      icon: "/assets/imgs/icon/icon-17.webp",
      label: "Louisville, KY",
      link: "#",
    },
  ],
  socialLinks: [
    { icon: "fa-facebook-f", link: "https://www.facebook.com" },
    { icon: "fa-x-twitter", link: "https://www.twitter.com" },
    { icon: "fa-linkedin-in", link: "https://www.linkedin.com" },
    { icon: "fa-instagram", link: "https://www.instagram.com" },
  ],
  formFields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Your Full Name",
      icon: "/assets/imgs/icon/icon-19.webp",
    },
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      placeholder: "Your Company Name",
      icon: "/assets/imgs/icon/icon-20.webp",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Your Email Address",
      icon: "/assets/imgs/icon/icon-20.webp",
    },
    {
      name: "projectType",
      label: "Project Type",
      type: "text",
      placeholder: "e.g., Web Design, SEO",
      icon: "/assets/imgs/icon/icon-19.webp",
    },
    {
      name: "estimatedBudget",
      label: "Estimated Budget",
      type: "text",
      placeholder: "Your Estimated Budget",
      icon: "/assets/imgs/icon/icon-19.webp",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Your Message",
      icon: "/assets/imgs/icon/icon-19.webp",
    },
  ],
  buttonText: "Send Message",
};

export default contactData;
