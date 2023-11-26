export const getUsuarioLogado = () => {
  const userJSON = localStorage.getItem("USUARIO_LOGADO");
  if (userJSON) return JSON.parse(userJSON);
  return null;
};
