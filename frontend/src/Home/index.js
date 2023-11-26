import "./styles.css";

function Home() {
  const redirectToCalendario = () => {
    window.location.href = "/app/eventos_calendario";
  };

  return (
    <div>
      <div className="home-row">
        <button type="button" onClick={redirectToCalendario}>
          Calendário Acadêmico
        </button>
      </div>
      <div className="home-row">
        <button type="button">Teste</button>
      </div>
      <div className="home-row">
        <button type="button">Teste</button>
      </div>
    </div>
  );
}

export default Home;
