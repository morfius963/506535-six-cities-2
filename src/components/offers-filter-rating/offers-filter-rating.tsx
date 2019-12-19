import * as React from "react";
import {connect} from "react-redux";
import ActionCreator from "../../store/actions/action-creator";
import {Props, State} from "./interface";

class OffersFilterRating extends React.PureComponent<Props, State> {
  _city: string | null;

  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating
    };

    this._city = this.props.city;

    this.handleRatingBlur = this.handleRatingBlur.bind(this);
    this.handleRatingInput = this.handleRatingInput.bind(this);
  }

  componentDidUpdate() {
    const {city, rating} = this.props;

    if (city !== this._city) {
      this._city = city;
      this.setState({rating})
    }
  }

  render() {
    return (
      <div className="offer-rating">
        <span>Choose max rating:</span>
        <input
          type="text"
          className="offer-rating__value"
          value={this.state.rating}
          maxLength={3}
          onBlur={this.handleRatingBlur}
          onChange={this.handleRatingInput}
        />
        <span className="offer-rating__description">* input numbers from 0 to 5 to choose offer rating</span>
      </div>
    )
  }

  handleRatingBlur() {
    const {setCityRating} = this.props;

    setCityRating(this.state.rating);
  }

  handleRatingInput(evt) {
    let value = evt.target.value.replace(/[^\d]/g,``).split(``).join(`.`);
  
    if (+value > 5) {
        value = `5.0`
    }

    this.setState({rating: value})
  }
}

const mapStateToProps = (state) => ({
  rating: state.filters.rating,
  city: state.filters.city
});

const mapDispatchToProps = {
  setCityRating: (rating) => ActionCreator.setCityRating(rating)
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersFilterRating);
