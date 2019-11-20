import PropTypes from "prop-types";
import offersPropTypes from "../app/prop-types.js";
import {sortValues} from "../../__fixtures__/offers.js";

export default {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  activeCity: PropTypes.string.isRequired,
  activeCardId: PropTypes.number.isRequired,
  cardMouseEnterHandler: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
  activeSort: PropTypes.oneOf(sortValues).isRequired,
  toggleFavoriteCard: PropTypes.func.isRequired
};
