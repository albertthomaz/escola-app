import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import EventoCalendario from "./EventoCalendario";
import NovoEventoCalendario from "./EventoCalendario/novo";
import Disciplina from "./Disciplina";
import Material from "./Material";
import { getUsuarioLogado } from "./util";

function Routes() {
  return (
    <BrowserRouter>
      {getUsuarioLogado() ? (
        !window.location.pathname.startsWith("/app") ? (
          <React.Fragment>
            <Header />
            <Redirect to="/app/home" />
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
          <Route path="/app/eventos_calendario/novo">
            <NovoEventoCalendario />
          </Route>
          <EventoCalendario />
        </Route>
        <Route path="/app/materiais/:disciplinaId/:id">
          <Header />
        </Route>
        <Route path="/app/materiais/:disciplinaId">
          <Material />
        </Route>
        <Route path="/app/materiais">
          <Disciplina caminho="materiais" />
        </Route>
        <Route path="/">
          <Redirect to="/app/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
