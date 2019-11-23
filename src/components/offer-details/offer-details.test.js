import React from "react";
import renderer from "react-test-renderer";
import OfferDetails from "./offer-details.jsx";
import MainHeader from "../main-header/main-header.jsx";
import fixtureData from "../../__fixtures__/offers.js";

jest.mock(`../main-header/main-header.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      offers: fixtureData,
      location: {
        state: {
          id: 0
        }
      },
      userData: {
        email: `Vitalii`
      },
      isAuthorizationRequired: true,
      onFavoriteCardToggle: jest.fn()
    };

    const tree = renderer
      .create(<OfferDetails {...props} />)
      .toJSON();

    expect(MainHeader).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
