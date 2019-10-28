import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import fixtureData from "../../__mocks__/offers.js";

jest.mock(`../offers-list/offers-list.jsx`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`App correctly renders`, () => {
    const tree = renderer
      .create(
          <MainPage
            places = {fixtureData}
          />
      )
      .toJSON();
    expect(OffersList).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
