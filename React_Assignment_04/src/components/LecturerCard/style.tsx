import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 350px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CardName = styled.h2``;

export const CardTitle = styled.h3``;

export const CardDescription = styled.p`
  color: #61e033;
`;

export const CardCourseTaught = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

export const CardYearsOfExperience = styled.p`
  font-weight: 500;
  font-size: smaller;
`;
