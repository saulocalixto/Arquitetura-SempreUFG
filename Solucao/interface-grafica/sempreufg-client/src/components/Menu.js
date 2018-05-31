import React from 'react'
import { Navbar } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Menu = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link className="main" to="/">
            sempreUFG!
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  )
}

export const mapStateToProps = (store) => {
  const categorias = store.categorias
  return {
    ...categorias,
  }
}

export default withRouter(
  connect(mapStateToProps)(Menu)
);