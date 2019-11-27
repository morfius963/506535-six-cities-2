import * as React from "react";
import * as renderer from "react-test-renderer";
import CommentForm from "./comment-form";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const ref = {
      current: document.createElement(`form`)
    };
    const props = {
      onFormSubmit: jest.fn(),
      onUserInput: jest.fn(),
      formRef: ref,
      isValid: true
    };

    const tree = renderer
      .create(<CommentForm {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
