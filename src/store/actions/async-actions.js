import ActionCreator from "./action-creator.js";
import adapter from "../../adapter/adapter.js";

const Operation = {
  loadHotels: () => (dispatch, state, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const responseData = response.data.map((elem) => adapter(elem));
        const city = responseData[0].city.name;

        dispatch(ActionCreator.loadHotels(responseData));
        dispatch(ActionCreator.switchCity(city));
      });
  },

  loadFavoriteOffers: () => (dispatch, state, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        if (!response) {
          return;
        }
        const responseData = response.data.map((elem) => adapter(elem));

        dispatch(ActionCreator.getFavoriteOffers(responseData));
      });
  },

  loadComments: (id) => (dispatch, state, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        if (!response) {
          return;
        }
        const responseData = response.data.map((elem) => adapter(elem));

        dispatch(ActionCreator.getComments(responseData));
      });
  },

  postComment: (id, commentData, formResetCb) => (dispatch, state, api) => {
    return api.post(`/comments/${id}`, commentData)
      .then((response) => {
        if (!response) {
          return;
        }
        const responseData = response.data.map((elem) => adapter(elem));

        dispatch(ActionCreator.getComments(responseData));
        formResetCb();
      });
  },

  postUserLogin: (userData, pushPath) => (dispatch, state, api) => {
    return api.post(`/login`, userData)
      .then((response) => {
        const responseData = adapter(response.data || {});

        localStorage.setItem(`userData`, JSON.stringify(responseData));
        dispatch(ActionCreator.singIn(responseData));
        pushPath();
      });
  },

  toggleFavoriteCard: (id, status) => (dispatch, state, api) => {
    const path = `/favorite/${id}/${status}`;

    return api.post(path)
      .then((response) => {
        if (!response) {
          return;
        }

        const oldCitiesOffers = state().appData.offers;
        const oldFavoritesOffers = state().appData.favoriteOffers;
        const newOffer = adapter(response.data);

        dispatch(ActionCreator.setFavoriteOffer(
            newOffer,
            {
              cities: oldCitiesOffers,
              favorites: oldFavoritesOffers
            }
        ));
      });
  }
};

export default Operation;
