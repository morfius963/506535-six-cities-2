import * as React from "react";
import * as renderer from "react-test-renderer";

import MainPage from "./main-page";
import Cities from "../cities/cities";
import MainHeader from "../main-header/main-header";
import OffersList from "../offers-list/offers-list";
import fixtureData from "../../__fixtures__/offers";

jest.mock(`../offers-list/offers-list`, () => jest.fn().mockReturnValue(null));
jest.mock(`../main-header/main-header`, () => jest.fn().mockReturnValue(null));
jest.mock(`../cities/cities`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`App correctly renders`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const props = {
      allCities: [`Amsterdam`, `Paris`, `Hamburg`],
      city: `Amsterdam`,
      activeOffers,
      activeSort: `Popular`,
      userData: {
        email: `morf@gmail.com`
      },
      isAuthorizationRequired: false,
      onFavoriteCardToggle: jest.fn(),
      onOffersSort: jest.fn(),
      onCityClick: jest.fn(),
    };

    const tree = renderer
      .create(<MainPage {...props} />)
      .toJSON();

    expect(Cities).toHaveBeenCalled();
    expect(OffersList).toHaveBeenCalled();
    expect(MainHeader).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
