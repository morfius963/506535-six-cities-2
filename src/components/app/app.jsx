import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/reducer.js";
import MainPage from "../main-page/main-page.jsx";
import offersPropTypes from "./prop-types.js";

class App extends PureComponent {
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

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  activeOffers: state.activeOffers
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(ActionCreator.switchCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
