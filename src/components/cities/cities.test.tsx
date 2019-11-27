import * as React from "react";
import * as renderer from "react-test-renderer";
import Cities from "./cities";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const allCities = [`Amsterdam`, `Hamburg`, `Paris`];
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
