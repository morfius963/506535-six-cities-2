import * as React from "react";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";

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
    const {city, onUserDataPost, isAuthorizationRequired} = this.props;

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
          render={(props) => <OfferDetails {...props} />}
        />
        <PrivateRoute
          path="/favorites"
          isAuthorizationRequired={isAuthorizationRequired}
          renderCmp={() => <Favorites />}
        />
      </Switch>
    );
  }

  _renderMainPage() {
    const {isOffersLoading} = this.props;

    return (
      isOffersLoading
        ? null
        : <MainPage allCities={this._getAllCities()} />
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

const mapStateToProps = (state) => ({
  city: state.user.city,
  isAuthorizationRequired: state.user.isAuthorizationRequired,
  offers: state.appData.offers,
  isOffersLoading: state.appData.isOffersLoading,
});

const mapDispatchToProps = {
  onOffersLoad: Operation.loadHotels,
  onUserDataPost: (userData, pushPath) => Operation.postUserLogin(userData, pushPath)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
