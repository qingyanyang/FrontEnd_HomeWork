import { ComponentPropsWithRef } from "react";

type SearchBarProps = {} & ComponentPropsWithRef<"i">;

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <i
      className="fas fa-search"
      style={{
        color: "#fff",
        fontSize: "1.7rem",
        backgroundColor: "#61e033",
        padding: "14px 30px",
        borderRadius: "4px 20px 20px 4px",
      }}
    ></i>
  );
};
