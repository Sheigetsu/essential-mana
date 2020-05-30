import React from "react";

const Search = ({ onFilterChange }) => {
  return <input type="text" onChange={onFilterChange} />;
};

export default Search;
