import { useState, useEffect } from 'react';
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
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "./table.scss";

const List = ({ data, heade, prop }) => {
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState(heade);
  const [editingRow, setEditingRow] = useState(null);
  const [inputValues, setInputValues] = useState({});

  useEffect(() => {
    if (Array.isArray(data)) {
      setRows(data);
    }
  }, [data]);

  useEffect(() => {
    if (prop) {
      setHeaders([...headers, "Actions"]);
    }
  }, [prop]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setInputValues(row);
  };

  const handleCancel = () => {
    setEditingRow(null);
    setInputValues({});
  };

  const handleConfirm = () => {
    setRows(rows.map(row => {
      if (row.id === editingRow.id) {
        return inputValues;
      } else {
        return row;
      }
    }));
    setEditingRow(null);
    setInputValues({});
  };

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
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
          {prop && <TableCell key="actions-header">Actions</TableCell>}
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
                  prop && (
                    <TableCell>
                      <IconButton onClick={() => handleDelete(row.id)}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton onClick={() => handleEdit(row)}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  )
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <Dialog open={editingRow !== null} onClose={handleCancel}>
        <DialogTitle>Edit Row</DialogTitle>
        <DialogContent>
          {
            editingRow && Object.keys(editingRow).map((property) => (
              <TextField
                key={property}
                margin="dense"
                name={property}
                label={property}
                type="text"
                fullWidth
                value={inputValues[property] || editingRow[property]}
                onChange={handleInputChange}
              />
            ))
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleConfirm}>Save</Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};
export default List;