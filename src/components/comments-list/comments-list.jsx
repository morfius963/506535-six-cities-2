import React from "react";
import CommentItem from "../comment-item/comment-item.jsx";

const CommentsList = () => {
  return (
    <ul className="reviews__list">
      <CommentItem />
    </ul>
  );
};

export default CommentsList;
