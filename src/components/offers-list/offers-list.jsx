import React from "react";

import propTypes from "./prop-types.js";
import Map from "../map/map.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import OffersSort from "../offers-sort/offers-sort.jsx";
import withActiveSort from "../../hocs/with-active-sort/with-active-sort.jsx";

const OffersSortWrapped = withActiveSort(OffersSort);

const OffersList = ({offers, activeCity, activeCardId, cardMouseEnterHandler, sortOffers, activeSort}) => {
  return <div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity}</b>

        <OffersSortWrapped sortOffers={sortOffers} activeSort={activeSort} activeCity={activeCity} />

        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer, i) =>
            <OfferCard
              key={`${offer.location.coords}-${i}`}
              id={i}
              offerData={offer}
              cardMouseEnterHandler={cardMouseEnterHandler}
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
  </div>;
};

OffersList.propTypes = propTypes;

export default OffersList;
