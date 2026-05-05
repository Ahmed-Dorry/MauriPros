import { getRequestConfig } from 'next-intl/server';

// 👈 ضفنا الإسباني (es) هنا عشان البوابة تفتحله
const locales = ['en', 'ar', 'fr', 'es'];

export default getRequestConfig(async (params) => {
  // بنحاول نلقط اللغة بأكتر من طريقة عشان نتفادى سرعة السيرفر
  let locale = (params as any).locale || await params.requestLocale;

  // 👈 لو السيرفر اتلخبط، هيرجع للعربي (ar) غصب عنه مش إنجليزي!
  if (!locale || !locales.includes(locale as any)) {
    locale = 'ar';
  }

  return {
    locale, 
    messages: (await import(`../messages/${locale}.json`)).default
  };
});