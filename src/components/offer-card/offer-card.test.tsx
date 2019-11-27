import * as React from "react";
import * as renderer from "react-test-renderer";
import OfferCard from "./offer-card";
import fixtureData from "../../__fixtures__/offers";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      offerData: fixtureData[0],
      onCardMouseEnter: jest.fn(),
      onFavoriteCardToggle: jest.fn(),
      isInFavoriteList: false
    };

    const tree = renderer
      .create(<OfferCard {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
