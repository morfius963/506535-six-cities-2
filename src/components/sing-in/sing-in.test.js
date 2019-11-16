import React from "react";
import renderer from "react-test-renderer";
import SingIn from "./sing-in.jsx";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      city: `Amsterdam`,
      userInputHandler: jest.fn(),
      formSubmitHandler: jest.fn()
    };

    const tree = renderer
      .create(<SingIn {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
