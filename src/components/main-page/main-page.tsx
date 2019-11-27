import * as React from "react";

import Cities from "../cities/cities";
import OffersList from "../offers-list/offers-list";
import MainHeader from "../main-header/main-header";
import MainEmpty from "../main-empty/main-empty";
import withActiveItem from "../../hocs/with-active-item/with-active-item";
import {Props} from "./interface";

const OffersListWrapped = withActiveItem(OffersList);

const MainPage = ({allCities, activeOffers, city, onCityClick, onOffersSort, activeSort, userData, isAuthorizationRequired, onFavoriteCardToggle}: Props) => {
  return (
    <div className="page page--gray page--main">

      <MainHeader
        isAuthorizationRequired={isAuthorizationRequired}
        userData={userData}
        isInDetails={false}
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

export default MainPage;
