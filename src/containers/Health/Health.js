import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Drawer from "../../components/Drawer/Drawer";
import Grid from "../../components/Grid/Grid";
import AdviceGrid from "../../components/Grid/AdviceGrid";
import Footer from "../../components/Footer/AppFooter";
import Typography from "@material-ui/core/Typography";
import banner from "../../styles/fusion-medical-animation-rnr8D3FNUNY-unsplash.jpg";
import banner2 from "../../styles/annie-spratt-mcrQoYT8VFE-unsplash.jpg";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

import Map from "../Maplocation/Map";

const useStyles = makeStyles(theme => ({
  main: {
    height: "100vh",
    backgroundColor: '"#e0e0e0"'
  },
  banner: {
    paddingTop: "20px",
    height: "40vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    opacity: "0.85",
    filter: "grayscale(0.8)"
  },
  mainTitle: {
    marginTop: "2rem"
  },
  presentationTextWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  presentationText: {
    marginTop: "2rem",
    marginBottom: "2rem",
    display: "flex"
  },
  adviceGrid: {
    width: "100%"
  },
  container: {
    width: "100%",
    height: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  adviceBanner: {
    marginTop: "500px",
    height: "40vh",
    width: "100%",
    backgroundImage: `url(${banner2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  adviceText: {
    marginTop: "2rem"
  },
  youtubevid: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <Drawer />
      <Box className={classes.banner} variant="h2" align="center" />
      <Typography
        variant="h2"
        className={classes.mainTitle}
        color="secondary"
        align="center"
      />
      <Container className={classes.presentationTextWrapper}>
        <Typography
          align="center"
          variant="h5"
          className={classes.presentationText}
          component="p"
          mx={3}
        >
          <Typography variant="h2" color="secondary">
            coordonnées et disponibilités des centres hospitaliers
          </Typography>
        </Typography>
      </Container>
      <Container>
        <Map />
      </Container>
      <Footer />
    </div>
  );
}
