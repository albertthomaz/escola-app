import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import EventoCalendario from "./EventoCalendario";
import MovieInfo from "./MovieInfo";
import MyList from "./MyList";
import { getUsuarioLogado } from "./util";

function Routes() {
  return (
    <BrowserRouter>
      {getUsuarioLogado() ? (
        !window.location.pathname.startsWith("/app") ? (
          <React.Fragment>
            <Header />
            <Redirect to="/app/catalogo" />
          </React.Fragment>
        ) : (
          <Header />
        )
      ) : (
        <Redirect to="/login" />
      )}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/app/home">
          <Home />
        </Route>
        <Route path="/app/eventos_calendario">
          <EventoCalendario />
        </Route>
        <Route path="/app/filme/:id">
          <MovieInfo />
        </Route>
        <Route path="/app/lista">
          <MyList />
        </Route>
        <Route path="/">
          <Redirect to="/app/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
