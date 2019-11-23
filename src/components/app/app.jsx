import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {Switch, Route} from "react-router-dom";

import ActionCreator from "../../store/actions/action-creator.js";
import Operation from "../../store/actions/async-actions.js";
import MainPage from "../main-page/main-page.jsx";
import SingIn from "../sing-in/sing-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import PrivateRoute from "../../hocs/with-private-route/with-private-route.jsx";
import offersPropTypes from "./prop-types.js";
import withSingIn from "../../hocs/with-sing-in/with-sing-in.jsx";
import {sortValues} from "../../__fixtures__/offers.js";

const MAX_CITIES_COUNT = 6;

const SingInWrapped = withSingIn(SingIn);

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this._allCities = null;

    this.props.onOffersLoad();
  }

  render() {
    const {city, offers, onUserDataPost, isAuthorizationRequired, favoriteOffers, email, onFavoriteCardToggle, onFavoriteOffersLoad} = this.props;
    const userData = {email};

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => this._renderMainPage()}
        />
        <Route
          path="/login"
          exact
          render={(props) => <SingInWrapped {...props} city={city} onUserDataPost={onUserDataPost} isAuthorizationRequired={isAuthorizationRequired} />}
        />
        <Route
          path="/offer/:id"
          exact
          render={(props) => <OfferDetails {...props} offers={offers} isAuthorizationRequired={isAuthorizationRequired} userData={userData} onFavoriteCardToggle={onFavoriteCardToggle} />}
        />
        <PrivateRoute
          path="/favorites"
          exact
          isAuthorizationRequired={isAuthorizationRequired}
          renderCmp={() => <Favorites favoriteOffers={favoriteOffers} isAuthorizationRequired={isAuthorizationRequired} userData={userData} onFavoriteCardToggle={onFavoriteCardToggle} onFavoriteOffersLoad={onFavoriteOffersLoad} />}
        />
      </Switch>
    );
  }

  _renderMainPage() {
    const {city, onCityClick, onOffersSort, activeSort, activeOffers, email, isAuthorizationRequired, isOffersLoading, onFavoriteCardToggle} = this.props;
    const userData = {email};

    return (
      isOffersLoading
        ? null
        : <MainPage
          allCities={this._getAllCities()}
          activeOffers={activeOffers}
          city={city}
          activeSort={activeSort}
          isAuthorizationRequired={isAuthorizationRequired}
          userData={userData}
          onFavoriteCardToggle={onFavoriteCardToggle}
          onCityClick={onCityClick}
          onOffersSort={onOffersSort}
        />
    );
  }

  _getAllCities() {
    const {offers} = this.props;

    if (this._allCities === null) {
      this._allCities = Array.from(new Set(offers.map((offer) => offer.city.name))).slice(0, MAX_CITIES_COUNT);
    }

    return this._allCities;
  }
}

App.propTypes = {
  city: PropTypes.string.isRequired,
  activeSort: PropTypes.oneOf(sortValues).isRequired,
  email: PropTypes.string.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  activeOffers: PropTypes.arrayOf(offersPropTypes).isRequired,
  favoriteOffers: PropTypes.array.isRequired,
  isOffersLoading: PropTypes.bool.isRequired,

  onCityClick: PropTypes.func.isRequired,
  onOffersSort: PropTypes.func.isRequired,
  onOffersLoad: PropTypes.func.isRequired,
  onUserDataPost: PropTypes.func.isRequired,
  onFavoriteCardToggle: PropTypes.func.isRequired,
  onFavoriteOffersLoad: PropTypes.func.isRequired
};

const getCityFromState = (state) => state.user.city;
const getOffersFromStore = (state) => state.appData.offers;
const getActiveSortFromStore = (state) => state.user.activeSort;

const getActiveOffers = createSelector(
    [getCityFromState, getOffersFromStore, getActiveSortFromStore],
    (city, offers, activeSort) => {
      let sortFunc = null;

      switch (activeSort) {
        case `Price: low to high`:
          sortFunc = (a, b) => b.price - a.price;
          break;
        case `Price: high to low`:
          sortFunc = (a, b) => a.price - b.price;
          break;
        case `Top rated first`:
          sortFunc = (a, b) => b.rating - a.rating;
          break;
        default:
          sortFunc = () => 0;
      }

      return offers
        .slice()
        .filter((offer) => offer.city.name === city)
        .sort(sortFunc);
    }
);

const mapStateToProps = (state) => ({
  city: state.user.city,
  activeSort: state.user.activeSort,
  email: state.user.email,
  isAuthorizationRequired: state.user.isAuthorizationRequired,
  offers: state.appData.offers,
  activeOffers: getActiveOffers(state),
  favoriteOffers: state.appData.favoriteOffers,
  isOffersLoading: state.appData.isOffersLoading,
});

const mapDispatchToProps = {
  onOffersLoad: Operation.loadHotels,

  onCityClick: (city) => ActionCreator.switchCity(city),

  onOffersSort: (value) => ActionCreator.sortOffers(value),

  onUserDataPost: (userData, pushPath) => Operation.postUserLogin(userData, pushPath),

  onFavoriteCardToggle: (id, status) => Operation.toggleFavoriteCard(id, status),

  onFavoriteOffersLoad: () => Operation.loadFavoriteOffers()
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
