import React, { Component } from "react";
import { containerLogin } from "../style/PostsCss.js";
import * as Map from "./Maps.js";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Col,
    ControlLabel,
    FormControl,
    Panel,
    Button
} from "react-bootstrap";
import DatePicker from 'react-bootstrap-date-picker'

class FormularioCadastraEvento extends Component {

    cadastraEvento = (event) => {
        event.preventDefault();
        const formulario = event.target;
        const assunto = formulario.assuntoID.value;
        const descricao = formulario.descricaoID.value;
        const dataHoraSolicitacaoDivulgacao = formulario.dataID.value;
        const local = formulario.localID.value;

        const evento = {
            assunto,
            descricao,
            local,
            dataHoraSolicitacaoDivulgacao
        }

        this.props.cadastraEvento(this.props.token, evento).then(resolve => {
            this.props.history.push("/home");
        })
    }

    render() {
        return (
            <div style={containerLogin}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Registrar Evento</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Form horizontal onSubmit={this.cadastraEvento}>
                            <FormGroup controlId="assuntoID">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Assunto
                            </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="Assunto" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="descricaoID">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Descrição
                                </Col>
                                <Col sm={10}>
                                    <FormControl componentClass="textarea" placeholder="Descrição" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="localID">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Local
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="Local" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="dataID">
                            <Col componentClass={ControlLabel} sm={2}>
                                    Data
                            </Col>
                            <Col sm={10}>
                                <DatePicker dateFormat='DD/MM/YYYY' />
                            </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">Entrar</Button>
                                </Col>
                            </FormGroup>
                        </Form>
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
        logado
    }
}

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(FormularioCadastraEvento));
