import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import Map from "../map/map.jsx";
import OffersSort from "../offers-sort/offers-sort.jsx";
import fixtureData from "../../__fixtures__/offers.js";

jest.mock(`../map/map.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../offer-card/offer-card.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../offers-sort/offers-sort.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const props = {
      offers: activeOffers,
      activeCity: `Amsterdam`,
      activeCardId: 0,
      cardMouseEnterHandler: jest.fn(),
      sortOffers: jest.fn(),
      activeSort: `Popular`
    };

    const tree = renderer
      .create(<OffersList {...props} />)
      .toJSON();

    expect(Map).toHaveBeenCalled();
    expect(OfferCard).toHaveBeenCalled();
    expect(OffersSort).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
