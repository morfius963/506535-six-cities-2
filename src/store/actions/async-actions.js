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
  }
};

export default Operation;
