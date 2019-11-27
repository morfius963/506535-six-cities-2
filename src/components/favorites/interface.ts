import PropTypes from "prop-types";
import appPropTypes from "../app/prop-types.js";

export default {
  favoriteOffers: PropTypes.arrayOf(appPropTypes).isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string
  }).isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  onFavoriteCardToggle: PropTypes.func.isRequired,
  onFavoriteOffersLoad: PropTypes.func.isRequired
};
