import * as React from "react";
import {Props} from "./interface";

const CommentItem = ({commentData}: Props) => {
  const {user, rating, comment, date} = commentData;

  const commentDate = new Date(date);
  const commentMonth = commentDate.toLocaleString(`en-us`, {month: `long`});
  const commentYear = commentDate.getFullYear();
  const formattedDate = `${commentMonth} ${commentYear}`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="../img/avatar-user.-icon.jpg" width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name" style={{textAlign: `center`}}>
          {user.name}
          <br/>
          {
            user.isPro
              ? <span className="property__user-status">
                Pro
              </span>
              : null
          }
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${(rating * 100) / 5}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
};

export default CommentItem;
