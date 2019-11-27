import * as React from "react";

import Map from "../map/map";
import OfferCard from "../offer-card/offer-card";
import OffersSort from "../offers-sort/offers-sort";
import withActiveSort from "../../hocs/with-active-sort/with-active-sort";
import {Props} from "./interface";

const OffersSortWrapped = withActiveSort(OffersSort);

const OffersList = ({offers, activeCity, activeSort, activeCardId, onCardMouseEnter, onOffersSort, onFavoriteCardToggle}: Props) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeCity}</b>

          <OffersSortWrapped onOffersSort={onOffersSort} activeSort={activeSort} activeCity={activeCity} />

          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((offer) =>
                <OfferCard
                  key={`${offer.location.latitude}-${offer.id}`}
                  offerData={offer}
                  onCardMouseEnter={onCardMouseEnter}
                  onFavoriteCardToggle={onFavoriteCardToggle}
                  isInFavoriteList={false}
                />)
            }
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">

            <Map
              offers={offers}
              activeCard={activeCardId}
              isInOfferDetails={false}
            />

          </section>
        </div>
      </div>
    </div>
  );
};

export default OffersList;
