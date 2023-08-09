import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
