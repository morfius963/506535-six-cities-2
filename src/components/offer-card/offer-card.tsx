import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Props} from "./interface";
import ActionCreator from "../../store/actions/action-creator";

const DEFAULT_ACTIVE_CARD_ID = -1;

class OfferCard extends React.PureComponent<Props, null> {
  offerRef: {current: HTMLFormElement};
  cardImageSize: {width: number; height: number};

  constructor(props) {
    super(props);

    this.cardImageSize = {
      width: this.props.isInFavoriteList ? 150 : 260,
      height: this.props.isInFavoriteList ? 110 : 200
    };

    this.offerRef = React.createRef();

    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.handleOfferScrollTop = this.handleOfferScrollTop.bind(this);
    this.handleFavoriteButtonClick = this.handleFavoriteButtonClick.bind(this);
  }

  componentDidMount() {
    const {onRefAdd} = this.props;
    const {id} = this.props.offerData;

    onRefAdd(this.offerRef, id);
  }

  componentWillUnmount() {
    const {onRefRemove} = this.props;
    const {id} = this.props.offerData;

    onRefRemove(this.offerRef, id);
  }

  render() {
    const {offerData, isInFavoriteList} = this.props;
    const {id, title, isPremium, price, rating, type, previewImage, isFavorite} = offerData;

    return (
      <article
        className={`${isInFavoriteList ? `favorites__card` : `cities__place-card`} place-card`}
        id={`${id}`}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseEnterHandler}
        ref={this.offerRef}
      >
  
        {isPremium
          ? <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null}
  
        <div className={`${isInFavoriteList ? `favorites__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
  
          <Link
            to={`/offer/${id}`}
            onClick={this.handleOfferScrollTop}
          >
            <img className="place-card__image" src={previewImage} width={this.cardImageSize.width} height={this.cardImageSize.height} alt="Place image" />
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
              onClick={this.handleFavoriteButtonClick}
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
  
            <Link
              to={`/offer/${id}`}
              onClick={this.handleOfferScrollTop}
            >
              {title}
            </Link>
  
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }

  mouseEnterHandler(evt) {
    const {onCardMouseEnter} = this.props;
    const cardMouseEnterHandler = onCardMouseEnter === null ? () => {} : onCardMouseEnter;

    if (evt.type === `mouseleave`) {
      cardMouseEnterHandler(DEFAULT_ACTIVE_CARD_ID);
      this.offerRef.current.style.opacity = `1`;
      return;
    }

    const cardId = Number(evt.currentTarget.id);
    this.offerRef.current.style.opacity = `0.6`;
    cardMouseEnterHandler(cardId);
  }

  handleFavoriteButtonClick() {
    const {offerData, onFavoriteCardToggle} = this.props;
    const {id, isFavorite} = offerData;

    const status = isFavorite ? 0 : 1;
    onFavoriteCardToggle(id, status);
  }

  handleOfferScrollTop() {
    window.scrollTo(0, 0);
  }
}

const mapDispatchToProps = {
  onRefAdd: (ref, id) => ActionCreator.setOfferRef(ref, id),
  onRefRemove: (ref, id) => ActionCreator.deleteOfferRef(ref, id)
};

export {OfferCard};

export default connect(null, mapDispatchToProps)(OfferCard);
