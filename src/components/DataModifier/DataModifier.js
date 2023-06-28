import React, { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import DatePicker from "../DatePicker/DatePicker";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Button/Button";

const useStyles = makeStyles({
  modifyDataInput: {
    marginTop: "2rem",
    marginBottom: "2rem"
  }
});

const DataModifier = () => {
  const [data, setData] = useState({ caseNb: 0, date: null });

  const handleChange = event => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://gestion-de-crise-epidemie.firebaseio.com/data.json", {
        data
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const classes = useStyles();

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.modifyDataInput}
          id="filled-number"
          label="nombre de cas confirmés"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
          fullWidth
          value={data.caseNb}
          onChange={handleChange}
        />
        <DatePicker onChange={handleChange} />
        <Button />
      </form>
    </Box>
  );
};

export default DataModifier;
