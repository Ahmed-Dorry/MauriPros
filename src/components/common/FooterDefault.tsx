import Image from "next/image";
import Link from "@/components/CustomLink";


import LogoLight from "@/assets/images/logo-light.svg";

export const footerDefaultContent = {
  topSection: {
    title: "Let's create something great!",
    description:
        "Ready to elevate your brand? Contact us today to start your journey towards digital excellence",
    buttons: {
      primary: {
        text: "Get Started",
        href: "/contact",
      },
      secondary: {
        text: "Schedule Meet",
        href: "/contact",
      },
    },
  },
  bodySection: {
    logo: LogoLight,
    description: "A multidisciplinary digital agency based in United Kingdom.",
    navigation: {
      services: {
        title: "Services",
        links: [
          { name: "Branding", href: "/service-details" },
          { name: "Product Design", href: "/service-details" },
          { name: "Development", href: "/service-details" },
          { name: "Digital Marketing", href: "/service-details" },
          { name: "Motion Graphics", href: "/service-details" },
        ],
      },
      quickLinks: {
        title: "Quick Links",
        links: [
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
          { name: "Portfolio", href: "/portfolio" },
          { name: "Blog", href: "/blog" },
          { name: "Contact", href: "/contact" },
        ],
      },
      socialMedia: {
        title: "Follow Us",
        links: [
          { name: "Facebook", href: "#" },
          { name: "Twitter", href: "#" },
          { name: "Instagram", href: "#" },
          { name: "LinkedIn", href: "#" },
          { name: "Dribbble", href: "#" },
        ],
      },
      contactInfo: {
        title: "Contact Us",
        links: [
          { name: "hello@averto.com", href: "mailto:hello@averto.com" },
          { name: "+(405) 123-456", href: "tel:+405123456" },
        ],
      },
    },
  },
  bottomSection: {
    copyright: "Copyright {year} averto. Inc.",
    location: "17 York Street London, United Kingdom W1W7AB",
  },
};

const FooterDefault = () => {
  return (
    <footer className="footer-common">
      <div className="footer-common__top">
        <div className="container">
          <div className="row justify-content-between g-4">
            <div className="col-lg-6">
              <h2 className="h2 footer-common__top-title fade_up_anim">
                {footerDefaultContent.topSection.title}
              </h2>
            </div>
            <div className="col-lg-5">
              <div className="footer-common__top-content">
                <p className="fade_up_anim" data-delay=".4">
                  {footerDefaultContent.topSection.description}
                </p>
                <div
                  className="d-flex justify-content-center justify-content-md-start align-items-lg-center pt-42 gap-3 fade_up_anim"
                  data-delay=".8"
                >
                  <Link
                    href={footerDefaultContent.topSection.buttons.primary.href}
                    className="common-btn white-btn"
                  >
                    <span>
                      {footerDefaultContent.topSection.buttons.primary.text}
                    </span>
                  </Link>
                  <Link
                    href={
                      footerDefaultContent.topSection.buttons.secondary.href
                    }
                    className="common-btn black-transparent-btn"
                  >
                    <span>
                      {footerDefaultContent.topSection.buttons.secondary.text}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-common__body">
        <div className="container pt-100 pb-100">
          <div className="row justify-content-between gy-4 gx-lg-5">
            <div className="col-lg-3 col-xl-3">
              <div className="footer-common__body-content fade_up_anim">
                <Link className="logo" href="/">
                  <Image
                    src={footerDefaultContent.bodySection.logo}
                    alt="logo"
                  />
                </Link>
                <p>{footerDefaultContent.bodySection.description}</p>
              </div>
            </div>
            <div className="col-lg-9 col-xl-7">
              <div className="footer-common__body-nav">
                <div className="row g-4">
                  <div
                    className="col-sm-6 col-md-3 fade_up_anim"
                    data-delay=".2"
                  >
                    <ul className="custom-ul footer-common__body-nav-links nav-one">
                      <li>
                        {
                          footerDefaultContent.bodySection.navigation.services
                            .title
                        }
                      </li>
                      {footerDefaultContent.bodySection.navigation.services.links.map(
                        (link, index) => (
                          <li key={index}>
                            <Link href={link.href}>{link.name}</Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div
                    className="col-sm-6 col-md-3 fade_up_anim"
                    data-delay=".4"
                  >
                    <ul className="custom-ul footer-common__body-nav-links nav-two">
                      <li>
                        {
                          footerDefaultContent.bodySection.navigation.quickLinks
                            .title
                        }
                      </li>
                      {footerDefaultContent.bodySection.navigation.quickLinks.links.map(
                        (link, index) => (
                          <li key={index}>
                            <Link href={link.href}>{link.name}</Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div
                    className="col-sm-6 col-md-3 fade_up_anim"
                    data-delay=".6"
                  >
                    <ul className="custom-ul footer-common__body-nav-links nav-three">
                      <li>
                        {
                          footerDefaultContent.bodySection.navigation
                            .socialMedia.title
                        }
                      </li>
                      {footerDefaultContent.bodySection.navigation.socialMedia.links.map(
                        (link, index) => (
                          <li key={index}>
                            <Link href={link.href}>{link.name}</Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div
                    className="col-sm-6 col-md-3 fade_up_anim"
                    data-delay=".8"
                  >
                    <ul className="custom-ul footer-common__body-nav-links nav-three">
                      <li>
                        {
                          footerDefaultContent.bodySection.navigation
                            .contactInfo.title
                        }
                      </li>
                      {footerDefaultContent.bodySection.navigation.contactInfo.links.map(
                        (link, index) => (
                          <li key={index}>
                            <Link href={link.href}>{link.name}</Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-common__bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
              <p className="footer-common__bottom-copyright">
                <i className="fa-regular fa-copyright"></i>
                {footerDefaultContent.bottomSection.copyright.replace(
                  "{year}",
                  new Date().getFullYear().toString()
                )}
              </p>
              <p className="footer-common__bottom-location">
                <i className="bi bi-geo-alt"></i>
                {footerDefaultContent.bottomSection.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDefault;
