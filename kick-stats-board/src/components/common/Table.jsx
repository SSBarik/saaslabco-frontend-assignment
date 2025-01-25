import "./Table.css";

const Table = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>No data available</td>
          </tr>
        ) : (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => {
                const value = row[column.id];
                return <td key={`${rowIndex}-${column.id}`}>{value}</td>;
              })}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
