import React from "react";
import "./Table.css";

const Table = ({ columns, data, isLoading, rowsPerPage, customStyles }) => {
  const {
    theadBgColor = "#fff",
    thColor = "#000",
    hoverColor = "#f9f9f9",
  } = customStyles || {};

  return (
    <div className="table-container">
      <table>
        <thead
          style={{
            backgroundColor: theadBgColor,
          }}
        >
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
        <tbody>
          {isLoading
            ? Array(rowsPerPage)
                .fill(null)
                .map((_, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <td key={column.id}>
                        <div className="skeleton"></div>
                      </td>
                    ))}
                  </tr>
                ))
            : data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{
                    "--custom-hover-color": hoverColor,
                  }}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <td
                        key={`${rowIndex}-${column.id}`}
                        style={{
                          textAlign: column.align,
                        }}
                      >
                        {column.format ? column.format(value) : value}
                      </td>
                    );
                  })}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
