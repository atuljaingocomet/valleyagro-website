/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ContactUsWrapper } from "./styles";
import { ContentContainer } from "../Layout/styles";

const ContactUs = () => {
  return (
    <ContactUsWrapper id="contact-us">
      <ContentContainer>
        <div className="section-wrapper">
          <div className="left">
            <h3 className="heading">Contact Us</h3>
            <p className="sub-heading">
              Have questions or need assistance? Feel free to reach out to us.
              <br /> We&apos;re here to help!
            </p>
          </div>
          <div className="right">
            <div className="info-section">
              <div className="info-row">
                <img
                  src="/contact/location.svg"
                  alt="address"
                  height={20}
                  width={20}
                  loading="lazy"
                />
                <p>123, Garden Street, Bengaluru, Karnataka, India - 560001</p>
              </div>
              {/* <div className="info-row">
                <img
                  src="/contact/phone.svg"
                  alt="address"
                  height={20}
                  width={20}
                  loading="lazy"
                />
                <p>+91 99999 88888, +91 55555 11111</p>
              </div> */}
              <div className="info-row">
                <img
                  src="/contact/email.svg"
                  alt="address"
                  height={20}
                  width={20}
                  loading="lazy"
                />
                <a href="mailto:harsh.garg@valleyagro.co">
                  <p>harsh.garg@valleyagro.co</p>
                </a>
              </div>
            </div>
            <div className="social-icon">
              <a href="#">
                <img
                  src="/contact/twitter.svg"
                  alt="address"
                  height={30}
                  width={30}
                  loading="lazy"
                />
              </a>
              <a href="#">
                <img
                  src="/contact/fb.svg"
                  alt="address"
                  height={30}
                  width={30}
                  loading="lazy"
                />
              </a>
              <a href="#">
                <img
                  src="/contact/linkedin.svg"
                  alt="address"
                  height={30}
                  width={30}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </ContentContainer>
    </ContactUsWrapper>
  );
};

export default ContactUs;
