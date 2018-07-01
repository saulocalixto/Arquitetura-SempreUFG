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
    Button,
    ButtonToolbar
} from "react-bootstrap";
import DatePicker from 'react-bootstrap-date-picker'

class FormularioCadastraEvento extends Component {

    cadastraEvento = (event) => {
        event.preventDefault();
        const formulario = event.target;

        if(!this.props.evento){
            this.cadastrarEvento(formulario);
        } else {
            this.AtualizarEvento(formulario);
        }
    }

    removeEvento = () => {
        this.props.deletaEvento(this.props.token, this.props.evento.id).then(resolve => {
            this.props.history.push("/home");
        })
    }

    cadastrarEvento = (formulario) => {
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

    AtualizarEvento = (formulario) => {
        const assunto = formulario.assuntoID.value;
        const descricao = formulario.descricaoID.value;
        const dataHoraSolicitacaoDivulgacao = formulario.dataID.value;
        const local = formulario.localID.value;
        const id = this.props.evento.id;

        const evento = {
            assunto,
            descricao,
            local,
            dataHoraSolicitacaoDivulgacao,
            id
        }

        this.props.cadastraEvento(this.props.token, evento).then(resolve => {
            this.props.history.push("/home");
        })
    }

    render() {
        const { evento } = this.props;
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
                                    <FormControl type="text" placeholder="Assunto" 
                                    defaultValue={evento ? evento.assunto : ''}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="descricaoID">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Descrição
                                </Col>
                                <Col sm={10}>
                                    <FormControl componentClass="textarea" placeholder="Descrição" 
                                    defaultValue={evento ? evento.descricao : ''}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="localID">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Local
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="text" placeholder="Local" 
                                    defaultValue={evento ? evento.local : ''}/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="dataID">
                            <Col componentClass={ControlLabel} sm={2}>
                                    Data
                            </Col>
                            <Col sm={10}>
                                <DatePicker dateFormat='DD/MM/YYYY' 
                                value={evento 
                                    ? evento.dataHoraSolicitacaoDivulgacao.split('/').reverse().join('-') 
                                    : null}/>
                            </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                <ButtonToolbar>
                                <Button bsStyle="primary" type="submit">{evento ? 'Atualizar' : 'Salvar'}</Button>
                                {
                                evento ?
                                        <Button onClick={this.removeEvento} bsStyle="danger">Remover</Button>
                                    : <div></div>
                                }
                                </ButtonToolbar>  
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
    const evento = store.api.evento
    return {
        token,
        logado,
        evento
    }
}

export default withRouter(connect(mapStateToProps, Map.mapDispatchToProps)(FormularioCadastraEvento));
