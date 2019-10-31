import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";
import fixtureData from "../../__fixtures__/offers.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(
          <OfferCard
            offerData = {fixtureData[0]}
            id={0}
            cardMouseEnterHandler = {jest.fn()}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
