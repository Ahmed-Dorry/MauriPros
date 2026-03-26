// Globals css
import "./globals.css";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// FontAwesome Icons css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../lib/fontawesome";

// yet-another-react-lightbox css
import "yet-another-react-lightbox/styles.css";

// swiper slider css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// Nice-select2 css
import "nice-select2/dist/css/nice-select2.css";

// Template SCSS
import "@/scss/style.scss";
import ScrollTopWrapper from "@/components/ScrollTopWrapper";
import AnimationProvider from "@/providers/AnimationProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "MauriPros - Marketing & Web Solutions",
    template: "%s | MauriPros",
  },
  description:
    "MauriPros is a creative digital agency specializing in brand strategy, web design, and marketing solutions. We help brands look better, communicate clearer, and grow faster.",
  keywords: [
    "digital agency",
    "brand strategy",
    "web design",
    "marketing strategy",
    "creative content",
    "UI/UX design",
    "SEO",
    "performance marketing",
    "MauriPros",
  ],
  creator: "MauriPros",
  openGraph: {
    title: "MauriPros - Marketing & Web Solutions",
    description:
      "We help brands look better, communicate clearer, and grow faster through strategic branding, web design, and marketing.",
    url: "https://www.mauripros.com", // Replace with your actual domain
    siteName: "MauriPros",
    images: [
      {
        url: "/og-image.png", // Create and place this image in your /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MauriPros - Marketing & Web Solutions",
    description:
      "Transform your brand with our expert strategy, design, and marketing services.",
    creator: "@MauriPros", // Replace with your Twitter handle
    images: ["/og-image.png"], // Must be an absolute URL in production
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <AnimationProvider>{children}</AnimationProvider>
        <ScrollTopWrapper width={20} height={20} className="progress-wrap" />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
