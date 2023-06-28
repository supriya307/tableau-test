import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from "@material-ui/core/Box";

const styles = {
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paperStyle: {
    width: "50%"
  }
};
@withStyles(styles)
class Auth extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Paper className={this.props.classes.paperStyle}>
          <Box width={1}>
            <TextField
              width={1}
              id="standard-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              fullWidth
            />
          </Box>
          <Box width={1}>
            <TextField
              className={this.props.classes.formStyle}
              id="standard-password-input"
              label="Mot de passe"
              type="password"
              autoComplete="current-password"
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              className={this.props.classes.formStyle}
              id="standard-password-input"
              label="Confirmer le mot de passe"
              type="password"
              autoComplete="current-password"
              fullWidth
            />
          </Box>
        </Paper>
      </div>
    );
  }
}

export default Auth;
