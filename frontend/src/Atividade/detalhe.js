import React, { useEffect, useState } from "react";
import { fetchAtividadesResposta } from "../api";
import { getUsuarioLogado } from "../util";
import BotaoCustom from "../BotaoCustom";

function AtividadeDetalhe() {
  const [atividadesResposta, setAtividadesResposta] = useState([]);
  //const isAdmin = getUsuarioLogado().role === "ADMIN";
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  let disciplinaId = url.substring(0, url.lastIndexOf("/"));
  disciplinaId = disciplinaId.substring(disciplinaId.lastIndexOf("/") + 1);

  useEffect(() => {
    fetchAtividadesResposta(id)
      .then((response) => setAtividadesResposta(response.data))
      .catch(() => {
        alert("Erro ao buscar atividades resposta");
      });
  }, [id]);

  return (
    <div>
      <div className={`row ${atividadesResposta.length > 0 ? "" : "hidden"}`}>
        <table className="table">
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Resposta</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {atividadesResposta
              .sort((a, b) => new Date(a.data) - new Date(b.data))
              .map((atividade, key) => {
                return (
                  <tr key={key}>
                    <td>{atividade.aluno}</td>
                    {/* <td>{new Date(evento.data).toLocaleString("pt-BR")}</td> */}
                    <td>{atividade.resposta}</td>
                    <td>{atividade.nota}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="row">
        <BotaoCustom
          nome="Voltar"
          redirect={`/app/atividades/${disciplinaId}`}
        />
      </div>
    </div>
  );
}

export default AtividadeDetalhe;
