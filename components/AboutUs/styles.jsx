import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  background-color: white;
  color: black;
  width: 100%;
  padding: 3rem 0;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .section-wrapper {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 4rem 0;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  .left {
    width: 100%;
  }

  .desktop {
    display: none;
    @media only screen and (min-width: 768px) {
      display: block;
    }
  }

  .mobile {
    display: block;
    padding-bottom: 1rem;
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 768px) {
    .left {
      flex: 4;
    }

    .right {
      flex: 6;
    }
  }

  .description {
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: normal;
    line-height: 2rem;

    @media only screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .large-text {
    font-size: clamp(40px, 10vw, 100px);
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin: 0;
  }

  .grey {
    color: #666666;
  }

  .green {
    color: #4a8b71;
  }

  .yellow {
    color: #f1ce68;
  }

  .fixed-bg-text {
    position: absolute;
    text-transform: uppercase;
    font-size: clamp(40px, 10vw, 180px);
    font-weight: bolder;
    opacity: 0.1;
    bottom: 0;
    right: 0;
    letter-spacing: 10px;
    color: #bbb3b3;
  }

  .showcase {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 3rem;
  }

  .feature-card {
    text-align: center;
    font-weight: bold;
  }
`;
