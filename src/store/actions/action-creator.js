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

  setFavoriteOffer: (oldOffers, newOffer) => {
    const newOfferIndex = oldOffers.indexOf(oldOffers.find(({id}) => id === newOffer.id));
    const newOffers = [...oldOffers.slice(0, newOfferIndex), newOffer, ...oldOffers.slice(newOfferIndex + 1)];

    return {
      type: ActionTypes.SET_FAVORITE_OFFER,
      payload: newOffers
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
