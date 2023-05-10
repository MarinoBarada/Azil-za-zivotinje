import React from "react";
import style from "./SearchName.module.css";
import { FaSearch } from "react-icons/fa";

function SearchName({action}) {
  return (
    <div className={style["search"]}>
      <div className={style["search-input-container"]}>
        <FaSearch size={"3rem"} color="#333" />
        <input
          id="searchInput"
          type="text"
          placeholder="Pretražite ime..."
          onChange={(event) => {
            action(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default SearchName;
