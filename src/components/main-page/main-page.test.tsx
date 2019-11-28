import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import MainPage from "./main-page";
import Cities from "../cities/cities";
import MainHeader from "../main-header/main-header";
import OffersList from "../offers-list/offers-list";
import fixtureData from "../../__fixtures__/offers";

jest.mock(`../offers-list/offers-list`, () => jest.fn().mockReturnValue(null));
jest.mock(`../main-header/main-header`, () => jest.fn().mockReturnValue(null));
jest.mock(`../cities/cities`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  const appData = {
    offers: fixtureData,
    activeOffers: fixtureData
  };
  const user = {
    city: `Amsterdam`,
    activeSort: `Popular`,
    email: `morf@gmail.com`,
    isAuthorizationRequired: false,
  };

  const mockStore = configureStore([]);
  const store = mockStore({
    appData,
    user
  });

  it(`App correctly renders`, () => {
    const props = {
      allCities: [`Amsterdam`, `Paris`, `Hamburg`],
      onCityClick: jest.fn(),
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <MainPage {...props} />
          </Provider>
      )
      .toJSON();

    expect(Cities).toHaveBeenCalled();
    expect(OffersList).toHaveBeenCalled();
    expect(MainHeader).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
