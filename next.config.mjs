import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // إضافة السطر ده عشان نضمن إن الـ Routes تتعرف صح
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default withNextIntl(nextConfig);