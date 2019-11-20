import PropTypes from "prop-types";

export default {
  userData: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  requireAuthorization: PropTypes.bool.isRequired
};
