import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number,
  city: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  }),
  previewImage: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  price: PropTypes.number,
  rating: PropTypes.number,
  type: PropTypes.string,
  bedrooms: PropTypes.number,
  maxAdults: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  host: PropTypes.shape({
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number
  })
});
