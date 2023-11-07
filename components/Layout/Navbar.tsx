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
}

const MenuSection = ({ isMobile }: Props) => {
  return (
    <ul className={`${isMobile ? "menubar-mobile" : "menubar-container"}`}>
      {navItems.map((item) => (
        <li key={item.link}>
          <a href={`#${item.link}`}>{item.name}</a>
        </li>
      ))}
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
