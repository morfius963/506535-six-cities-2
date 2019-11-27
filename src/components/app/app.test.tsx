import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
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
    favoriteOffers: fixtureData,
    comments: [],
    isOffersLoading: false
  };
  const user = {
    city: `Amsterdam`,
    activeSort: `Popular`,
    isAuthorizationRequired: true,
    email: `marf@gmail.com`,
    isPro: true
  };

  const history = createBrowserHistory();
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    appData,
    user
  });

  it(`Component correctly renders`, () => {
    const props = {
      onCityClick: jest.fn(),
      onOffersSort: jest.fn(),
      onOffersLoad: jest.fn(),
      onUserDataPost: jest.fn(),
      onFavoriteCardToggle: jest.fn(),
      onFavoriteOffersLoad: jest.fn(),
      onCommentsLoad: jest.fn(),
      onReviewSubmit: jest.fn()
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
