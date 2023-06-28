import React from "react";
import { makeStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#f44336"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "300px",
    backgroundColor: "#263238",
    display: "flex",
    height: "6vh",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold"
  },
  typo: {
    marginRight: "20px"
  }
}));

function AppFooter(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <footer>
          <Typography color="primary" mx="auto" className={classes.typo}>
            &copy; 2020 K Tech
          </Typography>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default AppFooter;
