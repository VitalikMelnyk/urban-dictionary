import React from "react";
import ReactDOM from "react-dom";
// redux tools
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/reducers";
import "./index.css";
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/aos/dist/aos.css";

import * as serviceWorker from "./serviceWorker";
const thunkExample = applyMiddleware(thunk);
// const devtools = composeWithDevTools();
// const enhanced = {
//   thunkExample,
//   devtools
// };

const store = createStore(rootReducer, thunkExample);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
