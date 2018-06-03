import React, { Component } from "react";
import * as Map from "./Maps.js";
import { connect } from "react-redux";
import Carrocel from './Carrocel.js'

class HomeAluno extends Component {
  componentDidMount = () => {
     this.props.pegaEvento(this.props.token, 1);
  };

  render() {
      return (
      <div>
         <Carrocel /> 
      </div>
      )}
}

export default connect(Map.mapStateToProps, Map.mapDispatchToProps)(HomeAluno);
