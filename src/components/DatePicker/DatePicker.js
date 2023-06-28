import React, { useState } from "react";

import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function BasicDatePicker() {
  const date = new Date();
  const stringDated = date.toDateString();
  console.log(stringDated);

  const [selectedDate, handleDateChange] = useState(stringDated);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker value={selectedDate} onChange={handleDateChange} fullWidth />
    </MuiPickersUtilsProvider>
  );
}

export default BasicDatePicker;
