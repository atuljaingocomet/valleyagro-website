import { mainTheme } from "@/main-theme";
import styled from "styled-components";

export const FormSectionContainer = styled.div`
  flex: 0.65;
`;

export const H1 = styled.h1`
  font-size: 1.6rem;
  margin: 0px;
`;

export const H3 = styled.h3`
  font-size: 1.4rem;
  margin: 0px;
`;

export const HeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  h3 {
    font-weight: 600;
    margin-bottom: 2rem;
    font-size: clamp(1rem, 5vw, 1.5rem);
  }
`;

export const FormHolder = styled.div`
  padding: 2rem 2rem;
  flex: 0.65;
  background-color: #fff;
  border-radius: 10px;

  .error {
    color: red;
    font-style: italic;
    margin-bottom: 0.5rem;
  }
  .contact-us-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    .input-container {
      display: flex;
      gap: 10px;
    }

    .pulse {
      @keyframes shadow-pulse-blue {
        0% {
          box-shadow: 0 0 0 0px blue;
        }
        100% {
          box-shadow: 0 0 0 10px rgba(76, 187, 135, 0);
        }
      }

      animation: 1.5s ease 0s infinite normal none running shadow-pulse-blue;
    }

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;

      .submit-button-container {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }

  button {
    width: 10rem;
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

export const Label = styled.label`
  display: flex;
  font-size: 15px;
  line-height: 1.58;
  margin-bottom: 0.5rem;

  span {
    margin-left: 4px;
    font-weight: 500;
    font-size: 16px;
    color: blue;
  }

  p {
    color: #ff4545;
  }
  &.radio-label {
    color: black;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  width: 90%;
  padding: 8px 0;
  line-height: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid
    ${(props) => (props.valid === false ? "#dc3545" : "#acacac")};
  margin-bottom: 20px;
  &::placeholder {
    color: #acacac;
    font-family: proxima-nova;
    font-size: 0.9rem;
  }
  &.phone::-webkit-inner-spin-button,
  &.phone::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ThankYouWrapper = styled.div`
  h3 {
    font-weight: 500;
    color: black;
  }

  .show-submission {
    background-color: #61e05f;
    height: ${({ isSubmitted }) => (isSubmitted ? "fit-content" : 0)};
    overflow: hidden;
    color: white;
    padding: ${({ isSubmitted }) => (isSubmitted ? "0.5rem 1rem" : "0 1rem")};
    transition: all 0.3s linear;
    border-radius: 5px;
    font-weight: bold;
  }

  .success-animation {
    margin: 50px auto;
  }

  .checkmark {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #4bb71b;
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px #4bb71b;
    animation: fill 0.4s ease-in-out 0.4s forwards,
      scale 0.3s ease-in-out 0.9s both;
    position: relative;
    top: 5px;
    right: 5px;
    margin: 0 auto;
  }
  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #4bb71b;
    fill: #fff;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }

  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scale {
    0%,
    100% {
      transform: none;
    }

    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }

  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #4bb71b;
    }
  }
`;
