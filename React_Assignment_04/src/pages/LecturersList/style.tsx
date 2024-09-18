import styled from "styled-components";

export const CardsContainer = styled.div`
  margin-top: 4rem;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 40px;
  @media (max-width: 465px) {
    width: 90%;
  }
`;
export const NotificationText = styled.h1`
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 100px;
`;
