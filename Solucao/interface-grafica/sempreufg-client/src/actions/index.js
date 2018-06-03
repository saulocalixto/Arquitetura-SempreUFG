import * as Api from '../api/Api.js'
import * as Type from './type.js';

export const fetchLiberaAcesso = (user, password, history) => dispatch => (
  Api.getToken(user, password).then((token) => {
    dispatch(liberaAcesso(token, history))
  }, erro => console.log(`Algo de errado não deu certo: ${erro}`))
);

export const liberaAcesso = (token) => {
  return {
    type: Type.LIBERA_ACESSO,
    token
  }
};

export const fetchPegaEvento = (token, id) => dispatch => (
  Api.getEvento(token, id).then((evento) => {
    dispatch(pegaEvento(evento))
  }, erro => console.log(`Algo de errado não deu certo: ${erro}`))
);

export const pegaEvento = (evento) => {
  return {
    type: Type.PEGA_EVENTO,
    evento
  }
};

export const fetchCadastraEvento = (token, evento) => dispatch => (
  Api.cadastrarEvento(token, evento).then(() => {
    dispatch(cadastraEvento(evento))
  }, erro => console.log(`Algo de errado não deu certo: ${erro}`))
);

export const cadastraEvento = (evento) => {
  return {
    type: Type.CADASTRA_EVENTO,
    evento
  }
};

export const fetchPegaTodosEventos = (token) => dispatch => (
  Api.getAllEventos(token).then((eventos) => {
    dispatch(pegaTodosEventos(eventos))
  }, erro => console.log(`Algo de errado não deu certo: ${erro}`))
);

export const pegaTodosEventos = (eventos) => {
  return {
    type: Type.PEGAR_TODOS_EVENTOS,
    eventos
  }
};