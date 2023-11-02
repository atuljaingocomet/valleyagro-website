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

interface Props {
  isMobile: boolean;
}

const MenuSection = ({ isMobile }: Props) => {
  return (
    <ul className={`${isMobile ? "menubar-mobile" : "menubar-container"}`}>
      <li>Home</li>
      <li>About Us</li>
      <li>Products</li>
      <li>Contact Us</li>
    </ul>
  );
};

const Logo = () => {
  return (
    <LogoSection>
      <Image alt="site-logo" src="/logo/valleyagro.svg" fill />
    </LogoSection>
  );
};

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [currentSelectedMenu, setCurrentSelectedMenu] = useState("");

  const toggleMobileMenu = () => setIsMobileMenuVisible((prev) => !prev);
  return (
    <NavbarWrapper>
      <NavbarContent>
        <Logo />
        <div className="menu-and-btn">
          <MenuSection isMobile={false} />
          <button className="contact-btn">Get in Touch</button>
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
          <MenuSection isMobile={true} />
        </MobileMenuWrapper>
      </NavbarContentMobile>
    </NavbarWrapper>
  );
};

export default Navbar;
