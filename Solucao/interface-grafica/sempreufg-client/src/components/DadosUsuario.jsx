import React, { Component } from "react";
import { titulo, containerLogin } from "../style/PostsCss.js";
import * as Map from "./Maps.js";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import {
    Panel,
} from "react-bootstrap";

class DadosUsuario extends Component {
    render() {
        const dadoUsuario = this.props.dados.find(x => x.usuario === 'admin');
        return (
            <div style={containerLogin}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Dados do Usuário</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <span style={titulo}>Usuário: </span><span>{dadoUsuario.usuario}</span>
                        <br />
                        <span style={titulo}>Nome: </span><span>{dadoUsuario.nome}</span>
                        <br />
                        <span style={titulo}>Sexo: </span><span>{dadoUsuario.sexo}</span>
                        <br />
                        <span style={titulo}>Nascimento: </span><span>{dadoUsuario.dataNascimento}</span>
                        <br />
                        <span style={titulo}>Nome da Mãe: </span><span>{dadoUsuario.nomeMae}</span>
                        <br />
                        <span style={titulo}>E-mail: </span><span>{dadoUsuario.email}</span>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    const token = store.api.token
    const dados = store.api.dadosUsuario
    return {
        token,
        dados
    }
}

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(DadosUsuario));
