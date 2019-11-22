import React from "react";

import propTypes from "./prop-types.js";
import Map from "../map/map.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import OffersSort from "../offers-sort/offers-sort.jsx";
import withActiveSort from "../../hocs/with-active-sort/with-active-sort.jsx";

const OffersSortWrapped = withActiveSort(OffersSort);

const OffersList = ({offers, activeCity, activeSort, activeCardId, onCardMouseEnter, onOffersSort, onFavoriteCardToggle}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeCity}</b>

          <OffersSortWrapped onOffersSort={onOffersSort} activeSort={activeSort} activeCity={activeCity} />

          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) =>
              <OfferCard
                key={`${offer.location.coords}-${offer.id}`}
                id={offer.id}
                offerData={offer}
                onCardMouseEnter={onCardMouseEnter}
                onFavoriteCardToggle={onFavoriteCardToggle}
              />)}
          </div>
        </section>
        <div className="cities__right-section">

          <Map
            offers={offers}
            activeCard={activeCardId}
          />

        </div>
      </div>
    </div>
  );
};

OffersList.propTypes = propTypes;

export default OffersList;
