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

  postUserLogin: (userData, pushPath) => (dispatch, state, api) => {
    return api.post(`/login`, userData)
      .then((response) => {
        const {name, avatarUrl, isPro, email} = adapter(response.data || {});

        dispatch(ActionCreator.singIn({name, avatarUrl, isPro, email}));
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

        const oldOffers = state().appData.offers;
        const newOffer = adapter(response.data);

        dispatch(ActionCreator.setFavoriteOffer(oldOffers, newOffer));
      });
  }
};

export default Operation;
