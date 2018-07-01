import React, { Component } from "react";
import { loginErro, containerLogin } from "../style/PostsCss.js";
import * as Map from "./Maps.js";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import {
    Panel,
    Alert
} from "react-bootstrap";

class ServidorForaDoAr extends Component {
    render() {
        return (
            <div style={containerLogin}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Dados do Usuário</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    <Alert bsStyle="danger" style={loginErro}>
                                <strong>Erro 404!</strong> <br />Sem conexão com o servidor!
                                </Alert>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}


export default withRouter(connect(Map.mapDispatchToProps)(ServidorForaDoAr));
