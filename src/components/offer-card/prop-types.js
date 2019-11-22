import PropTypes from "prop-types";
import offersPropTypes from "../app/prop-types.js";

export default {
  offerData: offersPropTypes,
  id: PropTypes.number.isRequired,
  cardMouseEnterHandler: PropTypes.func,
  toggleFavoriteCard: PropTypes.func.isRequired
};
