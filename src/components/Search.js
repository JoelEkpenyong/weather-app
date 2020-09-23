import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <form className="search_bar">
      <input type="text" placeholder="Input City" name="cityId" />
    </form>
  );
};

export default Search;
