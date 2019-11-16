import React from "react";
import PropTypes from "prop-types";

const withSingIn = (Component) => {
  class WithSingIn extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleUserInput = this._handleUserInput.bind(this);
      this._formSubmitHandler = this._formSubmitHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        userInputHandler={this._handleUserInput}
        formSubmitHandler={this._formSubmitHandler}
      />;
    }

    _handleUserInput(evt) {
      const name = evt.target.name;
      const value = evt.target.value;

      this.setState({
        [name]: value
      });
    }

    _formSubmitHandler(evt) {
      const {onSubmit} = this.props;

      evt.preventDefault();
      onSubmit({
        email: this.state.email,
        password: this.state.password
      });
    }
  }

  WithSingIn.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  return WithSingIn;
};

export default withSingIn;
