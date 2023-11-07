/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ContentContainer, FooterWrapper } from "./styles";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterWrapper className="section-wrapper">
      <ContentContainer>
        <div className="footer-wrapper">
          <div className="left">
            <Image
              alt="site-logo"
              src="/logo/valleyagro.svg"
              height={150}
              width={150}
            />
            <p className="right-reserved">© 2023, ValleyAgro. All rights reserved.</p>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>About Us</li>
              <li>Products</li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </ContentContainer>
    </FooterWrapper>
  );
};

export default Footer;
