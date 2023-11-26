import { React, useState } from "react";
import "./styles.css";
import logomark from "./logomark.png";
import { authenticate } from "../api";
import USUARIO_LOGADO from "../util";

function Login() {
  const [form, setForm] = useState({ matricula: "", senha: "" });
  const [onceSubmitted, setOnceSubmitted] = useState(false);

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function login() {
    if (form.matricula && form.senha) {
      authenticate(form)
        .then((response) => {
          //console.log("response.data :>> ", response.data);
          localStorage.setItem("USUARIO_LOGADO", JSON.stringify(response.data));
          window.location.replace("/app/home");
        })
        .catch((error) => {
          console.log(error);
          //alert(error.response.data.erro);
        });
    } else {
      setOnceSubmitted(true);
    }
  }

  return (
    <div className="login-bg">
      <div className="login-card">
        <div>
          <img src={logomark} className="logomark" alt="logomark" />
          <h2>Escola APP</h2>
        </div>

        <div className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input
              name="matricula"
              value={form.matricula}
              onInput={(e) => updateField(e)}
              type="text"
              required
            />
            <span className="omrs-input-label">Email</span>
            {onceSubmitted && !form.matricula && (
              <span className="omrs-input-helper">*matricula obrigatória</span>
            )}
          </label>
        </div>

        <div className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input
              name="senha"
              value={form.senha}
              onInput={(e) => updateField(e)}
              type="password"
              required
            />
            <span className="omrs-input-label">Senha</span>
            {onceSubmitted && !form.senha && (
              <span className="omrs-input-helper">*senha obrigatória</span>
            )}
          </label>
        </div>

        <button onClick={login} className="mt-15" type="button">
          ENTRAR
        </button>

        {/* <div className="mt-15">
          <a href="#">Cadastre-se</a>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
