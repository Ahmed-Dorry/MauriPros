"use client";
import NextLink, { LinkProps } from "next/link";
import { useLocale } from "next-intl";
import React from "react";

interface CustomLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, ...props }, ref) => {
    const locale = useLocale(); 

    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    const isAnchor = href.startsWith("#");

    let localizedHref = href;

    if (!isExternal && !isAnchor && href) {
      const hasLocale = href.startsWith(`/${locale}/`) || href === `/${locale}`;

      if (!hasLocale) {
        const path = href.startsWith("/") ? href : `/${href}`;
        // 👇 رجعنا كود اللغة يشتغل على كل اللغات بما فيهم الإنجليزي 👇
        localizedHref = `/${locale}${path === "/" ? "" : path}`;
      }
    }

    return <NextLink ref={ref} href={localizedHref} {...props} />;
  }
);

CustomLink.displayName = "CustomLink";
export default CustomLink;