import React, { Component } from "react";
import { containerLogin, loginErro } from "../style/PostsCss.js";
import * as Map from "./Maps.js";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Col,
    ControlLabel,
    FormControl,
    Alert,
    Panel,
    Button
} from "react-bootstrap";

class Login extends Component {

    login = (event) => {
        event.preventDefault();
        const formulario = event.target;
        const usuario = formulario.usuarioID.value;
        const senha = formulario.senhaID.value;
        this.props.Login(usuario, senha).then(resolve => {
            this.props.pegaTodosEventos(this.props.token).then(resolve => {
                this.props.history.push("/home");
            })
        })
    }

    render() {
        return (
            <div style={containerLogin}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Login</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <Form horizontal onSubmit={this.login}>
                <FormGroup controlId="usuarioID">
                    <Col componentClass={ControlLabel} sm={2}>
                        Usuário
                        </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Usuário" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="senhaID">
                    <Col componentClass={ControlLabel} sm={2}>
                        Senha
                        </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Senha" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Entrar</Button>
                    </Col>
                </FormGroup>
            </Form>
                        {this.props.token && this.props.token.error === 'invalid_grant'
                            ?
                            <Alert bsStyle="danger" style={loginErro}>
                                <strong>Atenção!</strong> Usuário ou senha incorretos!
                                </Alert>
                            :
                            <div></div>
                        }
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    const token = store.api.token
    const logado = store.api.logado
    return {
        token,
        logado,
    }
}

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(Login));
