import axios from "axios";
import { getUsuarioLogado } from "./util";

const token = getUsuarioLogado()?.token;
const API_URL = "http://localhost:8080";

if (token) axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export function authenticate(payload) {
  return axios.post(`${API_URL}/autenticacao/login`, payload);
}

export function fetchTurmas() {
  return axios(`${API_URL}/turmas`);
}

export function fetchEventos(turmaId) {
  return axios(`${API_URL}/eventos_calendario?turmaId=${turmaId}`);
}

export function salvarEvento(evento) {
  return axios.post(`${API_URL}/eventos_calendario`, evento);
}

export function fetchDisciplinas(turmaId) {
  return axios(`${API_URL}/disciplinas?turmaId=${turmaId}`);
}

export function fetchMateriais(disciplinaId) {
  return axios(`${API_URL}/materiais?disciplinaId=${disciplinaId}`);
}

export function getMaterial(id) {
  return axios(`${API_URL}/materiais/${id}`);
}
