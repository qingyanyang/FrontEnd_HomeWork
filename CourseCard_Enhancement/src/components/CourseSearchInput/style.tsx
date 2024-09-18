import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  max-width: 1000px;
  width: 80%;
  margin: 2rem 0;
  @media (max-width: 465px) {
    width: 90%;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  font-size: 2rem;
  color: #333;
  border-radius: 20px 4px 4px 20px;
  outline: none;
  border: none;
  background-color: #f5f5f5;
  &:focus {
    outline: #61e033 solid 2px;
    background-color: transparent;
  }
`;
