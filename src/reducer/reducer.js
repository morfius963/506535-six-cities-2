import offersList from "../__fixtures__/offers.js";

const defaultActiveSort = `Popular`;
const activeCity = offersList[0].city.name;
const activeOffers = offersList.filter(({city}) => city.name === activeCity);

const initialAppState = {
  city: activeCity,
  offers: offersList,
  activeOffers,
  activeSort: defaultActiveSort
};

const ActionCreator = {
  switchCity: (city) => {
    return {
      type: `SWITCH_CITY`,
      payload: {
        city,
        defaultSort: defaultActiveSort
      }
    };
  },

  sortOffers: (value) => {
    let sortFunc = null;

    switch (value) {
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

    return {
      type: `SORT_OFFERS`,
      payload: {
        fn: sortFunc,
        activeSort: value
      }
    };
  }
};

const reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case `SWITCH_CITY`: return Object.assign({}, state, {
      city: action.payload.city,
      activeOffers: state.offers.filter(({city}) => city.name === action.payload.city),
      activeSort: action.payload.defaultSort
    });

    case `SORT_OFFERS`: return Object.assign({}, state, {
      activeOffers: state.activeOffers.slice().sort(action.payload.fn),
      activeSort: action.payload.activeSort
    });
  }

  return state;
};

export {ActionCreator, reducer};
