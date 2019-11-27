import React from "react";
import renderer from "react-test-renderer";
import SingIn from "./sing-in.jsx";

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      city: `Amsterdam`,
      onUserInput: jest.fn(),
      onFormSubmit: jest.fn()
    };

    const tree = renderer
      .create(<SingIn {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
