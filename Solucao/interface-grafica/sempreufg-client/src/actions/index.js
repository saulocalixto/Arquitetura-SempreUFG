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

export const fetchDeletaEvento = (token, id) => dispatch => (
  Api.deleteEvento(token, id).then(() => {
    dispatch(deletaEvento(id))
  }, erro => console.log(`Algo de errado não deu certo: ${erro}`))
);

export const deletaEvento = (id) => {
  return {
    type: Type.DELETE_EVENTO,
    id
  }
};

export const resetaEvento = () => {
  return {
    type: Type.RESETA_EVENTO
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

export const fetchPegaTodosDados = (token) => dispatch => (
  Api.getAllDadosUsuario(token).then((dadosUsuario) => {
    dispatch(pegaTodosDados(dadosUsuario))
  }, erro => console.log(`Algo de errado não deu certo: ${erro}`))
);

export const pegaTodosDados = (dadosUsuario) => {
  return {
    type: Type.PEGA_TODOS_DADOS,
    dadosUsuario
  }
};