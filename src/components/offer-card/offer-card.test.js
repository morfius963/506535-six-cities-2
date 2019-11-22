import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";
import fixtureData from "../../__fixtures__/offers.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      offerData: fixtureData[0],
      id: 0,
      onCardMouseEnter: jest.fn(),
      onFavoriteCardToggle: jest.fn()
    };

    const tree = renderer
      .create(<OfferCard {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
