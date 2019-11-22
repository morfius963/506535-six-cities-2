import React from "react";
import PropTypes from "prop-types";

const FavoritesOfferList = ({city, renderOffers}) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {renderOffers()}
    </div>
  </li>
);

FavoritesOfferList.propTypes = {
  city: PropTypes.string.isRequired,
  renderOffers: PropTypes.func.isRequired
};

export default FavoritesOfferList;
