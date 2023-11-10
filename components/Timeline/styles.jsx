import styled from "styled-components";

export const TimelineWrapper = styled.div`
  background-color: #e9f1ee;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: relative;
  background-image: url("/timeline/timeline-bg.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  padding: 3rem 0;

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

  .heading{
    text-transform: capitalize;
    color: #4A8B71;
  }

  .description {
    color: #777777;
  }

  .section-heading {
    font-size: clamp(1.3rem, 5vw, 32px);
  }

  .section-wrapper {
    margin-top: 1rem;
  }

  hr {
    margin-bottom: 0;
    border-color: #c8cfb8;
    opacity: 0.2;
  }

  .timeline-cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  .card {
    max-width: 18rem;
    padding-right: 3rem;
  }

  .top-line {
    height: 3rem;
    width: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: -10px;
  }

  .circle {
    background-color: white;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    display: inline-block;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    span {
      background-color: #c8cfb8;
      position: absolute;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      z-index: 10;
      left: 4px;
      top: 4px;
    }
  }

  .vertical-line {
    height: 2rem;
    width: 1px;
    margin-left: 7px;
    background-color: #c8cfb8;
    opacity: 0.7;
  }

  /* Mobile Style */

  .vertical-main-line {
    height: 60rem;
    width: 1px;
    background-color: #c8cfb8;
  }

  .card-mobile {
    display: flex;
    align-items: flex-start;
  }

  .left-line {
    width: 3.5rem;
    display: flex;
    align-items: center;
    margin-left: -7px;
  }

  .horizontal-line {
    width: 2rem;
    height: 1px;
    background-color: #c8cfb8;
  }

  .mobile-section-wrapper {
    display: flex;

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`;
