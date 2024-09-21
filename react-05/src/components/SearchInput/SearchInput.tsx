import { Row, Card } from "@/styles";
import { Input, SearchBar } from "./style";

export const SearchInput = () => {
  return (
    <Card $width={"55%"} $padding={2} $borderRadius={10}>
      <Row>
        <Input placeholder="Search for a city" />
        <SearchBar>Search</SearchBar>
      </Row>
    </Card>
  );
};
