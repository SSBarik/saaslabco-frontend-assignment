import { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";

const PaginatedTable = ({ columns, data, rowsPerPage = 5, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevious = () => {
    const prevPage = Math.max(currentPage - 1, 0);
    setCurrentPage(prevPage);
    onPageChange(prevPage);
  };

  const handleNext = () => {
    const nextPage = Math.min(currentPage + 1, totalPages - 1);
    setCurrentPage(nextPage);
    onPageChange(nextPage);
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      <Table columns={columns} data={paginatedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default PaginatedTable;
