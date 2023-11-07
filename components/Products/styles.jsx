import styled from "styled-components";

export const ProductWrapper = styled.div`
  background-color: #e9f1ee;
  width: 100%;
  padding: 3rem 0;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  .section-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  .left {
    width: 100%;
  }

  .right {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media only screen and (min-width: 768px) {
    .left {
      flex: 4;
    }

    .right {
      flex: 6;
      justify-content: flex-start;
    }
  }

  .heading {
    font-size: 2rem;
    margin: 0;
  }
  .sub-heading {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .product-card {
    height: 14rem;
    width: 14rem;
    position: relative;
    transition: all 0.5s ease-in-out;
    @media only screen and (min-width: 768px) {
      height: 12rem;
      width: 12rem;
    }

    cursor: pointer;

    :hover {
      transition: all 0.5s ease-in-out;
      scale: calc(1.05);
      border-radius: 10px;
    }
    
    :not(:hover) {
        transition: all 0.5s ease-in-out;
        scale: calc(1);
        border-radius: 0;
    }
  }
`;
