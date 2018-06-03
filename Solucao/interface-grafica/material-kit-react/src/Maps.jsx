import {
  fetchLiberaAcesso,
  fetchPegaEvento,
} from './actions'

export const mapStateToProps = (store) => {
  const token = store.api.token
  const logado = store.api.logado
  return {
      token,
      logado
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    Login: (user, password) => dispatch(fetchLiberaAcesso(user, password)),
    pegaEvento: (token, id) => dispatch(fetchPegaEvento(token, id)),
  }
}