import ActionCreator from "./action-creator.js";
import adapter from "../../adapter/adapter.js";

const Operation = {
  loadHotels: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const responseData = response.data.map((elem) => adapter(elem));
        const city = responseData[0].city.name;

        dispatch(ActionCreator.loadHotels(responseData));
        dispatch(ActionCreator.switchCity(city));
      });
  },

  postUserLogin: (userData, pushPath) => (dispatch, _, api) => {
    return api.post(`/login`, userData)
      .then((response) => {
        const {name, avatarUrl, isPro, email} = adapter(response.data);

        dispatch(ActionCreator.singIn({name, avatarUrl, isPro, email}));
        pushPath();
      });
  }
};

export default Operation;
