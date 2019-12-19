import ActionTypes from "./action-types.js";

const replaceArrayItem = (oldItems, newItem) => {
  const itemIndex = oldItems.findIndex(({id}) => id === newItem.id);

  if (itemIndex === -1) {
    return [];
  }

  return [...oldItems.slice(0, itemIndex), newItem, ...oldItems.slice(itemIndex + 1)];
};

const ActionCreator = {
  switchCity: (city) => {
    return {
      type: ActionTypes.SWITCH_CITY,
      payload: {
        city,
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

  setOfferRef: (ref, id) => {
    return {
      type: ActionTypes.SET_OFFER_REF,
      payload: {
        ref,
        id
      }
    };
  },

  deleteOfferRef: (ref, id) => {
    return {
      type: ActionTypes.DELETE_OFFER_REF,
      payload: {
        ref,
        id
      }
    };
  },

  setPriceRange: (range) => {
    return {
      type: ActionTypes.SET_PRICE_RANGE,
      payload: range
    };
  },

  setCityRating: (rating) => {
    return {
      type: ActionTypes.SET_CITY_RATING,
      payload: rating
    };
  },

  setFavoriteOffer: (newOffer, oldOffers) => {
    const {cities, favorites} = oldOffers;

    const newCityOffers = replaceArrayItem(cities, newOffer);
    const newFavoriteOffer = replaceArrayItem(favorites, newOffer);

    return {
      type: ActionTypes.SET_FAVORITE_OFFER,
      payload: {
        cities: newCityOffers,
        favorites: newFavoriteOffer
      }
    };
  },

  resetCityFilters: () => {
    return {
      type: ActionTypes.RESET_CITY_FILTERS
    };
  },

  getFavoriteOffers: (offers) => {
    return {
      type: ActionTypes.GET_FAVORITE_OFFERS,
      payload: offers
    };
  },

  getComments: (comments) => {
    return {
      type: ActionTypes.GET_COMMENTS,
      payload: comments
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
