import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";

import App from "./app";
import fixtureData from "../../__fixtures__/offers";

jest.mock(`../../store/actions/async-actions`, () => ({
  Operation: {}
}));

describe(`snapshot test`, () => {
  const appData = {
    offers: fixtureData,
    isOffersLoading: false
  };
  const user = {
    city: `Amsterdam`,
    isAuthorizationRequired: true,
  };

  const history = createBrowserHistory();
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    appData,
    user
  });

  it(`Component correctly renders`, () => {
    const props = {
      onOffersLoad: jest.fn(),
      onUserDataPost: jest.fn()
    };
    const div = document.createElement(`div`);

    div.id = `map`;
    document.body.appendChild(div);

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App {...props} />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
