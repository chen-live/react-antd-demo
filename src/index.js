import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from "./redux"
import routes from "./router"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App.old"

ReactDOM.render(
  // <Provider store={store}>
  //   <Router routes={routes}>
  //     {routes}
  //   </Router>
  // </Provider>,
  <App/>,
  document.getElementById('root')
);
