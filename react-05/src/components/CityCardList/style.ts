import { Row, Card } from "@/styles";
import styled from "styled-components";

export const CityListWrapper = styled(Row)`
  background-color: red;
`;

export const CityCardWrapper = styled(Card)`
  background-image: linear-gradient(
    to bottom right,
    rgba(153, 178, 239, 1),
    rgba(26, 110, 234, 0.8)
  );
  &:hover {
    cursor: pointer;
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 15px;
    }
  }
  &:active {
    &::before {
      opacity: 0;
    }
  }
`;
