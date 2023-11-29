import React from "react";
import "./styles.css";
import logomark from "./logomark.png";
import { Link } from "react-router-dom";
import { getUsuarioLogado } from "../util";

function Header() {
  const usuarioLogado = getUsuarioLogado();
  const isAdmin = usuarioLogado?.role === "ADMIN";

  const exit = (e) => {
    e.preventDefault();
    localStorage.removeItem("USUARIO_LOGADO");
    window.location.replace("/login");
  };
  return (
    <header className="main-header">
      <span className="user">{`${usuarioLogado?.nome}. ${
        isAdmin ? "(Professor)" : "(Aluno)"
      }`}</span>
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
