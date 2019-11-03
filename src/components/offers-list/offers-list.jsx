import React, {PureComponent} from "react";
import OfferCard from "../offer-card/offer-card.jsx";
import propTypes from "./prop-types.js";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: -1
    };

    this._bindedOfferMouseEnterHandler = this._offerMouseEnterHandler.bind(this);
  }

  render() {
    const {offers, activeCity, children} = this.props;

    return <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeCity}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer, i) => <OfferCard key={Math.random() * i} offerData={offer} id={i} cardMouseEnterHandler={this._bindedOfferMouseEnterHandler} />)}
          </div>
        </section>
        <div className="cities__right-section">

          {children}

        </div>
      </div>
    </div>;
  }

  _offerMouseEnterHandler(id) {
    this.setState({activeCardId: id});
  }
}

OffersList.propTypes = propTypes;

export default OffersList;
