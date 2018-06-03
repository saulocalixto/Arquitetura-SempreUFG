import {
  fetchLiberaAcesso,
  fetchPegaEvento,
  fetchCadastraEvento,
  fetchPegaTodosEventos
} from '../actions'

export const mapStateToProps = (store) => {
  const token = store.api.token
  const logado = store.api.logado
  const eventos = store.api.eventos
  return {
      token,
      logado,
      eventos
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    Login: (user, password) => dispatch(fetchLiberaAcesso(user, password)),
    pegaEvento: (token, id) => dispatch(fetchPegaEvento(token, id)),
    cadastraEvento: (token, evento) => dispatch(fetchCadastraEvento(token, evento)),
    pegaTodosEventos: (token) => dispatch(fetchPegaTodosEventos(token)),
  }
}