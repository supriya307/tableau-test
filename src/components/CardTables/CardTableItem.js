import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(commune, cumulés, actif, safe) {
  return { commune, cumulés, actif, safe };
}

const rows = [
  createData("Saint-Denis", 159, 6.0, 24, 4.0),
  createData("Saint-Pierre", 159, 6.0, 24, 4.0),
  createData("Bras-Panon", 159, 6.0, 24, 4.0),
  createData("Cilaos", 159, 6.0, 24, 4.0),
  createData("Entre-Deux", 159, 6.0, 24, 4.0),
  createData("L'Étang-Salé", 159, 6.0, 24, 4.0),
  createData("Petite-Îles", 159, 6.0, 24, 4.0),
  createData("La Plaine-des-Palmistes", 159, 6.0, 24, 4.0),
  createData("Le Port", 159, 6.0, 24, 4.0),
  createData("La Possession", 159, 6.0, 24, 4.0),
  createData("Saint-André", 159, 6.0, 24, 4.0),
  createData("Sainte-Marie", 159, 6.0, 24, 4.0),
  createData("Sainte-Rose", 159, 6.0, 24, 4.0),
  createData("Saint-Joseph", 159, 6.0, 24, 4.0),
  createData("Saint-Leu", 159, 6.0, 24, 4.0),
  createData("Saint-Louis", 159, 6.0, 24, 4.0),
  createData("Saint-Paul", 159, 6.0, 24, 4.0),
  createData("Saint-Philippe", 159, 6.0, 24, 4.0),
  createData("Saint-Pierre", 159, 6.0, 24, 4.0),
  createData("Salazie", 159, 6.0, 24, 4.0),
  createData("Le Tampon", 159, 6.0, 24, 4.0),
  createData("Les Trois-Bassins", 159, 6.0, 24, 4.0)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    height: "200px"
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Communes</StyledTableCell>
            <StyledTableCell align="right">Contaminés cumulés</StyledTableCell>
            <StyledTableCell align="right">cas actifs</StyledTableCell>
            <StyledTableCell align="right">cas guéris</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.commmune}>
              <StyledTableCell component="th" scope="row">
                {row.commune}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cumulés}</StyledTableCell>
              <StyledTableCell align="right">{row.actif}</StyledTableCell>
              <StyledTableCell align="right">{row.safe}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
