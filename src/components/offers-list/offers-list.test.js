import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";
import fixtureData from "../../mocks/offers.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(
          <OffersList
            offers = {fixtureData}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
