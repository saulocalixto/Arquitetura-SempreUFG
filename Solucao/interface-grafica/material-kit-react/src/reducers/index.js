import * as Type from '../actions/type.js';
import { combineReducers } from "redux";

export const initialState = {
  logado: false,
  api: [],
};

function api(state = initialState, action) {
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
      const evento = action.evento;
      console.log(evento);
      return {
        ...state,
        evento
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  api,
});
