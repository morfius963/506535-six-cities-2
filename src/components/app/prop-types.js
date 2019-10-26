import PropTypes from "prop-types";

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired
}).isRequired;
