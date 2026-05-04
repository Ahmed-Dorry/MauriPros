import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server'; // 👈 ضفنا الأداة هنا

// Globals css
import "../globals.css";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// FontAwesome Icons css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../lib/fontawesome";

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
  description: "MauriPros is a creative digital agency specializing in brand strategy, web design, and marketing solutions.",
};

export default async function RootLayout(props: { 
  children: React.ReactNode; 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await props.params; 
  const { children } = props; 
  
  // 👈 ده السطر السحري اللي كان ناقص عشان يثبت اللغة!
  setRequestLocale(locale);
  
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <AnimationProvider>{children}</AnimationProvider>
          <ScrollTopWrapper width={20} height={20} className="progress-wrap" />
          <Toaster position="top-center" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}