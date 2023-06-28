import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { height } from "@material-ui/system";
import Viz from "../Vizualisation/VizAPI";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "2rem",
    height: "800px",
    width: "800px",
    margin: "auto"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  typo: {
    marginBottom: "2em"
  }
}));

export default function SimpleContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Typography className={classes.typo} variant="h3" color="secondary">
        Evolution de l'épidemie
      </Typography>

      <Viz />
    </React.Fragment>
  );
}
