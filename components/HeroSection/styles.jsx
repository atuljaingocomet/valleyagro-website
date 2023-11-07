import styled from "styled-components";

export const HeroWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-color: white;
  background-image: url("/banner/bg-img.webp");
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  text-transform: uppercase;
  color: white;

  .heading,
  .sub-heading {
    margin: 0;
    padding: 0;
    opacity: 0.7;
    text-align: center;
  }

  .heading {
    font-size: clamp(42px, 10vw, 96px);
  }

  .sub-heading {
    font-size: clamp(16px, 5vw, 40px);
    font-weight: 500;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
