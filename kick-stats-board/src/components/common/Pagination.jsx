import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="pagination-controls">
      <button
        onClick={onPrevious}
        disabled={currentPage === 0}
        className="pagination-button"
      >
        Previous
      </button>
      <span>
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
