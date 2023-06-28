import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LocalViz from "../../containers/Vizualisation/LocalViz";

import VizApi from "../../containers/Vizualisation/VizAPI";
import EmptyChart from "../../containers/Vizualisation/emptyChart";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "10px"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  externalViz: {
    width: "100%",
    height: "100v%",
    maxWidth: "1110px",
    display: "flex",
    justifyContent: "center"
  },
  gridItemMap: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  gridItem: {
    marginTop: "2rem",
    marginBottom: "2rem",
    borderColor: "red"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Container className={classes.externalViz}>
            <Grid item xs={12}>
              <VizApi />
            </Grid>
          </Container>
          <Container>
            <Grid item xs={12}>
              <LocalViz />
            </Grid>
          </Container>
        </Grid>
      </div>
    </>
  );
}
