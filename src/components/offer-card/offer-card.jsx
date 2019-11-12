import React, {useCallback} from "react";
import propTypes from "./prop-types.js";

const OfferCard = ({offerData, id, cardMouseEnterHandler}) => {
  const DEFAULT_ACTIVE_CARD_ID = -1;
  const {title, isPremium, price, rating, type, previewImage} = offerData;

  const mouseEnterHandler = useCallback(
      (evt) => {
        const cardId = Number(evt.currentTarget.id);
        cardMouseEnterHandler(cardId);
      },
      [cardMouseEnterHandler]
  );
  const mouseLeaveHandler = useCallback(
      () => {
        cardMouseEnterHandler(DEFAULT_ACTIVE_CARD_ID);
      },
      [cardMouseEnterHandler]
  );

  return <article
    className="cities__place-card place-card"
    id={id}
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}>
    {isPremium
      ? <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : null}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${(rating * 100) / 5}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = propTypes;

export default OfferCard;
