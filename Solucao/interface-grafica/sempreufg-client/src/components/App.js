import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter, Switch, Route } from "react-router-dom"
import * as Map from "./Maps.js"
import * as AppCss from "../style/PostsCss.js"
import Menu from "./Menu.js"
import Login from './Login.js'
import Protegido from './Protegido.js'
import Evento from './Evento.js'
import { Panel } from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Menu tipoSort={this.tipoSort} />
        <div className='conteudo'>
          <div style={AppCss.postagens}>
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Painel de interação</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Login />
                    )}
                  />
                  <Protegido path="/autenticado" component={Evento} />
                </Switch>
              </Panel.Body>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(Map.mapDispatchToProps)(App)
);
