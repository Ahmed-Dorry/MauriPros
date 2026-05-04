import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'ar', 'fr'];

export default getRequestConfig(async (params) => {
  // بنحاول نلقط اللغة بأكتر من طريقة عشان نتفادى سرعة السيرفر
  let locale = (params as any).locale || await params.requestLocale;

  // 👈 التعديل هنا: لو السيرفر اتلخبط، هيرجع للعربي (ar) غصب عنه مش إنجليزي!
  if (!locale || !locales.includes(locale as any)) {
    locale = 'ar';
  }

  return {
    locale, 
    messages: (await import(`../messages/${locale}.json`)).default
  };
});