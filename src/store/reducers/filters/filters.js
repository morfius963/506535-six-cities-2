import ActionTypes from "../../actions/action-types.js";

const defaultActiveSort = `Popular`;

const initialAppState = {
  city: ``,
  activeSort: defaultActiveSort,
  priceRange: [-Infinity, Infinity]
};

const filters = (state = initialAppState, action) => {
  switch (action.type) {
    case ActionTypes.SWITCH_CITY: return Object.assign({}, initialAppState, {
      city: action.payload.city
    });

    case ActionTypes.SORT_OFFERS: return Object.assign({}, state, {
      activeSort: action.payload
    });

    case ActionTypes.SET_PRICE_RANGE: return Object.assign({}, state, {
      priceRange: action.payload
    });

    case ActionTypes.RESET_CITY_FILTERS: return Object.assign({}, initialAppState, {
      city: state.city
    });
  }

  return state;
};

export default filters;
