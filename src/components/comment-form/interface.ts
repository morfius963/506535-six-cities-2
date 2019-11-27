import PropTypes from "prop-types";

export default {
  onFormSubmit: PropTypes.func.isRequired,
  onUserInput: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ])
};
