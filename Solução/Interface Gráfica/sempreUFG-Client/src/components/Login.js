import React, { Component } from "react";
import * as AppCss from "../style/PostsCss.js";
import * as Map from "./Maps.js";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import {
    Button,
    Form,
    FormGroup,
    Col,
    ControlLabel,
    FormControl,
    Checkbox
} from "react-bootstrap";

class Login extends Component {

    login = (event) => {
        event.preventDefault();
        const formulario = event.target;
        const usuario = formulario.usuarioID.value;
        const senha = formulario.senhaID.value;
        this.props.history.push("/autenticado");
        this.props.Login(usuario, senha, this.props.history);
    }

    render() {
        return (
            <div>
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
                        <Checkbox>Lembre-me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Entrar</Button>
                    </Col>
                </FormGroup>
            </Form>
            {this.props.history.location.state !== undefined 
                && this.props.history.location.state.from.pathname === '/autenticado' 
                    ? <div style={AppCss.falhaLogin}>Usuário ou senha incorretos!</div>
            : <div></div>}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    const token = store.api.token
    const logado = store.api.logado
    return {
        token,
        logado
    }
}

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(Login));
