import React from "react";
import "./Table.css";

const Table = ({
  columns,
  data,
  isLoading,
  rowsPerPage,
  customStyles = {},
}) => {
  const {
    theadBgColor = "#fff",
    thColor = "#000",
    hoverColor = "#f9f9f9",
  } = customStyles;

  const renderSkeletonRows = () =>
    Array.from({ length: rowsPerPage }).map((_, index) => (
      <tr key={index}>
        {columns.map((column) => (
          <td key={column.id}>
            <div className="skeleton" aria-hidden="true"></div>
          </td>
        ))}
      </tr>
    ));

  const renderTableBody = () => {
    if (isLoading) return renderSkeletonRows();

    if (!data.length) {
      return (
        <tr>
          <td colSpan={columns.length} className="no-data" role="alert">
            No data available
          </td>
        </tr>
      );
    }

    return data.map((row, rowIndex) => (
      <tr
        key={rowIndex}
        style={{ "--custom-hover-color": hoverColor }}
        aria-rowindex={rowIndex + 1}
      >
        {columns.map((column) => (
          <td
            key={`${rowIndex}-${column.id}`}
            style={{ textAlign: column.align }}
            aria-colindex={columns.indexOf(column) + 1}
          >
            {column.format
              ? column.format(row[column.id], row)
              : row[column.id]}
          </td>
        ))}
      </tr>
    ));
  };

  const renderTableHeader = () => (
    <thead style={{ backgroundColor: theadBgColor }}>
      <tr>
        {columns.map((column) => (
          <th
            key={column.id}
            style={{
              minWidth: column.minWidth,
              textAlign: column.align,
              color: thColor,
            }}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );

  return (
    <div className="table-container">
      <table>
        {renderTableHeader()}
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
