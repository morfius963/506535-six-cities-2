import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import OffersList from "./offers-list";
import OfferCard from "../offer-card/offer-card";
import Map from "../map/map";
import OffersSort from "../offers-sort/offers-sort";
import fixtureData from "../../__fixtures__/offers";

jest.mock(`../map/map`, () => jest.fn().mockReturnValue(null));
jest.mock(`../offer-card/offer-card`, () => jest.fn().mockReturnValue(null));
jest.mock(`../offers-sort/offers-sort`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  const appData = {
    offers: fixtureData
  };
  const user = {
    city: `Amsterdam`,
    activeSort: `Popular`
  };

  const mockStore = configureStore([]);
  const store = mockStore({
    appData,
    user
  });

  it(`Component correctly renders`, () => {
    const props = {
      activeCardId: 0,
      onFavoriteCardToggle: jest.fn(),
      onOffersSort: jest.fn()
    };

    const tree = renderer
      .create(
          <Provider store={store}>
            <OffersList {...props} />
          </Provider>
      )
      .toJSON();

    expect(Map).toHaveBeenCalled();
    expect(OfferCard).toHaveBeenCalled();
    expect(OffersSort).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
