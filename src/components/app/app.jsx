import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createSelector} from "reselect";

import ActionCreator from "../../store/actions/action-creator.js";
import Operation from "../../store/actions/async-actions.js";
import MainPage from "../main-page/main-page.jsx";
import offersPropTypes from "./prop-types.js";
import {sortValues} from "../../__fixtures__/offers.js";

const MAX_CITIES_COUNT = 6;

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this._allCities = null;

    this.props.loadHotels();
  }

  render() {
    const {city, onCityClick, sortOffers, activeSort, activeOffers, isOffersLoading} = this.props;
    return (
      isOffersLoading
        ? null
        : <MainPage
          allCities={this._getAllCities()}
          activeOffers={activeOffers}
          city={city}
          onCityClick={onCityClick}
          sortOffers={sortOffers}
          activeSort={activeSort}
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
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  activeOffers: PropTypes.arrayOf(offersPropTypes).isRequired,
  onCityClick: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
  activeSort: PropTypes.oneOf(sortValues).isRequired,
  loadHotels: PropTypes.func.isRequired,
  isOffersLoading: PropTypes.bool.isRequired
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
  offers: state.appData.offers,
  activeOffers: getActiveOffers(state),
  activeSort: state.user.activeSort,
  isOffersLoading: state.appData.isOffersLoading
});

const mapDispatchToProps = {
  loadHotels: () => Operation.loadHotels(),

  onCityClick: (city) => ActionCreator.switchCity(city),

  sortOffers: (value) => ActionCreator.sortOffers(value)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
