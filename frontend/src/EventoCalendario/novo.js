import React, { useEffect, useState } from "react";
import { fetchTurmas, salvarEvento } from "../api";
import "./styles.css";

function NovoEventoCalendario() {
  const [turmas, setTurmas] = useState([]);
  const [form, setForm] = useState({ idTurma: null, descricao: "", data: "" });
  const [onceSubmitted, setOnceSubmitted] = useState(false);

  useEffect(() => {
    fetchTurmas()
      .then((response) => setTurmas(response.data))
      .catch(() => {
        alert("Erro ao listar turmas");
      });
  }, []);

  const voltar = () => {
    window.location.href = "/app/eventos_calendario";
  };

  const salvar = () => {
    if (form.idTurma && form.descricao && form.data) {
      salvarEvento(form)
        .then((response) => {
          console.log("response.data :>> ", response.data);
          alert("sucesso!");
          voltar();
        })
        .catch(() => {
          alert("Erro ao listar eventos");
        });
    } else {
      setOnceSubmitted(true);
    }
  };

  function updateField(e) {
    let value;
    if (e.target.matches("select")) {
      value = e.target.options.selectedIndex;
    } else {
      value = e.target.value;
    }
    setForm({ ...form, [e.target.name]: value });
  }

  return (
    <div>
      <div className="row">
        <h1>Adicionar Novo Evento</h1>
      </div>

      <div className="row">
        <div className="">
          <div className="select">
            <select name="idTurma" onChange={(e) => updateField(e)}>
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
          {onceSubmitted && !form.idTurma && (
            <span className="omrs-input-helper">*turma obrigatória</span>
          )}
        </div>
        <div className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input
              name="descricao"
              value={form.descricao}
              onInput={(e) => updateField(e)}
              type="text"
              required
            />
            <span className="omrs-input-label">Descrição</span>
            {onceSubmitted && !form.descricao && (
              <span className="omrs-input-helper">*descrição obrigatória</span>
            )}
          </label>
        </div>
        <div className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input
              name="data"
              value={form.data}
              onInput={(e) => updateField(e)}
              placeholder=""
              type="datetime-local"
              required
            />
            <span className="omrs-input-label">Data</span>
            {onceSubmitted && !form.data && (
              <span className="omrs-input-helper">*data obrigatória</span>
            )}
          </label>
        </div>
      </div>

      <div className="row">
        <button type="button" className={`btn-adicionar`} onClick={voltar}>
          Voltar
        </button>

        <button type="button" className={`btn-adicionar`} onClick={salvar}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default NovoEventoCalendario;
