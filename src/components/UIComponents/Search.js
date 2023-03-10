import React from "react";

function Search({ onSearch, searchText }) {
  return (
    <>
      <input
        type="search"
        placeholder="Search"
        className="  py-[8px] px-[16px] rounded-[8px] border-current hover:outline hover:outline-1  focus:outline-1 focus:outline col-span-2"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}
export default Search;
