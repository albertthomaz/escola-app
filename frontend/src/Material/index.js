import React, { useEffect, useState } from "react";
import { fetchMateriais } from "../api";

function Material() {
  const [materiais, setMateriais] = useState([]);
  const url = window.location.href;
  const disciplinaId = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    fetchMateriais(disciplinaId)
      .then((response) => setMateriais(response.data))
      .catch(() => {
        alert("Erro ao listar materiais");
      });
  });

  const redirect = (id) => {
    window.location.href = `/app/materiais/${disciplinaId}/${id}`;
  };

  return (
    <div>
      <div className="row">
        <h1>Conteúdo Escolar</h1>
      </div>
      {materiais
        .sort((a, b) => a.descricao.localeCompare(b.descricao))
        .map((material, key) => {
          return (
            <div key={key} className="row">
              <button type="button" onClick={() => redirect(material.id)}>
                {material.descricao}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Material;
