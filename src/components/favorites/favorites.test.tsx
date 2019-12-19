import * as React from "react";
import * as renderer from "react-test-renderer";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import Favorites from "./favorites";
import Footer from "../footer/footer";
import MainHeader from "../main-header/main-header";
import fixtureData from "../../__fixtures__/offers";

jest.mock(`../main-header/main-header`, () => jest.fn().mockReturnValue(null));
jest.mock(`../footer/footer`, () => jest.fn().mockReturnValue(null));
jest.mock(`../../store/actions/async-actions`, () => ({
  Operation: {}
}));

describe(`snapshot test`, () => {
  const appData = {
    favoriteOffers: fixtureData
  };

  const mockStore = configureStore([thunk]);
  const store = mockStore({appData});

  it(`Component correctly renders`, () => {
    const props = {
      onFavoriteCardToggle: jest.fn(),
      onFavoriteOffersLoad: jest.fn()
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <Favorites {...props} />
          </Provider>
      )
      .toJSON();

    expect(MainHeader).toHaveBeenCalled();
    expect(Footer).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
