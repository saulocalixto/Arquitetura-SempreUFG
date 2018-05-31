import React, { Component } from "react";
import * as Map from "./Maps.js";
import { connect } from "react-redux";

class Evento extends Component {
  componentDidMount = () => {
    // this.props.pegaEvento(this.props.token, 1);
  };

  render() {
      return (
      <div>
          <div>Você está logado e agora está apto a usar todas as funcionalidades disponíveis para o seu usuário!</div>
      </div>
      )}
}

const mapStateToProps = (store) => {
    const token = store.api.token
    const logado = store.api.logado
    return {
        token,
        logado
    }
}

export default connect(mapStateToProps, Map.mapDispatchToProps)(Evento);
