import PropTypes from "prop-types";
import offersPropTypes from "../app/prop-types.js";

export default {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  activeOffers: PropTypes.arrayOf(offersPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};
