import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const URL = "https://api.unsplash.com/search/photos";
const ImgPerPage = 20;

const SearchBar = () => {
  console.log(process.env.REACT_APP_API_KEY);
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const loadImages = async () => {
    try {
      const { data } = await axios.get(
        `${URL}?query=${searchInput.current.value}&page=1&per_page=${ImgPerPage}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      setImages(data.results);
      setTotalPages(data.total_pages);
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
      <button onClick={handleSearch}>Search</button>
      <div className="images">
        {images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              className="image"
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
