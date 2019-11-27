import * as React from "react";
import * as renderer from "react-test-renderer";
import OffersList from "./offers-list";
import OfferCard from "../offer-card/offer-card";
import Map from "../map/map";
import OffersSort from "../offers-sort/offers-sort";
import fixtureData from "../../__fixtures__/offers";

jest.mock(`../map/map`, () => jest.fn().mockReturnValue(null));
jest.mock(`../offer-card/offer-card`, () => jest.fn().mockReturnValue(null));
jest.mock(`../offers-sort/offers-sort`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const props = {
      offers: activeOffers,
      activeCity: `Amsterdam`,
      activeCardId: 0,
      activeSort: `Popular`,
      onFavoriteCardToggle: jest.fn(),
      onCardMouseEnter: jest.fn(),
      onOffersSort: jest.fn(),
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
