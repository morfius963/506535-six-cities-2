import React from "react";
import PropTypes from "prop-types";

import {sortValues} from "../../__fixtures__/offers.js";

const withActiveSort = (Component) => {
  class WithActiveSort extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCity: this.props.activeCity,
        isOpen: false
      };

      this._toggleSortHandler = this._toggleSortHandler.bind(this);
      this._clickSortHandler = this._clickSortHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeSort={this.props.activeSort}
        isOpen={this.state.isOpen}
        clickSortHandler={this._clickSortHandler}
        toggleSortHandler={this._toggleSortHandler}
      />;
    }

    componentDidUpdate() {
      if (this.props.activeCity !== this.state.activeCity) {
        this.setState({
          isOpen: false,
          activeCity: this.props.activeCity
        });
      }
    }

    _toggleSortHandler() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    _clickSortHandler(evt) {
      const value = evt.target.textContent;

      this.setState({
        isOpen: false
      });
      this.props.onOffersSort(value);
    }
  }

  WithActiveSort.propTypes = {
    onOffersSort: PropTypes.func.isRequired,
    activeSort: PropTypes.oneOf(sortValues).isRequired,
    activeCity: PropTypes.string.isRequired
  };

  return WithActiveSort;
};

export default withActiveSort;
