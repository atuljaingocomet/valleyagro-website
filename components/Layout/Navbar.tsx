import Image from "next/image";
import { useState } from "react";
import {
  NavbarWrapper,
  LogoSection,
  NavbarContent,
  NavbarContentMobile,
  MobileMenuWrapper,
} from "./styles";
import BurgerMenu from "../../public/burgerMenu";
import BurgerMenuOpen from "../../public/burgerMenuOpen";
import { mainTheme } from "../../main-theme";

const navItems = [
  { name: "Home", link: "banner" },
  { name: "About Us", link: "about-us" },
  { name: "Products", link: "products" },
  { name: "Contact Us", link: "contact-us" },
];

interface Props {
  isMobile: boolean;
  handleMenuClose?: () => void;
}

const MenuSection = ({ isMobile, handleMenuClose }: Props) => {
  return (
    <ul className={`${isMobile ? "menubar-mobile" : "menubar-container"}`}>
      {navItems.map((item) => (
        <li key={item.link} onClick={handleMenuClose}>
          <a href={`#${item.link}`}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

const Logo = () => {
  return (
    <LogoSection>
      <a href="#">
        <Image alt="site-logo" src="/logo/valleyagro.svg" fill />
      </a>
    </LogoSection>
  );
};

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuVisible((prev) => !prev);

  const handleMenuClose = () => {
    console.log("function called");
    setIsMobileMenuVisible(false);
  };
  return (
    <NavbarWrapper>
      <NavbarContent>
        <Logo />
        <div className="menu-and-btn">
          <MenuSection isMobile={false} />
          <button className="contact-btn">
            <a href="#contact-us">Get in Touch</a>
          </button>
        </div>
      </NavbarContent>
      <NavbarContentMobile>
        <Logo />
        <span onClick={toggleMobileMenu}>
          {isMobileMenuVisible ? (
            <BurgerMenuOpen fill={mainTheme.colors.yellowMain} />
          ) : (
            <BurgerMenu fill={mainTheme.colors.yellowMain} />
          )}
        </span>
        <MobileMenuWrapper isActive={isMobileMenuVisible}>
          <MenuSection isMobile={true} handleMenuClose={handleMenuClose} />
        </MobileMenuWrapper>
      </NavbarContentMobile>
    </NavbarWrapper>
  );
};

export default Navbar;
