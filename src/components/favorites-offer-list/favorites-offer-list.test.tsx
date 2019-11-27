import * as React from "react";
import * as renderer from "react-test-renderer";
import FavoritesOfferList from "./favorites-offer-list";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      city: `Amsterdam`,
      renderOffers: jest.fn()
    };

    const tree = renderer
      .create(<FavoritesOfferList {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
