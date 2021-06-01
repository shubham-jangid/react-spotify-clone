import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import PlaylistBody from "./pages/PlaylistBody/PlaylistBody";
import SearchBody from "./pages/SearchBody/SearchBody";
import AlbumBody from "./pages/AlbumBody/AlbumBody";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/playlist/:id" component={PlaylistBody} />
        <Route path="/search/" component={SearchBody} />
        <Route path="/album/:id" component={AlbumBody} />
      </Switch>
    </BrowserRouter>
  );
}
