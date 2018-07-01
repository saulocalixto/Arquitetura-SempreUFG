import React, { Component } from "react";
import * as Map from "./Maps.js";
import { connect } from "react-redux";
import Carrocel from './Carrocel.js'

class HomeAluno extends Component {
  componentDidMount = () => {
    this.props.pegaTodosEventos(this.props.token);
    this.props.pegaTodosDadosDoUsuario(this.props.token);
     this.props.reseteEvento();
  };

  render() {
      return (
      <div>
         <Carrocel /> 
      </div>
      )}
}

export default connect(Map.mapStateToProps, Map.mapDispatchToProps)(HomeAluno);
