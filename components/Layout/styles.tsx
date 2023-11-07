import styled from "styled-components";
import { BOX_SHADOW, mainTheme } from "../../main-theme";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: white;
  z-index: 10;
  box-shadow: 0px 2px 4px rgba(238, 187, 195, 0.25);
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;

  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      padding: 3rem 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .right-reserved {
    font-size: 12px;
    margin: 0;
  }

  .right {
    width: 50%;
    max-width: 70%;
    ul {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      text-transform: uppercase;
      padding: 0;
      gap: 1.5rem;
      margin-top: 2rem;
      
      @media only screen and (min-width: 768px) {
        margin-top: unset;
        gap: 1rem;
        padding: 3rem 0;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    li {
      display: flex;
      position: relative;
      align-items: center;
      width: fit-content;
      height: fit-content;
      transition: all 0.2s linear;
      cursor: pointer;
      font-size: 1.3rem;
    }

    li:hover {
      color: ${mainTheme.colors.yellowMain};
    }

    li:hover::after {
      content: "";
      display: block;
      width: 1rem;
      position: absolute;
      bottom: -5px;
      left: 0;
      margin: auto;
      border-bottom: 2px solid ${mainTheme.colors.yellowMain};
    }
  }
`;

export const NavbarContent = styled.div`
  display: none;
  color: black;
  @media only screen and (min-width: 600px) {
    display: flex;
    max-width: 1335px;
    width: 100%;
    padding: 0 1rem;
  }
  .menubar-container {
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    padding: 0;
    margin: 0;
    margin-left: 1rem;
    list-style: none;

    li {
      display: flex;
      position: relative;
      align-items: center;
      width: fit-content;
      height: fit-content;
      transition: all 0.2s linear;
    }

    li:hover {
      color: ${mainTheme.colors.yellowMain};
    }

    li:hover::after {
      content: "";
      display: block;
      width: 1rem;
      position: absolute;
      bottom: -5px;
      left: 0;
      margin: auto;
      border-bottom: 2px solid ${mainTheme.colors.yellowMain};
    }
  }

  .menu-and-btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .contact-btn {
    background-color: transparent;
    color: black;
    border-radius: 5px;
    border: 2px solid ${mainTheme.colors.yellowMain};
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      color: white;
      background-color: ${mainTheme.colors.yellowMain};
    }
  }
`;

export const NavbarContentMobile = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 0 1rem 0 0.5rem;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export const LogoSection = styled.div`
  position: relative;
  width: 5rem;
  height: 3.5rem;
  cursor: pointer;

  img {
    position: absolute;
  }
`;

export const MobileMenuWrapper = styled.div<{ isActive: boolean }>`
  width: 20rem;
  background-color: white;
  color: #000 !important;
  border-radius: 10px;
  position: absolute;
  top: 4.5rem;
  right: 1rem;
  box-shadow: ${BOX_SHADOW.card};

  .menubar-mobile {
    list-style: none;
    padding: 0;
    margin: 0;
    height: ${(props) => (props.isActive ? "20rem" : "0")};
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }

  li {
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    margin: 0.5rem;
    width: 100%;
    &:hover {
      background-color: #747ca1;
      color: white;
    }

    &::before {
      content: "⇁";
      margin-right: 10px;
    }
  }
`;

export const ContentWrapper = styled.main`
  display: flex;
  justify-content: center;
  background-color: white;

  .right-mob-arrow {
    position: absolute;
    right: -30px;
    top: 10px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  padding: 0 1rem;

  @media only screen and (min-width: 600px) {
    width: 90%;
  }
`;
