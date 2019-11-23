import PropTypes from "prop-types";
import offersPropTypes from "../app/prop-types.js";

export default {
  offerData: offersPropTypes,
  onCardMouseEnter: PropTypes.func,
  onFavoriteCardToggle: PropTypes.func.isRequired,
  isInFavoriteList: PropTypes.bool
};
