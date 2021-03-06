import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter, Switch, Route } from "react-router-dom"
import * as Map from "./Maps.js"
import Menu from "./Menu.js"
import Login from './Login.js'
import CadastrarEvento from './FormularioCadastraEvento'
import Protegido from './Protegido.js'
import HomeAluno from './HomeAluno.js'
import DadosUsuario from './DadosUsuario.jsx'
import ServidorForaDoAr from './ServidorForaDoAr.jsx'
import { padding } from '../style/PostsCss'


class App extends Component {
  render() {
    return (
      <div className="wrap" style={padding(10)}>
        <Menu tipoSort={this.tipoSort} />
        <div className='conteudo'>
          <div>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Login />
                    )}
                  />
                  <Protegido path="/home" component={HomeAluno} />
                  <Protegido path='/evento' component={CadastrarEvento} />
                  <Protegido path='/usuario' component={this.props.dados.length > 0 ? DadosUsuario : ServidorForaDoAr} />
                </Switch>
          </div>
        </div>
        <footer className="navbar-fixed-bottom">
					<div className="container">
						<div className="row">
							<p>SempreUFG: <a href="www.ufg.br">UFG</a> </p>
						</div>
					</div>
				</footer>
      </div>
    );
  }
}

export default withRouter(
  connect(Map.mapStateToProps, Map.mapDispatchToProps)(App)
);
