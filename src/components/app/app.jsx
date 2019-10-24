import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";

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
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired
  }).isRequired)
};

export default App;
