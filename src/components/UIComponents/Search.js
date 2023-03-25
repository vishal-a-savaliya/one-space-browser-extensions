import React, { useState } from "react";

function Search(props) {
  const [css] = useState(props.additionalCSS);
  return (
    <>
      <input
        type="search"
        placeholder={props.placeholder}
        className={`py-[3px] px-[3px] rounded-[8px] border border-sky-500   focus:outline-none   ${css}`}
        value={props.searchText}
        onChange={(e) => props.onSearch(e.target.value)}
      />
    </>
  );
}
export default Search;
