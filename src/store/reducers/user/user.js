import ActionTypes from "../../actions/action-types.js";

const initialAppState = {
  isAuthorizationRequired: true,
  email: ``,
  name: ``,
  avatar: ``,
  isPro: false
};

const user = (state = initialAppState, action) => {
  switch (action.type) {
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
