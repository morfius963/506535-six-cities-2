import * as React from "react";
import {Redirect} from "react-router-dom";
import {Props, State} from "./interface";

const withSingIn = (Component) => {
  class WithSingIn extends React.PureComponent<Props, State> {
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

  return WithSingIn;
};

export default withSingIn;
