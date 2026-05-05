import createMiddleware from 'next-intl/middleware';

// إعدادات اللغات الأساسية (العربي هو الأساسي)
export default createMiddleware({
  locales: ['en', 'ar', 'fr', 'es'],
  defaultLocale: 'ar', 
});

export const config = {
  matcher: [
    '/', 
    '/(ar|en|fr|es)/:path*', 
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};