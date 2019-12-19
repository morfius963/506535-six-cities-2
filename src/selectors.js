import {createSelector} from "reselect";

const getCityFromState = (state) => state.filters.city;
const getOffersFromStore = (state) => state.appData.offers;
const getActiveSortFromStore = (state) => state.filters.activeSort;
const getPriceRangeFromState = (state) => state.filters.priceRange;
const getRatingFromState = (state) => state.filters.rating;

export const getActiveOffers = createSelector(
    [getCityFromState, getOffersFromStore, getActiveSortFromStore, getPriceRangeFromState, getRatingFromState],
    (city, offers, activeSort, priceRange, rating) => {
      const [minPrice, maxPrice] = priceRange;
      let sortFunc = null;

      switch (activeSort) {
        case `Price: low to high`:
          sortFunc = (a, b) => b.price - a.price;
          break;
        case `Price: high to low`:
          sortFunc = (a, b) => a.price - b.price;
          break;
        case `Top rated first`:
          sortFunc = (a, b) => b.rating - a.rating;
          break;
        default:
          sortFunc = () => 0;
      }

      return offers
        .slice()
        .filter((offer) => (
          offer.city.name === city &&
          offer.rating <= Number(rating) &&
          (offer.price >= minPrice && offer.price <= maxPrice)
        ))
        .sort(sortFunc);
    }
);
