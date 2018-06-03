import React from 'react'
import { withRouter, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const Protegido = ({ component: Component, ...rest }) => (
  <div>
  {
<Route
      {...rest}
      render={props =>
        rest.logado ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  }
  </div>
);

const mapStateToProps = (store) => {
  const token = store.api.token
  const logado = store.api.logado
  return {
    token,
    logado
  }
}

export default withRouter(
  connect(mapStateToProps)(Protegido)
);