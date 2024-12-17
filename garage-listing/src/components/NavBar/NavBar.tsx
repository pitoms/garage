import React from "react";
import SearchInput from "../SearchInput/SearchInput";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div>
      <SearchInput
        placeholder={""}
        buttonLabel={""}
        onSearch={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default SearchInput;
