import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import Header from "@/components/DigitalAgency/common/Header";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

export const metadata: Metadata = {
  title: "Privacy & Security Policy | MauriPros",
  description:
    "Read the MauriPros Privacy & Security Policy to understand how we collect, use, and protect your personal data when using our services.",
  keywords: [
    "privacy policy",
    "security policy",
    "data protection",
    "MauriPros legal",
    "GDPR compliance",
  ],
};

const PrivacyPolicyPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          {/* Breadcrumb added to match your template style */}
          <Breadcrumb
            title="PRIVACY"
            subTitle="Legal & Policies"
            pageName="PRIVACY POLICY"
          />
          
          <div className="terms-wrapper">
            <h1 className="terms-title"><i className="fa-solid fa-shield-halved"></i> Privacy & Security Policy</h1>
            <p className="effective-date">Effective date: July 12, 2024</p>

            <div className="terms-content">
              <p>
                MauriPros ("us", "we", or "our") operates the{' '}
                <a href="https://www.MauriPros.com/">https://www.MauriPros.com/</a> website (the "Service").
              </p>
              <p>
                This page informs you of our policies regarding the collection, use, and disclosure of personal data 
                when you use our Service and the choices you have associated with that data.
              </p>
              <p>
                We use your data to provide and improve the Service. By using the Service, you agree to the 
                collection and use of information in accordance with this policy. Unless otherwise defined in this 
                Privacy Policy, terms used in this Privacy Policy have the same meanings as in our{' '}
                <a href="/legal/terms">Terms and Conditions</a>.
              </p>

              <h2><i className="fa-solid fa-book"></i> Definitions</h2>
              <ul>
                <li><strong>Service:</strong> The MauriPros website.</li>
                <li><strong>Personal Data:</strong> Data about an identifiable individual (e.g. name, email, phone).</li>
                <li><strong>Usage Data:</strong> Data collected automatically (e.g. IP, browser type, visit duration).</li>
                <li><strong>Cookies:</strong> Small files stored on your device.</li>
                <li><strong>Data Controller:</strong> The entity that determines purposes/methods of processing (MauriPros).</li>
                <li><strong>Data Processors:</strong> Third parties processing data on behalf of MauriPros.</li>
                <li><strong>Data Subject:</strong> The user of our Service.</li>
              </ul>

              <h2><i className="fa-solid fa-database"></i> Information Collection and Use</h2>
              <p>We collect several types of information for various purposes to provide and improve our Service.</p>

              <h3>Types of Data Collected</h3>
              <ul>
                <li>Email address</li>
                <li>First and last name</li>
                <li>Phone number</li>
                <li>Address, State, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <p>
                We may use your Personal Data to contact you with newsletters, marketing materials, and 
                important updates. You may opt out anytime.
              </p>

              <h3><i className="fa-solid fa-cookie-bite"></i> Cookie Consent & Tracking</h3>
              <ul>
                <li>Essential Cookies – necessary for website functionality.</li>
                <li>Analytics Cookies – track website usage and improve UX.</li>
                <li>Advertising Cookies – personalize ads via platforms like Google, Facebook, Twitter.</li>
              </ul>
              <p>You can disable cookies in your browser settings or opt out of third-party tracking.</p>

              <h2><i className="fa-solid fa-user-shield"></i> Use of Data</h2>
              <ul>
                <li>Provide and maintain our Service</li>
                <li>Notify you about changes</li>
                <li>Enable interactive features</li>
                <li>Customer support</li>
                <li>Analytics and improvements</li>
                <li>Security monitoring</li>
                <li>Marketing (opt-out available)</li>
              </ul>

              <h2><i className="fa-solid fa-scale-balanced"></i> Legal Basis (GDPR)</h2>
              <p>MauriPros may process your data because:</p>
              <ul>
                <li>We need to perform a contract</li>
                <li>You consented</li>
                <li>Legitimate business interests</li>
                <li>Payment processing</li>
                <li>Legal obligations</li>
              </ul>

              <h2><i className="fa-solid fa-user-lock"></i> California Privacy Rights (CCPA)</h2>
              <ul>
                <li>Right to Know</li>
                <li>Right to Delete</li>
                <li>Right to Non-Discrimination</li>
              </ul>

              <h2><i className="fa-solid fa-database"></i> Retention & Transfer of Data</h2>
              <p>
                Personal data is retained only as long as necessary. Transfers outside the U.S. 
                are protected with appropriate safeguards.
              </p>

              <h2><i className="fa-solid fa-building"></i> Disclosure of Data</h2>
              <p>MauriPros may disclose data for business transactions, law enforcement, or legal obligations.</p>

              <h2><i className="fa-solid fa-lock"></i> Security of Data</h2>
              <p>We take reasonable measures to protect your data, though no method is 100% secure.</p>

              <h2><i className="fa-solid fa-ban"></i> Do Not Track</h2>
              <p>Our Service does not currently respond to DNT browser settings.</p>

              <h2><i className="fa-solid fa-user-check"></i> Your Data Rights (GDPR)</h2>
              <ul>
                <li>Access, update, delete data</li>
                <li>Rectification of inaccurate data</li>
                <li>Object to processing</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>

              <h2><i className="fa-solid fa-trash"></i> Data Deletion Requests</h2>
              <p>You can request data deletion via:</p>
              <ul>
                <li>Email: <a href="mailto:hello@mauripros.com">hello@mauripros.com</a></li>
                <li>Website: Data Deletion Request Form</li>
                <li>Mail: Privacy Officer, 2210 Meadow Dr Ste 2, Louisville, KY 40218</li>
              </ul>

              <h2><i className="fa-solid fa-people-arrows"></i> Service Providers</h2>
              <p>
                We may employ third-party providers (e.g. Google Analytics, Facebook Ads, Stripe, PayPal) 
                to facilitate and analyze our Service.
              </p>

              <h2><i className="fa-solid fa-children"></i> Children’s Privacy</h2>
              <p>Our Service does not target anyone under 18. We do not knowingly collect data from minors.</p>

              <h2><i className="fa-solid fa-circle-exclamation"></i> Changes to Policy</h2>
              <p>We may update this Privacy Policy. Changes are effective when posted here.</p>

              <h2><i className="fa-solid fa-universal-access"></i> Accessibility</h2>
              <p>We are committed to making this Privacy Policy accessible. Contact us if you encounter difficulties.</p>

              {/* Contact Info Styled Box */}
              <div className="contact-box">
                <div className="contact-item">
                  <i className="fa-solid fa-envelope"></i>
                  <h3>By Mail</h3>
                  <p>2210 Meadow Dr Ste 2<br />Louisville, KY 40218<br />United States</p>
                </div>

                <div className="contact-item">
                  <i className="fa-solid fa-phone"></i>
                  <h3>By Phone</h3>
                  <p><a href="tel:5025368899">502-536-8899</a></p>
                </div>

                <div className="contact-item">
                  <i className="fa-solid fa-at"></i>
                  <h3>By Email</h3>
                  <p><a href="mailto:hello@mauripros.com">hello@mauripros.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <FooterSection />
      </SmoothScroll>
    </div>
  );
};

export default PrivacyPolicyPage;