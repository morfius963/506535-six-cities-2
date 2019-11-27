import * as React from "react";
import * as renderer from "react-test-renderer";
import CommentsList from "./comments-list";
import CommentItem from "../comment-item/comment-item";
import {commentsData} from "../../__fixtures__/offers";

jest.mock(`../comment-item/comment-item`, () => jest.fn().mockReturnValue(null));

describe(`snapshot test`, () => {
  it(`Component correctly renders`, () => {
    const props = {
      comments: commentsData,
      id: 1,
      onCommentsLoad: jest.fn()
    };

    const tree = renderer
      .create(<CommentsList {...props} />)
      .toJSON();

    expect(CommentItem).toHaveBeenCalled();
    expect(tree).toMatchSnapshot();
  });
});
