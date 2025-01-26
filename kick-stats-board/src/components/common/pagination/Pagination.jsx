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
  onFirst,
  onPrevious,
  onNext,
  onLast,
  rowsPerPage = 5,
  totalRecords,
  isLoading,
}) => {
  const totalPages = Math.ceil(totalRecords / rowsPerPage);
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;
  const startItem = currentPage * rowsPerPage + 1;
  const endItem = Math.min((currentPage + 1) * rowsPerPage, totalRecords);

  const hasData = totalRecords > 0;

  const controlButtons = [
    { action: onFirst, icon: <MdFirstPage />, disabled: isFirstPage },
    { action: onPrevious, icon: <MdChevronLeft />, disabled: isFirstPage },
    { action: onNext, icon: <MdChevronRight />, disabled: isLastPage },
    { action: onLast, icon: <MdLastPage />, disabled: isLastPage },
  ];

  return (
    <div className="pagination-container">
      {!isLoading && hasData && (
        <div className="pagination-info">
          {startItem} - {endItem} of {totalRecords}
        </div>
      )}

      <div className="pagination-controls">
        {controlButtons.map((controlButton, index) => (
          <button
            key={index}
            onClick={controlButton.action}
            disabled={isLoading || controlButton.disabled || !hasData}
            className="pagination-button"
          >
            {controlButton.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
