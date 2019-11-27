import React from "react";
import renderer from "react-test-renderer";
import CommentItem from "./comment-item.jsx";
import {commentsData} from "../../__fixtures__/offers.js";

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
