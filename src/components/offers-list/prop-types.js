import PropTypes from "prop-types";
import offersPropTypes from "../app/prop-types.js";

export default {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  activeCity: PropTypes.string.isRequired
};
