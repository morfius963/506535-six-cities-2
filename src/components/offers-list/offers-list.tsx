import * as React from "react";
import {connect} from "react-redux";

import ActionCreator from "../../store/actions/action-creator";
import Operation from "../../store/actions/async-actions";
import Map from "../map/map";
import OfferCard from "../offer-card/offer-card";
import OffersSort from "../offers-sort/offers-sort";
import OffersFilterPrice from "../offers-filter-price/offers-filter-price";
import withActiveSort from "../../hocs/with-active-sort/with-active-sort";
import {Props} from "./interface";
import {getActiveOffers} from "../../selectors";

const OffersSortWrapped = withActiveSort(OffersSort);

const OffersList = ({offers, allOffers, city, activeSort, activeCardId, onCardMouseEnter, onOffersSort, onFavoriteCardToggle}: Props) => {
  const offersByCity = allOffers.filter((offer) => offer.city.name === city);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city}</b>

          <div className="cities__components-wrapper">
            <OffersSortWrapped onOffersSort={onOffersSort} activeSort={activeSort} city={city} />

            <OffersFilterPrice offers={offersByCity} />
          </div>

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
            />

          </section>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  city: state.filters.city,
  activeSort: state.filters.activeSort,
  offers: getActiveOffers(state),
  allOffers: state.appData.offers
});

const mapDispatchToProps = {
  onFavoriteCardToggle: (id, status) => Operation.toggleFavoriteCard(id, status),
  onOffersSort: (value) => ActionCreator.sortOffers(value)
};

export {OffersList};

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
