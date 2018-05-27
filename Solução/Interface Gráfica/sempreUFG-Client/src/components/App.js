import React, { Component } from "react";
import * as PostsCss from "../style/PostsCss.js";
import NovoPost from "./Posts/NovoPost.js";
import * as Map from "./Maps.js";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Menu from "./Menu.js";
import { withRouter, Switch } from "react-router-dom";
import * as AppCss from "../style/PostsCss.js";
import Login from './Login.js'
import { 
  Button,
  Panel,
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox } from "react-bootstrap";
import Protegido from './Protegido.js'
import Evento from './Evento.js'

class App extends Component {
  render() {
    const { posts, loading, categorias } = this.props;
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

const mapStateToProps = store => {
  const posts = store.posts;
  const categorias = store.categorias;
  return {
    ...posts,
    ...categorias
  };
};

export default withRouter(
  connect(mapStateToProps, Map.mapDispatchToProps)(App)
);
