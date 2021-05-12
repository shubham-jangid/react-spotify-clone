import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import React from "react";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
