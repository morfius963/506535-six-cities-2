import React from "react";
import MainHeader from "../main-header/main-header.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import FavoritesOfferList from "../favorites-offer-list/favorites-offer-list.jsx";
import FavoriteEmpty from "../favorites-empty/favorites-empty.jsx";
import Footer from "../footer/footer.jsx";

import PropTypes from "prop-types";
import appPropTypes from "../app/prop-types.js";

class Favorites extends React.PureComponent {
  constructor(props) {
    super(props);

    this.props.onFavoriteOffersLoad();
  }

  render() {
    const {isAuthorizationRequired, userData, favoriteOffers} = this.props;
    const isEmpty = favoriteOffers.length === 0;

    return (
      <div className={`page ${isEmpty ? `page--favorites-empty` : ``}`}>

        <MainHeader
          isAuthorizationRequired={isAuthorizationRequired}
          userData={userData}
        />

        <main className={`page__main page__main--favorites ${isEmpty ? `page__main--favorites-empty` : ``}`}>
          <div className="page__favorites-container container">
            <section className={`favorites ${isEmpty ? `favorites--empty` : ``}`}>

              {this._renderMainContent()}

            </section>
          </div>
        </main>

        <Footer />

      </div>
    );
  }

  _renderMainContent() {
    const {favoriteOffers, onFavoriteCardToggle} = this.props;
    const isEmpty = favoriteOffers.length === 0;

    return (
      isEmpty
        ? <FavoriteEmpty />
        : <React.Fragment>
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">

            {this._getAllCities().map((city, i) => {
              const offersInCity = favoriteOffers.filter((offer) => offer.city.name === city);

              return (
                <FavoritesOfferList
                  key={`${city}-${i}`}
                  city={city}
                  renderOffers={() => offersInCity.map((offer) =>
                    <OfferCard
                      key={`${city}-${offer.price}-${offer.id}`}
                      id={offer.id}
                      offerData={offer}
                      onCardMouseEnter={null}
                      onFavoriteCardToggle={onFavoriteCardToggle}
                      isInFavoriteList={true}
                    />)}
                />
              );
            })}

          </ul>
        </React.Fragment>
    );
  }

  _getAllCities() {
    const {favoriteOffers} = this.props;

    return Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));
  }
}

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(
      PropTypes.shape(appPropTypes)
  ).isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string
  }).isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onFavoriteCardToggle: PropTypes.func.isRequired,
  onFavoriteOffersLoad: PropTypes.func.isRequired
};

export default Favorites;
