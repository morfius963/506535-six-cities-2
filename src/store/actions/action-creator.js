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

  requireAuthorization: (status) => {
    return {
      type: ActionTypes.REQUIRE_AUTHORIZATION,
      payload: status
    };
  },

  singIn: (userData) => {
    const {email, password} = userData;

    return {
      type: ActionTypes.SING_IN,
      payload: {
        email,
        password,
      }
    };
  },

  setUserData: (data) => {
    return {
      type: ActionTypes.SET_USER_DATA,
      payload: {
        name: data.name,
        avatar: data.avatarUrl,
        isPro: data.isPro
      }
    };
  }
};

export default ActionCreator;
