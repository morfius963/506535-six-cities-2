import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
