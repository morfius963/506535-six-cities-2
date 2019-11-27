import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import App from "./components/app/app";
import createAPI from "./api";
import appData from "./store/reducers/app-data/app-data";
import user from "./store/reducers/user/user";
import ActionCreator from "./store/actions/action-creator";
import history from "./history";

const init = () => {
  const reducer = combineReducers({
    appData,
    user
  });
  const api = createAPI(() => history.push(`/login`));
  const store = createStore(
      reducer,
      applyMiddleware(thunk.withExtraArgument(api)),
  );
  const userData = localStorage.getItem(`userData`);

  if (userData) {
    store.dispatch(ActionCreator.singIn(JSON.parse(userData)));
  }

  ReactDOM.render(
      <Provider store={store} >
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();