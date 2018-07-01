import {
  fetchLiberaAcesso,
  fetchPegaEvento,
  fetchCadastraEvento,
  fetchPegaTodosEventos,
  resetaEvento,
  fetchDeletaEvento,
  fetchPegaTodosDados,
} from '../actions'

export const mapStateToProps = (store) => {
  const token = store.api.token
  const logado = store.api.logado
  const eventos = store.api.eventos
  const dados = store.api.dadosUsuario
  return {
      token,
      logado,
      eventos,
      dados
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    Login: (user, password) => dispatch(fetchLiberaAcesso(user, password)),
    pegaEvento: (token, id) => dispatch(fetchPegaEvento(token, id)),
    cadastraEvento: (token, evento) => dispatch(fetchCadastraEvento(token, evento)),
    pegaTodosEventos: (token) => dispatch(fetchPegaTodosEventos(token)),
    pegaTodosDadosDoUsuario: (token) => dispatch(fetchPegaTodosDados(token)),
    deletaEvento: (token, id) => dispatch(fetchDeletaEvento(token, id)),
    reseteEvento: () => dispatch(resetaEvento()),
  }
}