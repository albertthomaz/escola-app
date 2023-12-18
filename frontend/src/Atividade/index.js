import React, { useEffect, useState } from "react";
import { fetchAtividades } from "../api";
import BotaoCustom from "../BotaoCustom";

function Atividade() {
  const [atividades, setAtividades] = useState([]);
  const url = window.location.href;
  const disciplinaId = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    fetchAtividades(disciplinaId)
      .then((response) => setAtividades(response.data))
      .catch(() => {
        alert("Erro ao listar atividades");
      });
  }, [disciplinaId]);

  const redirect = (id) => {
    window.location.href = `/app/atividades/${disciplinaId}/${id}`;
  };

  return (
    <div>
      <div className="row">
        <h1>Atividades</h1>
      </div>
      {atividades
        .sort((a, b) => a.descricao.localeCompare(b.descricao))
        .map((atividade, key) => {
          return (
            <div key={key} className="row">
              <button type="button" onClick={() => redirect(atividade.id)}>
                {atividade.descricao}
              </button>
            </div>
          );
        })}
      <div className="row">
        <BotaoCustom nome="Voltar" redirect="/app/atividades" />
      </div>
    </div>
  );
}

export default Atividade;
