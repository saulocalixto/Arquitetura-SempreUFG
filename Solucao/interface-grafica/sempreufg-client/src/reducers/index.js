import * as Type from '../actions/type.js';
import { combineReducers } from "redux";

export const initialState = {
  logado: false,
  eventos: [],
  dadosUsuario: [],
  evento: undefined,
};

function api(state = initialState, action) {
  let evento;
  let eventos;
  let dadosUsuario;
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
    case Type.DELETE_EVENTO: {
      const id = action.id;
      eventos = eventos.filter(x => x.id !== id);
      return {
        ...state,
        evento
      }
    }
    case Type.RESETA_EVENTO: {
      evento = undefined;
      return {
        ...state,
        evento
      }
    }
    case Type.CADASTRA_EVENTO: {
      evento = action.evento;
      eventos = state.eventos;
      evento.id ? eventos.map(x => { return x.id === evento.id ? evento : x}) : eventos.push(evento);
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
    case Type.PEGA_TODOS_DADOS: {
      dadosUsuario = action.dadosUsuario;
      return {
        ...state,
        dadosUsuario
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  api,
});
