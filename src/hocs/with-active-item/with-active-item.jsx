import React from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCardId: -1
      };

      this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeCardId={this.state.activeCardId}
        cardMouseEnterHandler={this._cardMouseEnterHandler}
      />;
    }

    _cardMouseEnterHandler(id) {
      this.setState({activeCardId: id});
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
