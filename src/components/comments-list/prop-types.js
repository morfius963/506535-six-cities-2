import PropTypes from "prop-types";

export default {
  id: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  onCommentsLoad: PropTypes.func.isRequired
};
