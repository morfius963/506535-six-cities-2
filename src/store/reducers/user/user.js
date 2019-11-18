import ActionTypes from "../../actions/action-types.js";

const defaultActiveSort = `Popular`;

const initialAppState = {
  city: ``,
  activeSort: defaultActiveSort,
  isAuthorizationRequired: false,
  email: ``,
  password: ``,
  name: ``,
  avatar: ``,
  isPro: false
};

const user = (state = initialAppState, action) => {
  switch (action.type) {
    case ActionTypes.SWITCH_CITY: return Object.assign({}, state, {
      city: action.payload.city,
      activeSort: action.payload.defaultSort
    });

    case ActionTypes.SORT_OFFERS: return Object.assign({}, state, {
      activeSort: action.payload
    });

    case ActionTypes.REQUIRE_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });

    case ActionTypes.SING_IN: return Object.assign({}, state, {
      email: action.payload.email,
      password: action.payload.password
    });

    case ActionTypes.SET_USER_DATA: return Object.assign({}, state, {
      name: action.payload.name,
      avatar: action.payload.avatar,
      isPro: action.payload.isPro
    });
  }

  return state;
};

export default user;
