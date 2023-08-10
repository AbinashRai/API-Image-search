import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Pagination from "./Pagination";
import ImageGrid from "./ImageGrid";

const URL = "https://api.unsplash.com/search/photos";
const ImgPerPage = 20;

const SearchBar = () => {
  console.log(process.env.REACT_APP_API_KEY);
  const searchInput = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [noResults, setNoResults] = useState(false);

  const loadImages = useCallback(async () => {
    try {
      if (searchInput.current.value) {
        const { data } = await axios.get(
          `${URL}?query=${searchInput.current.value}&page=${page}&per_page=${ImgPerPage}&client_id=${process.env.REACT_APP_API_KEY}`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
        setNoResults(data.results.length === 0);
      }
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    loadImages();
  }, [loadImages, page]);

  const resetSearch = () => {
    setPage(1);
    loadImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value);
    loadImages();
    resetSearch();
  };

  return (
    <div className="container">
      <div className="search-section">
        <Form onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search here.."
            className="search-input"
            ref={searchInput}
          />
        </Form>
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      {noResults && <p className="error-msg">No results match this word</p>}
      <ImageGrid images={images} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default SearchBar;
