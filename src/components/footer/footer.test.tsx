import * as React from "react";
import * as renderer from "react-test-renderer";
import Footer from "./footer";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
