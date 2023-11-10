import styled from "styled-components";

export const ContactUsWrapper = styled.div`
  background-color: #4a8b71;
  width: 100%;
  padding: 3rem 0;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .heading {
    font-size: 36px;
    margin: 0;
  }

  .sub-heading {
    font-size: 1rem;
    line-height: 26px;
  }

  .section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      gap: 0;
    }
  }

  .info-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .left {
    width: 100%;
  }

  .right {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: black;
  }

  .social-icon {
    display: flex;
    gap: 10px;
  }
`;
