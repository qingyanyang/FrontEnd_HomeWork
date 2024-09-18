import { Row } from "@/styles";
import { SearchInputWrapper, SearchInput } from "./style";
import { SearchBar } from "./SearchBar";
import { useRef } from "react";

export const CourseSearchInput: React.FC<{
  handleSearch: (searchText: string) => void;
}> = ({ handleSearch }) => {
  const searchContent = useRef<HTMLInputElement>(null);

  const handleInputTextChange = () => {
    handleSearch(searchContent.current!.value);
  };
  return (
    <SearchInputWrapper>
      <Row $gap={10}>
        <SearchInput
          type="text"
          ref={searchContent}
          onChange={handleInputTextChange}
        />
        <SearchBar />
      </Row>
    </SearchInputWrapper>
  );
};
