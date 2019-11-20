import ActionTypes from "../../actions/action-types.js";

const initialAppState = {
  offers: [],
  isOffersLoading: true
};

const appData = (state = initialAppState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_HOTELS: return Object.assign({}, state, {
      offers: action.payload.hotels,
      isOffersLoading: action.payload.isOffersLoading
    });

    case ActionTypes.SET_FAVORITE_OFFER: return Object.assign({}, state, {
      offers: action.payload
    });
  }

  return state;
};

export default appData;
