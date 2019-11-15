import ActionTypes from "../../actions/action-types.js";

const defaultActiveSort = `Popular`;

const initialAppState = {
  city: ``,
  activeSort: defaultActiveSort
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
  }

  return state;
};

export default user;
