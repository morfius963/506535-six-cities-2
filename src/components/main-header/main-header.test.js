import React from "react";
import renderer from "react-test-renderer";
import MainHeader from "./main-header.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(<MainHeader />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
