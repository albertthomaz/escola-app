import React, { useEffect, useState } from "react";
import { getMaterial } from "../api";

function MaterialDetalhe() {
  const [material, setMaterial] = useState([]);
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);

  useEffect(() => {
    getMaterial(id)
      .then((response) => setMaterial(response.data))
      .catch(() => {
        alert("Erro ao obter material");
      });
  }, [id]);

  return (
    <div>
      <div className="row">
        <h1 className="subtitulo">{material.descricao}</h1>
      </div>
      <div className="row" style={{ padding: "0" }}>
        <h3
          style={{ width: "50%" }}
          dangerouslySetInnerHTML={{ __html: material.conteudo }}
        ></h3>
      </div>
    </div>
  );
}

export default MaterialDetalhe;
