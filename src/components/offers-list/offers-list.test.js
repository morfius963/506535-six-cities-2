import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import fixtureData from "../../__fixtures__/offers.js";

jest.mock(`../offer-card/offer-card.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(
          <OffersList
            offers = {fixtureData}
          />
      )
      .toJSON();
    expect(OfferCard).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
