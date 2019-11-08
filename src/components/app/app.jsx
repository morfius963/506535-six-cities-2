import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/reducer.js";
import MainPage from "../main-page/main-page.jsx";
import offersPropTypes from "./prop-types.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {city, offers, activeOffers, onCityClick} = this.props;
    return <MainPage offers={offers} activeOffers={activeOffers} city={city} onCityClick={onCityClick} />;
  }
}

App.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  activeOffers: PropTypes.arrayOf(offersPropTypes).isRequired,
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  activeOffers: state.activeOffers
});

const mapDispatchToProps = {
  onCityClick: (city) => ActionCreator.switchCity(city),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
