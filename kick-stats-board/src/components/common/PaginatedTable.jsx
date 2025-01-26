import { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import "./PaginatedTable.css";

const PaginatedTable = ({
  columns,
  data,
  isLoading,
  rowsPerPage = 5,
  onPageChange,
  customStyles,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    const prevPage = Math.max(currentPage - 1, 0);
    setCurrentPage(prevPage);
    handlePageChange(prevPage);
  };

  const handleFirst = () => setCurrentPage(0);
  const handleLast = () => setCurrentPage(totalPages - 1);

  const handleNext = () => {
    const nextPage = Math.min(currentPage + 1, totalPages - 1);
    setCurrentPage(nextPage);
    handlePageChange(nextPage);
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );

  return (
    <div className="paginated-table">
      <Table
        columns={columns}
        data={paginatedData}
        isLoading={isLoading}
        rowsPerPage={rowsPerPage}
        customStyles={customStyles}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onFirst={handleFirst}
        onLast={handleLast}
        rowsPerPage={rowsPerPage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PaginatedTable;
