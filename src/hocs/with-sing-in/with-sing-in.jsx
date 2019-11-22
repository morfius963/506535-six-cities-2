import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

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
      const {isAuthorizationRequired} = this.props;

      return (
        !isAuthorizationRequired
          ? <Redirect to="/" />
          : <Component
            {...this.props}
            userInputHandler={this._handleUserInput}
            formSubmitHandler={this._formSubmitHandler}
          />
      );
    }

    _handleUserInput(evt) {
      const name = evt.target.name;
      const value = evt.target.value;

      this.setState({
        [name]: value
      });
    }

    _formSubmitHandler(evt) {
      const {onSubmit, history} = this.props;
      const pushPath = () => {
        history.push(`/`);
      };

      evt.preventDefault();
      onSubmit(
          {
            email: this.state.email,
            password: this.state.password
          },
          pushPath
      );
    }
  }

  WithSingIn.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object,
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  return WithSingIn;
};

export default withSingIn;
