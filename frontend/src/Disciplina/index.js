import React, { useEffect, useState } from "react";
import { fetchTurmas, fetchDisciplinas } from "../api";
import BotaoCustom from "../BotaoCustom";

function Disciplina(props) {
  const [turmas, setTurmas] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    fetchTurmas()
      .then((response) => setTurmas(response.data))
      .catch(() => {
        alert("Erro ao listar turmas");
      });
  }, []);

  const preencherDisciplinas = (event) => {
    const turmaId = event.target.options.selectedIndex;
    fetchDisciplinas(turmaId)
      .then((response) => setDisciplinas(response.data))
      .catch(() => {
        alert("Erro ao listar eventos");
      });
  };

  const redirect = (disciplinaId) => {
    window.location.href = `/app/${props.caminho}/${disciplinaId}`;
  };

  return (
    <div>
      <div className="row">
        <h1>Disciplinas</h1>
      </div>

      <div className="row">
        <div className="select">
          <select onChange={preencherDisciplinas}>
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

      {disciplinas
        .sort((a, b) => a.descricao.localeCompare(b.descricao))
        .map((disciplina, key) => {
          return (
            <div key={key} className="row">
              <button type="button" onClick={() => redirect(disciplina.id)}>
                {disciplina.descricao}
              </button>
            </div>
          );
        })}
      <div className="row">
        <BotaoCustom nome="Voltar" redirect="/app/home" />
      </div>
    </div>
  );
}

export default Disciplina;
