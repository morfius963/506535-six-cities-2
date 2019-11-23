import React from "react";
import {Link} from "react-router-dom";
import propTypes from "./prop-types.js";

const OfferCard = ({offerData, onCardMouseEnter, onFavoriteCardToggle, isInFavoriteList}) => {
  const DEFAULT_ACTIVE_CARD_ID = -1;
  const {id, title, isPremium, price, rating, type, previewImage, isFavorite} = offerData;

  const cardImageSize = {
    width: isInFavoriteList ? 150 : 260,
    height: isInFavoriteList ? 110 : 200
  };

  const mouseEnterHandler = onCardMouseEnter === null
    ? null
    : (evt) => {
      const cardId = Number(evt.currentTarget.id);
      onCardMouseEnter(cardId);
    };

  const mouseLeaveHandler = onCardMouseEnter === null
    ? null
    : () => {
      onCardMouseEnter(DEFAULT_ACTIVE_CARD_ID);
    };

  const favoriteClickHandler = () => {
    const status = isFavorite ? 0 : 1;
    onFavoriteCardToggle(id, status);
  };

  return (
    <article
      className={`${isInFavoriteList ? `favorites__card` : `cities__place-card`} place-card`}
      id={id}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >

      {isPremium
        ? <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null}

      <div className={`${isInFavoriteList ? `favorites__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
        <Link to={{
          pathname: `offer/${id}`,
          state: {
            id
          }
        }}>
          <img className="place-card__image" src={previewImage} width={cardImageSize.width} height={cardImageSize.height} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`}
            type="button"
            onClick={favoriteClickHandler}
          >
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
          <Link to={{
            pathname: `offer/${id}`,
            state: {
              offer: offerData
            }
          }}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = propTypes;

export default OfferCard;
