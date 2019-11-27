import * as React from "react";
import * as renderer from "react-test-renderer";
import MainEmpty from "./main-empty";

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
