import React from "react";

import propTypes from "./prop-types.js";
import Cities from "../cities/cities.jsx";
import OffersList from "../offers-list/offers-list.jsx";
import MainHeader from "../main-header/main-header.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const OffersListWrapped = withActiveItem(OffersList);

const MainPage = ({allCities, activeOffers, city, onCityClick, onOffersSort, activeSort, userData, isAuthorizationRequired, onFavoriteCardToggle}) => {
  return (
    <div className="page page--gray page--main">

      <MainHeader
        isAuthorizationRequired={isAuthorizationRequired}
        userData={userData}
      />

      <main className={`page__main page__main--index ${activeOffers.length > 0 ? `` : `page__main--index-empty`}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <Cities cities={allCities} activeCity={city} onCityClick={onCityClick} />

        </div>

        {activeOffers.length > 0
          ? <OffersListWrapped
            offers={activeOffers}
            activeCity={city}
            activeSort={activeSort}
            onOffersSort={onOffersSort}
            onFavoriteCardToggle={onFavoriteCardToggle}
          />
          : <MainEmpty city={city} />}

      </main>
    </div>
  );
};

MainPage.propTypes = propTypes;

export default MainPage;
