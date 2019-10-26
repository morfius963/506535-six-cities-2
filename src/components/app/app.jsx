import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";
import offersPropTypes from "./prop-types.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {places} = this.props;
    return <MainPage places = {places} />;
  }
}

App.propTypes = {
  places: PropTypes.arrayOf(offersPropTypes)
};

export default App;
