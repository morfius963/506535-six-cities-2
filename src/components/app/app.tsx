import * as React from "react";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {Switch, Route} from "react-router-dom";

import ActionCreator from "../../store/actions/action-creator";
import Operation from "../../store/actions/async-actions";
import MainPage from "../main-page/main-page";
import SingIn from "../sing-in/sing-in";
import Favorites from "../favorites/favorites";
import OfferDetails from "../offer-details/offer-details";
import PrivateRoute from "../../hocs/with-private-route/with-private-route";
import withSingIn from "../../hocs/with-sing-in/with-sing-in";
import {Props} from "./interface";

const MAX_CITIES_COUNT = 6;

const SingInWrapped = withSingIn(SingIn);

class App extends React.PureComponent<Props, null> {
  _allCities: null | string[];

  constructor(props) {
    super(props);

    this._allCities = null;

    this.props.onOffersLoad();
  }

  render() {
    const {city, offers, onUserDataPost, isAuthorizationRequired, favoriteOffers, email, onFavoriteCardToggle, onFavoriteOffersLoad, comments, onCommentsLoad, onReviewSubmit} = this.props;
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
          render={(props) => <OfferDetails {...props} offers={offers} isAuthorizationRequired={isAuthorizationRequired} userData={userData} onFavoriteCardToggle={onFavoriteCardToggle} comments={comments} onCommentsLoad={onCommentsLoad} onReviewSubmit={onReviewSubmit} />}
        />
        <PrivateRoute
          path="/favorites"
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
  comments: state.appData.comments,
  isOffersLoading: state.appData.isOffersLoading,
});

const mapDispatchToProps = {
  onOffersLoad: Operation.loadHotels,

  onFavoriteOffersLoad: Operation.loadFavoriteOffers,

  onCityClick: (city) => ActionCreator.switchCity(city),

  onOffersSort: (value) => ActionCreator.sortOffers(value),

  onUserDataPost: (userData, pushPath) => Operation.postUserLogin(userData, pushPath),

  onFavoriteCardToggle: (id, status) => Operation.toggleFavoriteCard(id, status),

  onCommentsLoad: (id) => Operation.loadComments(id),

  onReviewSubmit: (id, commentData, formResetCb) => Operation.postComment(id, commentData, formResetCb)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
