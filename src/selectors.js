import {createSelector} from "reselect";

const getCityFromState = (state) => state.user.city;
const getOffersFromStore = (state) => state.appData.offers;
const getActiveSortFromStore = (state) => state.user.activeSort;

export const getActiveOffers = createSelector(
    [getCityFromState, getOffersFromStore, getActiveSortFromStore],
    (city, offers, activeSort) => {
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
        .filter((offer) => offer.city.name === city)
        .sort(sortFunc);
    }
);
