/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ContentContainer, FooterWrapper } from "./styles";
import Image from "next/image";

const navItems = [
  { name: "Home", link: "banner" },
  { name: "About Us", link: "about-us" },
  { name: "Products", link: "products" },
  { name: "Contact Us", link: "contact-us" },
];

const Footer = () => {
  function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    console.log(section);
    section.scrollIntoView({ behavior: "smooth" });
  }
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
            <p className="right-reserved">
              © 2023, ValleyAgro. All rights reserved.
            </p>
          </div>
          <div className="right">
            <ul>
              {navItems.map((item) => (
                <li key={item.link}>
                  <a href={`#${item.link}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentContainer>
    </FooterWrapper>
  );
};

export default Footer;
