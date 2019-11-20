import React from "react";
import renderer from "react-test-renderer";

import MainPage from "./main-page.jsx";
import Cities from "../cities/cities.jsx";
import MainHeader from "../main-header/main-header.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import fixtureData from "../../__fixtures__/offers.js";

jest.mock(`../offers-list/offers-list.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../main-header/main-header.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../cities/cities.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`App correctly renders`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const props = {
      allCities: [`Amsterdam`, `Paris`, `Hamburg`],
      city: `Amsterdam`,
      onCityClick: jest.fn(),
      activeOffers,
      sortOffers: jest.fn(),
      activeSort: `Popular`,
      userData: {
        name: `Vitalii`,
        avatar: ``
      },
      requireAuthorization: false,
      toggleFavoriteCard: jest.fn()
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
