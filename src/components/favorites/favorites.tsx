import * as React from "react";
import {connect} from "react-redux";

import Operation from "../../store/actions/async-actions";
import MainHeader from "../main-header/main-header";
import OfferCard from "../offer-card/offer-card";
import FavoritesOfferList from "../favorites-offer-list/favorites-offer-list";
import FavoriteEmpty from "../favorites-empty/favorites-empty";
import Footer from "../footer/footer";
import {Props} from "./interface";

class Favorites extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this.props.onFavoriteOffersLoad();
  }

  render() {
    const {isAuthorizationRequired, email, favoriteOffers} = this.props;
    const isEmpty = favoriteOffers.length === 0;

    return (
      <div className={`page ${isEmpty ? `page--favorites-empty` : ``}`}>

        <MainHeader
          isAuthorizationRequired={isAuthorizationRequired}
          email={email}
          isInDetails={false}
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
    const cities = this._getAllCities();
    const isEmpty = cities.length === 0;

    return (
      isEmpty
        ? <FavoriteEmpty />
        : <React.Fragment>
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">

            {this._getAllCities().map((city, i) => {
              const offersInCity = favoriteOffers.filter((offer) => offer.city.name === city && offer.isFavorite);

              return (
                <FavoritesOfferList
                  key={`${city}-${i}`}
                  city={city}
                  renderOffers={() => offersInCity.map((offer) =>
                    <OfferCard
                      key={`${city}-${offer.price}-${offer.id}`}
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
    const currentFavoriteOffers = favoriteOffers.filter(({isFavorite}) => isFavorite);

    return Array.from(new Set(currentFavoriteOffers.map((offer) => offer.city.name)));
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  isAuthorizationRequired: state.user.isAuthorizationRequired,
  favoriteOffers: state.appData.favoriteOffers,
});

const mapDispatchToProps = {
  onFavoriteOffersLoad: Operation.loadFavoriteOffers,
  onFavoriteCardToggle: (id, status) => Operation.toggleFavoriteCard(id, status)
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
