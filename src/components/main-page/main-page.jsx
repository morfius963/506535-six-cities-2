import React from "react";

import propTypes from "./prop-types.js";
import Cities from "../cities/cities.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import MainHeader from "../main-header/main-header.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const OffersListWrapped = withActiveItem(OffersList);

const MainPage = ({allCities, activeOffers, city, onCityClick, sortOffers, activeSort}) => {
  return <div className="page page--gray page--main">

    <MainHeader />

    <main className={`page__main page__main--index ${activeOffers.length > 0 ? `` : `page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">

        <Cities cities={allCities} activeCity={city} onCityClick={onCityClick} />

      </div>

      {activeOffers.length > 0
        ? <OffersListWrapped offers={activeOffers} activeCity={city} sortOffers={sortOffers} activeSort={activeSort} />
        : <MainEmpty city={city} />}

    </main>
  </div>;
};

MainPage.propTypes = propTypes;

export default MainPage;
