import PropTypes from "prop-types";
import offersPropTypes from "../app/prop-types.js";
import {sortValues} from "../../__fixtures__/offers.js";

export default {
  offers: PropTypes.arrayOf(offersPropTypes).isRequired,
  activeCity: PropTypes.string.isRequired,
  activeCardId: PropTypes.number.isRequired,
  activeSort: PropTypes.oneOf(sortValues).isRequired,
  onFavoriteCardToggle: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onOffersSort: PropTypes.func.isRequired,
};
