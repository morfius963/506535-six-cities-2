import ActionTypes from "./action-types.js";

const defaultActiveSort = `Popular`;

const ActionCreator = {
  switchCity: (city) => {
    return {
      type: ActionTypes.SWITCH_CITY,
      payload: {
        city,
        defaultSort: defaultActiveSort
      }
    };
  },

  sortOffers: (value) => {
    return {
      type: ActionTypes.SORT_OFFERS,
      payload: value
    };
  },

  loadHotels: (hotels) => {
    return {
      type: ActionTypes.LOAD_HOTELS,
      payload: {
        hotels,
        isOffersLoading: false
      }
    };
  },

  switchLoadingState: () => {
    return {
      type: ActionTypes.SWITCH_LOADING_STATE,
      payload: false
    };
  },

  singIn: (userData) => {
    const {name, avatarUrl, isPro, email} = userData;

    return {
      type: ActionTypes.SING_IN,
      payload: {
        name,
        isPro,
        email,
        avatar: avatarUrl,
        isAuthorizationRequired: false
      }
    };
  },
};

export default ActionCreator;
