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

      this._onUserInput = this._onUserInput.bind(this);
      this._onFormSubmit = this._onFormSubmit.bind(this);
    }

    render() {
      const {isAuthorizationRequired} = this.props;

      return (
        !isAuthorizationRequired
          ? <Redirect to="/" />
          : <Component
            {...this.props}
            onUserInput={this._onUserInput}
            onFormSubmit={this._onFormSubmit}
          />
      );
    }

    _onUserInput(evt) {
      const name = evt.target.name;
      const value = evt.target.value;

      this.setState({
        [name]: value
      });
    }

    _onFormSubmit(evt) {
      const {onUserDataPost, history} = this.props;
      const pushPath = () => {
        history.push(`/`);
      };

      evt.preventDefault();
      onUserDataPost(
          {
            email: this.state.email,
            password: this.state.password
          },
          pushPath
      );
    }
  }

  WithSingIn.propTypes = {
    onUserDataPost: PropTypes.func.isRequired,
    history: PropTypes.object,
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  return WithSingIn;
};

export default withSingIn;
