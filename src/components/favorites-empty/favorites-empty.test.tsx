import * as React from "react";
import * as renderer from "react-test-renderer";
import FavoriteEmpty from "./favorites-empty";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(<FavoriteEmpty />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
