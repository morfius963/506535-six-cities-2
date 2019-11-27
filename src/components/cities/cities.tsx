import React, {useCallback} from "react";
import propTypes from "./prop-types.js";

const Cities = ({cities, activeCity, onCityClick}) => {
  const cityClickHandler = useCallback(
      (evt) => {
        const target = evt.target;

        if (target.tagName.toLowerCase() !== `a` && target.tagName.toLowerCase() !== `span`) {
          return;
        }

        onCityClick(target.textContent);
      },
      [onCityClick]
  );

  return (
    <section className="locations container" onClick={cityClickHandler}>
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => <li key={`${city}-${i}`} className="locations__item">
          <a className={`locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`} href="#">
            <span>{city}</span>
          </a>
        </li>)}
      </ul>
    </section>
  );
};

Cities.propTypes = propTypes;

export default Cities;
