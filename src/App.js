import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import Dashboard from "./containers/Dashboard/Dashboard";
import News from "./containers/News/News";
import Health from "./containers/Health/Health";
import Officials from "./containers/Officials/Officials";

import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/news" component={News} />
        <Route path="/health" component={Health} />
        <Route path="/officials" component={Officials} />
      </Switch>
    </>
  );
}
