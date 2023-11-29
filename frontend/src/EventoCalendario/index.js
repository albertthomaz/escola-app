import React, { useEffect, useState } from "react";
import { fetchTurmas, fetchEventos } from "../api";
import { getUsuarioLogado } from "../util";
import BotaoCustom from "../BotaoCustom";
import "./styles.css";

function EventoCalendario() {
  const [turmas, setTurmas] = useState([]);
  const [eventos, setEventos] = useState([]);
  const isAdmin = getUsuarioLogado().role === "ADMIN";

  useEffect(() => {
    fetchTurmas()
      .then((response) => setTurmas(response.data))
      .catch(() => {
        alert("Erro ao listar turmas");
      });
  }, []);

  const preencherCalendario = (event) => {
    const turmaId = event.target.options.selectedIndex;
    fetchEventos(turmaId)
      .then((response) => setEventos(response.data))
      .catch(() => {
        alert("Erro ao listar eventos");
      });
  };

  const redirectToCalendario = () => {
    window.location.href = "/app/eventos_calendario/novo";
  };

  return (
    <div>
      <div className="row">
        <h1>Calendário Acadêmico</h1>
      </div>

      <div className="row">
        <div className="select">
          <select onChange={preencherCalendario}>
            <option>Selecione a Turma...</option>
            {turmas.map((turma, key) => {
              return (
                <option id={turma.id} key={key}>
                  {turma.descricao}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className={`row ${eventos.length > 0 ? "" : "hidden"}`}>
        <table className="table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Data</th>
              <th>Turma</th>
            </tr>
          </thead>
          <tbody>
            {eventos
              .sort((a, b) => new Date(a.data) - new Date(b.data))
              .map((evento, key) => {
                return (
                  <tr key={key}>
                    <td>{evento.descricao}</td>
                    <td>{new Date(evento.data).toLocaleString("pt-BR")}</td>
                    <td>{evento.turma}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="row">
        <BotaoCustom nome="Voltar" redirect="/app/home" />
        <BotaoCustom
          nome="Novo Evento"
          acao={redirectToCalendario}
          invisivel={!isAdmin}
        />
      </div>
    </div>
  );
}

export default EventoCalendario;
