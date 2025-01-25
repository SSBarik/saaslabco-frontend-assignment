import "./Table.css";

const Table = ({ columns, data, isLoading, rowsPerPage }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                style={{
                  minWidth: column.minWidth,
                  textAlign: column.align,
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
                <tr key={rowIndex}>
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
