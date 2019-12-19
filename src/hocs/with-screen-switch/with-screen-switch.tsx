import * as React from "react";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";

import Operation from "../../store/actions/async-actions";
import SingIn from "../../components/sing-in/sing-in";
import Favorites from "../../components/favorites/favorites";
import OfferDetails from "../../components/offer-details/offer-details";
import PrivateRoute from "../with-private-route/with-private-route";
import withSingIn from "../with-sing-in/with-sing-in";
import {Props} from "./interface";

const SingInWrapped = withSingIn(SingIn);

const withScreenSwitch = (Component) => {
  class WithScreenSwitch extends React.PureComponent<Props, null> {
    render() {
      const {city, onUserDataPost, isAuthorizationRequired} = this.props;
  
      return (
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Component />}
          />
          <Route
            path="/login"
            exact
            render={(props) => <SingInWrapped {...props} city={city} onUserDataPost={onUserDataPost} isAuthorizationRequired={isAuthorizationRequired} />}
          />
          <Route
            path="/offer/:id"
            exact
            render={(props) => <OfferDetails {...props} />}
          />
          <PrivateRoute
            path="/favorites"
            isAuthorizationRequired={isAuthorizationRequired}
            renderCmp={() => <Favorites />}
          />
        </Switch>
      );
    }
  }

  const mapStateToProps = (state) => ({
    city: state.filters.city,
    isAuthorizationRequired: state.user.isAuthorizationRequired
  });
  
  const mapDispatchToProps = {
    onUserDataPost: (userData, pushPath) => Operation.postUserLogin(userData, pushPath)
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithScreenSwitch);
}

export default withScreenSwitch;
