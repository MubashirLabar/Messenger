import React from "react";
import { SearchIcon, DropDownIcon } from "../../assets/icons";

import "./searchbar.scss";

const Searchbar = () => {
  return (
    <div className="searchbar-cmp flex aic">
      <div className="actions flex aic">
        <button className="btn flex aic">
          <SearchIcon />
        </button>
        <button className="btn drop-down flex aic">
          <DropDownIcon />
        </button>
        <input
          type="text"
          placeholder="Search Courses"
          className="iput cleanbtn font s14 lightBlack"
        />
      </div>
    </div>
  );
};

export default Searchbar;
