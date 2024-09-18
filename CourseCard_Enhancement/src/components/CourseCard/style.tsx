import styled from "styled-components";

export const Card = styled.div<{ $isNew: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 480px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  ${(props) =>
    props.$isNew &&
    `&::before{
            position: absolute;
            content: "";
            background: #61e033;
            height: 28px;
            width: 28px;
            /* Added lines */
            top: 2rem;
            right: -0.5rem;
            transform: rotate(45deg);
            z-index: -1;
        };
        &::after{
            position: absolute;
            content: "New";
            top: 11px;
            right: -14px;
            padding: 0.5rem;
            width: 5rem;
            background: #61e033;
            color: white;
            text-align: center;
            font-family: "Roboto", sans-serif;
            box-shadow: 4px 4px 15px rgba(26, 35, 126, 0.2);
        };`};
`;

export const CardImage = styled.div<{ $imgLink: string }>`
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 200px;
  background: blueviolet url(${(props) => props.$imgLink}) no-repeat center
    center;
  background-size: cover;
`;

export const CardTitle = styled.h3``;

export const CardButton = styled.button`
  border: none;
  border-radius: 100px;
  padding: 5px 20px;
`;

export const CardFavorateButton = styled(CardButton)`
  border: #61e033 solid 1px;
  background-color: #fff;
  color: #61e033;
  &:hover {
    background-color: #61e033;
    color: #fff;
  }
`;

export const CardCompletionButton = styled(CardButton)`
  background-color: #6133e0;
  color: #fff;
  &:hover {
    background-color: #7b66b6;
  }
`;

export const CardDescribtion = styled.p`
  color: #777;
`;

export const CardReview = styled.div`
  border-top: 1px solid #f0f0f0;
  width: 100%;
`;

export const CardScore = styled.p``;

export const CardReviews = styled.p`
  color: grey;
  font-size: smaller;
`;

export const CardPrice = styled.h2`
  color: #61e033;
`;
