import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {compose} from "recompose";
import thunk from 'redux-thunk';

import App from "./components/app/app.jsx";
import createAPI from "./api.js";
import appData from "./store/reducers/app-data/app-data.js";
import user from "./store/reducers/user/user.js";

const init = () => {
  const reducer = combineReducers({
    appData,
    user
  });
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  ReactDOM.render(
      <Provider store={store} >
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
