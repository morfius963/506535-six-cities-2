import React from "react";
import renderer from "react-test-renderer";
import CommentsList from "./comments-list.jsx";
import CommentItem from "../comment-item/comment-item.jsx";
import {commentsData} from "../../__fixtures__/offers.js";

jest.mock(`../comment-item/comment-item.jsx`, () => jest.fn().mockReturnValue(null));

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
