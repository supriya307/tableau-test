import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    maxHeight: 500
  },
  table: {
    minWidth: 650
  }
});

function createData(commune, cumulés, actif, safe) {
  return { commune, cumulés, actif, safe };
}

const rows = [
  createData("Saint-Denis", 0, 0, 0, 0),
  createData("Saint-Pierre", 0, 0, 0, 0),
  createData("Bras-Panon", 0, 0, 0, 0),
  createData("Cilaos", 0, 0, 0, 0),
  createData("Entre-Deux", 0, 0, 0, 0),
  createData("L'Étang-Salé", 0, 0, 0, 0),
  createData("Petite-Îles", 0, 0, 0, 0),
  createData("La Plaine-des-Palmistes", 0, 0, 0, 0),
  createData("Le Port", 0, 0, 0, 0),
  createData("La Possession", 0, 0, 0, 0),
  createData("Saint-André", 0, 0, 0, 0),
  createData("Sainte-Marie", 0, 0, 0, 0),
  createData("Sainte-Rose", 0, 0, 0, 0),
  createData("Saint-Joseph", 0, 0, 0, 0),
  createData("Saint-Leu", 0, 0, 0, 0),
  createData("Saint-Louis", 0, 0, 0, 0),
  createData("Saint-Paul", 0, 0, 0, 0),
  createData("Saint-Philippe", 0, 0, 0, 0),
  createData("Salazie", 0, 0, 0, 0),
  createData("Le Tampon", 0, 0, 0, 0),
  createData("Les Trois-Bassins", 0, 0, 0, 0)
];
export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Communes</TableCell>
            <TableCell align="right">Cas cumulés</TableCell>
            <TableCell align="right">Cas actif&nbsp;</TableCell>
            <TableCell align="right">Cas guéris&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.commune}>
              <TableCell component="th" scope="row">
                {row.commune}
              </TableCell>
              <TableCell align="right">{row.cumulés}</TableCell>
              <TableCell align="right">{row.actif}</TableCell>
              <TableCell align="right">{row.safe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
