import React from 'react';
import {mount} from 'enzyme';
import withCommentSubmit from "./with-comment-submit.jsx";
import CommentForm from "../../components/comment-form/comment-form.jsx";

const CommentFormWrapped = withCommentSubmit(CommentForm);

describe(`e2e test`, () => {
  it(`Submit func will calls with correct data`, () => {
    const postCommentHandler = jest.fn();
    const userInputHandler = jest.fn();

    const ref = {
      current: document.createElement(`form`)
    };
    const evt = {
      currentTarget: {
        name: `review`,
        value: `qwertyuiop`
      },
      preventDefault: jest.fn()
    };
    const commentData = {
      rating: 1,
      comment: evt.currentTarget.value
    };

    const props = {
      onReviewSubmit: postCommentHandler,
      onUserInput: userInputHandler,
      id: 1,
      onFormSubmit: jest.fn(),
      formRef: ref,
      isValid: true
    };

    // это для обработки ref
    jest.spyOn(React, `createRef`).mockImplementation(() => ref);

    const component = mount(<CommentFormWrapped {...props} />);
    const form = component.find(`.reviews__form`);

    component.setState({rating: 1, review: evt.currentTarget.value});
    form.simulate(`submit`, evt);

    expect(postCommentHandler).toHaveBeenCalledWith(props.id, commentData);
  });
});
