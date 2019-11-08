import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import Map from "../map/map.jsx";
import fixtureData from "../../__fixtures__/offers.js";

jest.mock(`../offer-card/offer-card.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../map/map.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const activeOffers = fixtureData.filter((offer) => offer.city.name === `Amsterdam`);
    const props = {
      offers: activeOffers,
      activeCity: `Amsterdam`
    };

    const tree = renderer
      .create(<OffersList {...props} />)
      .toJSON();

    expect(Map).toHaveBeenCalled();
    expect(OfferCard).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
