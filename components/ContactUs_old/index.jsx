/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ContactUsWrapper } from "./styles";
import ContactForm from "../ContactUs";
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
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </ContentContainer>
    </ContactUsWrapper>
  );
};

export default ContactUs;
