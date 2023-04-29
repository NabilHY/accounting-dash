import { useState, useEffect } from 'react';
// import { confirmAlert } from 'react-confirm-alert'; // npm install react-confirm-alert
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { RiDeleteBin2Fill, RiFileEditLine } from 'react-icons/ri';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./table.scss";

const List = ({ data, heade, prop }) => {
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState(heade);
  const [containsActions, setContainsActions] = useState(false);

  useEffect(() => {
    if (Array.isArray(data)) {
      setRows(data);
    }
  }, [data]);

  useEffect(() => {
    if (prop) {
      setHeaders([...headers, "Actions"]);
      setContainsActions(true);
    }
  }, [prop]);

  const handleDelete = (id) => {
    // confirmAlert({
    //   title: 'Confirm deletion',
    //   message: 'Are you sure you want to delete this row?',
    //   buttons: [
    //     {
    //       label: 'Yes',
    //       onClick: () => {
    //         setRows(rows.filter(row => row.id !== id));
    //       }
    //     },
    //     {
    //       label: 'No',
    //     }
    //   ]
    // });
  };

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
              rows && rows.map((row) => (
                <TableRow key={row.id}>
                  {Object.keys(row).map((property) => (
                    <TableCell key={`${row.id}-${property}`} className="tableCell">{row[property]}</TableCell>
                  ))}
                  {
                    containsActions && (
                      <TableCell>
                        <IconButton onClick={() => handleDelete(row.id)}>
                          <RiDeleteBin2Fill />
                        </IconButton>
                        <IconButton>
                          <RiFileEditLine />
                        </IconButton>
                      </TableCell>
                    )
                  }
              </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;