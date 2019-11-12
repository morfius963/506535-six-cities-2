import React from "react";
import renderer from "react-test-renderer";
import Cities from "./cities.jsx";
import fixtureData from "../../__fixtures__/offers.js";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const allCities = Array.from(new Set(fixtureData.map((offer) => offer.city.name)));
    const props = {
      cities: allCities,
      activeCity: `Amsterdam`,
      onCityClick: jest.fn(),
    };

    const tree = renderer
      .create(<Cities {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
