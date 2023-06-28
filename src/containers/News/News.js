import React from "react";

import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Drawer from "../../components/Drawer/Drawer";
import Grid from "@material-ui/core/Grid";
import AdviceGrid from "../../components/Grid/AdviceGrid";
import Footer from "../../components/Footer/AppFooter";
import Typography from "@material-ui/core/Typography";
import banner from "../../styles/fusion-medical-animation-rnr8D3FNUNY-unsplash.jpg";
import banner2 from "../../styles/annie-spratt-mcrQoYT8VFE-unsplash.jpg";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";
import NewsListIndex from "./NewsList/NewsListIndex";
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
  cards: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
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
            Les dernières infos sur le COVID-19
          </Typography>
        </Typography>
      </Container>
      <Container className={classes.cards}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Divider />
            <NewsListIndex />
            <Divider />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
