import React from "react";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import "./App.css";
// import React, { useRef, useState } from "react";

const App = () => {
  return (
    <div className="container">
      <SearchBar />
      <ImageGrid />
    </div>
  );
};

export default App;
