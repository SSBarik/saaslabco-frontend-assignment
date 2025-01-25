import { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";

const PaginatedTable = ({ columns, data, rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
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
