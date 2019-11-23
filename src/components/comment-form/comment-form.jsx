import React from "react";

// new Date(`2019-05-08T14:13:56.569Z`).toLocaleString('en-us', { month: 'long' })

const CommentForm = () => {
  const starsValue = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          starsValue.map((elem, i) => {
            const starValue = i + 1;

            return <React.Fragment key={elem + i}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={starValue}
                id={`${starValue}-stars`}
                type="radio"
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
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue="" />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};

export default CommentForm;
