import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      city: `Amsterdam`
    };

    const tree = renderer
      .create(<MainEmpty {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
