import * as React from "react";
import {connect} from "react-redux";

import ActionCreator from "../../store/actions/action-creator";
import Cities from "../cities/cities";
import OffersList from "../offers-list/offers-list";
import MainHeader from "../main-header/main-header";
import MainEmpty from "../main-empty/main-empty";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {Props} from "./interface";
import {getActiveOffers} from "../../selectors";

const OffersListWrapped = withActiveItem(OffersList);

const MainPage = ({allCities, activeOffers, city, onCityClick, email, isAuthorizationRequired}: Props) => {
  return (
    <div className="page page--gray page--main">

      <MainHeader
        isAuthorizationRequired={isAuthorizationRequired}
        email={email}
        isInDetails={false}
      />

      <main className={`page__main page__main--index ${activeOffers.length > 0 ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <Cities cities={allCities} activeCity={city} onCityClick={onCityClick} />

        </div>

        {activeOffers.length > 0
          ? <OffersListWrapped />
          : <MainEmpty city={city} />}

      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  city: state.user.city,
  email: state.user.email,
  isAuthorizationRequired: state.user.isAuthorizationRequired,
  activeOffers: getActiveOffers(state)
});

const mapDispatchToProps = {
  onCityClick: (city) => ActionCreator.switchCity(city)
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
