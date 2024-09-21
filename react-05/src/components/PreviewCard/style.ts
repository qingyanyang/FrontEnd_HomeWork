import { Card } from "@/styles";
import styled from "styled-components";

export const PreviewCardWrapper = styled(Card)<{ $url?: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background: linear-gradient(to bottom, #8ea5e9, #5c4dd4);
  // background: linear-gradient(to bottom, #8a98ea, #4454dc);
  background-image: url(${(props) => props.$url}),
    radial-gradient(farthest-side at top left, #9bb6f7, transparent);
  background-color: #4e7df1;
  background-size: cover;
`;

export const DetailWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
