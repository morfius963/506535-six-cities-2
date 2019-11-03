import React from "react";
import OffersList from "../offers-list/offers-list.jsx";
import propTypes from "./prop-types.js";
import Cities from "../cities/cities.jsx";

const MAX_CITIES_COUNT = 6;

const MainPage = ({offers, activeOffers, city, onCityClick}) => {
  const allCities = Array.from(new Set(offers.map((offer) => offer.city.name))).slice(0, MAX_CITIES_COUNT);

  return <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">

        <Cities cities={allCities} activeCity={city} onCityClick={onCityClick} />

      </div>

      <OffersList offers={activeOffers} activeCity={city} />

    </main>
  </div>;
};

MainPage.propTypes = propTypes;

export default MainPage;
