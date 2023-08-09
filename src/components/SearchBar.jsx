import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const URL = "https://api.unsplash.com/search/photos";

const SearchBar = () => {
  console.log(process.env.REACT_APP_API_KEY);
  const searchInput = useRef(null);
  const ImgPerPage = 20;

  // useEffect(() => {
  //   const getImages = async () => {

  //   getImages();
  // }, []);}

  const loadImages = async () => {
    try {
      const result = await axios.get(
        `${URL}?query=${searchInput.current.value}&page=1&per_page=${ImgPerPage}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      console.log("results", result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
    loadImages();
  };

  return (
    <div className="search-section">
      <Form onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="search"
          className="search-input"
          ref={searchInput}
        />
      </Form>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
