import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/reducer.js";
import MainPage from "../main-page/main-page.jsx";
import offersPropTypes from "./prop-types.js";
import {sortValues} from "../../__fixtures__/offers.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {city, offers, activeOffers, onCityClick, sortOffers, activeSort} = this.props;
    return <MainPage
      offers={offers}
      activeOffers={activeOffers}
      city={city}
      onCityClick={onCityClick}
      sortOffers={sortOffers}
      activeSort={activeSort}
    />;
  }
}

App.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  activeOffers: PropTypes.arrayOf(offersPropTypes).isRequired,
  onCityClick: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
  activeSort: PropTypes.oneOf(sortValues).isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  activeOffers: state.activeOffers,
  activeSort: state.activeSort
});

const mapDispatchToProps = {
  onCityClick: (city) => ActionCreator.switchCity(city),

  sortOffers: (value) => ActionCreator.sortOffers(value)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
