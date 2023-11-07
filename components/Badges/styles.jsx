import styled from "styled-components";

export const BadgeWrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .section-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    
    @media only screen and (min-width: 768px) {
      gap: 0;
      flex-direction: row;
    }
  }
`;
