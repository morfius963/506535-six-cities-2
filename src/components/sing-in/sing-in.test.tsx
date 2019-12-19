import * as React from "react";
import * as renderer from "react-test-renderer";
import SingIn from "./sing-in";
import MainHeader from "../main-header/main-header";

jest.mock(`../main-header/main-header`, () => jest.fn().mockReturnValue(null));
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

    expect(MainHeader).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
