import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as WashHandIcon } from "../../styles/illustrations/undraw_wash_hands_nwl2.svg";
import { ReactComponent as DoctorIcon } from "../../styles/illustrations/undraw_doctor_kw5l.svg";
import { ReactComponent as ThrowAwayIcon } from "../../styles/illustrations/undraw_throw_away_ldjd.svg";
import { ReactComponent as SocialDistancingIcon } from "../../styles/illustrations/undraw_social_distancing_2g0u.svg";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  icons: {
    width: "150px",
    height: "150px"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Container>
              <WashHandIcon className={classes.icons} />
            </Container>
            <Typography variant="h5" color="secondary">
              Se laver les mains
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Container>
              <SocialDistancingIcon className={classes.icons} />
            </Container>
            <Typography variant="h5" color="secondary">
              Eviter les contacts proches
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Container>
              <WashHandIcon className={classes.icons} />
            </Container>
            <Typography variant="h5" color="secondary">
              Éviter de se toucher les yeux, le nez et la bouche.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Container>
              <ThrowAwayIcon className={classes.icons} />
            </Container>
            <Typography variant="h5" color="secondary">
              Respecter les règles d’hygiène respiratoire
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Container>
              <DoctorIcon className={classes.icons} />
            </Container>
            <Typography variant="h5" color="secondary">
              Tenez-vous informé et suivez les conseils de votre médecin
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
