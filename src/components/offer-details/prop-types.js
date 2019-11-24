import PropTypes from "prop-types";
import appPropTypes from "../app/prop-types.js";

export default {
  offers: PropTypes.arrayOf(appPropTypes),
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number
    })
  }),
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired
  }),
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onFavoriteCardToggle: PropTypes.func.isRequired,
  onReviewSubmit: PropTypes.func.isRequired
};
