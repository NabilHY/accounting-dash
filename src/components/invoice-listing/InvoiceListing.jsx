import { useState, useEffect, useContext } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';
import { BonsCommandContext } from '../../context/bonCommandeContext';
import InvoiceDetails from '../invoice-details/InvoiceDetails';
import './invoice-listing.scss';

export const InvoiceListing = ({ type }) => {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const { bonsCommand } = useContext(BonsCommandContext)
  const [headers, setHeaders] = useState([]);
  
  useEffect(() => {
    if (Array.isArray(data)) {
      setRows(bonsCommand);
    }
  }, [data, bonsCommand]);
  
  useEffect(() => {
    if (type === 'bonsCommande') {
      setHeaders([
        'id',
        'Numero_bonCommande',
        'Exercise',
        'Mois',
        'Etat',
        'Commentaire',
        'date_BCommande',
        'confirme',
        'Total_HT',
        'Total_TVA',
        'Total_TTC',
        'fournisseur',
      ])
      setData(bonsCommand);
    }
  }, [])

  if (!data) {
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
        {rows && rows.map((row) => {
          const { created_at, updated_at, ...filteredRow } = row;
          return (
          <TableRow className="table-row" key={filteredRow.id} >
            { Object.keys(filteredRow).map((property) => (
              <TableCell key={`${filteredRow.id}- ${ property }`} className="table-cell">{filteredRow[property]}</TableCell>
             )) }
          </TableRow>
          )
        })}
        </TableBody>
      </Table >
    </TableContainer >
  );
  };

