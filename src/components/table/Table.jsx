import { useState, useEffect } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";

const List = ({ data, heade }) => {
  const [rows, setRows] = useState(data);
  const [headers, setHeaders] = useState(heade);

  useEffect(() => {
    setRows(data);
  }, [data]);
  
  if (!data || !heade) {
    return null;
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            {
              data.map((row) => (
                <TableRow key={row.id}>
                  {Object.keys(row).map((property) => (
                    <TableCell key={`${row.id}-${property}`} className="tableCell">{row[property]}</TableCell>
                  ))}
              </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;