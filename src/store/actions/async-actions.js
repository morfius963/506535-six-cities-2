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

  postUserLogin: (userData) => (dispatch, state, api) => {
    dispatch(ActionCreator.singIn(userData));

    return api.post(`/login`, {
      email: state().user.email,
      password: state().user.password
    })
      .then((response) => {
        const respData = adapter(response.data);
        const {name, avatarUrl, isPro} = respData;

        dispatch(ActionCreator.requireAuthorization(false));
        dispatch(ActionCreator.setUserData({name, avatarUrl, isPro}));
      });
  }
};

export default Operation;
