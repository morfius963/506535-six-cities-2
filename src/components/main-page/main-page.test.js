import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import fixtureData from "../../mocks/offers.js";

describe(`snapshot test`, () => {
  it(`App correctly renders`, () => {
    const tree = renderer
      .create(
          <MainPage
            places = {fixtureData}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
