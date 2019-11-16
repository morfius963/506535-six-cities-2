import PropTypes from "prop-types";
import offersPropTypes from "../app/prop-types.js";
import {sortValues} from "../../__fixtures__/offers.js";

export default {
  allCities: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeOffers: PropTypes.arrayOf(offersPropTypes).isRequired,
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
  activeSort: PropTypes.oneOf(sortValues).isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  requireAuthorization: PropTypes.func.isRequired
};
