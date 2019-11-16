import React from "react";
import renderer from "react-test-renderer";
import MainHeader from "./main-header.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      userData: {
        name: `Vitalii`,
        avatar: ``
      },
      requireAuthorization: jest.fn()
    };

    const tree = renderer
      .create(<MainHeader {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
