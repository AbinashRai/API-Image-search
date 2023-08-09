import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";

const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <ImageGrid />
    </div>
  );
};

export default App;
