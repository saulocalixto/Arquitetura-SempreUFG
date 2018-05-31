import {
  fetchLiberaAcesso,
  fetchPegaEvento,
} from '../actions'

export const mapStateToProps = (store) => {
  const posts = store.posts;
  const categorias = store.categorias
  const comentarios = store.comentarios
  return {
    ...posts,
    ...categorias,
    ...comentarios
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    Login: (user, password, history) => dispatch(fetchLiberaAcesso(user, password, history)),
    pegaEvento: (token, id) => dispatch(fetchPegaEvento(token, id)),
  }
}