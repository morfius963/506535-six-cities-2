import React from "react";
import renderer from "react-test-renderer";
import MainHeader from "./main-header.jsx";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      userData: {
        name: `Vitalii`,
        avatar: ``
      },
      isAuthorizationRequired: true
    };

    const tree = renderer
      .create(<MainHeader {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
