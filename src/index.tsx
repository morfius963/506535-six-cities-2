import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import App from "./components/app/app";
import Operation from "./store/actions/async-actions";
import createAPI from "./api";
import appData from "./store/reducers/app-data/app-data";
import user from "./store/reducers/user/user";
import ActionCreator from "./store/actions/action-creator";
import history from "./history";
import withScreenSwitch from "./hocs/with-screen-switch/with-screen-switch";

const AppWrapped = withScreenSwitch(App);

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

  store.dispatch(Operation.loadHotels());

  ReactDOM.render(
      <Provider store={store} >
        <Router history={history}>
          <AppWrapped />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();