import { Button } from "react-bootstrap";

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="buttons">
      {page > 1 && <Button onClick={() => setPage(page - 1)}>Previous</Button>}
      {page < totalPages && (
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      )}
    </div>
  );
};

export default Pagination;
