import React from "react";
import renderer from "react-test-renderer";
import FavoriteEmpty from "./favorites-empty.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const tree = renderer
      .create(<FavoriteEmpty />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
