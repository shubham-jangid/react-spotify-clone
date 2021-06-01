import React from "react";

export default function SearchBox({ handleChange }) {
  return (
    <div className="searchBar">
      <input
        type="text"
        // value={search}
        onChange={handleChange}
        placeholder="Artist or songs"
      />
    </div>
  );
}
