import React from "react";
import "./SearchBar.styles.css";
import SearchIcon from "@material-ui/icons/Search";
export default function SearchBar({ onChange, search }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="searchBar-div">
      <div className="searchBar">
        <SearchIcon />
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Artist or songs"
        />
      </div>
    </div>
  );
}
