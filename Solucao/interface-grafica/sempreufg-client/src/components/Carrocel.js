import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import * as Map from "./Maps.js"
import { carrocel, carrocelCaption } from '../style/PostsCss'
import {
    Carousel,
} from 'react-bootstrap'
import imagemEvento from '../imagens/evento.png'

class Carrocel extends Component {

    pegaEvento = (idEvento) => {
        this.props.pegaEvento(this.props.token, idEvento).then(resolve => {
            this.props.history.push("/evento");
        })
    }

    render() {
        return (
            <Carousel style={carrocel}>
                <Carousel.Item>
                    <img width={'1000'} height={'230'} alt="900x500" 
                        src={imagemEvento} />
                    <Carousel.Caption style={carrocelCaption}>
                        <h3>sempreUFG</h3>
                        <p>Um lugar para tratar todas as questões acadêmicas!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {this.props.eventos.map(evento => (
                    <Carousel.Item key={evento.id} onClick={() => this.pegaEvento(evento.id)}>
                        <img width={'1000'} height={'230'} alt="900x350" 
                            src={imagemEvento} />
                        <Carousel.Caption style={carrocelCaption}>
                            <h3>{evento.assunto}</h3>
                            <p>{evento.descricao}</p>
                            <p><strong>Local: </strong>{evento.local}</p>
                            <p><strong>Data: </strong>{evento.dataHoraSolicitacaoDivulgacao}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

export default withRouter(
    connect(Map.mapStateToProps, Map.mapDispatchToProps)(Carrocel)
);