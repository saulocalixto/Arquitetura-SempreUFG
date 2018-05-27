import * as Api from '../api/Api.js'
import * as Type from './type.js';

export const fetchLiberaAcesso = (user, password, history) => dispatch => (
  Api.getToken(user, password).then((token) => {
    dispatch(liberaAcesso(token, history))
  }, erro => console.log(`Algo de errado não deu certo: ${erro}`))
);

export const liberaAcesso = (token, history) => {
  return {
    type: Type.LIBERA_ACESSO,
    token,
    history
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