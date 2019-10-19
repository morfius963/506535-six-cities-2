import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import fixtureData from "../../__fixtures__/data.js";

describe(`snapshot test`, () => {
  it(`App correctly renders`, () => {
    const clickHandler = jest.fn();
    const tree = renderer
      .create(<MainPage
        places = {fixtureData.cardItems}
        onTitleClick = {clickHandler}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
