import * as React from "react";
import {Props} from "./interface";

const CommentForm = ({onFormSubmit, onUserInput, formRef, isValid}: Props) => {
  const starsValue = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

  return (
    <form
      className="reviews__form form"
      action="#" method="post"
      onSubmit={onFormSubmit}
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          starsValue.map((elem, i) => {
            const starValue = i + 1;

            return <React.Fragment key={elem + i}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                id={`${starValue}-stars`}
                type="radio"
                defaultValue={starValue}
                onChange={onUserInput}
              />
              <label htmlFor={`${starValue}-stars`} className="reviews__rating-label form__rating-label" title={elem}>
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </React.Fragment>;
          }).reverse()
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue=""
        onInput={onUserInput}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
};

export default CommentForm;
