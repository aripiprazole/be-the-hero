import React from "react";

import { Route, Switch } from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import NewIncident from "./views/NewIncident";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Login} />
      <Route path={"/register"} component={Register} />
      <Route path={"/profile"} component={Profile} />
      <Route path={"/incident/new"} component={NewIncident} />
    </Switch>
  );
};

export default Routes;
