import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router";
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers'
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css";

var hist = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={ store } >
    <BrowserRouter history={hist}><Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch></BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
