import ActionTypes from "./action-types.js";

const defaultActiveSort = `Popular`;

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
