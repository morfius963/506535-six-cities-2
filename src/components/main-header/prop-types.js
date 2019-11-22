import PropTypes from "prop-types";

export default {
  userData: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired
};
