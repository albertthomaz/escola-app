import React from "react";
import "./styles.css";
import logomark from "./logomark.png";
import { Link } from "react-router-dom";
import { getUsuarioLogado } from "../util";

function exit(e) {
  e.preventDefault();
  localStorage.removeItem("USUARIO_LOGADO");
  window.location.replace("/login");
}

function Header() {
  return (
    <header className="main-header">
      <text className="user">{`Olá, ${getUsuarioLogado()?.nome}.`}</text>
      <Link to="/app/home" className="logomark">
        <img src={logomark} alt="logomark" />
      </Link>
      <Link to="" onClick={(e) => exit(e)} className="exit">
        Sair
      </Link>
    </header>
  );
}

export default Header;
