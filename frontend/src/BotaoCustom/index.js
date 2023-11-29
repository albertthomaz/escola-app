import React from "react";
import "./styles.css";

function BotaoCustom(props) {
  const handleClick = () => {
    if (props.acao) {
      props.acao();
    } else if (props.redirect) {
      window.location.href = props.redirect;
    }
  };
  return (
    <button
      className={`btn-custom 
          ${props.acao ? "acao" : ""} 
          ${props.invisivel ? "hidden" : ""}
        `}
      onClick={() => handleClick()}
    >
      {props.nome}
    </button>
  );
}

export default BotaoCustom;
