import * as React from "react";
import {connect} from "react-redux";

import MainPage from "../main-page/main-page";
import {Props} from "./interface";

const MAX_CITIES_COUNT = 6;

class App extends React.PureComponent<Props, null> {
  _allCities: null | string[];

  constructor(props) {
    super(props);

    this._allCities = null;
  }

  render() {
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
  offers: state.appData.offers,
  isOffersLoading: state.appData.isOffersLoading,
});

export default connect(mapStateToProps, null)(App);
