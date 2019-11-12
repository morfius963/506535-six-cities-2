import PropTypes from "prop-types";
import offersPropTypes from "../app/prop-types.js";
import {sortValues} from "../../__fixtures__/offers.js";

export default {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  activeOffers: PropTypes.arrayOf(offersPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
  activeSort: PropTypes.oneOf(sortValues).isRequired
};
