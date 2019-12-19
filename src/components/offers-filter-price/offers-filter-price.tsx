import * as React from "react";
import {connect} from "react-redux";
import {Props, State} from "./interface";
import ActionCreator from "../../store/actions/action-creator";

class OffersFilterPrice extends React.PureComponent<Props, State> {
  _city: string | null;

  constructor(props) {
    super(props);

    this.state = {
      defaultPrice: [0, 0],
      currentPrice: [0, 0]
    };

    this._city = this.props.city;

    this.onPriceChange = this.onPriceChange.bind(this);
    this.onPriceMouseUp = this.onPriceMouseUp.bind(this);
  }

  componentDidMount() {
    const {offers} = this.props;

    this.setDefaultPrice(offers);
  }

  componentDidUpdate() {
    const {city, offers} = this.props;

    if (city !== this._city) {
      this._city = city;
      this.setDefaultPrice(offers);
    }
  }

  render() {
    const [minPrice, maxPrice] = this.state.defaultPrice;
    const [currentMinPrice, currentMaxPrice] = this.state.currentPrice;

    return (
      <div className="price-filter">
        <span className="price-filter__value">Choose price: {`${currentMinPrice}€ - ${currentMaxPrice}€`}</span>
        <input
          id="currentMinPrice"
          type="range"
          className="price-filter__input"
          value={currentMinPrice}
          min={minPrice}
          max={maxPrice}
          step="10"
          onChange={this.onPriceChange}
          onMouseUp={this.onPriceMouseUp}
        />
        <input
          id="currentMaxPrice"
          type="range"
          className="price-filter__input"
          value={currentMaxPrice}
          min={minPrice}
          max={maxPrice}
          step="10"
          onChange={this.onPriceChange}
          onMouseUp={this.onPriceMouseUp}
        />
      </div>
    );
  }

  onPriceChange(evt) {
    const value = evt.target.value;
    const id = evt.target.id;
    let [min, max] = this.state.currentPrice;

    if (id === `currentMinPrice`) {
      min = value;
    } else {
      max = value;
    }

    if (min > max) {
      [min, max] = [max, min]
    }

    this.setState({
      currentPrice: [min, max]
    })
  }

  onPriceMouseUp() {
    const {setPriceRange} = this.props;
    const [min, max] = this.state.currentPrice;
    const priceRange = [Number(min), Number(max)];

    setPriceRange(priceRange);
  }

  setDefaultPrice(offers) {
    const sortedByPriceOffers = offers.slice().sort((a, b) => a.price - b.price);
    const minPrice = sortedByPriceOffers[0].price;
    const maxPrice = sortedByPriceOffers[sortedByPriceOffers.length - 1].price;
    // это для красоты заокруглил к ближайшему числу
    const formattedMinPrice = Math.floor(minPrice / 10) * 10;
    const formattedMaxPrice = Math.ceil(maxPrice / 10) * 10;
    const priceRange = [formattedMinPrice, formattedMaxPrice];

    this.setState({
      defaultPrice: priceRange,
      currentPrice: priceRange
    });
  }
}

const mapStateToProps = (state) => ({
  city: state.filters.city
});

const mapDispatchToProps = {
  setPriceRange: (range) => ActionCreator.setPriceRange(range)
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersFilterPrice);
