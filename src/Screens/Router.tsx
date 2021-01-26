import React from "react";
import { BrowserRouter as RouterDOM, Switch, Route } from "react-router-dom";
import Home from "./HomeScreen/Home";

const Router = () => {
  return (
    <RouterDOM>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </RouterDOM>
  );
};

export default Router;
