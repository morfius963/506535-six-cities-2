import PropTypes from "prop-types";

export default PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  location: PropTypes.shape({
    coords: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number
  }).isRequired
});
