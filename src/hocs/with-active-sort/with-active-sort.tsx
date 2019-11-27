import * as React from "react";

interface Props {
  onOffersSort: (value: string) => void,
  activeSort: string,
  activeCity: string
}

interface State {
  activeCity: string,
  isOpen: boolean
}

const withActiveSort = (Component) => {
  class WithActiveSort extends React.PureComponent<Props, State> {
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

  return WithActiveSort;
};

export default withActiveSort;
