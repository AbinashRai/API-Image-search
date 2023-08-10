import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const URL = "https://api.unsplash.com/search/photos";
const ImgPerPage = 20;

const SearchBar = () => {
  console.log(process.env.REACT_APP_API_KEY);
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadImages();
  }, [page]);

  const loadImages = async () => {
    try {
      const { data } = await axios.get(
        `${URL}?query=${searchInput.current.value}&page=${page}&per_page=${ImgPerPage}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const resetSearch = () => {
    setPage(1);
    loadImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
    loadImages();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };
  console.log("page", page);

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
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="image"
          />
        ))}
      </div>

      {/* pagination part */}
      <div className="buttons">
        {page > 1 && (
          <Button onClick={() => setPage(page - 1)}>Previous</Button>
        )}
        {page < totalPages && (
          <Button onClick={() => setPage(page + 1)}>Next</Button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
