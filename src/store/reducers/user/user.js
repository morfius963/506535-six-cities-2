import ActionTypes from "../../actions/action-types.js";

const defaultActiveSort = `Popular`;

const initialAppState = {
  city: ``,
  activeSort: defaultActiveSort,
  isAuthorizationRequired: true,
  email: ``,
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

    case ActionTypes.SING_IN: return Object.assign({}, state, {
      email: action.payload.email,
      name: action.payload.name,
      avatar: action.payload.avatar,
      isPro: action.payload.isPro,
      isAuthorizationRequired: action.payload.isAuthorizationRequired
    });
  }

  return state;
};

export default user;
