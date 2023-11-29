import "./styles.css";

function Home() {
  const redirectToCalendario = () => {
    window.location.href = "/app/eventos_calendario";
  };

  const redirectToMateriais = () => {
    window.location.href = "/app/materiais";
  };

  return (
    <div>
      <div className="row"></div>
      <div className="row">
        <button type="button" onClick={redirectToCalendario}>
          Calendário Acadêmico
        </button>
      </div>
      <div className="row" onClick={redirectToMateriais}>
        <button type="button">Conteúdo Escolar</button>
      </div>
      <div className="row">
        <button type="button">Teste</button>
      </div>
    </div>
  );
}

export default Home;
