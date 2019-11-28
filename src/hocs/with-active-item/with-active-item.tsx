import * as React from "react";

interface State {
  activeCardId: number
}

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent<{}, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeCardId: -1
      };

      this._onCardMouseEnter = this._onCardMouseEnter.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeCardId={this.state.activeCardId}
        onCardMouseEnter={this._onCardMouseEnter}
      />;
    }

    _onCardMouseEnter(id) {
      this.setState({activeCardId: id});
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
