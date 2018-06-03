import * as Type from '../actions/type.js';
import { combineReducers } from "redux";

export const initialState = {
  logado: false,
  eventos: [],
};

function api(state = initialState, action) {
  let evento;
  let eventos;
  switch (action.type) {
    case Type.LIBERA_ACESSO: {
      const token = action.token
      const logado = token.access_token !== undefined
        ? true
        : false;
      return {
        ...state,
        token,
        logado
      }
    }
    case Type.PEGA_EVENTO: {
      evento = action.evento;
      return {
        ...state,
        evento
      }
    }
    case Type.CADASTRA_EVENTO: {
      evento = action.evento;
      eventos = state.eventos;
      eventos.push(evento);
      return {
        ...state,
        eventos
      }
    }
    case Type.PEGAR_TODOS_EVENTOS: {
      eventos = action.eventos;
      return {
        ...state,
        eventos
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  api,
});
