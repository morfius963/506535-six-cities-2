import * as React from "react";
import * as renderer from "react-test-renderer";
import CommentItem from "./comment-item";
import {commentsData} from "../../__fixtures__/offers";

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      commentData: commentsData[0]
    };

    const tree = renderer
      .create(<CommentItem {...props} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
