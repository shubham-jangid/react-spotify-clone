import React from "react";
import Base from "../Base/Base";
import "./SearchBody.styles.css";
import { useState } from "react";
import { TopBar } from "../../components/TopBar";

export default function SearchBody() {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.value);
    console.log(search);
  }

  function searchBody() {
    return (
      <div className="searchBody">
        <div className="searchBar">
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

  return (
    <Base>
      <TopBar />
      {searchBody()}
    </Base>
  );
}
