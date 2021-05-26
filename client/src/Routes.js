import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import PlaylistBody from "./pages/PlaylistBody";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/playlist/:id" component={PlaylistBody} />
      </Switch>
    </BrowserRouter>
  );
}
