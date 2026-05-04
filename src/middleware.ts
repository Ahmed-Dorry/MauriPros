import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// إعدادات اللغات الأساسية (العربي هو الأساسي لباقي العالم)
const intlMiddleware = createMiddleware({
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'ar', 
});

export default function middleware(req: NextRequest) {
  // 1. استخراج كود الدولة الحقيقي 
  const country = req.geo?.country || req.headers.get('x-vercel-ip-country') || 'OTHER';
  const isUS = country === 'US';
  const pathname = req.nextUrl.pathname;

  let response;

  // 2. توجيه إجباري للمسار الرئيسي (/) لضمان عدم ظهور 404
  if (pathname === '/') {
    const redirectLocale = isUS ? 'en' : 'ar';
    const newUrl = req.nextUrl.clone();
    newUrl.pathname = `/${redirectLocale}`;
    response = NextResponse.redirect(newUrl);
  }
  // 3. فحص الزوار من أمريكا (حظر أي لغة غير الإنجليزي)
  else if (isUS && (pathname.startsWith('/ar') || pathname.startsWith('/fr'))) {
    const newUrl = req.nextUrl.clone();
    newUrl.pathname = pathname.replace(/^\/(ar|fr)/, '/en');
    response = NextResponse.redirect(newUrl);
  } 
  // 4. لو مش من أمريكا وبيدخل على صفحات داخلية، شغل نظام اللغات الطبيعي
  else {
    response = intlMiddleware(req);
  }

  // 5. حفظ دولة اليوزر في كوكيز عشان الهيدر يقدر يقرأها
  response.cookies.set('USER_COUNTRY', country, { path: '/' });

  return response;
}

export const config = {
  // دمجنا الـ Matcher عشان نضمن إنه يشتغل على المسار الرئيسي (/) وكل اللغات
  matcher: [
    '/', 
    '/(ar|en|fr)/:path*', 
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};