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
    
    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
  }

  .info-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .social-icon {
    display: flex;
    gap: 10px;
  }
`;
