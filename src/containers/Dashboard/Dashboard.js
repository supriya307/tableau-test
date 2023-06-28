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

import ReactPlayer from "react-player";

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
    marginTop: "4rem",
    marginBottom: "4rem",
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
      >
        Portail information Covid-19 à la Réunion
      </Typography>
      <Container className={classes.presentationTextWrapper}>
        <Typography
          align="center"
          variant="h5"
          className={classes.presentationText}
          component="p"
          mx={3}
        >
          Vous trouverez sur ce portail les dernières informations statistiques
          du Covid-19 à la Réunion, des conseils et mesures préventives contre
          la propagation du virus ainsi que les dernières directives du
          gouvernement.
        </Typography>
      </Container>
      <Container>
        <Grid />
      </Container>
      <Box className={classes.adviceBanner} />
      <Typography
        variant="h2"
        className={classes.adviceText}
        color="secondary"
        align="center"
      >
        Protégez-vous mais également les autres !
      </Typography>
      <Container className={classes.presentationTextWrapper}>
        <Typography
          variant="h5"
          className={classes.presentationText}
          align="center"
        >
          La meilleure façon de prévenir toute infection du Covid-19 est d'abord
          d'éviter de s'y exposer. Voici les recommendations de l'Organisation
          mondiale de la Santé qui doivent être appliquées quotidiennement pour
          éviter la propagation de ce virus respiratoire.
        </Typography>
      </Container>
      <Container>
        <AdviceGrid className={classes.adviceGrid} />
      </Container>
      <Container className={classes.presentationTextWrapper}>
        <Typography
          variant="h3"
          className={classes.presentationText}
          align="center"
          color="secondary"
        >
          Que faire en cas de signes ?
        </Typography>
      </Container>
      <Container className={classes.youtubevid}>
        <ReactPlayer url="https://www.youtube.com/watch?v=83NWcNSSBrU" />
      </Container>
      <Footer />
    </div>
  );
}
