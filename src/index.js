import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "semantic-ui-css/semantic.min.css";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
