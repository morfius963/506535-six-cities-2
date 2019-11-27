import * as React from "react";
import {Offer} from "../../types";

interface Props {
  offers: Offer[],
  activeCity: string,
  activeSort: string,
  onOffersSort: (value: string) => void,
  onFavoriteCardToggle: (id: number, status: number) => void,
}

interface State {
  activeCardId: number
}

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent<Props, State> {
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
