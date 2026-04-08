import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import Header from "@/components/DigitalAgency/common/Header";
import FooterSection from "@/components/DigitalAgency/FooterSection";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";

export const metadata: Metadata = {
  title: "Terms of Service | MauriPros",
  description:
    "Read the MauriPros Terms of Service to understand the rules, guidelines, and agreements for using our website and digital services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "MauriPros terms",
    "user agreement",
    "legal terms",
  ],
};

const TermsOfServicePage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          {/* Breadcrumb matching your template style */}
          <Breadcrumb
            title="TERMS"
            subTitle="OF SERVICE"
            pageName="TERMS OF SERVICE"
          />
          
          <div className="terms-wrapper">
            <h1 className="terms-title"><i className="fa-solid fa-file-contract"></i> Terms of Service</h1>
            <p className="effective-date">Last updated: July 12, 2024</p>

            <div className="terms-content">
              <p>
                Welcome to MauriPros. These Terms of Service ("Terms") govern your use of the{' '}
                <a href="https://www.MauriPros.com/">https://www.MauriPros.com/</a> website and the services provided by MauriPros ("we", "us", or "our").
              </p>
              <p>
                By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>

              <h2><i className="fa-solid fa-handshake"></i> 1. Agreement to Terms</h2>
              <p>
                By using our Services, you agree to these Terms of Service and our{' '}
                <a href="/privacy">Privacy Policy</a>. You must be at least 18 years of age to use our services. By using our services, you represent and warrant that you meet this requirement.
              </p>

              <h2><i className="fa-solid fa-lightbulb"></i> 2. Intellectual Property Rights</h2>
              <p>
                Other than the content you own, under these Terms, MauriPros and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
              </p>

              <h2><i className="fa-solid fa-ban"></i> 3. Prohibited Activities</h2>
              <p>You are specifically restricted from all of the following:</p>
              <ul>
                <li>Publishing any Website material in any other media without prior consent.</li>
                <li>Selling, sublicensing, and/or otherwise commercializing any Website material.</li>
                <li>Using this Website in any way that is or may be damaging to this Website.</li>
                <li>Using this Website contrary to applicable laws and regulations.</li>
                <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity.</li>
              </ul>

              <h2><i className="fa-solid fa-file-invoice-dollar"></i> 4. Services and Payment</h2>
              <p>
                All project scopes, timelines, and payment terms will be outlined in a separate, formal agreement or Statement of Work (SOW) before any work commences. MauriPros reserves the right to refuse service to anyone for any reason at any time.
              </p>

              <h2><i className="fa-solid fa-triangle-exclamation"></i> 5. Limitation of Liability</h2>
              <p>
                In no event shall MauriPros, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website. MauriPros shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
              </p>

              <h2><i className="fa-solid fa-pen-to-square"></i> 6. Revisions and Modifications</h2>
              <p>
                MauriPros is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
              </p>

              <h2><i className="fa-solid fa-scale-balanced"></i> 7. Governing Law & Jurisdiction</h2>
              <p>
                These Terms will be governed by and interpreted in accordance with the laws of the State of Kentucky, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Kentucky for the resolution of any disputes.
              </p>

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

export default TermsOfServicePage;