import React from 'react'
import { Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import * as Map from "./Maps.js"
import { LinkContainer } from 'react-router-bootstrap';


const Menu = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link className="main" to="/home">
            sempreUFG!
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      {props.logado ? (
        <Navbar.Collapse>

          <Nav pullLeft>
            <NavItem eventKey={1}>
            <Link className='evento' to='/evento'>
              <div style={{color:'#999999'}}>Eventos</div>
            </Link>
              </NavItem>
            <NavItem eventKey={2} href="#">
              Política
              </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Aluno" id="basic-nav-dropdown">
            <LinkContainer className='usuario' to='/usuario'><MenuItem eventKey={3.1}>Consultar Dados</MenuItem></LinkContainer>
              <MenuItem eventKey={3.2}>Atualizar Dados</MenuItem>
              <MenuItem eventKey={3.3}>Emitir Relatório</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Configurações</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="/">
              Logout
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      ) : (<Navbar.Collapse>
        <Nav pullRight> </Nav>
      </Navbar.Collapse>)}
    </Navbar>
  )
}


export default withRouter(
  connect(Map.mapStateToProps)(Menu)
);