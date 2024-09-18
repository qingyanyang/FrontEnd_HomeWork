import styled from "styled-components";

export const Expanded = styled.div`
  flex: 1;
`;

export const Padding = styled.div<{
  $horizontal?: number;
  $vertical?: number;
  $top?: number;
  $bottom?: number;
  $right?: number;
  $left?: number;
}>`
  width: 100%;
  height: 100%;
  padding-top: ${(props) => (props.$vertical ? props.$vertical : props.$top)}px;
  padding-bottom: ${(props) =>
    props.$vertical ? props.$vertical : props.$bottom}px;
  padding-right: ${(props) =>
    props.$horizontal ? props.$horizontal : props.$right}px;
  padding-left: ${(props) =>
    props.$horizontal ? props.$horizontal : props.$left}px;
`;

export const SizedBox = styled.div<{
  $height?: number;
  $width?: number;
}>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;

export const Row = styled.div<{
  $gap?: number;
  $justifyContent?: string;
}>`
  display: flex;
  gap: ${(props) => props.$gap}px;
  align-items: center;
  $justifyContent: ${(props) => props.$justifyContent};
`;

export const Column = styled.div<{
  $gap?: number;
  $justifyContent?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap}px;
  align-items: center;
  $justifyContent: ${(props) => props.$justifyContent};
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
