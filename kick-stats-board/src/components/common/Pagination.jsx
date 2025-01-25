import React from "react";
import {
  MdFirstPage,
  MdChevronLeft,
  MdChevronRight,
  MdLastPage,
} from "react-icons/md";

import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  onFirst,
  onPrevious,
  onNext,
  onLast,
  rowsPerPage = 5,
}) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;
  const startItem = currentPage * rowsPerPage + 1;
  const endItem = Math.min(
    (currentPage + 1) * rowsPerPage,
    totalPages * rowsPerPage
  );

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        {startItem} - {endItem} of {totalPages * rowsPerPage}
      </div>

      <div className="pagination-controls">
        <button
          onClick={onFirst}
          disabled={isFirstPage}
          className="pagination-button"
        >
          <MdFirstPage />
        </button>

        <button
          onClick={onPrevious}
          disabled={isFirstPage}
          className="pagination-button"
        >
          <MdChevronLeft />
        </button>

        <button
          onClick={onNext}
          disabled={isLastPage}
          className="pagination-button"
        >
          <MdChevronRight />
        </button>

        <button
          onClick={onLast}
          disabled={isLastPage}
          className="pagination-button"
        >
          <MdLastPage />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
