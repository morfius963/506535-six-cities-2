import React from "react";
import {isEqual} from "lodash";
import propTypes from "./prop-types.js";
import CommentItem from "../comment-item/comment-item.jsx";

class CommentsList extends React.Component {
  constructor(props) {
    super(props);

    this._MAX_COMMENTS_COUNT = 10;

    this._loadComments();
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  componentDidUpdate() {
    this._loadComments();
  }

  render() {
    const {comments} = this.props;

    return (
      <ul className="reviews__list">
        {
          comments
            .slice(0, this._MAX_COMMENTS_COUNT)
            .sort((a, b) => a.date > b.date ? 1 : -1)
            .map((comment) => <CommentItem key={`${comment.id}-${comment.rating}`} commentData={comment} />)
        }
      </ul>
    );
  }

  _loadComments() {
    const {id, onCommentsLoad} = this.props;

    onCommentsLoad(id);
  }
}

CommentsList.propTypes = propTypes;

export default CommentsList;
