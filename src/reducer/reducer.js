import offersList from "../__fixtures__/offers.js";

const activeCity = offersList[0].city.name;
const activeOffers = offersList.filter(({city}) => city.name === activeCity);

const initialAppState = {
  city: activeCity,
  offers: offersList,
  activeOffers
};

const ActionCreator = {
  switchCity: (city) => {
    return {
      type: `SWITCH_CITY`,
      payload: city
    };
  }
};

const reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case `SWITCH_CITY`: return Object.assign({}, state, {
      city: action.payload,
      activeOffers: state.offers.filter(({city}) => city.name === action.payload)
    });
  }

  return state;
};

export {ActionCreator, reducer};
