import React from "react";
import "./SearchBar..styles.css";
export default function SearchBar({ onChange, search }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Artist or songs"
      />
    </div>
  );
}
