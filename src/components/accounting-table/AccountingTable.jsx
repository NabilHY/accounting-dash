import React from "react";
import "./accounting-table.scss";

const Table = ({ data, headers, years }) => {
  const totals = years.reduce((acc, year) => {
    acc[year] = 0;
    return acc;
  }, {});

  const rowTotals = data.map((row) => {
    const total = Object.entries(row)
      .filter(([key]) => key !== "rowName")
      .reduce((acc, [key, value]) => {
        totals[key] += value;
        return acc + value;
      }, 0)
      .toFixed(2);

    return { ...row, total };
  });

  const grandTotals = Object.values(totals).reduce(
    (acc, total) => acc + total,
    0
  ).toFixed(2);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Row Name</th>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {rowTotals.map(({ rowName, ...rest }) => (
            <tr key={rowName}>
              <td>{rowName}</td>
              {years.map((year) => {
                const value = rest[year];
                return (
                  <td key={year} style={{ color: value < 0 ? "red" : "" }}>
                    {value} DH
                  </td>
                );
              })}
              <td style={{ color: rest.total < 0 ? "red" : "" }}>
                {rest.total} DH
              </td>
            </tr>
          ))}
          <tr>
            <td>Grand Total</td>
            {years.map((year) => (
              <td key={year} style={{ color: totals[year] < 0 ? "red" : "" }}>
                {totals[year].toFixed(2)} DH
              </td>
            ))}
            <td style={{ color: grandTotals < 0 ? "red" : "" }}>
              {grandTotals} DH
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;