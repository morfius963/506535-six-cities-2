import PropTypes from "prop-types";
import {sortValues} from "../../__fixtures__/offers.js";

export default {
  activeSort: PropTypes.oneOf(sortValues).isRequired,
  isOpen: PropTypes.bool.isRequired,
  clickSortHandler: PropTypes.func.isRequired,
  toggleSortHandler: PropTypes.func.isRequired
};
